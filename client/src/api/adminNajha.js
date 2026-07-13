const API_URL = import.meta.env.VITE_API_URL;

export async function getNajha(query, token) {
  const qs = query ? `?q=${encodeURIComponent(query)}` : '';
  const res = await fetch(`${API_URL}/api/najha${qs}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Error al obtener el catálogo de Najha');
  return res.json();
}

export async function refreshNajha(token) {
  const res = await fetch(`${API_URL}/api/najha/refresh`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Error al actualizar el catálogo de Najha');
  return res.json();
}
