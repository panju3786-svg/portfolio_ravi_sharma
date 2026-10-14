"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n/types";
import { getAlternatePath } from "@/i18n/routing";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLocale,
  className = "",
}) => {
  const pathname = usePathname();
  const targetLocale: Locale = currentLocale === "ta" ? "en" : "ta";
  const targetPath = getAlternatePath(pathname, targetLocale);

  return (
    <div
      className={`inline-flex items-center rounded-full p-1 bg-[#EFE3CF]/80 border border-[#B89145]/40 text-xs font-semibold ${className}`}
      role="navigation"
      aria-label="Language selection"
    >
      <Link
        href={currentLocale === "ta" ? pathname : getAlternatePath(pathname, "ta")}
        className={`px-3 py-1 rounded-full transition-all duration-200 ${
          currentLocale === "ta"
            ? "bg-[#702C35] text-[#FAF6ED] shadow-sm"
            : "text-[#786B5C] hover:text-[#702C35]"
        }`}
        aria-current={currentLocale === "ta" ? "true" : undefined}
      >
        தமிழ்
      </Link>
      <span className="text-[#B89145]/60 text-xs px-0.5">|</span>
      <Link
        href={currentLocale === "en" ? pathname : getAlternatePath(pathname, "en")}
        className={`px-3 py-1 rounded-full transition-all duration-200 ${
          currentLocale === "en"
            ? "bg-[#702C35] text-[#FAF6ED] shadow-sm"
            : "text-[#786B5C] hover:text-[#702C35]"
        }`}
        aria-current={currentLocale === "en" ? "true" : undefined}
      >
        English
      </Link>
    </div>
  );
};
