import React from "react";

export default function UserCard({ name, role, status }) {
  return (
    <div className="flex items-center bg-white rounded-2xl shadow-sm px-6 py-4 mb-4">
      <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
        {name[0].toUpperCase()}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-lg text-gray-900">{name}</div>
        <div className="text-gray-400 text-sm">{role}</div>
      </div>
      <span className="bg-green-50 text-green-600 px-4 py-1 rounded-xl font-semibold text-sm mr-3">
        {status}
      </span>
      <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full mr-1">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" stroke="#222b45" strokeWidth="1.5" />
          <path
            d="M9.5 12l2 2 3-3"
            stroke="#222b45"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button className="w-8 h-8 flex items-center justify-center hover:bg-red-50 rounded-full">
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
  );
}
