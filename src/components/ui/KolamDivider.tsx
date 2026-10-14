"use client";

import React from "react";

interface KolamDividerProps {
  className?: string;
  light?: boolean;
}

export const KolamDivider: React.FC<KolamDividerProps> = ({ className = "", light = false }) => {
  const strokeColor = light ? "#EFE3CF" : "#B89145";
  const centerColor = light ? "#D4AF37" : "#702C35";

  return (
    <div className={`flex items-center justify-center my-6 gap-3 ${className}`} aria-hidden="true">
      {/* Left ornamental flourish line */}
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#B89145] to-[#B89145]/80" />
      
      {/* Traditional Temple Motif / Sacred Flower */}
      <svg
        width="36"
        height="20"
        viewBox="0 0 36 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#B89145] shrink-0"
      >
        {/* Left lotus petal */}
        <path
          d="M10 10C6 7 2 9 0 10C2 11 6 13 10 10Z"
          fill={strokeColor}
          opacity="0.8"
        />
        {/* Right lotus petal */}
        <path
          d="M26 10C30 7 34 9 36 10C34 11 30 13 26 10Z"
          fill={strokeColor}
          opacity="0.8"
        />
        {/* Central Sacred Flame / Lamp element */}
        <circle cx="18" cy="10" r="4" fill={centerColor} stroke={strokeColor} strokeWidth="1.5" />
        <path
          d="M18 2C16 6 16 7 18 10C20 7 20 6 18 2Z"
          fill={strokeColor}
        />
        {/* Outer dots */}
        <circle cx="12" cy="10" r="1.5" fill={strokeColor} />
        <circle cx="24" cy="10" r="1.5" fill={strokeColor} />
      </svg>

      {/* Right ornamental flourish line */}
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-[#B89145] to-[#B89145]/80" />
    </div>
  );
};
