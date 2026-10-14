"use client";

import React, { useState } from "react";
import { Locale, TranslationDictionary } from "@/i18n/types";
import { servicesData } from "@/content/services";
import { ContactFormData, buildContactFormMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "../ui/Button";
import { MessageCircle, CheckCircle2, Copy, ExternalLink, Calendar, MapPin, User, Phone, Sparkles } from "lucide-react";

interface ContactFormProps {
  locale: Locale;
  dict: TranslationDictionary;
}

export const ContactForm: React.FC<ContactFormProps> = ({ locale, dict }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    preferredLang: locale === "ta" ? "தமிழ்" : "English",
    ceremonyType: "",
    preferredDate: "",
    location: "",
    details: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = dict.contactSection.validation.nameRequired;
    }
    if (!formData.phone.trim()) {
      errs.phone = dict.contactSection.validation.phoneRequired;
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 8) {
      errs.phone = dict.contactSection.validation.phoneInvalid;
    }
    if (!formData.ceremonyType) {
      errs.ceremonyType = dict.contactSection.validation.ceremonyRequired;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const msg = buildContactFormMessage(formData, locale);
    setSubmittedMessage(msg);

    const waUrl = buildWhatsAppUrl(msg);

    // Open WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }

    setIsSubmitting(false);
  };

  const copyToClipboard = () => {
    if (submittedMessage) {
      navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-[#B89145]/40 shadow-xl relative overflow-hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#702C35] via-[#B89145] to-[#702C35]" />

      <div className="mb-6">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#702C35] flex items-center gap-2">
          <span>{dict.contactSection.formTitle}</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#786B5C] mt-1">
          {dict.contactSection.formSubtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name Field */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-[#342720] mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#B89145]" />
              <span>{dict.contactSection.fields.name} *</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={dict.contactSection.fields.namePlaceholder}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm sm:text-base bg-[#FAF6ED]/30 text-[#342720] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#702C35] transition-all ${
                errors.name ? "border-red-500 ring-1 ring-red-500" : "border-[#B89145]/40"
              }`}
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-[#342720] mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#B89145]" />
              <span>{dict.contactSection.fields.phone} *</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={dict.contactSection.fields.phonePlaceholder}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm sm:text-base bg-[#FAF6ED]/30 text-[#342720] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#702C35] transition-all ${
                errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-[#B89145]/40"
              }`}
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Ceremony Type */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-[#342720] mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B89145]" />
              <span>{dict.contactSection.fields.ceremonyType} *</span>
            </label>
            <select
              value={formData.ceremonyType}
              onChange={(e) => setFormData({ ...formData, ceremonyType: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm sm:text-base bg-[#FAF6ED]/30 text-[#342720] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#702C35] transition-all ${
                errors.ceremonyType ? "border-red-500 ring-1 ring-red-500" : "border-[#B89145]/40"
              }`}
            >
              <option value="">{dict.contactSection.fields.selectCeremony}</option>
              {servicesData.map((s) => (
                <option key={s.id} value={s.title[locale]}>
                  {s.title[locale]}
                </option>
              ))}
              <option value={locale === "ta" ? "பிற சிறப்புச் சடங்குகள்" : "Other Custom Ritual"}>
                {locale === "ta" ? "பிற சிறப்புச் சடங்குகள் / ஆலோசனை" : "Other Special Ceremony / Consultation"}
              </option>
            </select>
            {errors.ceremonyType && (
              <p className="text-xs text-red-600 mt-1">{errors.ceremonyType}</p>
            )}
          </div>

          {/* Preferred Language */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-[#342720] mb-1.5">
              {dict.contactSection.fields.preferredLang}
            </label>
            <select
              value={formData.preferredLang}
              onChange={(e) => setFormData({ ...formData, preferredLang: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-[#B89145]/40 text-sm sm:text-base bg-[#FAF6ED]/30 text-[#342720] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#702C35] transition-all"
            >
              <option value="தமிழ்">தமிழ் (Tamil)</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Preferred Date */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-[#342720] mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#B89145]" />
              <span>{dict.contactSection.fields.preferredDate}</span>
            </label>
            <input
              type="text"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              placeholder={locale === "ta" ? "எ.கா. அடுத்த மாதம் / சுப முகூர்த்த நாள்" : "e.g. Next month or preferred date"}
              className="w-full px-4 py-2.5 rounded-lg border border-[#B89145]/40 text-sm sm:text-base bg-[#FAF6ED]/30 text-[#342720] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#702C35] transition-all"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-[#342720] mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B89145]" />
              <span>{dict.contactSection.fields.location}</span>
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder={dict.contactSection.fields.locationPlaceholder}
              className="w-full px-4 py-2.5 rounded-lg border border-[#B89145]/40 text-sm sm:text-base bg-[#FAF6ED]/30 text-[#342720] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#702C35] transition-all"
            />
          </div>
        </div>

        {/* Additional Details */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-[#342720] mb-1.5">
            {dict.contactSection.fields.details}
          </label>
          <textarea
            rows={3}
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            placeholder={dict.contactSection.fields.detailsPlaceholder}
            className="w-full px-4 py-2.5 rounded-lg border border-[#B89145]/40 text-sm sm:text-base bg-[#FAF6ED]/30 text-[#342720] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#702C35] transition-all resize-y"
          />
        </div>

        {/* Notice */}
        <div className="p-3 bg-[#EFE3CF]/60 rounded-lg border border-[#B89145]/30 text-xs text-[#786B5C] leading-relaxed">
          {dict.contactSection.notice}
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            variant="whatsapp"
            size="lg"
            className="w-full py-3.5 flex items-center justify-center gap-2 text-white font-bold"
            disabled={isSubmitting}
            icon={<MessageCircle className="w-5 h-5" />}
          >
            {isSubmitting
              ? dict.contactSection.fields.submittingBtn
              : dict.contactSection.fields.submitBtn}
          </Button>
        </div>
      </form>

      {/* Backup message display when generated */}
      {submittedMessage && (
        <div className="mt-6 pt-6 border-t border-[#B89145]/30 bg-[#FAF6ED] p-4 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#702C35] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>{locale === "ta" ? "வாட்ஸ்அப் செய்தி நகல்:" : "Prepared WhatsApp Message:"}</span>
            </span>
            <button
              onClick={copyToClipboard}
              className="text-xs flex items-center gap-1 text-[#702C35] hover:text-[#521F26] font-semibold px-2 py-1 bg-white rounded border border-[#B89145]/40"
            >
              <Copy className="w-3 h-3" />
              <span>{copied ? (locale === "ta" ? "நகலெடுக்கப்பட்டது!" : "Copied!") : (locale === "ta" ? "நகலெடு" : "Copy")}</span>
            </button>
          </div>
          <pre className="text-xs text-[#342720] whitespace-pre-wrap font-sans bg-white p-3 rounded border border-[#B89145]/20 max-h-36 overflow-y-auto">
            {submittedMessage}
          </pre>
        </div>
      )}
    </div>
  );
};
