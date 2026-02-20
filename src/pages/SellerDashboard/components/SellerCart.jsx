import React from "react";

export default function SellerCart({ cart, onRemove, onUpdateQty, onCompleteSale }) {
  const subtotal = cart.reduce((sum, item) => sum + item.sellingPrice * item.qty, 0);
  const profit = cart.reduce((sum, item) => sum + (item.sellingPrice - item.buyingPrice) * item.qty, 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[320px] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-gray-900">Shopping Cart</h2>
        <span className="bg-blue-600 text-white rounded-full px-2 text-xs font-bold">{cart.length}</span>
      </div>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 py-8 text-gray-400">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-13L6 6Z" stroke="#cbd5e1" strokeWidth="1.5"/><circle cx="9" cy="20" r="1" fill="#cbd5e1"/><circle cx="17" cy="20" r="1" fill="#cbd5e1"/></svg>
          <div className="mt-2">Cart is empty</div>
          <div className="text-xs">Click on shoes to add to cart</div>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2 mb-4">
            {cart.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded-xl p-2">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="font-semibold text-sm text-gray-900">{item.name}</div>
                  <div className="text-xs text-gray-400">${item.sellingPrice.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="w-6 h-6 flex items-center justify-center rounded bg-gray-200" onClick={() => onUpdateQty(item, item.qty - 1)} disabled={item.qty <= 1}>-</button>
                  <span className="px-2 font-semibold">{item.qty}</span>
                  <button className="w-6 h-6 flex items-center justify-center rounded bg-gray-200" onClick={() => onUpdateQty(item, item.qty + 1)}>+</button>
                </div>
                <button className="text-red-500 hover:text-red-700 ml-2" onClick={() => onRemove(item)}>
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Profit</span><span className="text-green-600 font-semibold">${profit.toFixed(2)}</span></div>
            <div className="flex justify-between font-bold text-lg mt-1"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
          </div>
          <button className="w-full mt-4 py-3 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-700 transition text-lg flex items-center justify-center gap-2" onClick={onCompleteSale}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="2" rx="1" fill="#fff"/><rect x="11" y="3" width="2" height="18" rx="1" fill="#fff"/></svg>
            Complete Sale
          </button>
        </>
      )}
    </div>
  );
}
