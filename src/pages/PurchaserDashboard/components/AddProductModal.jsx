import React from "react";

export default function AddProductModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative animate-fadeIn">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={onClose}>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Product Name *</label>
            <input className="input" placeholder="Enter product name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Category</label>
            <input className="input" placeholder="e.g., Electronics" />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-semibold">Description</label>
            <textarea className="input" placeholder="Enter product description" rows={2} />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-semibold">Barcode *</label>
            <div className="flex items-center gap-2">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#888" strokeWidth="1.5"/><path d="M7 7V5a5 5 0 0 1 10 0v2" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <input className="input flex-1" placeholder="Enter barcode number" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Buying Price *</label>
            <input className="input" placeholder="0.00" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Selling Price *</label>
            <input className="input" placeholder="0.00" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Stock Quantity *</label>
            <input className="input" placeholder="0" />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-semibold">Image URL</label>
            <div className="flex items-center gap-2">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#888" strokeWidth="1.5"/><path d="M8 13l2.5 2.5L16 10" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <input className="input flex-1" placeholder="https://example.com/image.jpg" />
            </div>
          </div>
          <div className="col-span-2 mt-4">
            <button type="submit" className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 transition text-lg">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}
