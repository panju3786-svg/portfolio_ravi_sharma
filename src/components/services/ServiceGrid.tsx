"use client";

import React, { useState } from "react";
import { servicesData, ServiceItem } from "@/content/services";
import { Locale, TranslationDictionary } from "@/i18n/types";
import { ServiceCard } from "./ServiceCard";

interface ServiceGridProps {
  locale: Locale;
  dict: TranslationDictionary;
  limit?: number;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  locale,
  dict,
  limit,
}) => {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedServices.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          locale={locale}
          dict={dict}
        />
      ))}
    </div>
  );
};
