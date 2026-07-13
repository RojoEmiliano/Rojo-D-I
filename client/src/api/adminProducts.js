const API_URL = import.meta.env.VITE_API_URL;

async function authFetch(path, token, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { ...options.headers, Authorization: `Bearer ${token}` },
  });

  if (res.status === 401) {
    const err = new Error('Unauthorized');
    err.status = 401;
    throw err;
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || 'Request failed');
  }

  return res.status === 204 ? null : res.json();
}

export function createProduct(formData, token) {
  return authFetch('/api/products', token, { method: 'POST', body: formData });
}

export function updateProduct(modelCode, formData, token) {
  return authFetch(`/api/products/${modelCode}`, token, { method: 'PUT', body: formData });
}

export function deleteProduct(modelCode, token) {
  return authFetch(`/api/products/${modelCode}`, token, { method: 'DELETE' });
}
