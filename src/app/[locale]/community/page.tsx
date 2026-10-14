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
import { Users, Heart, BookOpen, HandHeart, Sparkles, Phone, MessageCircle } from "lucide-react";

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
    path: "/community",
    title: `${dict.communitySection.heading} | ${locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}`,
    description: dict.communitySection.description,
  });
}

export default async function CommunityPage({
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
          eyebrow={dict.communitySection.rotaryBadge}
          title={dict.communitySection.heading}
          subtitle={dict.communitySection.subheading}
        />

        {/* Hero Feature Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#702C35]/10 text-[#702C35] font-semibold text-xs sm:text-sm border border-[#702C35]/20">
              <Users className="w-4 h-4 text-[#B89145]" />
              <span>{locale === "ta" ? siteConfig.community.rotaryClub.ta : siteConfig.community.rotaryClub.en}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#702C35] leading-snug">
              {locale === "ta"
                ? "இறைப்பணியுடன் இணைந்த சமுதாய அறப்பணிகள்"
                : "Spiritual Devotion Expressed Through Community Welfare"}
            </h3>

            <p className="text-base sm:text-lg text-[#342720] leading-relaxed">
              {dict.communitySection.description}
            </p>

            <p className="text-sm text-[#786B5C] leading-relaxed">
              {locale === "ta"
                ? "காரைக்குடி ரோட்டரி சங்கம் முன்னெடுக்கும் சமுதாய நல்வாழ்வு, மருத்துவ முகாம்கள், மாணவர் கல்வி ஊக்குவிப்பு மற்றும் இயற்கை பேரிடர் கால உதவிகளில் சிவாச்சாரியார் ரவி சர்மா அவர்கள் ஒரு தன்னார்வலராகத் தம்மை இணைத்துக்கொண்டு பணியாற்றி வருகிறார்."
                : "Participating in humanitarian initiatives led by the Rotary Club of Karaikudi, Ravi Sharma volunteers for health awareness drives, educational outreach for children, and social welfare efforts across the Karaikudi community."}
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#B89145] shadow-xl bg-[#EFE3CF]">
              <ImageWithFallback
                src={siteConfig.images.rotary}
                alt={locale === "ta" ? "காரைக்குடி ரோட்டரி சங்கம் சமூகப் பணி" : "Rotary Club of Karaikudi Community Welfare"}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                badgeLabel={locale === "ta" ? siteConfig.community.rotaryClub.ta : siteConfig.community.rotaryClub.en}
                showUploadHint={true}
              />
            </div>
          </div>
        </div>

        {/* 4 Community Focus Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-[#B89145]/30 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#EFE3CF] flex items-center justify-center text-[#702C35]">
              <HandHeart className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#702C35]">
              {locale === "ta" ? "ஏழை எளியோருக்கான உதவி" : "Assistance for the Needy"}
            </h4>
            <p className="text-xs sm:text-sm text-[#786B5C] leading-relaxed">
              {locale === "ta"
                ? "முதியோர் மற்றும் நலிந்த குடும்பங்களுக்கு உணவு, உடை மற்றும் அடிப்படைத் தேவைகளை வழங்குவதில் பங்களிப்பு."
                : "Supporting food distribution, essential provisions, and aid for underprivileged families in local areas."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#B89145]/30 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#EFE3CF] flex items-center justify-center text-[#702C35]">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#702C35]">
              {locale === "ta" ? "கல்வி ஊக்குவிப்பு" : "Youth & Educational Aid"}
            </h4>
            <p className="text-xs sm:text-sm text-[#786B5C] leading-relaxed">
              {locale === "ta"
                ? "மாணவர்களுக்கான கல்வி உபகரணங்கள் மற்றும் நற்பண்பு வழிகாட்டல் முன்னெடுப்புகளில் ஆதரவு."
                : "Assisting educational drives, distributing learning aids, and motivating students to preserve cultural values."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#B89145]/30 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#EFE3CF] flex items-center justify-center text-[#702C35]">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#702C35]">
              {locale === "ta" ? "சுகாதாரம் & மருத்துவ முகாம்" : "Health Awareness"}
            </h4>
            <p className="text-xs sm:text-sm text-[#786B5C] leading-relaxed">
              {locale === "ta"
                ? "ரோட்டரி சங்கம் நடத்தும் இலவச மருத்துவ பரிசோதனை மற்றும் குருதிக்கொடை முகாம்களுக்கு ஒத்துழைப்பு."
                : "Cooperating with Rotary-organized blood donation drives and free health check-up camps for town residents."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#B89145]/30 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#EFE3CF] flex items-center justify-center text-[#702C35]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#702C35]">
              {locale === "ta" ? "ஆன்மீக அமைதி & நல்லிணக்கம்" : "Spiritual Harmony"}
            </h4>
            <p className="text-xs sm:text-sm text-[#786B5C] leading-relaxed">
              {locale === "ta"
                ? "மக்களிடையே அமைதி, பரஸ்பர நல்லெண்ணம் மற்றும் சமூக நல்லிணக்கத்தை வளர்க்கும் ஆன்மீக உரையாடல்கள்."
                : "Fostering peace, moral integrity, and social fellowship through compassionate religious guidance."}
            </p>
          </div>
        </div>

        {/* Note on Genuine Community Activities */}
        <div className="bg-[#FAF6ED] border border-[#B89145]/30 rounded-2xl p-6 text-center text-xs text-[#786B5C] max-w-3xl mx-auto">
          {locale === "ta"
            ? "குறிப்பு: சிவாச்சாரியார் ரவி சர்மா அவர்களின் உண்மையான ரோட்டரி நிகழ்வுகள் மற்றும் சமூகப் பணிகளின் பதிவுகள் மட்டுமே இதில் இடம்பெற்றுள்ளன. உறுதிப்படுத்தப்படாத தகவல்களோ விளம்பரப் புனைவுகளோ தவிர்க்கப்பட்டுள்ளன."
            : "Note: Only genuine, verified community activities and actual volunteer participation are presented. Unverified claims, exaggerated donation sums, or fabricated accolades are excluded."}
        </div>
      </div>
    </div>
  );
}
