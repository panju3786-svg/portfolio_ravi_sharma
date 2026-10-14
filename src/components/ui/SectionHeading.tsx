"use client";

import React from "react";
import { KolamDivider } from "./KolamDivider";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`relative mb-10 sm:mb-14 ${isCenter ? "text-center mx-auto" : "text-left"} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full mb-3 border ${
            light
              ? "bg-[#FAF6ED]/10 text-[#D4AF37] border-[#D4AF37]/30"
              : "bg-[#702C35]/10 text-[#702C35] border-[#702C35]/20"
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight leading-tight ${
          light ? "text-[#FAF6ED]" : "text-[#702C35]"
        }`}
      >
        {title}
      </h2>

      <div className={isCenter ? "mx-auto" : "mr-auto"}>
        <KolamDivider light={light} />
      </div>

      {subtitle && (
        <p
          className={`text-sm sm:text-base md:text-lg leading-relaxed ${
            light ? "text-[#EFE3CF]/90" : "text-[#786B5C]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
