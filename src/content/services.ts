export interface ServiceItem {
  id: string;
  title: {
    ta: string;
    en: string;
  };
  shortDesc: {
    ta: string;
    en: string;
  };
  fullDesc: {
    ta: string;
    en: string;
  };
  image: string;
  badge: {
    ta: string;
    en: string;
  };
  rituals: {
    ta: string[];
    en: string[];
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: "kumbabishekam",
    title: {
      ta: "திருக்கோவில் கும்பாபிஷேகம்",
      en: "Temple Kumbabishekam",
    },
    shortDesc: {
      ta: "ஆலய மகா கும்பாபிஷேகம், யாகசாலை பூஜைகள் மற்றும் ஆகம முறைப்படியான மகா சம்ப்ரோக்ஷண சடங்குகள்.",
      en: "Traditional temple consecration ceremonies, Yagasala poojas, and Agama Vedic sanctification rituals.",
    },
    fullDesc: {
      ta: "திருக்கோவில் திருப்பணி நிறைவுற்று தெய்வ சக்தி புனரமைக்கப்படும் புனித மகா கும்பாபிஷேகத்தை ஆகம விதிகளின்படி யாகசாலை அமைத்து, வேத மந்திரங்கள் மற்றும் மங்கள தீபாராதனையுடன் முறைப்படி நடத்தி வைக்கப்படுகிறது.",
      en: "Conducting grand temple consecrations in accordance with sacred Agamas. Includes comprehensive Yagasala setup, Veda parayana, Kalasa sthapana, and Maha Samprokshanam.",
    },
    image: "/images/kumbabishekam-1.jpg",
    badge: {
      ta: "ஆலய திருப்பணி",
      en: "Temple Consecration",
    },
    rituals: {
      ta: [
        "யாகசாலை நிர்மாணம் மற்றும் அலங்காரம்",
        "மகா சங்கல்பம் & புண்யாஹவாசனம்",
        "கும்ப ஸ்தாபனம் & பூர்ணாஹுதி",
        "விமான & மூலவர் மகா கும்பாபிஷேகம்",
      ],
      en: [
        "Yagasala Construction & Sanctification",
        "Maha Sankalpam & Punyahavachanam",
        "Kumbha Sthapanam & Poornahuthi",
        "Vimana & Moolavar Maha Consecration",
      ],
    },
  },
  {
    id: "grihapravesam",
    title: {
      ta: "இல்ல கிரகப்பிரவேசம்",
      en: "Housewarming Ceremony (Grihapravesam)",
    },
    shortDesc: {
      ta: "புதிய இல்லத்தில் சாந்தியும் மங்களமும் பெருக பாரம்பரிய சாஸ்திர முறைப்படி நடத்தப்படும் சுப சடங்குகள்.",
      en: "Traditional Vedic ceremonies performed when entering a new residence for peace and harmony.",
    },
    fullDesc: {
      ta: "புதிய வீட்டில் குடிபுகும் போது கோபூஜை, கணபதி ஹோமம், வாஸ்து சாந்தி மற்றும் நவக்கிரக வழிபாட்டுடன் இல்லத்திற்கு மங்களம் சேர்க்கும் பாரம்பரிய வைதீக நிகழ்வு.",
      en: "Auspicious home blessing ceremony encompassing Go Pooja, Ganapathi Homam, Vastu Shanthi, and Navagraha prayers to usher in sacred energy and familial well-being.",
    },
    image: "/images/grihapravesam-1.jpg",
    badge: {
      ta: "இல்ல சுபகாரியம்",
      en: "Home Blessing",
    },
    rituals: {
      ta: [
        "கோபூஜை & கஜலக்ஷ்மி பூஜை",
        "மகா கணபதி ஹோமம்",
        "வாஸ்து சாந்தி ஹோமம்",
        "பால் காய்ச்சுதல் & புண்யாஹவாசனம்",
      ],
      en: [
        "Go Pooja & Lakshmi Prayer",
        "Maha Ganapathi Homam",
        "Vastu Shanthi Homam",
        "Milk Boiling Tradition & Punyaham",
      ],
    },
  },
  {
    id: "homams",
    title: {
      ta: "புனித ஹோமங்கள்",
      en: "Vedic Homams & Havans",
    },
    shortDesc: {
      ta: "கணபதி ஹோமம், நவகிரக ஹோமம், ஆயுஷ்ய ஹோமம், சுதர்சன ஹோமம் உள்ளிட்ட வேத வேள்விகள்.",
      en: "Classical Vedic fire rituals including Ganapathi Homam, Navagraha Homam, and Ayushya Homam.",
    },
    fullDesc: {
      ta: "அக்னி பகவானின் வழியாக தேவதா ஆராதனை செய்யும் புனித வேள்விகள். குறிப்பிட்ட நட்சத்திரங்கள், பிறந்த நாள், அல்லது சுபநாட்களில் சாஸ்திர முறைப்படி அவிர் பாகம் அளிக்கப்படும் ஹோமங்கள்.",
      en: "Sacred fire offerings performed strictly according to scriptural injunctions. Includes birth-star homams, health prayers, and obstacle-removal Vedic havans.",
    },
    image: "/images/homam-1.jpg",
    badge: {
      ta: "அக்னி வேள்வி",
      en: "Fire Rituals",
    },
    rituals: {
      ta: [
        "மகா கணபதி ஹோமம்",
        "நவகிரக ஹோமம் & ப்ரீதி சடங்குகள்",
        "ஆயுஷ்ய ஹோமம் (பிறந்தநாள் சிறப்பு)",
        "மிருத்யுஞ்ஜய & ருத்ர ஏகாதசி ஹோமம்",
      ],
      en: [
        "Maha Ganapathi Homam",
        "Navagraha Homam & Propitiation",
        "Ayushya Homam (Birthday blessing)",
        "Mrityunjaya & Rudra Homam",
      ],
    },
  },
  {
    id: "special-poojas",
    title: {
      ta: "சிறப்புப் பூஜைகள்",
      en: "Special Poojas & Archanas",
    },
    shortDesc: {
      ta: "சிவபெருமானுக்கு ருத்ராபிஷேகம், பிரதோஷ வழிபாடுகள், சங்காபிஷேகம் மற்றும் இல்ல சிறப்புப் பூஜைகள்.",
      en: "Traditional worship, Rudrabhishekam for Lord Shiva, Pradosham observances, and special family poojas.",
    },
    fullDesc: {
      ta: "சிவபெருமானின் திருவருள் வேண்டி பதினொரு வகை திரவியங்களால் செய்யப்படும் ருத்ராபிஷேகம், சங்குகளில் புனித நீர் நிறைத்து செய்யப்படும் சங்காபிஷேகம் மற்றும் விசேஷ தின பூஜைகள்.",
      en: "Devotional abhishekams using 11 sacred dravyas, Shankhabhishekam with energized waters, and customized deity poojas tailored to traditional Shaivite protocols.",
    },
    image: "/images/pooja-1.jpg",
    badge: {
      ta: "வழிபாட்டு நெறி",
      en: "Deity Worship",
    },
    rituals: {
      ta: [
        "மகா ருத்ராபிஷேகம்",
        "சங்காபிஷேகம் (108 / 1008 சங்குகள்)",
        "பிரதோஷ சிறப்பு ஆராதனை",
        "சகஸ்ரநாம அர்ச்சனை & தீபாராதனை",
      ],
      en: [
        "Maha Rudrabhishekam",
        "Shankhabhishekam (108 / 1008 conches)",
        "Special Pradosham Worship",
        "Sahasranama Archana & Deeparadhana",
      ],
    },
  },
  {
    id: "marriage-rituals",
    title: {
      ta: "திருமண வைதீகச் சடங்குகள்",
      en: "Marriage Vedic Rituals",
    },
    shortDesc: {
      ta: "நிச்சயதார்த்தம், மாங்கல்ய தாரணம், சப்தபதி மற்றும் அம்மி மிதித்தல் உள்ளிட்ட சாஸ்திர திருமணச் சடங்குகள்.",
      en: "Traditional marriage Vedic ceremonies including Nichayathartham, Mangalya Dharanam, and Saptapadi.",
    },
    fullDesc: {
      ta: "வேத நெறிப்படி அக்னி சாட்சியாக இரு மனங்கள் இணையும் புனித விவாக வைபவங்களை உரிய மந்திரங்களுடன் முறைப்படி நடத்தி வைக்கப்படும் திருமணச் சடங்குகள்.",
      en: "Traditional wedding ceremonies solemnized before the sacred fire, strictly following Vedic customs with profound spiritual dignity and cultural elegance.",
    },
    image: "/images/temple-service-1.jpg",
    badge: {
      ta: "மங்கள சடங்கு",
      en: "Auspicious Union",
    },
    rituals: {
      ta: [
        "நிச்சயதார்த்த பூஜை & லக்ன பத்திரிகை",
        "மாங்கல்ய தாரணம் & தாலி கட்டுதல்",
        "சப்தபதி & அம்மி மிதித்தல்",
        "லாஜ ஹோமம் & ஆசீர்வாதம்",
      ],
      en: [
        "Nichayathartham & Lagna Patrika",
        "Mangalya Dharanam (Sacred Thread)",
        "Saptapadi & Ashmarohanam",
        "Laja Homam & Elders' Blessing",
      ],
    },
  },
  {
    id: "family-milestones",
    title: {
      ta: "குடும்ப வாழ்வியல் சுபச் சடங்குகள்",
      en: "Family & Life-Event Ceremonies",
    },
    shortDesc: {
      ta: "சஷ்டியப்தபூர்த்தி (60), பீமரத சாந்தி (70), சதாபிஷேகம் (80), மற்றும் நாமகரணம் உள்ளிட்ட சடங்குகள்.",
      en: "Auspicious milestone ceremonies including Sashtiapthapoorthi (60th), Bheemaratha Shanthi (70th), and Sathabhishekam (80th).",
    },
    fullDesc: {
      ta: "பெரியவர்களின் வாழ்நாள் ஆசீர்வாதம் பெறவும், தலைமுறைகள் நலம் பெறவும் அறுபதாம் கல்யாணம், பீமரத சாந்தி மற்றும் சதாபிஷேகம் போன்ற சுப சடங்குகளை மங்கள கலச பூஜைகளுடன் நிகழ்த்துதல்.",
      en: "Celebrating longevity and familial reverence through milestone Vedic rituals featuring Kalasa poojas, Ayushya invocations, and family blessings.",
    },
    image: "/images/homam-1.jpg",
    badge: {
      ta: "வாழ்வியல் சடங்கு",
      en: "Life Milestones",
    },
    rituals: {
      ta: [
        "சஷ்டியப்தபூர்த்தி (60ஆம் ஆண்டு நிறைவு)",
        "பீமரத சாந்தி (70ஆம் ஆண்டு நிறைவு)",
        "சதாபிஷேகம் (80ஆம் ஆண்டு நிறைவு)",
        "நாமகரணம் & ஆயுஷ் ஹோமம்",
      ],
      en: [
        "Sashtiapthapoorthi (60th Year)",
        "Bheemaratha Shanthi (70th Year)",
        "Sathabhishekam (80th Year)",
        "Namakaranam (Naming Ceremony)",
      ],
    },
  },
  {
    id: "temple-festivals",
    title: {
      ta: "திருக்கோவில் மற்றும் திருவிழா வழிபாடுகள்",
      en: "Temple & Festival Rituals",
    },
    shortDesc: {
      ta: "சிவராத்திரி, மார்கழி ஆருத்ரா தரிசனம், கந்த சஷ்டி, பங்குனி உத்திரம் போன்ற கோவில் திருவிழா வழிபாடுகள்.",
      en: "Temple worship and annual festival services such as Maha Shivaratri, Arudra Darisanam, and Brahmotsavam.",
    },
    fullDesc: {
      ta: "ஸ்ரீ நகரத்தார் சிவன் கோவில் மற்றும் பிற ஆலயங்களில் நடைபெறும் திருவிழாக்கள், கொடியேற்றம், சுவாமி திருவீதி உலா மற்றும் விசேஷ அபிஷேகங்களை ஆகம முறைப்படி ஆராதித்தல்.",
      en: "Traditional festival services encompassing Dwajarohanam (flag hoisting), Utsavam deity processions, and festival special abhishekams at Sri Nagarathar Sivan Temple.",
    },
    image: "/images/temple-service-1.jpg",
    badge: {
      ta: "கோவில் உற்சவம்",
      en: "Festival Ceremonies",
    },
    rituals: {
      ta: [
        "மகா சிவராத்திரி நான்கு கால பூஜை",
        "ஆருத்ரா தரிசன மகா அபிஷேகம்",
        "பிரம்மோற்சவ கொடியேற்றம் & ஆராதனை",
        "மாசி மகம் & பங்குனி உத்திர வழிபாடுகள்",
      ],
      en: [
        "Maha Shivaratri 4 Kala Poojas",
        "Arudra Darisanam Maha Abhishekam",
        "Brahmotsavam Flag Hoisting & Rituals",
        "Panguni Uthiram & Masi Magam Worship",
      ],
    },
  },
];
