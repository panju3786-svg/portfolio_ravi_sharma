"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "@/content/gallery";
import { Locale } from "@/i18n/types";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  locale: Locale;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
  locale,
}) => {
  const currentItem = currentIndex !== null ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      const nextIdx = (currentIndex - 1 + items.length) % items.length;
      onNavigate(nextIdx);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      const nextIdx = (currentIndex + 1) % items.length;
      onNavigate(nextIdx);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, onClose, handlePrev, handleNext]);

  if (!currentItem || currentIndex === null) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
    >
      {/* Top Bar with Counter and Close Button */}
      <div className="w-full max-w-5xl flex items-center justify-between text-[#FAF6ED] pt-2 z-10">
        <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#D4AF37]">
          {currentIndex + 1} / {items.length}
        </div>
        <button
          onClick={onClose}
          type="button"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6ED] transition-colors focus:outline-hidden"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Center Stage with Prev / Next Buttons */}
      <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          type="button"
          className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-[#FAF6ED] border border-[#B89145]/40 transition-all hover:scale-110 focus:outline-hidden"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Current Image */}
        <div className="relative w-full h-[65vh] max-h-[700px] flex items-center justify-center">
          <Image
            src={currentItem.src}
            alt={currentItem.alt[locale]}
            fill
            sizes="90vw"
            className="object-contain rounded-lg"
            priority
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          type="button"
          className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-[#FAF6ED] border border-[#B89145]/40 transition-all hover:scale-110 focus:outline-hidden"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="w-full max-w-3xl text-center pb-2 z-10">
        <h4 className="font-serif text-lg sm:text-xl font-bold text-[#FAF6ED]">
          {currentItem.title[locale]}
        </h4>
        <p className="text-xs sm:text-sm text-[#D4AF37] mt-0.5 flex items-center justify-center gap-1">
          <MapPin className="w-3.5 h-3.5" />
          <span>{currentItem.location[locale]}</span>
        </p>
      </div>
    </div>
  );
};
