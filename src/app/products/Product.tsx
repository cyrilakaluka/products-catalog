'use client'

import Image from 'next/image'

type ProductType = {
  id: string
  name: string
  price: number
  currency: string
  imageUrl?: string
}

type ProductProps = {
  product: ProductType
  onDelete: (id: string) => void
}

export default function Product({ product, onDelete }: ProductProps) {
  return (
    <li className="border p-4 rounded shadow-sm flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={64}
            height={64}
            className="w-16 h-16 object-cover rounded"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded text-gray-500">
            No Image
          </div>
        )}

        <div>
          <h2 className="font-medium">{product.name}</h2>
          <p className="text-gray-600">
            {product.currency} {product.price.toFixed(2)}
          </p>
        </div>
      </div>

      <button
        onClick={() => onDelete(product.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </li>
  )
}
