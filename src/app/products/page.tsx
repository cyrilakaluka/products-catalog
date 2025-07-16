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
      // TODO: fetch products from API
    }

    fetchProducts()
  }, [])

  async function handleDelete(id: string) {
    // TODO: handle delete functionality
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && products.length === 0 && <p>No products available.</p>}

      <ul className="space-y-4">
        {/* TODO: render list of products */}
      </ul>
    </div>
  )
}
