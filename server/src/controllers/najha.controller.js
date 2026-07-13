import { getNajha, clearNajhaCache } from "../services/najhaService.js";

export async function listNajha(req, res) {
  try {
    const { q = "" } = req.query;
    const result = await getNajha(q);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message || "Error al cargar catálogo Najha" });
  }
}

export async function refreshNajha(req, res) {
  try {
    clearNajhaCache();
    const result = await getNajha("");
    res.json({ message: "Caché actualizado", total: result.total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
