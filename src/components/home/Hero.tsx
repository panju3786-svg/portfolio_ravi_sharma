"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Locale, TranslationDictionary } from "@/i18n/types";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { Button } from "../ui/Button";
import { MapPin, Phone, Sparkles, Building2, ShieldCheck, Flame } from "lucide-react";

interface HeroProps {
  locale: Locale;
  dict: TranslationDictionary;
}

export const Hero: React.FC<HeroProps> = ({ locale, dict }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-[#FAF6ED] via-[#FAF6ED] to-[#EFE3CF]/40 border-b border-[#B89145]/20">
      {/* Decorative Temple Pattern Glow in Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B89145]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#702C35]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headings & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Temple & Location Eyebrow */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#702C35]/10 text-[#702C35] text-xs sm:text-sm font-semibold border border-[#702C35]/20">
                <Building2 className="w-3.5 h-3.5 text-[#B89145]" />
                <span>{dict.hero.eyebrow}</span>
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#EFE3CF] text-[#786B5C] text-xs font-medium border border-[#B89145]/30">
                <MapPin className="w-3 h-3 text-[#B89145]" />
                <span>{dict.hero.locationBadge}</span>
              </span>
            </div>

            {/* Main Priest Title Tag */}
            <div className="mb-2">
              <p className="text-sm sm:text-base font-semibold text-[#B89145] tracking-wide uppercase">
                {locale === "ta" ? siteConfig.title.ta : siteConfig.title.en}
              </p>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#342720]">
                {locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}
              </h2>
            </div>

            {/* Main Spiritual Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#702C35] leading-tight tracking-tight mt-1 mb-4">
              {dict.hero.heading}
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-[#786B5C] leading-relaxed max-w-2xl mb-8">
              {dict.hero.description}
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <Button
                href={`/${locale}/services`}
                variant="primary"
                size="lg"
                className="font-semibold shadow-lg text-center"
                icon={<Sparkles className="w-4 h-4 text-[#D4AF37]" />}
              >
                {dict.hero.exploreServicesBtn}
              </Button>

              <Button
                href={`/${locale}/contact`}
                variant="secondary"
                size="lg"
                className="font-semibold text-center"
                icon={<Phone className="w-4 h-4 text-[#702C35]" />}
              >
                {dict.hero.contactBtn}
              </Button>
            </div>

            {/* Trust Highlights: Verified Service at Sri Nagarathar Sivan Temple */}
            <div className="mt-10 pt-6 border-t border-[#B89145]/30 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EFE3CF] flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 text-[#702C35]" />
                </div>
                <span className="text-xs font-semibold text-[#342720]">
                  {locale === "ta" ? "வேத ஆகம முறை" : "Vedic Agama Rites"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EFE3CF] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#702C35]" />
                </div>
                <span className="text-xs font-semibold text-[#342720]">
                  {locale === "ta" ? "நேரடி தொடர்பு" : "Direct Priest Access"}
                </span>
              </div>

              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-full bg-[#EFE3CF] flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 text-[#702C35]" />
                </div>
                <span className="text-xs font-semibold text-[#342720]">
                  {locale === "ta" ? "நகரத்தார் கோவில்" : "Nagarathar Temple"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Ravi Sharma Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-[#B89145]/40 via-[#FAF6ED] to-[#702C35]/30 transform -rotate-1 pointer-events-none" />

              {/* Main Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border-4 border-[#B89145] aspect-[4/5] w-full">
                <ImageWithFallback
                  src={siteConfig.images.portrait}
                  alt={locale === "ta" ? "சிவாச்சாரியார் ரவி சர்மா - ஸ்ரீ நகரத்தார் சிவன் கோவில்" : "Ravi Sharma Sivachariyar - Sri Nagarathar Sivan Temple"}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                  showUploadHint={true}
                />

                {/* Subtle Gradient Shade at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#521F26] via-transparent to-transparent opacity-80" />

                {/* Name Overlay in Portrait Card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-center text-[#FAF6ED]">
                  <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-0.5">
                    {locale === "ta" ? siteConfig.title.ta : siteConfig.title.en}
                  </p>
                  <h3 className="font-serif text-2xl font-bold tracking-wide">
                    {locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}
                  </h3>
                  <p className="text-xs text-[#FAF6ED]/80 mt-0.5">
                    {locale === "ta" ? siteConfig.temple.ta : siteConfig.temple.en}
                  </p>
                </div>
              </div>

              {/* Verified Badge Floating on Corner */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-[#702C35] text-[#FAF6ED] py-1.5 px-3.5 rounded-full border-2 border-[#D4AF37] shadow-lg flex items-center gap-1.5 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{locale === "ta" ? "காரைக்குடி" : "Karaikudi, TN"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
