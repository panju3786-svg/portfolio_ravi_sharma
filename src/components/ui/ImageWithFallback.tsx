"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  badgeLabel?: string;
  showUploadHint?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc = "/images/temple-service-1.jpg",
  badgeLabel,
  showUploadHint = false,
  className = "",
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative overflow-hidden group w-full h-full bg-[#EFE3CF]/50">
      <Image
        {...props}
        src={hasError ? fallbackSrc : imgSrc}
        alt={alt}
        className={`transition-transform duration-500 group-hover:scale-105 ${className}`}
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setImgSrc(fallbackSrc);
          }
        }}
      />

      {/* Decorative Gold Border Inset */}
      <div className="absolute inset-0 border border-[#B89145]/30 pointer-events-none rounded-inherit" />

      {/* Optional Badge */}
      {badgeLabel && (
        <span className="absolute top-3 left-3 bg-[#702C35]/90 backdrop-blur-sm text-[#FAF6ED] text-xs font-semibold px-2.5 py-1 rounded-md border border-[#B89145]/50 shadow-sm pointer-events-none z-10">
          {badgeLabel}
        </span>
      )}

      {/* Gentle Upload Hint Badge if placeholder */}
      {showUploadHint && (
        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-[10px] text-[#FAF6ED] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Photo asset: {typeof src === "string" ? src.split("/").pop() : "photo"}
        </div>
      )}
    </div>
  );
};
