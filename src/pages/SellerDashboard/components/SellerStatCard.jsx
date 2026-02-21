import React from "react";

export default function SellerStatCard({ title, value, valueClass }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm px-8 py-8 flex flex-col gap-2 min-w-[220px] flex-1">
      <span className="text-gray-700 font-semibold text-base xl:text-lg mb-2">
        {title}
      </span>
      <div
        className={`text-3xl xl:text-4xl font-bold ${valueClass || "text-gray-900"}`}
      >
        {value}
      </div>
    </div>
  );
}
