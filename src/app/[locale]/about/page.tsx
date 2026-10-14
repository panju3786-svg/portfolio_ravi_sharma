import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/i18n/types";
import { getDictionary, isValidLocale } from "@/i18n/routing";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { Building2, BookOpen, Flame, HeartHandshake, Phone, MessageCircle, ShieldCheck } from "lucide-react";

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
    path: "/about",
    title: `${dict.aboutPreview.heading} | ${locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}`,
    description: dict.aboutPreview.intro,
  });
}

export default async function AboutPage({
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
          eyebrow={locale === "ta" ? "சுயவிவரம்" : "Biography"}
          title={dict.aboutPreview.heading}
          subtitle={dict.aboutPreview.subheading}
        />

        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          {/* Left Column: Portrait & Verified Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-4 border-[#B89145] shadow-2xl bg-[#EFE3CF]">
              <ImageWithFallback
                src={siteConfig.images.portrait}
                alt={locale === "ta" ? "ரவி சர்மா சிவாச்சாரியார்" : "Ravi Sharma Sivachariyar"}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
                badgeLabel={locale === "ta" ? siteConfig.title.ta : siteConfig.title.en}
                showUploadHint={true}
              />
            </div>

            <div className="mt-4 p-4 bg-white rounded-xl border border-[#B89145]/30 shadow-xs w-full max-w-sm text-center">
              <h4 className="font-serif font-bold text-lg text-[#702C35]">
                {locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}
              </h4>
              <p className="text-xs text-[#B89145] font-semibold mt-0.5">
                {locale === "ta" ? siteConfig.temple.ta : siteConfig.temple.en}
              </p>
              <p className="text-xs text-[#786B5C] mt-1">
                {locale === "ta" ? siteConfig.location.ta : siteConfig.location.en}
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Authentic Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#EFE3CF]/50 p-6 rounded-2xl border-l-4 border-[#702C35]">
              <p className="text-base sm:text-lg text-[#342720] font-medium leading-relaxed">
                {dict.aboutPreview.intro}
              </p>
            </div>

            {/* Block 1: Professional Background */}
            <div className="bg-white p-6 rounded-2xl border border-[#B89145]/30 shadow-xs space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#702C35] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#B89145]" />
                <span>{locale === "ta" ? "ஆன்மீக மற்றும் வைதீகப் பின்னணி" : "Professional Background & Tradition"}</span>
              </h3>
              <p className="text-sm text-[#786B5C] leading-relaxed">
                {locale === "ta"
                  ? "சிவநெறி மரபில் வந்துள்ள சிவாச்சாரியார் ரவி சர்மா அவர்கள், வேத மந்திரங்களின் தூய உச்சரிப்பு, சாஸ்திர விதிகளுக்குட்பட்ட ஆசார நடைமுறைகள் மற்றும் ஆலய வழிபாட்டு முறைகளில் ஆழ்ந்த அர்ப்பணிப்புடன் இறைப் பணியாற்றி வருகிறார்."
                  : "Serving within the venerated Shaivite priestly tradition, Ravi Sharma is committed to the precise articulation of Vedic hymns, scriptural sanctity, and authentic ritual protocols for both temple sanctums and household milestones."}
              </p>
            </div>

            {/* Block 2: Temple Service at Sri Nagarathar Sivan Temple */}
            <div className="bg-white p-6 rounded-2xl border border-[#B89145]/30 shadow-xs space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#702C35] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#B89145]" />
                <span>{locale === "ta" ? "ஸ்ரீ நகரத்தார் சிவன் கோவில் இறைப்பணி" : "Temple Service at Sri Nagarathar Sivan Temple"}</span>
              </h3>
              <p className="text-sm text-[#786B5C] leading-relaxed">
                {locale === "ta"
                  ? "காரைக்குடியில் அமைந்துள்ள பாரம்பரியமிக்க ஸ்ரீ நகரத்தார் சிவன் கோவிலுடன் இணைந்து, அன்றாட வழிபாடுகள், பிரதோஷ கால ஆராதனைகள், சிவராத்திரி பூஜைகள் மற்றும் விசேஷ அபிஷேகங்களை பக்தியுடன் நடத்தி வருகிறார்."
                  : "Associated with the historic Sri Nagarathar Sivan Temple in Karaikudi, he actively conducts sacred daily worships, Pradosham observances, Shivaratri 4-kala poojas, and traditional festival abhishekams."}
              </p>
            </div>

            {/* Block 3: Approach to Conducting Ceremonies */}
            <div className="bg-white p-6 rounded-2xl border border-[#B89145]/30 shadow-xs space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#702C35] flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#B89145]" />
                <span>{locale === "ta" ? "சடங்குகள் நடத்தும் முறை & ஆசார நெறி" : "Approach to Conducting Vedic Ceremonies"}</span>
              </h3>
              <p className="text-sm text-[#786B5C] leading-relaxed">
                {locale === "ta"
                  ? "கும்பாபிஷேகம், கிரகப்பிரவேசம், கணபதி ஹோமம் உள்ளிட்ட சடங்குகளில் ஒவ்வொரு படிநிலையின் ஆன்மீக முக்கியத்துவத்தையும் குடும்பத்தினருக்கு விளக்கி, சாந்தியும் மனநிறைவும் உண்டாகும் வகையில் சடங்குகளைப் பூர்த்தி செய்கிறார்."
                  : "In every ceremony—be it a grand temple Kumbabishekam, Grihapravesam, or sacred Homam—he guides families with patience, elucidating the deeper spiritual significance and ensuring complete peace of mind."}
              </p>
            </div>

            {/* Block 4: Community Service & Rotary Club */}
            <div className="bg-white p-6 rounded-2xl border border-[#B89145]/30 shadow-xs space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#702C35] flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#B89145]" />
                <span>{locale === "ta" ? "ரோட்டரி சங்கம் மற்றும் சமூகப் பங்களிப்பு" : "Community Welfare & Rotary Involvement"}</span>
              </h3>
              <p className="text-sm text-[#786B5C] leading-relaxed">
                {locale === "ta"
                  ? "காரைக்குடி ரோட்டரி சங்கம் (Rotary Club of Karaikudi) உறுப்பினராக, ஏழை எளியோருக்கான உதவிகள், சமுதாய விழிப்புணர்வு மற்றும் இளைஞர் நல்வாழ்வுப் பணிகளில் தம்மை ஈடுபாட்டுடன் ஈடுபடுத்தி வருகிறார்."
                  : "As an active participant in the Rotary Club of Karaikudi, he extends his devotion into social action, supporting local humanitarian drives, underprivileged aid, and community welfare programs."}
              </p>
            </div>
          </div>
        </div>

        {/* Action Call Banner */}
        <div className="bg-[#702C35] text-[#FAF6ED] rounded-3xl p-8 sm:p-12 text-center border-2 border-[#B89145] shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            {locale === "ta" ? "வைதீகச் சடங்குகள் மற்றும் ஆலோசனைகளுக்கு" : "Consult for Sacred Ceremonies & Auspicious Dates"}
          </h3>
          <p className="text-sm sm:text-base text-[#EFE3CF]/90 max-w-2xl mx-auto mb-8">
            {locale === "ta"
              ? "முகூர்த்த நேரம், ஹோம ஏற்பாடுகள் மற்றும் பூஜை சாமான்கள் குறித்து சிவாச்சாரியார் அவர்களை நேரடியாகத் தொடர்புகொள்ளலாம்."
              : "Reach out directly to discuss auspicious Muhurtham dates, ritual preparations, and customized ceremony requirements."}
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
              {dict.hero.contactBtn}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
