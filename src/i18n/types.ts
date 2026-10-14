export type Locale = "ta" | "en";

export interface TranslationDictionary {
  locale: Locale;
  meta: {
    siteTitle: string;
    siteDescription: string;
    keywords: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    community: string;
    gallery: string;
    contact: string;
    switchLang: string;
    otherLang: string;
    quickCall: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    description: string;
    locationBadge: string;
    priestName: string;
    priestTitle: string;
    exploreServicesBtn: string;
    contactBtn: string;
    directCallBtn: string;
  };
  aboutPreview: {
    heading: string;
    subheading: string;
    intro: string;
    details: string;
    learnMoreBtn: string;
    templeLabel: string;
    valuesTitle: string;
    values: {
      title: string;
      desc: string;
    }[];
  };
  servicesSection: {
    heading: string;
    subheading: string;
    viewAllBtn: string;
    enquireBtn: string;
    callBtn: string;
  };
  communitySection: {
    heading: string;
    subheading: string;
    rotaryBadge: string;
    description: string;
    readMoreBtn: string;
  };
  gallerySection: {
    heading: string;
    subheading: string;
    filterAll: string;
    viewAllBtn: string;
    photoNotice: string;
  };
  faqSection: {
    heading: string;
    subheading: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contactSection: {
    heading: string;
    subheading: string;
    phoneLabel: string;
    whatsappLabel: string;
    templeLabel: string;
    locationLabel: string;
    formTitle: string;
    formSubtitle: string;
    fields: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      preferredLang: string;
      ceremonyType: string;
      selectCeremony: string;
      preferredDate: string;
      location: string;
      locationPlaceholder: string;
      details: string;
      detailsPlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
    };
    validation: {
      nameRequired: string;
      phoneRequired: string;
      phoneInvalid: string;
      ceremonyRequired: string;
    };
    notice: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    services: string;
    contactInfo: string;
    templeText: string;
    rightsReserved: string;
    noteOnPhotos: string;
  };
}
