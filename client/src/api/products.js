const API_URL = import.meta.env.VITE_API_URL;

export async function fetchProducts(brand, { signal } = {}) {
  const res = await fetch(`${API_URL}/api/products?brand=${brand}`, { signal });
  if (!res.ok) throw new Error(`Failed to fetch ${brand} products`);
  return res.json();
}

export async function fetchProductByModelCode(modelCode, { signal } = {}) {
  const res = await fetch(`${API_URL}/api/products/${modelCode}`, { signal });
  if (!res.ok) throw new Error(`Failed to fetch product ${modelCode}`);
  return res.json();
}
