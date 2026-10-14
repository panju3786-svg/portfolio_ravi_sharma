import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/i18n/types";
import { getDictionary, isValidLocale } from "@/i18n/routing";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Camera, ShieldCheck } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ta";
  const dict = getDictionary(locale);
  return generatePageMetadata({
    locale,
    path: "/gallery",
    title: `${dict.gallerySection.heading} | ${locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}`,
    description: dict.gallerySection.subheading,
  });
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="py-12 sm:py-20 bg-[#FAF6ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={locale === "ta" ? "நேரடிப் பதிவுகள்" : "Ceremonial Archive"}
          title={dict.gallerySection.heading}
          subtitle={dict.gallerySection.subheading}
        />

        {/* Authenticity Notice */}
        <div className="mb-10 max-w-3xl mx-auto p-4 rounded-xl bg-[#EFE3CF]/60 border border-[#B89145]/30 flex items-center gap-3 text-xs sm:text-sm text-[#786B5C]">
          <ShieldCheck className="w-5 h-5 text-[#702C35] shrink-0" />
          <p>{dict.gallerySection.photoNotice}</p>
        </div>

        {/* Interactive Filterable Gallery Grid */}
        <GalleryGrid locale={locale} dict={dict} />
      </div>
    </div>
  );
}
