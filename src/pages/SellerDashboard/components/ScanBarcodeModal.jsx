import React, { useState } from "react";

const quickBarcodes = [
  { code: "1234567890123", name: "Nike Air Max 270" },
  { code: "2345678901234", name: "Adidas Ultraboost 22" },
  { code: "3456789012345", name: "Converse Chuck Taylor" },
  { code: "4567890123456", name: "Puma RS-X" },
];

export default function ScanBarcodeModal({ open, onClose, onAddToCart }) {
  const [barcode, setBarcode] = useState("");

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative animate-fadeIn">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={onClose}>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <h2 className="text-2xl font-bold mb-6">Scan Barcode</h2>
        <div className="mb-4">
          <label className="font-semibold mb-2 block">Enter or scan the product barcode to quickly add it to the cart</label>
          <div className="flex items-center gap-2 mb-2">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#888" strokeWidth="1.5"/><path d="M7 7V5a5 5 0 0 1 10 0v2" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <input className="input flex-1" placeholder="Scan or enter barcode..." value={barcode} onChange={e => setBarcode(e.target.value)} />
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          <button className="flex-1 py-2 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition" onClick={onClose}>Cancel</button>
          <button className="flex-1 py-2 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition" onClick={() => onAddToCart(barcode)}>Add to Cart</button>
        </div>
        <div className="mt-2">
          <div className="text-xs text-gray-400 mb-2">Quick barcodes to try:</div>
          <div className="grid grid-cols-2 gap-2">
            {quickBarcodes.map((b, idx) => (
              <button key={b.code} className="bg-gray-100 hover:bg-blue-50 rounded-xl px-2 py-1 text-xs flex flex-col items-start" onClick={() => setBarcode(b.code)}>
                <span className="font-mono">{b.code}</span>
                <span className="text-gray-500">{b.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
