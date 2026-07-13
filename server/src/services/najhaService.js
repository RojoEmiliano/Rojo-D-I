import * as cheerio from "cheerio";

const BASE_URL = process.env.NAJHA_URL;
const BRANDS = ["BRO", "EPS", "RIC"];
const BRAND_LABELS = { BRO: "Brother", EPS: "Epson", RIC: "Ricoh" };
const BATCH_SIZE = 8; // páginas en paralelo

let cache = { data: null, loadedAt: null };
let loadingPromise = null;

// ── Fetch con encoding ISO-8859-1 ─────────────────────────────────────────────
async function fetchHtml(url, cookie) {
  const res = await fetch(url, {
    headers: {
      cookie: `PHPSESSID=${cookie}`,
      "User-Agent": "Mozilla/5.0",
    },
  });
  const buffer = await res.arrayBuffer();
  return new TextDecoder("iso-8859-1").decode(buffer);
}

// ── Login → devuelve PHPSESSID ────────────────────────────────────────────────
async function login() {
  const body = new URLSearchParams({
    usuario: process.env.NAJHA_USER,
    pass: process.env.NAJHA_PASS,
  });

  const res = await fetch(`${BASE_URL}/login.php`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  const text = await res.text();
  if (!text.trim().startsWith("OK")) throw new Error("Login Najha fallido");

  const cookieHeader = res.headers.get("set-cookie") || "";
  const match = cookieHeader.match(/PHPSESSID=([^;]+)/);
  if (!match) throw new Error("No se pudo obtener PHPSESSID");

  return match[1];
}

// ── Parsear una página HTML → array de items ──────────────────────────────────
function parsePage(html, marca) {
  const $ = cheerio.load(html);
  const items = [];

  $("article.articulos").each((_, el) => {
    const h2Text = $(el).find("h2").text().trim();
    // Formato: "Cod: LT-6505 - Descripción del producto"
    const sinPrefix = h2Text.replace(/^Cod:\s*/i, "");
    const dashIdx = sinPrefix.indexOf(" - ");
    if (dashIdx === -1) return;

    const codigo = sinPrefix.substring(0, dashIdx).trim();
    const nombre = sinPrefix.substring(dashIdx + 3).trim();
    if (!codigo || !nombre) return;

    // Precio: "U$S 190.44"
    const precioText = $(el).find(".precio h3").text().trim();
    const precioMatch = precioText.match(/[\d]+[.,][\d]+|[\d]+/);
    if (!precioMatch) return;

    const precio = parseFloat(precioMatch[0].replace(",", "."));
    if (isNaN(precio) || precio <= 0) return;

    const ivaText = $(el).find(".precio h6").text().trim();
    const stockText = $(el).find(".tag_st").text().trim();

    items.push({
      codigo,
      nombre,
      precio,
      iva: ivaText || "+IVA",
      marca: BRAND_LABELS[marca] || marca,
      stock: stockText || null,
    });
  });

  return items;
}

// ── Scraping completo de las 3 marcas ─────────────────────────────────────────
// Estrategia: fetching en lotes hasta que una página devuelva 0 productos
async function scrapeAll() {
  console.log("[Najha] Iniciando login...");
  const sessionId = await login();
  console.log("[Najha] Login OK. Scraping BRO, EPS, RIC...");

  const allItems = [];

  for (const marca of BRANDS) {
    let page = 1;
    let consecutiveEmptyBatches = 0;
    const MAX_EMPTY_BATCHES = 2; // tolera 1 lote vacío intercalado

    while (consecutiveEmptyBatches < MAX_EMPTY_BATCHES) {
      const batch = Array.from({ length: BATCH_SIZE }, (_, i) => page + i);
      page += BATCH_SIZE;

      const results = await Promise.all(
        batch.map(p =>
          fetchHtml(`${BASE_URL}/index.php?agru_1=${marca}&p=${p}`, sessionId)
            .then(html => parsePage(html, marca))
            .catch(() => [])
        )
      );

      let batchTotal = 0;
      results.forEach(items => {
        allItems.push(...items);
        batchTotal += items.length;
      });

      if (batchTotal === 0) {
        consecutiveEmptyBatches++;
      } else {
        consecutiveEmptyBatches = 0;
      }
    }

    const marcaCount = allItems.filter(i => i.marca === BRAND_LABELS[marca]).length;
    console.log(`[Najha] ${marca} completado: ${marcaCount} productos`);
  }

  console.log(`[Najha] Scraping finalizado: ${allItems.length} productos`);
  return allItems;
}

// ── API pública con caché en memoria ──────────────────────────────────────────
export async function getNajha(query = "") {
  if (loadingPromise) await loadingPromise;

  if (!cache.data) {
    loadingPromise = scrapeAll()
      .then(data => {
        cache.data = data;
        cache.loadedAt = new Date();
      })
      .catch(err => {
        console.error("[Najha] Error scraping:", err.message);
      })
      .finally(() => {
        loadingPromise = null;
      });

    await loadingPromise;
  }

  if (!cache.data) throw new Error("No se pudo cargar el catálogo Najha");

  const q = query.toLowerCase().trim();
  if (q.length < 2) {
    return { items: cache.data, total: cache.data.length, loadedAt: cache.loadedAt };
  }

  const filtered = cache.data.filter(
    item =>
      item.codigo.toLowerCase().includes(q) ||
      item.nombre.toLowerCase().includes(q) ||
      item.marca.toLowerCase().includes(q)
  );

  return { items: filtered, total: filtered.length, loadedAt: cache.loadedAt };
}

export function clearNajhaCache() {
  cache = { data: null, loadedAt: null };
}
