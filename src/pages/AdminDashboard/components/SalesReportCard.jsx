import React from "react";

export default function SalesReportCard({ title, value }) {
  return (
    <div className="flex flex-col items-start bg-white rounded-2xl shadow-sm px-6 py-6 min-h-[120px] w-full">
      <div className="text-xl font-semibold text-gray-900 mb-2">{title}</div>
      <div className="text-gray-400 text-base">{value}</div>
    </div>
  );
}
