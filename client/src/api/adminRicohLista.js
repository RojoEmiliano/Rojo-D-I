import { fetchWithTimeout } from './fetchWithTimeout';

const API_URL = import.meta.env.VITE_API_URL;

export async function getRicohLista(query, token) {
  const qs = query ? `?q=${encodeURIComponent(query)}` : '';
  const res = await fetchWithTimeout(`${API_URL}/api/lista-ricoh${qs}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Error al obtener la lista de Ricoh');
  return res.json();
}

export async function refreshRicohLista(token) {
  const res = await fetchWithTimeout(`${API_URL}/api/lista-ricoh/refresh`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Error al actualizar la lista de Ricoh');
  return res.json();
}
