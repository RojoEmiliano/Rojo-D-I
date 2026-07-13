import { getRicohLista, clearRicohListaCache } from "../services/ricohListaService.js";

export async function listRicohLista(req, res) {
  try {
    const { q = "" } = req.query;
    const result = await getRicohLista(q);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message || "Error al leer la lista de Ricoh" });
  }
}

export async function refreshRicohLista(req, res) {
  try {
    clearRicohListaCache();
    const result = await getRicohLista("");
    res.json({ message: "Caché actualizado", total: result.total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
