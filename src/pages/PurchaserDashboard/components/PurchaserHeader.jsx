import React from "react";

export default function PurchaserHeader() {
  return (
    <header className="w-full bg-white shadow-sm flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl p-2 flex items-center justify-center">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="8" fill="white" />
            <path d="M7 17V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10" fill="#007bff" />
            <rect x="7" y="7" width="10" height="10" rx="2" fill="#0099ff" />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl xl:text-3xl font-bold text-gray-900 leading-tight">
            Purchaser Dashboard
          </h1>
          <p className="text-gray-500 text-sm xl:text-base">Welcome, purchaser</p>
        </div>
      </div>
      <button className="flex items-center gap-2 border border-blue-100 hover:bg-blue-50 transition px-4 py-2 rounded-xl text-blue-600 font-semibold">
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <path
            d="M16 17v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1"
            stroke="#007bff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12H9m0 0l3.5-3.5M9 12l3.5 3.5"
            stroke="#007bff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Logout
      </button>
    </header>
  );
}
