"use client";

import React, { useState } from "react";
import { Locale, TranslationDictionary } from "@/i18n/types";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQAccordionProps {
  locale: Locale;
  dict: TranslationDictionary;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ dict }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {dict.faqSection.items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border border-[#B89145]/30 bg-white overflow-hidden shadow-xs transition-all duration-200"
          >
            <button
              onClick={() => toggle(idx)}
              type="button"
              className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-hidden group"
              aria-expanded={isOpen}
            >
              <span className="font-serif font-bold text-base sm:text-lg text-[#702C35] group-hover:text-[#521F26] transition-colors flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#B89145] shrink-0" />
                <span>{item.question}</span>
              </span>
              <span
                className={`p-1.5 rounded-full bg-[#EFE3CF]/60 text-[#702C35] transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 bg-[#702C35] text-[#FAF6ED]" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#786B5C] leading-relaxed border-t border-[#B89145]/15 bg-[#FAF6ED]/30">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
