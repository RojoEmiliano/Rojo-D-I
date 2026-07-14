// Sin esto, si el equipo entra en reposo (o el backend se cuelga esperando
// a un tercero como Najha), el fetch nunca resuelve y la UI queda girando
// para siempre. Con timeout, al menos se ve un error y se puede reintentar.
export async function fetchWithTimeout(url, options = {}, timeoutMs = 100000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error('La operación tardó demasiado y se canceló. Probá de nuevo.');
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}
