import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/i18n/types";
import { getDictionary, isValidLocale } from "@/i18n/routing";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { servicesData } from "@/content/services";
import { Phone, MessageCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
    path: "/services",
    title: `${dict.servicesSection.heading} | ${locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}`,
    description: dict.servicesSection.subheading,
  });
}

export default async function ServicesPage({
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
          eyebrow={locale === "ta" ? "வைதீக முறைகள்" : "Vedic Protocols"}
          title={dict.servicesSection.heading}
          subtitle={dict.servicesSection.subheading}
        />

        {/* All 7 Verified Services Grid */}
        <div className="mb-16">
          <ServiceGrid locale={locale} dict={dict} />
        </div>

        {/* Ethical / Traditional Guidance Notice */}
        <div className="bg-[#EFE3CF]/60 border border-[#B89145]/40 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-16 text-center space-y-2">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#702C35] text-[#FAF6ED] mb-1">
            <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <h4 className="font-serif text-lg sm:text-xl font-bold text-[#702C35]">
            {locale === "ta" ? "சாஸ்திர நெறி மற்றும் ஆசார வழிகாட்டல்" : "Scriptural Sanctity & Guidance"}
          </h4>
          <p className="text-xs sm:text-sm text-[#786B5C] leading-relaxed max-w-2xl mx-auto">
            {locale === "ta"
              ? "அனைத்து வைதீகச் சடங்குகளும் வேத ஆகம விதிகளின்படி இறைவனின் திருவருளையும் மனசாந்தியையும் வேண்டி மட்டுமே நடத்தப்படுகின்றன. குறிப்பிட்ட பலன்களையோ அல்லது அதிசயங்களையோ உறுதிப்படுத்துவதில்லை. அவரவர் சிரத்தையுடனும் பக்தியுடனும் செய்யப்படும் சடங்குகள் மங்களம் அருளும்."
              : "All Vedic rituals and ceremonies are conducted faithfully to invoke divine blessings, inner peace, and family harmony in accordance with classical scriptures. No guaranteed financial, health, or supernatural outcomes are promised."}
          </p>
        </div>

        {/* Consultation Call Banner */}
        <div className="bg-gradient-to-r from-[#702C35] via-[#521F26] to-[#702C35] text-[#FAF6ED] rounded-3xl p-8 sm:p-12 text-center border-2 border-[#B89145] shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            {locale === "ta"
              ? "சடங்கு குறித்த கூடுதல் தகவல்களுக்கு தொடர்புகொள்ளவும்"
              : "Need Guidance for an Upcoming Ceremony?"}
          </h3>
          <p className="text-sm sm:text-base text-[#EFE3CF]/90 max-w-2xl mx-auto mb-8">
            {locale === "ta"
              ? "முகூர்த்த நாள் தேர்வு, யாகசாலை அமைத்தல் மற்றும் தேவையான பொருட்கள் பட்டியல் பெற சிவாச்சாரியார் அவர்களை அழைக்கவும்."
              : "Connect directly with Ravi Sharma to plan Muhurtham dates, Yagasala preparations, and custom ceremony samagri lists."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href={siteConfig.contact.phoneLink}
              variant="gold"
              size="lg"
              icon={<Phone className="w-5 h-5" />}
            >
              {siteConfig.contact.phoneFormatted}
            </Button>
            <Button
              href={`/${locale}/contact`}
              variant="secondary"
              size="lg"
              icon={<MessageCircle className="w-5 h-5" />}
            >
              {dict.contactSection.formTitle}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
