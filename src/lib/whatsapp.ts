import { siteConfig } from "@/content/site-config";
import { Locale } from "@/i18n/types";

export interface ContactFormData {
  name: string;
  phone: string;
  preferredLang: string;
  ceremonyType: string;
  preferredDate?: string;
  location?: string;
  details?: string;
}

export function getWhatsAppBaseUrl(): string {
  return siteConfig.contact.whatsappUrl;
}

export function buildWhatsAppUrl(text: string): string {
  const encoded = encodeURIComponent(text.trim());
  return `${siteConfig.contact.whatsappUrl}?text=${encoded}`;
}

export function buildServiceEnquiryUrl(serviceName: string, locale: Locale): string {
  if (locale === "ta") {
    const message = `வணக்கம் ஐயா,

நான் "${serviceName}" சடங்கு நடத்துவது தொடர்பாக விவரங்களை அறிய விரும்புகிறேன். 

தயவுசெய்து முகூர்த்த நேரம் மற்றும் ஏற்பாடுகள் குறித்து வழிகாட்டவும்.`;
    return buildWhatsAppUrl(message);
  }

  const message = `Vanakkam Sir,

I would like to enquire about arranging the "${serviceName}" ceremony.

Please share the details and auspicious timing requirements when convenient.`;
  return buildWhatsAppUrl(message);
}

export function buildContactFormMessage(data: ContactFormData, locale: Locale): string {
  if (locale === "ta") {
    return `வணக்கம் ஐயா,

ஒரு வைதீகச் சடங்கு நடத்துவது தொடர்பாக விவரங்கள் தேவை.

பெயர்: ${data.name}
தொலைபேசி: ${data.phone}
சடங்கு: ${data.ceremonyType || "குறிப்பிடப்படவில்லை"}
விருப்பமான தேதி: ${data.preferredDate || "கலந்தாலோசித்து முடிவு செய்ய"}
இடம்: ${data.location || "காரைக்குடி / தெரிவிக்கப்படும்"}
கூடுதல் விவரங்கள்: ${data.details || "இல்லை"}

தயவுசெய்து தொடர்புகொள்ளவும்.`;
  }

  return `Vanakkam Sir,

I would like to enquire about arranging a Vedic ceremony.

Name: ${data.name}
Phone: ${data.phone}
Ceremony: ${data.ceremonyType || "Not specified"}
Preferred Date: ${data.preferredDate || "To be discussed"}
Location: ${data.location || "Karaikudi / To be informed"}
Additional Details: ${data.details || "None"}

Please contact me regarding the arrangements.`;
}
