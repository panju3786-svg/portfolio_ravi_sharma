import { ta } from "./ta";
import { en } from "./en";
import { Locale, TranslationDictionary } from "./types";

export const defaultLocale: Locale = "ta";
export const locales: Locale[] = ["ta", "en"];

export function getDictionary(locale: string): TranslationDictionary {
  if (locale === "en") {
    return en;
  }
  return ta;
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getAlternatePath(pathname: string, targetLocale: Locale): string {
  if (!pathname) return `/${targetLocale}`;
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${targetLocale}`;
  }
  // If first segment is a locale, replace it
  if (locales.includes(segments[0] as Locale)) {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }
  return `/${targetLocale}/${segments.join("/")}`;
}
