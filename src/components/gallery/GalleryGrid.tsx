"use client";

import React, { useState } from "react";
import { galleryCategories, galleryItems, GalleryCategory } from "@/content/gallery";
import { Locale, TranslationDictionary } from "@/i18n/types";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { GalleryLightbox } from "./GalleryLightbox";
import { Maximize2, MapPin } from "lucide-react";

interface GalleryGridProps {
  locale: Locale;
  dict: TranslationDictionary;
  limit?: number;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  locale,
  dict,
  limit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div>
      {/* Category Filter Pills (if not limited) */}
      {!limit && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#702C35] text-[#FAF6ED] shadow-md border border-[#B89145]"
                    : "bg-[#EFE3CF]/70 text-[#786B5C] hover:bg-[#EFE3CF] hover:text-[#702C35] border border-transparent"
                }`}
              >
                {cat.label[locale]}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid of Photo Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative rounded-2xl overflow-hidden border border-[#B89145]/30 shadow-md bg-white cursor-pointer hover:shadow-xl hover:border-[#B89145] transition-all duration-300 flex flex-col"
          >
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#EFE3CF]/40">
              <ImageWithFallback
                src={item.src}
                alt={item.alt[locale]}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                showUploadHint={true}
              />

              {/* Hover Overlay with expand icon */}
              <div className="absolute inset-0 bg-[#702C35]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/20 backdrop-blur-xs text-[#FAF6ED] border border-[#B89145]">
                  <Maximize2 className="w-5 h-5 text-[#D4AF37]" />
                </span>
              </div>
            </div>

            {/* Card Caption */}
            <div className="p-4 bg-white flex flex-col justify-between">
              <h4 className="font-serif font-bold text-base text-[#702C35] group-hover:text-[#521F26] transition-colors leading-snug">
                {item.title[locale]}
              </h4>
              <p className="text-xs text-[#786B5C] flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-[#B89145]" />
                <span>{item.location[locale]}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      <GalleryLightbox
        items={displayedItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
        locale={locale}
      />
    </div>
  );
};
