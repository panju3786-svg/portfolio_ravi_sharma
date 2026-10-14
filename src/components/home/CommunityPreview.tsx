"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Locale, TranslationDictionary } from "@/i18n/types";
import { SectionHeading } from "../ui/SectionHeading";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { Button } from "../ui/Button";
import { HeartHandshake, ArrowRight, Users, Sparkles } from "lucide-react";

interface CommunityPreviewProps {
  locale: Locale;
  dict: TranslationDictionary;
}

export const CommunityPreview: React.FC<CommunityPreviewProps> = ({ locale, dict }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF6ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={locale === "ta" ? "சமூக அறப்பணி" : "Social Outreach"}
          title={dict.communitySection.heading}
          subtitle={dict.communitySection.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#702C35]/10 text-[#702C35] font-semibold text-xs sm:text-sm border border-[#702C35]/20">
              <Users className="w-4 h-4 text-[#B89145]" />
              <span>{dict.communitySection.rotaryBadge}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#702C35] leading-snug">
              {locale === "ta"
                ? "ஆன்மீக நெறியுடன் கூடிய மக்கள் நல்வாழ்வுப் பணி"
                : "Serving Society Hand in Hand with Spiritual Devotion"}
            </h3>

            <p className="text-base sm:text-lg text-[#786B5C] leading-relaxed">
              {dict.communitySection.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-[#B89145]/30 shadow-xs">
                <h4 className="font-serif font-bold text-base text-[#702C35] mb-1">
                  {locale === "ta" ? "சமூக நல்வாழ்வு உதவிகள்" : "Community Welfare Initiatives"}
                </h4>
                <p className="text-xs text-[#786B5C] leading-relaxed">
                  {locale === "ta"
                    ? "காரைக்குடி பகுதியில் தேவைப்படுவோருக்கான மனிதாபிமான உதவிகள் மற்றும் விழிப்புணர்வு நடவடிக்கைகள்."
                    : "Humanitarian assistance and support initiatives across Karaikudi and surrounding communities."}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#B89145]/30 shadow-xs">
                <h4 className="font-serif font-bold text-base text-[#702C35] mb-1">
                  {locale === "ta" ? "கல்வி & நல்வாழ்வு ஆதரவு" : "Educational & Youth Support"}
                </h4>
                <p className="text-xs text-[#786B5C] leading-relaxed">
                  {locale === "ta"
                    ? "மாணவர்களுக்கான கல்வி ஊக்கமளித்தல் மற்றும் சமுதாய அறப்பணிகளில் ஈடுபாடு."
                    : "Encouraging educational growth and participating in community service activities."}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                href={`/${locale}/community`}
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {dict.communitySection.readMoreBtn}
              </Button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#B89145] shadow-xl bg-[#EFE3CF]">
              <ImageWithFallback
                src={siteConfig.images.rotary}
                alt={locale === "ta" ? "ரோட்டரி கிளப் ஆஃப் காரைக்குடி சமூகப் பணி" : "Rotary Club of Karaikudi Community Activity"}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                badgeLabel={locale === "ta" ? siteConfig.community.rotaryClub.ta : siteConfig.community.rotaryClub.en}
                showUploadHint={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
