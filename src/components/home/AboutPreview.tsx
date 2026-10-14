"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Locale, TranslationDictionary } from "@/i18n/types";
import { SectionHeading } from "../ui/SectionHeading";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { Button } from "../ui/Button";
import { BookOpen, Building2, Flame, HeartHandshake, ArrowRight } from "lucide-react";

interface AboutPreviewProps {
  locale: Locale;
  dict: TranslationDictionary;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ locale, dict }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF6ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={locale === "ta" ? "அறிமுகம்" : "Priest Profile"}
          title={dict.aboutPreview.heading}
          subtitle={dict.aboutPreview.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Temple & Priest Image Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border-2 border-[#B89145] shadow-xl aspect-[3/4] bg-[#EFE3CF]">
              <ImageWithFallback
                src={siteConfig.images.portrait}
                alt={locale === "ta" ? "ரவி சர்மா சிவாச்சாரியார்" : "Ravi Sharma Sivachariyar"}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
                badgeLabel={locale === "ta" ? "ஸ்ரீ நகரத்தார் சிவன் கோவில்" : "Sri Nagarathar Sivan Temple"}
                showUploadHint={true}
              />
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#EFE3CF]/40 border-l-4 border-[#702C35] p-5 rounded-r-xl">
              <p className="text-base sm:text-lg text-[#342720] font-medium leading-relaxed">
                {dict.aboutPreview.intro}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#786B5C] leading-relaxed">
              {dict.aboutPreview.details}
            </p>

            {/* Core Values Cards */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#702C35]">
                {dict.aboutPreview.valuesTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {dict.aboutPreview.values.map((v, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-white rounded-xl border border-[#B89145]/30 shadow-xs"
                  >
                    <h5 className="font-serif font-bold text-sm text-[#702C35] mb-1">
                      {v.title}
                    </h5>
                    <p className="text-xs text-[#786B5C] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Link to Full About Page */}
            <div className="pt-4">
              <Button
                href={`/${locale}/about`}
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {dict.aboutPreview.learnMoreBtn}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
