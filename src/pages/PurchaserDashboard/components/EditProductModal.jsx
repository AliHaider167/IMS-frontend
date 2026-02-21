import React, { useState } from "react";
import { updateProduct } from "../../../services/api";

export default function EditProductModal({ open, onClose, product, onSave }) {
  const [form, setForm] = useState(product || {});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open || !product) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await updateProduct(form._id, form);
      setLoading(false);
      onSave && onSave();
      onClose();
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Failed to update product");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
          onClick={onClose}
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="#888"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Product Name *</label>
            <input
              className="input"
              name="name"
              value={form.name || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Category</label>
            <input
              className="input"
              name="category"
              value={form.category || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-semibold">Description</label>
            <textarea
              className="input"
              name="description"
              value={form.description || ""}
              onChange={handleChange}
              rows={2}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-semibold">Barcode *</label>
            <input
              className="input"
              name="barcode"
              value={form.barcode || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Buying Price *</label>
            <input
              className="input"
              name="buyingPrice"
              value={form.buyingPrice || ""}
              onChange={handleChange}
              type="number"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Selling Price *</label>
            <input
              className="input"
              name="sellingPrice"
              value={form.sellingPrice || ""}
              onChange={handleChange}
              type="number"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Stock Quantity *</label>
            <input
              className="input"
              name="stock"
              value={form.stock || ""}
              onChange={handleChange}
              type="number"
              required
            />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-semibold">Image URL</label>
            <input
              className="input flex-1"
              name="image"
              value={form.image || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 transition text-lg"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
