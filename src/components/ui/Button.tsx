"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "whatsapp" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  external = false,
  type = "button",
  disabled = false,
  icon,
}) => {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm font-medium",
    md: "px-5 py-2.5 text-sm sm:text-base font-semibold",
    lg: "px-7 py-3 text-base sm:text-lg font-semibold",
  };

  const variantClasses = {
    primary:
      "bg-[#702C35] hover:bg-[#521F26] text-[#FAF6ED] shadow-md hover:shadow-lg hover:shadow-[#702C35]/20 border border-[#B89145]/40 transition-all duration-300",
    secondary:
      "bg-[#EFE3CF] hover:bg-[#FAF6ED] text-[#702C35] border border-[#B89145]/60 hover:border-[#702C35] transition-all duration-300 shadow-sm",
    gold:
      "bg-[#B89145] hover:bg-[#8F6D28] text-[#FAF6ED] shadow-md hover:shadow-lg transition-all duration-300 border border-[#D4AF37]",
    whatsapp:
      "bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-md hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300",
    outline:
      "bg-transparent hover:bg-[#702C35]/5 text-[#702C35] border border-[#702C35] transition-all duration-300",
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          onClick={onClick}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
