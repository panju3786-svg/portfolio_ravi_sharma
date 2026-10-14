import { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/routing";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ravisharma-sivachariyar.com";

export function generatePageMetadata({
  locale,
  path = "",
  title,
  description,
}: {
  locale: Locale;
  path?: string;
  title?: string;
  description?: string;
}): Metadata {
  const dict = getDictionary(locale);
  const pageTitle = title || dict.meta.siteTitle;
  const pageDesc = description || dict.meta.siteDescription;
  const canonicalUrl = `${BASE_URL}/${locale}${path}`;
  const alternateTa = `${BASE_URL}/ta${path}`;
  const alternateEn = `${BASE_URL}/en${path}`;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ta: alternateTa,
        en: alternateEn,
        "x-default": `${BASE_URL}/ta${path}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: locale === "ta" ? siteConfig.name.ta : siteConfig.name.en,
      locale: locale === "ta" ? "ta_IN" : "en_IN",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/images/ravi-sharma-portrait.jpg`,
          width: 1200,
          height: 630,
          alt: locale === "ta" ? "சிவாச்சாரியார் ரவி சர்மா" : "Ravi Sharma Sivachariyar",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [`${BASE_URL}/images/ravi-sharma-portrait.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generatePersonSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: locale === "ta" ? siteConfig.name.ta : siteConfig.name.en,
    jobTitle: locale === "ta" ? siteConfig.title.ta : siteConfig.title.en,
    affiliation: {
      "@type": "PlaceOfWorship",
      name: locale === "ta" ? siteConfig.temple.ta : siteConfig.temple.en,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karaikudi",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    memberOf: {
      "@type": "Organization",
      name: locale === "ta" ? siteConfig.community.rotaryClub.ta : siteConfig.community.rotaryClub.en,
    },
    telephone: siteConfig.contact.phone,
    url: `${BASE_URL}/${locale}`,
    image: `${BASE_URL}/images/ravi-sharma-portrait.jpg`,
  };
}
