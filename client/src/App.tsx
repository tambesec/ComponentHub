import { useEffect, useState } from 'react'
import './App.css'
import { fetchHealth, fetchProducts, type Product } from './api'

function App() {
  const [health, setHealth] = useState<'loading' | 'ok' | 'error'>('loading')
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      try {
        const h = await fetchHealth()
        setHealth(h.ok ? 'ok' : 'error')
        const list = await fetchProducts()
        setProducts(list)
      } catch (e: any) {
        setHealth('error')
        setError(e?.message || 'Unknown error')
      }
    })()
  }, [])

  return (
    <div className="card">
      <h1>ComponentHub</h1>
      <p>Tình trạng API: {health}</p>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      <h2>Sản phẩm</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} — {(p.price / 1000).toFixed(0)}k VND
          </li>
        ))}
      </ul>
      <p>
        Tài liệu Swagger: <a href="http://localhost:3000/docs" target="_blank">/docs</a>
      </p>
    </div>
  )
}

export default App
