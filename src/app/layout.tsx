import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_Tamil, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ரவி சர்மா சிவாச்சாரியார் | Sri Nagarathar Sivan Temple, Karaikudi",
  description: "Bilingual portfolio of Ravi Sharma, Sivachariyar at Sri Nagarathar Sivan Temple in Karaikudi, Tamil Nadu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ta"
      className={`${cormorant.variable} ${notoTamil.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF6ED] text-[#342720]">
        {children}
      </body>
    </html>
  );
}
