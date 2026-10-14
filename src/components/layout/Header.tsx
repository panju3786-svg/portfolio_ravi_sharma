"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site-config";
import { Locale, TranslationDictionary } from "@/i18n/types";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Phone, Menu, X, Sparkles } from "lucide-react";

interface HeaderProps {
  locale: Locale;
  dict: TranslationDictionary;
}

export const Header: React.FC<HeaderProps> = ({ locale, dict }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/community`, label: dict.nav.community },
    { href: `/${locale}/gallery`, label: dict.nav.gallery },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF6ED]/95 backdrop-blur-md shadow-md border-b border-[#B89145]/30 py-2.5"
          : "bg-[#FAF6ED] border-b border-[#B89145]/20 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Priest Identity */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            {/* Sacred Emblem Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#702C35] flex items-center justify-center text-[#FAF6ED] border-2 border-[#B89145] shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <span className="text-base font-serif font-bold text-[#D4AF37]">🕉️</span>
            </div>

            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-[#702C35] tracking-tight group-hover:text-[#521F26] transition-colors leading-tight">
                {locale === "ta" ? siteConfig.name.ta : siteConfig.name.en}
              </span>
              <span className="text-xs text-[#786B5C] font-medium tracking-wide">
                {locale === "ta" ? siteConfig.temple.ta : siteConfig.temple.en}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "text-[#702C35] bg-[#EFE3CF] font-semibold border-b-2 border-[#702C35]"
                      : "text-[#342720] hover:text-[#702C35] hover:bg-[#EFE3CF]/50"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher currentLocale={locale} />

            {/* Quick Call Button */}
            <a
              href={siteConfig.contact.phoneLink}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#702C35] text-[#FAF6ED] hover:bg-[#521F26] text-xs sm:text-sm font-medium border border-[#B89145]/50 transition-colors shadow-xs"
              title={dict.nav.quickCall}
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{dict.nav.quickCall}</span>
            </a>
          </div>

          {/* Mobile Actions: Language + Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSwitcher currentLocale={locale} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#702C35] hover:bg-[#EFE3CF] focus:outline-hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#B89145]/20 animate-fadeIn">
            <div className="flex flex-col gap-1 pb-3">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? "bg-[#702C35] text-[#FAF6ED] font-semibold"
                        : "text-[#342720] hover:bg-[#EFE3CF] hover:text-[#702C35]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-2 mt-2 border-t border-[#B89145]/20">
                <a
                  href={siteConfig.contact.phoneLink}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#702C35] text-[#FAF6ED] font-semibold text-sm shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>{siteConfig.contact.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
