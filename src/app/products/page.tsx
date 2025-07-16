'use client'

import { useEffect, useState } from 'react'
import Product from './Product'

type ProductType = {
  id: string
  name: string
  price: number
  currency: string
  imageUrl?: string
}

const PRODUCTS_API_ENDPOINT = `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`

export default function ProductListPage() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(PRODUCTS_API_ENDPOINT)
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        setError('Failed to load products.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  async function handleDelete(id: string) {
    // Optimistic update
    const original = products
    setProducts(products.filter((p) => p.id !== id))

    try {
      const res = await fetch(`${PRODUCTS_API_ENDPOINT}/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Delete failed')
    } catch (err) {
      setError('Failed to delete product.')
      setProducts(original) // rollback UI change
      console.error(err)
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && products.length === 0 && <p>No products available.</p>}

      <ul className="space-y-4">
        {products.map((product) => (
          <Product key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  )
}
