import React from "react";

export default function TabNav({ tabs, activeTab, onTabChange }) {
  return (
    <nav className="flex gap-2 bg-[#f5f8fa] rounded-t-2xl px-2 py-2">
      {tabs.map((tab, idx) => (
        <button
          key={tab.label}
          className={`flex items-center gap-1 px-6 py-2 rounded-xl font-semibold transition text-base xl:text-lg ${
            activeTab === idx
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:bg-blue-50"
          }`}
          onClick={() => onTabChange(idx)}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
