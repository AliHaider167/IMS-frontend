import React from "react";

export default function ProductCard({ product, onEdit }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col w-full max-w-sm">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between mb-1">
          <div className="font-semibold text-lg text-gray-900">
            {product.name}
          </div>
          <span className="bg-green-50 text-green-600 px-3 py-1 rounded-xl font-semibold text-xs">
            {product.stock} left
          </span>
        </div>
        <div className="text-blue-600 text-sm font-medium cursor-pointer hover:underline">
          {product.category}
        </div>
        <div className="text-gray-500 text-sm mb-1">{product.description}</div>
        <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <rect
              x="3"
              y="7"
              width="18"
              height="10"
              rx="2"
              stroke="#888"
              strokeWidth="1.5"
            />
            <path
              d="M7 7V5a5 5 0 0 1 10 0v2"
              stroke="#888"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          {product.barcode}
        </div>
        <div className="flex items-end gap-8 mt-2">
          <div>
            <div className="text-xs text-gray-400">Buying</div>
            <div className="text-base font-semibold text-gray-900">
              ${product.buyingPrice}
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Selling</div>
            <div className="text-base font-semibold text-green-600">
              ${product.sellingPrice}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <button
            className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2 text-gray-700 hover:bg-gray-50 transition"
            onClick={() => onEdit && onEdit(product)}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="2" rx="1" fill="#222b45" />
              <rect x="11" y="3" width="2" height="18" rx="1" fill="#222b45" />
            </svg>
            Edit
          </button>
          <button className="w-10 h-10 flex items-center justify-center hover:bg-red-50 rounded-xl">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <rect
                x="5"
                y="5"
                width="14"
                height="14"
                rx="2"
                stroke="#ff3b3b"
                strokeWidth="1.5"
              />
              <path
                d="M9 9l6 6M15 9l-6 6"
                stroke="#ff3b3b"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
