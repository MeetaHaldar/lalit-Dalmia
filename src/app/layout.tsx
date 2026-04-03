import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lalit Dalmia — Luxury Bridal Couture Delhi | Designer Lehenga",
    template: "%s | Lalit Dalmia - Luxury Bridal Couture Delhi",
  },
  description:
    "India's premier luxury bridal couture designer. Hand-embroidered lehengas, sherwanis & gowns. Book a private consultation at our Delhi flagship stores. 20+ years of couture excellence.",
  keywords: [
    "bridal lehenga designer Delhi",
    "wedding lehenga Delhi",
    "bridal couture Delhi",
    "Lalit Dalmia",
    "luxury lehenga designer India",
    "designer lehenga Delhi NCR",
    "bridal appointment Delhi",
    "custom bridal lehenga Delhi",
    "best wedding designer Delhi",
    "sherwani designer Delhi",
  ],
  authors: [{ name: "Lalit Dalmia" }],
  creator: "Lalit Dalmia",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lalitdalmia.in",
    siteName: "Lalit Dalmia",
    title: "Lalit Dalmia — Luxury Bridal Couture Delhi",
    description:
      "India's premier luxury bridal couture designer. Hand-embroidered lehengas, sherwanis & gowns.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lalit Dalmia Bridal Couture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lalit Dalmia — Luxury Bridal Couture Delhi",
    description: "India's premier luxury bridal couture designer.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${cinzel.variable} ${playfair.variable}`}
    >
      <body style={{ fontFamily: "var(--font-dm-sans, DM Sans), sans-serif" }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
