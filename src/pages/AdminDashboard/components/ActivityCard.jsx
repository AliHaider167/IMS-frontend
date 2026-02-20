import React from "react";

export default function ActivityCard({ user, action, desc, time }) {
  return (
    <div className="flex items-center bg-[#f8fafc] rounded-2xl px-6 py-4 mb-4">
      <div className="bg-blue-400 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 20v-2M12 4v2M4 12h2m12 0h2M7.76 7.76l1.42 1.42m5.66-5.66l-1.42 1.42M16.24 16.24l-1.42-1.42m-5.66 5.66l1.42-1.42"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex-1">
        <div className="font-semibold text-base text-gray-900 flex items-center gap-2">
          {user}{" "}
          <span className="text-blue-600 font-normal cursor-pointer">
            {action}
          </span>
        </div>
        <div className="text-gray-400 text-sm">{desc}</div>
        <div className="text-gray-300 text-xs mt-1">{time}</div>
      </div>
    </div>
  );
}
