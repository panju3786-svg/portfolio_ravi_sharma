import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/i18n/types";
import { getDictionary, isValidLocale } from "@/i18n/routing";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { ContactForm } from "@/components/contact/ContactForm";
import { Phone, MessageCircle, MapPin, Building2, Clock, ShieldCheck } from "lucide-react";

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
    path: "/contact",
    title: `${dict.contactSection.heading} | ${locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}`,
    description: dict.contactSection.subheading,
  });
}

export default async function ContactPage({
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
          eyebrow={locale === "ta" ? "தொடர்பு & முன்பதிவு" : "Direct Enquiries"}
          title={dict.contactSection.heading}
          subtitle={dict.contactSection.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Compact Profile Card & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Priest Profile Card with Portrait */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#B89145]/40 shadow-lg overflow-hidden">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#B89145]/20">
                <div className="relative w-20 h-24 rounded-xl overflow-hidden border-2 border-[#B89145] shrink-0 bg-[#EFE3CF]">
                  <ImageWithFallback
                    src={siteConfig.images.portrait}
                    alt={locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                    showUploadHint={false}
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#702C35]">
                    {locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}
                  </h3>
                  <p className="text-xs text-[#B89145] font-semibold mt-0.5">
                    {locale === "ta" ? siteConfig.title.ta : siteConfig.title.en}
                  </p>
                  <p className="text-xs text-[#786B5C] mt-1">
                    {locale === "ta" ? siteConfig.temple.ta : siteConfig.temple.en}
                  </p>
                </div>
              </div>

              {/* Direct Touchpoints */}
              <div className="space-y-4 text-sm text-[#342720]">
                {/* Temple */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFE3CF] text-[#702C35] shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#786B5C] uppercase block">
                      {dict.contactSection.templeLabel}
                    </span>
                    <span className="font-medium text-xs sm:text-sm">
                      {locale === "ta" ? siteConfig.temple.address.ta : siteConfig.temple.address.en}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFE3CF] text-[#702C35] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#786B5C] uppercase block">
                      {dict.contactSection.locationLabel}
                    </span>
                    <span className="font-medium text-xs sm:text-sm">
                      {locale === "ta" ? siteConfig.location.ta : siteConfig.location.en}
                    </span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFE3CF] text-[#702C35] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#786B5C] uppercase block">
                      {dict.contactSection.phoneLabel}
                    </span>
                    <a
                      href={siteConfig.contact.phoneLink}
                      className="font-bold text-base text-[#702C35] hover:underline"
                    >
                      {siteConfig.contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFE3CF] text-[#25D366] shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 fill-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#786B5C] uppercase block">
                      {dict.contactSection.whatsappLabel}
                    </span>
                    <a
                      href={siteConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-base text-[#25D366] hover:underline"
                    >
                      +91 98432 33624 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#B89145]/20 flex flex-col gap-3">
                <a
                  href={siteConfig.contact.phoneLink}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#702C35] hover:bg-[#521F26] text-[#FAF6ED] font-semibold text-sm transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>{locale === "ta" ? "நேரடியாக அழைக்க" : "Call Directly"}</span>
                </a>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{locale === "ta" ? "வாட்ஸ்அப்பில் செய்தி அனுப்ப" : "Message on WhatsApp"}</span>
                </a>
              </div>
            </div>

            {/* Rotary Club Reference Card */}
            <div className="bg-[#EFE3CF]/60 rounded-xl p-4 border border-[#B89145]/30 text-xs text-[#786B5C] space-y-1">
              <p className="font-semibold text-[#702C35]">
                {locale === "ta" ? siteConfig.community.rotaryClub.ta : siteConfig.community.rotaryClub.en}
              </p>
              <p>
                {locale === "ta"
                  ? "சமூக நலம் மற்றும் அறப்பணிகள் தொடர்பான ஆலோசனைகளுக்கும் தொடர்புகொள்ளலாம்."
                  : "Available for community welfare and charitable initiatives across Karaikudi."}
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm locale={locale} dict={dict} />
          </div>
        </div>
      </div>
    </div>
  );
}
