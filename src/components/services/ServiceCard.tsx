"use client";

import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/content/services";
import { Locale, TranslationDictionary } from "@/i18n/types";
import { buildServiceEnquiryUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/content/site-config";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { Button } from "../ui/Button";
import { MessageCircle, Phone, Sparkles, CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  locale: Locale;
  dict: TranslationDictionary;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  locale,
  dict,
}) => {
  const whatsappUrl = buildServiceEnquiryUrl(service.title[locale], locale);

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-[#B89145]/30 shadow-md hover:shadow-xl hover:border-[#B89145] transition-all duration-300 flex flex-col group">
      {/* Top Image area */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#EFE3CF]/60">
        <ImageWithFallback
          src={service.image}
          alt={service.title[locale]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          badgeLabel={service.badge[locale]}
          showUploadHint={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title in primary language + secondary language subtitle */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#702C35] group-hover:text-[#521F26] transition-colors leading-snug mb-1">
            {service.title[locale]}
          </h3>
          <p className="text-xs text-[#B89145] font-semibold mb-3">
            {locale === "ta" ? service.title.en : service.title.ta}
          </p>

          {/* Description */}
          <p className="text-sm text-[#786B5C] leading-relaxed mb-4">
            {service.shortDesc[locale]}
          </p>

          {/* Key Ritual Highlights */}
          <div className="mb-6 space-y-1.5 pt-3 border-t border-[#B89145]/20">
            {service.rituals[locale].slice(0, 3).map((ritual, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#342720]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B89145] shrink-0 mt-0.5" />
                <span>{ritual}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#B89145]/20 flex flex-col sm:flex-row gap-2.5">
          <Button
            href={whatsappUrl}
            external={true}
            variant="whatsapp"
            size="sm"
            className="flex-1 font-semibold text-xs sm:text-sm py-2.5"
            icon={<MessageCircle className="w-4 h-4" />}
          >
            {dict.servicesSection.enquireBtn}
          </Button>

          <Button
            href={`/${locale}/contact`}
            variant="secondary"
            size="sm"
            className="text-xs sm:text-sm py-2.5"
            icon={<Phone className="w-3.5 h-3.5" />}
          >
            {dict.hero.contactBtn}
          </Button>
        </div>
      </div>
    </article>
  );
};
