"use client";

import React from "react";
import Link from "next/link";
import { Locale, TranslationDictionary } from "@/i18n/types";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceGrid } from "../services/ServiceGrid";
import { Button } from "../ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

interface ServicesPreviewProps {
  locale: Locale;
  dict: TranslationDictionary;
}

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({ locale, dict }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#EFE3CF]/30 relative border-y border-[#B89145]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={locale === "ta" ? "புனித சடங்குகள்" : "Sacred Rituals"}
          title={dict.servicesSection.heading}
          subtitle={dict.servicesSection.subheading}
        />

        {/* Display top 3 featured services */}
        <ServiceGrid locale={locale} dict={dict} limit={3} />

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button
            href={`/${locale}/services`}
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {dict.servicesSection.viewAllBtn}
          </Button>
        </div>
      </div>
    </section>
  );
};
