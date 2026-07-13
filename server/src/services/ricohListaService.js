import fs from "fs";

const FILE_PATH = process.env.RICOH_LISTA_PDF_PATH;
const TOL = 25;
const MAX_LOOKAHEAD = 2;

let cache = { data: null, mtime: null };
let loadingPromise = null;

function norm(s) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .trim();
}

function looksLikeCode(text) {
  const t = text.trim();
  if (t.length < 3 || t.length > 20) return false;
  if (/\s/.test(t)) return false;
  if (!/\d/.test(t)) return false;
  return /^[A-Za-z0-9\-/.]+$/.test(t);
}

function looksLikePrice(text) {
  return /^\d{1,3}(,\d{3})*(\.\d{1,2})?$/.test(text.trim());
}

function looksLikeIva(text) {
  return /^\d{1,2}(\.\d{1,2})?%$/.test(text.trim());
}

function near(x, target) {
  return target !== null && Math.abs(x - target) <= TOL;
}

function buildLineGroups(items) {
  const map = new Map();
  items.forEach(it => {
    if (!it.text.trim()) return;
    const y = Math.round(it.y / 4) * 4;
    if (!map.has(y)) map.set(y, []);
    map.get(y).push(it);
  });
  const ys = [...map.keys()].sort((a, b) => b - a);
  return ys.map(y => ({ y, items: map.get(y).sort((a, b) => a.x - b.x) }));
}

// Detecta las columnas CÓDIGO/PRECIO/IVA por posición X leyendo el primer
// encabezado de tabla que aparece en la página (headers se repiten por
// sección: Equipo, Accesorios, Insumos — mantienen la misma X en la página).
function findColumnX(lineGroups) {
  let codeX = null,
    precioX = null,
    ivaX = null;
  for (const line of lineGroups) {
    for (const it of line.items) {
      const t = norm(it.text);
      if (t === "CODIGO") codeX = it.x;
      if (t === "PRECIO" || t === "P. DISTRIBUIDOR") precioX = it.x;
      if (t === "IVA") ivaX = it.x;
    }
    if (codeX !== null && precioX !== null && ivaX !== null) break;
  }
  return { codeX, precioX, ivaX };
}

// El PDF a veces "quiebra" el precio o el IVA a la línea siguiente (glitch
// de tipografía del documento original) — se busca hasta 2 líneas abajo,
// deteniéndose si esa línea ya arrancó una fila nueva (tiene su propio código).
function parsePage(lineGroups) {
  const { codeX, precioX, ivaX } = findColumnX(lineGroups);
  if (codeX === null || precioX === null || ivaX === null) return [];

  const results = [];

  for (let i = 0; i < lineGroups.length; i++) {
    const line = lineGroups[i];
    const codeItem = line.items.find(it => near(it.x, codeX) && looksLikeCode(it.text));
    if (!codeItem) continue;

    const nombreParts = line.items
      .filter(it => it !== codeItem && !near(it.x, precioX) && !near(it.x, ivaX) && it.x > codeItem.x)
      .map(it => it.text.trim())
      .filter(Boolean);

    let precioItem = line.items.find(it => near(it.x, precioX) && looksLikePrice(it.text));
    let ivaItem = line.items.find(it => near(it.x, ivaX) && looksLikeIva(it.text));

    for (let la = 1; la <= MAX_LOOKAHEAD && (!precioItem || !ivaItem); la++) {
      const nextLine = lineGroups[i + la];
      if (!nextLine) break;
      const nextHasCode = nextLine.items.some(it => near(it.x, codeX) && looksLikeCode(it.text));
      if (nextHasCode) break;

      if (!precioItem) {
        const cand = nextLine.items.find(it => near(it.x, precioX) && looksLikePrice(it.text));
        if (cand) precioItem = cand;
      }
      if (!ivaItem) {
        const cand = nextLine.items.find(it => near(it.x, ivaX) && looksLikeIva(it.text));
        if (cand) ivaItem = cand;
      }
    }

    if (!precioItem || !ivaItem) continue;

    const precio = parseFloat(precioItem.text.replace(/,/g, ""));
    if (isNaN(precio) || precio <= 0) continue;

    results.push({
      codigo: codeItem.text.trim(),
      nombre: nombreParts.join(" ").trim(),
      precio,
      iva: ivaItem.text.trim(),
    });
  }

  return results;
}

// El mismo código aparece varias veces (compatible con varios equipos). En
// un puñado de páginas el precio queda mal tipeado (redondeado sin
// decimales) — se desempata quedándose con el precio que más se repite.
function dedupeByCode(rows) {
  const byCode = new Map();
  for (const row of rows) {
    if (!byCode.has(row.codigo)) byCode.set(row.codigo, []);
    byCode.get(row.codigo).push(row);
  }

  const result = [];
  for (const [, occurrences] of byCode) {
    const counts = new Map();
    for (const o of occurrences) {
      counts.set(o.precio, (counts.get(o.precio) || 0) + 1);
    }
    const [modePrecio] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
    const chosen =
      occurrences.find(o => o.precio === modePrecio && o.nombre) ||
      occurrences.find(o => o.precio === modePrecio);
    result.push(chosen);
  }
  return result;
}

async function parsePdf(filePath) {
  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const buf = fs.readFileSync(filePath);
  const doc = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;

  const allRows = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    const items = content.items.map(i => ({
      text: i.str,
      x: Math.round(i.transform[4]),
      y: Math.round(i.transform[5]),
    }));
    allRows.push(...parsePage(buildLineGroups(items)));
  }

  return dedupeByCode(allRows);
}

function getFileMtime() {
  try {
    return fs.statSync(FILE_PATH).mtime.getTime();
  } catch {
    return null;
  }
}

export async function getRicohLista(query = "") {
  if (!FILE_PATH) throw new Error("RICOH_LISTA_PDF_PATH no está configurado");

  if (loadingPromise) await loadingPromise;

  const mtime = getFileMtime();
  if (mtime === null) throw new Error("No se pudo leer el archivo de la lista de Ricoh");

  if (!cache.data || cache.mtime !== mtime) {
    loadingPromise = parsePdf(FILE_PATH)
      .then(data => {
        cache = { data, mtime };
      })
      .finally(() => {
        loadingPromise = null;
      });
    await loadingPromise;
  }

  const q = query.toLowerCase().trim();
  if (q.length < 2) {
    return { items: cache.data, total: cache.data.length, loadedAt: new Date(cache.mtime) };
  }

  const filtered = cache.data.filter(
    item => item.codigo.toLowerCase().includes(q) || item.nombre.toLowerCase().includes(q)
  );

  return { items: filtered, total: filtered.length, loadedAt: new Date(cache.mtime) };
}

export function clearRicohListaCache() {
  cache = { data: null, mtime: null };
}
