'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Store</h1>
      <p className="mb-6 text-gray-600">Browse our product collection below.</p>

      <Link
        href="/products"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        View Products
      </Link>
    </main>
  )
}
