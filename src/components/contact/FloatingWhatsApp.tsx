"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site-config";
import { Locale } from "@/i18n/types";
import { MessageCircle, X } from "lucide-react";

interface FloatingWhatsAppProps {
  locale: Locale;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ locale }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const tooltipText =
    locale === "ta"
      ? "சிவாச்சாரியாருடன் வாட்ஸ்அப்பில் பேச"
      : "Chat on WhatsApp with Priest";

  return (
    <aside
      aria-label="WhatsApp enquiry"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
    >
      {/* Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#702C35] text-xs font-semibold px-3 py-2 rounded-full shadow-lg border border-[#B89145]/40 animate-fadeIn">
          <span>{tooltipText}</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#786B5C] hover:text-[#702C35] p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Pulsing WhatsApp Action Button */}
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tooltipText}
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
      >
        {/* Sacred aura rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10 fill-white" />
      </a>
    </aside>
  );
};
