import type { Metadata } from "next";
import HeroVideo from "@/components/home/HeroVideo";
import MarqueeTicker from "@/components/home/MarqueeTicker";
import CollectionsGrid from "@/components/home/CollectionsGrid";
import PhilosophySection from "@/components/home/PhilosophySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CraftStats from "@/components/home/CraftStats";
import AppointmentTeaser from "@/components/home/AppointmentTeaser";
import InstagramGrid from "@/components/home/InstagramGrid";
import { LocalBusinessSchema, PersonSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Lalit Dalmia — Luxury Bridal Couture Delhi | Designer Lehenga",
  description:
    "India's premier luxury bridal couture designer. Hand-embroidered lehengas, sherwanis & gowns. Book a private consultation at our Delhi flagship stores. 20+ years of couture excellence.",
  alternates: { canonical: "https://lalitdalmia.in" },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <PersonSchema />
      <HeroVideo />
      <MarqueeTicker />
      <CollectionsGrid />
      <PhilosophySection />
      <FeaturedProducts />
      <CraftStats />
      <AppointmentTeaser />
      <InstagramGrid />
    </>
  );
}
