import React from "react";

export default function StatCard({ title, value, subtitle, icon, iconBg }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm px-6 py-6 flex flex-col gap-2 min-w-[220px] flex-1">
      <div className="flex items-center justify-between">
        <span className="text-gray-700 font-semibold text-base xl:text-lg">
          {title}
        </span>
        <span className={`rounded-xl p-2 ${iconBg}`}>{icon}</span>
      </div>
      <div className="text-3xl xl:text-4xl font-bold text-gray-900">
        {value}
      </div>
      <div className="text-gray-400 text-sm xl:text-base">{subtitle}</div>
    </div>
  );
}
