import React from "react";

const Loader = ({ size = 40 }) => (
  <div className="flex justify-center items-center py-4">
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="#2563eb"
        strokeWidth="4"
        opacity="0.2"
      />
      <path
        d="M20 2a18 18 0 0 1 18 18"
        stroke="#2563eb"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default Loader;
