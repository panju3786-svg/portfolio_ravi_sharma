export interface SiteConfig {
  name: {
    ta: string;
    en: string;
  };
  title: {
    ta: string;
    en: string;
  };
  temple: {
    ta: string;
    en: string;
    address: {
      ta: string;
      en: string;
    };
  };
  location: {
    ta: string;
    en: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    phoneLink: string;
    whatsappNumber: string;
    whatsappUrl: string;
  };
  community: {
    rotaryClub: {
      ta: string;
      en: string;
    };
  };
  images: {
    portrait: string;
    hero: string;
    templeService: string;
    kumbabishekam: string;
    grihapravesam: string;
    homam: string;
    pooja: string;
    rotary: string;
  };
}

export const siteConfig: SiteConfig = {
  name: {
    ta: "ரவி சர்மா",
    en: "Ravi Sharma",
  },
  title: {
    ta: "சிவாச்சாரியார் / இந்து அர்ச்சகர்",
    en: "Sivachariyar / Hindu Priest",
  },
  temple: {
    ta: "ஸ்ரீ நகரத்தார் சிவன் கோவில்",
    en: "Sri Nagarathar Sivan Temple",
    address: {
      ta: "ஸ்ரீ நகரத்தார் சிவன் கோவில், காரைக்குடி, சிவகங்கை மாவட்டம், தமிழ்நாடு",
      en: "Sri Nagarathar Sivan Temple, Karaikudi, Sivaganga District, Tamil Nadu",
    },
  },
  location: {
    ta: "காரைக்குடி, தமிழ்நாடு",
    en: "Karaikudi, Tamil Nadu",
  },
  contact: {
    phone: "+919843233624",
    phoneFormatted: "+91 98432 33624",
    phoneLink: "tel:+919843233624",
    whatsappNumber: "919843233624",
    whatsappUrl: "https://wa.me/919843233624",
  },
  community: {
    rotaryClub: {
      ta: "ரோட்டரி கிளப் ஆஃப் காரைக்குடி",
      en: "Rotary Club of Karaikudi",
    },
  },
  images: {
    portrait: "/images/ravi-sharma-portrait.jpg",
    hero: "/images/ravi-sharma-hero.jpg",
    templeService: "/images/temple-service-1.jpg",
    kumbabishekam: "/images/kumbabishekam-1.jpg",
    grihapravesam: "/images/grihapravesam-1.jpg",
    homam: "/images/homam-1.jpg",
    pooja: "/images/pooja-1.jpg",
    rotary: "/images/rotary-community-service-1.jpg",
  },
};
