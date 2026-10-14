import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Locale, TranslationDictionary } from "@/i18n/types";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Phone, MessageCircle, MapPin, Building2, Heart } from "lucide-react";
import { KolamDivider } from "../ui/KolamDivider";

interface FooterProps {
  locale: Locale;
  dict: TranslationDictionary;
}

export const Footer: React.FC<FooterProps> = ({ locale, dict }) => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#521F26] text-[#FAF6ED] pt-14 pb-8 border-t-4 border-[#B89145]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Priest & Temple */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#702C35] flex items-center justify-center text-[#D4AF37] border border-[#B89145] font-serif font-bold text-lg">
                🕉️
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#FAF6ED]">
                  {locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium">
                  {locale === "ta" ? siteConfig.title.ta : siteConfig.title.en}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#EFE3CF]/80 leading-relaxed">
              {dict.footer.about}
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#702C35] text-xs text-[#D4AF37] border border-[#B89145]/40 font-medium">
                <span>{locale === "ta" ? siteConfig.community.rotaryClub.ta : siteConfig.community.rotaryClub.en}</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#D4AF37] border-b border-[#B89145]/30 pb-2">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-[#EFE3CF]/90">
              <li>
                <Link
                  href={`/${locale}`}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#B89145]">›</span> {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#B89145]">›</span> {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#B89145]">›</span> {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/community`}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#B89145]">›</span> {dict.nav.community}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/gallery`}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#B89145]">›</span> {dict.nav.gallery}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#B89145]">›</span> {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#D4AF37] border-b border-[#B89145]/30 pb-2">
              {dict.footer.services}
            </h4>
            <ul className="space-y-2 text-sm text-[#EFE3CF]/85">
              <li>{locale === "ta" ? "திருக்கோவில் கும்பாபிஷேகம்" : "Temple Kumbabishekam"}</li>
              <li>{locale === "ta" ? "இல்ல கிரகப்பிரவேசம்" : "Housewarming (Grihapravesam)"}</li>
              <li>{locale === "ta" ? "கணபதி & நவகிரக ஹோமங்கள்" : "Ganapathi & Navagraha Homams"}</li>
              <li>{locale === "ta" ? "மகா ருத்ராபிஷேகம் & பூஜைகள்" : "Maha Rudrabhishekam & Poojas"}</li>
              <li>{locale === "ta" ? "சுபமுகூர்த்த திருமணச் சடங்குகள்" : "Marriage Vedic Ceremonies"}</li>
              <li>{locale === "ta" ? "சதாபிஷேகம் & சஷ்டியப்தபூர்த்தி" : "Sathabhishekam & Milestones"}</li>
            </ul>
          </div>

          {/* Col 4: Contact & Temple Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#D4AF37] border-b border-[#B89145]/30 pb-2">
              {dict.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#EFE3CF]/90">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{locale === "ta" ? siteConfig.temple.address.ta : siteConfig.temple.address.en}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{locale === "ta" ? siteConfig.location.ta : siteConfig.location.en}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={siteConfig.contact.phoneLink}
                  className="hover:text-[#D4AF37] font-semibold transition-colors"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] font-semibold transition-colors"
                >
                  WhatsApp: {siteConfig.contact.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </div>

        <KolamDivider light={true} className="my-8" />

        {/* Bottom Credits & Authenticity Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE3CF]/70 text-center sm:text-left">
          <p>
            © {currentYear} {locale === "ta" ? siteConfig.name.ta : siteConfig.name.en} — {locale === "ta" ? siteConfig.temple.ta : siteConfig.temple.en}. {dict.footer.rightsReserved}.
          </p>
          <p className="text-[11px] text-[#D4AF37]/80">
            {dict.footer.noteOnPhotos}
          </p>
        </div>
      </div>
    </footer>
  );
};
