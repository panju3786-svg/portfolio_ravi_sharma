export type GalleryCategory =
  | "all"
  | "temple"
  | "kumbabishekam"
  | "grihapravesam"
  | "homam"
  | "pooja"
  | "community";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  src: string;
  alt: {
    ta: string;
    en: string;
  };
  title: {
    ta: string;
    en: string;
  };
  location: {
    ta: string;
    en: string;
  };
  aspectRatio?: "square" | "landscape" | "portrait";
}

export const galleryCategories: { id: GalleryCategory; label: { ta: string; en: string } }[] = [
  { id: "all", label: { ta: "அனைத்தும்", en: "All" } },
  { id: "temple", label: { ta: "திருக்கோவில் பணி", en: "Temple Service" } },
  { id: "kumbabishekam", label: { ta: "கும்பாபிஷேகம்", en: "Kumbabishekam" } },
  { id: "grihapravesam", label: { ta: "கிரகப்பிரவேசம்", en: "Grihapravesam" } },
  { id: "homam", label: { ta: "ஹோமங்கள்", en: "Homams" } },
  { id: "pooja", label: { ta: "சிறப்பு பூஜைகள்", en: "Poojas" } },
  { id: "community", label: { ta: "ரோட்டரி & சமூகப் பணி", en: "Community Service" } },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-portrait",
    category: "temple",
    src: "/images/ravi-sharma-portrait.jpg",
    alt: {
      ta: "சிவாச்சாரியார் ரவி சர்மா - ஸ்ரீ நகரத்தார் சிவன் கோவில்",
      en: "Ravi Sharma Sivachariyar - Sri Nagarathar Sivan Temple",
    },
    title: {
      ta: "சிவாச்சாரியார் ரவி சர்மா உருவப்படம்",
      en: "Portrait of Ravi Sharma Sivachariyar",
    },
    location: {
      ta: "ஸ்ரீ நகரத்தார் சிவன் கோவில், காரைக்குடி",
      en: "Sri Nagarathar Sivan Temple, Karaikudi",
    },
    aspectRatio: "portrait",
  },
  {
    id: "gal-temple-1",
    category: "temple",
    src: "/images/temple-service-1.jpg",
    alt: {
      ta: "ஸ்ரீ நகரத்தார் சிவன் கோவில் திருக்கோவில் வழிபாட்டு நிகழ்வு",
      en: "Temple worship and rituals at Sri Nagarathar Sivan Temple",
    },
    title: {
      ta: "திருக்கோவில் நித்திய & விசேஷ ஆராதனை",
      en: "Temple Sanctum Worship & Daily Rituals",
    },
    location: {
      ta: "காரைக்குடி, தமிழ்நாடு",
      en: "Karaikudi, Tamil Nadu",
    },
    aspectRatio: "landscape",
  },
  {
    id: "gal-kumbabishekam-1",
    category: "kumbabishekam",
    src: "/images/kumbabishekam-1.jpg",
    alt: {
      ta: "திருக்கோவில் மகா கும்பாபிஷேக யாகசாலை வழிபாடு",
      en: "Temple Kumbabishekam Yagasala sacred ritual",
    },
    title: {
      ta: "மகா கும்பாபிஷேகம் & பூர்ணாஹுதி",
      en: "Maha Kumbabishekam & Poornahuthi",
    },
    location: {
      ta: "காரைக்குடி மற்றும் சுற்றியுள்ள பகுதிகள்",
      en: "Karaikudi and Chettinad region",
    },
    aspectRatio: "landscape",
  },
  {
    id: "gal-grihapravesam-1",
    category: "grihapravesam",
    src: "/images/grihapravesam-1.jpg",
    alt: {
      ta: "இல்ல புதுமனை புகுவிழா மற்றும் மங்கள கலச பூஜை",
      en: "Housewarming Grihapravesam and sacred kalasa ceremony",
    },
    title: {
      ta: "மங்கள இல்ல கிரகப்பிரவேசம்",
      en: "Traditional Housewarming Blessing",
    },
    location: {
      ta: "காரைக்குடி இல்லம்",
      en: "Karaikudi Residence",
    },
    aspectRatio: "square",
  },
  {
    id: "gal-homam-1",
    category: "homam",
    src: "/images/homam-1.jpg",
    alt: {
      ta: "சாஸ்திர முறைப்படியான வேத மகா கணபதி & ஆயுஷ்ய ஹோமம்",
      en: "Classical Vedic Maha Ganapathi & Ayushya Homam",
    },
    title: {
      ta: "வேத அக்னி ஹோமம் & அவிர்பாகம்",
      en: "Sacred Vedic Fire Offering",
    },
    location: {
      ta: "சிவகங்கை மாவட்டம்",
      en: "Sivaganga District",
    },
    aspectRatio: "landscape",
  },
  {
    id: "gal-pooja-1",
    category: "pooja",
    src: "/images/pooja-1.jpg",
    alt: {
      ta: "சிவபெருமானுக்கு ருத்ராபிஷேகம் மற்றும் தீபாராதனை",
      en: "Rudrabhishekam and Deeparadhana for Lord Shiva",
    },
    title: {
      ta: "சிவபெருமானுக்கு மகா ருத்ராபிஷேகம்",
      en: "Lord Shiva Maha Rudrabhishekam",
    },
    location: {
      ta: "ஸ்ரீ நகரத்தார் சிவன் கோவில்",
      en: "Sri Nagarathar Sivan Temple",
    },
    aspectRatio: "square",
  },
  {
    id: "gal-rotary-1",
    category: "community",
    src: "/images/rotary-community-service-1.jpg",
    alt: {
      ta: "காரைக்குடி ரோட்டரி சங்கம் வழி மக்கள் நலப் பணி",
      en: "Community welfare initiative by Rotary Club of Karaikudi",
    },
    title: {
      ta: "ரோட்டரி கிளப் ஆஃப் காரைக்குடி சமூக அறப்பணி",
      en: "Rotary Club of Karaikudi Community Outreach",
    },
    location: {
      ta: "காரைக்குடி, தமிழ்நாடு",
      en: "Karaikudi, Tamil Nadu",
    },
    aspectRatio: "landscape",
  },
];
