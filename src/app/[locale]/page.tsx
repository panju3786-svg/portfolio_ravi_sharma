import React from "react";
import { Metadata } from "next";
import { Locale } from "@/i18n/types";
import { getDictionary, isValidLocale } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { generatePageMetadata, generatePersonSchema } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { CommunityPreview } from "@/components/home/CommunityPreview";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Phone, MessageCircle, MapPin, Building2 } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ta";
  return generatePageMetadata({ locale, path: "" });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const jsonLd = generatePersonSchema(locale);

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <Hero locale={locale} dict={dict} />

      {/* 2. About Priest Preview */}
      <AboutPreview locale={locale} dict={dict} />

      {/* 3. Religious and Vedic Services Preview */}
      <ServicesPreview locale={locale} dict={dict} />

      {/* 4. Community & Rotary Involvement */}
      <CommunityPreview locale={locale} dict={dict} />

      {/* 5. Photo Gallery Showcase */}
      <section className="py-16 sm:py-24 bg-[#FAF6ED] border-b border-[#B89145]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={locale === "ta" ? "நிகழ்வுப் படங்கள்" : "Sacred Moments"}
            title={dict.gallerySection.heading}
            subtitle={dict.gallerySection.subheading}
          />

          <GalleryGrid locale={locale} dict={dict} limit={6} />

          <div className="mt-12 text-center">
            <Button
              href={`/${locale}/gallery`}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {dict.gallerySection.viewAllBtn}
            </Button>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-16 sm:py-24 bg-[#EFE3CF]/30 border-b border-[#B89145]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={locale === "ta" ? "வழிகாட்டுதல்" : "Help & Guidance"}
            title={dict.faqSection.heading}
            subtitle={dict.faqSection.subheading}
          />

          <FAQAccordion locale={locale} dict={dict} />
        </div>
      </section>

      {/* 7. Direct Contact & Enquiry Section */}
      <section className="py-16 sm:py-24 bg-[#FAF6ED] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={locale === "ta" ? "நேரடித் தொடர்பு" : "Get in Touch"}
            title={dict.contactSection.heading}
            subtitle={dict.contactSection.subheading}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Info Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#B89145]/30 shadow-md">
                <h3 className="font-serif text-2xl font-bold text-[#702C35] mb-4">
                  {locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}
                </h3>
                <p className="text-sm font-semibold text-[#B89145] mb-6">
                  {locale === "ta" ? siteConfig.title.ta : siteConfig.title.en}
                </p>

                <div className="space-y-4 text-sm text-[#342720]">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#B89145] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-xs text-[#786B5C] uppercase">
                        {dict.contactSection.templeLabel}
                      </p>
                      <p className="mt-0.5">
                        {locale === "ta" ? siteConfig.temple.address.ta : siteConfig.temple.address.en}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#B89145] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-xs text-[#786B5C] uppercase">
                        {dict.contactSection.phoneLabel}
                      </p>
                      <a
                        href={siteConfig.contact.phoneLink}
                        className="font-bold text-base text-[#702C35] hover:underline"
                      >
                        {siteConfig.contact.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-xs text-[#786B5C] uppercase">
                        {dict.contactSection.whatsappLabel}
                      </p>
                      <a
                        href={siteConfig.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-base text-[#25D366] hover:underline"
                      >
                        +91 98432 33624 (Chat directly)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#B89145]/20 flex flex-col gap-3">
                  <a
                    href={siteConfig.contact.phoneLink}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#702C35] text-[#FAF6ED] font-semibold text-sm hover:bg-[#521F26] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>{dict.hero.directCallBtn}</span>
                  </a>
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1EBE5D] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{dict.servicesSection.enquireBtn}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive WhatsApp Form */}
            <div className="lg:col-span-7">
              <ContactForm locale={locale} dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
