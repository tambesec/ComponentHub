const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export type Product = {
  id: number;
  name: string;
  price: number;
};

export async function fetchHealth(): Promise<{ ok: boolean }> {
  const res = await fetch(`${API_BASE}/api/health`);
  if (!res.ok) throw new Error('Failed to fetch health');
  return res.json();
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/api/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

