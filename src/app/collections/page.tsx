import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { images, categoryImages as catImgs } from "@/lib/images";

export const metadata: Metadata = {
  title: "Collections — Bridal Lehengas, Groom's Wear & More",
  description:
    "Explore Lalit Dalmia's luxury collections — bridal lehengas, groom's sherwanis, cocktail gowns, resort wear & more. Hand-crafted couture from Delhi's finest atelier.",
  alternates: { canonical: "https://lalitdalmia.in/collections" },
};

const categories = [
  { title: "Bridal Lehengas", subtitle: "The Bride's Canvas", description: "Hand-embroidered masterpieces for the most important day of your life.", href: "/collections/bridal", image: catImgs.bridal, count: "48 pieces" },
  { title: "Groom's Wear", subtitle: "Sherwanis & Bandhgalas", description: "Regal sherwanis and bandhgalas crafted for the modern Indian groom.", href: "/collections/groom", image: catImgs.groom, count: "24 pieces" },
  { title: "Cocktail & Gowns", subtitle: "Evening Elegance", description: "Indo-western gowns and cocktail wear for every celebration.", href: "/collections/cocktail", image: catImgs.cocktail, count: "32 pieces" },
  { title: "Resort Wear", subtitle: "Vacation Couture", description: "Effortless luxury for destination weddings and tropical getaways.", href: "/collections/resort-wear", image: catImgs["resort-wear"], count: "20 pieces" },
  { title: "Bridesmaids & Trousseau", subtitle: "The Bridal Party", description: "Coordinated elegance for the entire bridal party.", href: "/collections/bridesmaids", image: catImgs.bridesmaids, count: "28 pieces" },
  { title: "Celebrity Closet", subtitle: "As Worn By", description: "Pieces worn by Bollywood's finest — now available for you.", href: "/collections/celebrity", image: catImgs.celebrity, count: "16 pieces" },
];

export default function CollectionsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "Collections", url: "https://lalitdalmia.in/collections" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden" aria-label="Collections hero">
        <Image src={images.collectionsHero} alt="Lalit Dalmia Bridal Couture" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-[#1A1A1A]/50" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Lalit Dalmia</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#F5EFE0]">The Collections</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">Collections</li>
        </ol>
      </nav>

      {/* Grid */}
      <section className="section-padding bg-[#FDFAF5]" aria-labelledby="collections-grid-heading">
        <div className="container-luxury">
          <h2 id="collections-grid-heading" className="sr-only">All Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group relative overflow-hidden" aria-label={`View ${cat.title} collection`}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={cat.image} alt={cat.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#C4974A]/50 transition-all duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-label text-[9px] text-[#C4974A] tracking-[0.3em] mb-1">{cat.subtitle}</p>
                    <h3 className="font-display text-2xl text-[#F5EFE0] mb-1">{cat.title}</h3>
                    <p className="font-body text-xs text-[#F5EFE0]/60 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-label text-[9px] text-[#C4974A]/70 tracking-[0.2em]">{cat.count}</span>
                      <span className="font-label text-[10px] text-[#C4974A] tracking-[0.2em] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Shop Now →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 bg-[#6B1A2A] text-center" aria-labelledby="collections-cta">
        <div className="container-luxury">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.3em] mb-4">Can't decide?</p>
          <h2 id="collections-cta" className="font-display text-3xl md:text-4xl text-[#F5EFE0] mb-6">
            Let Us Help You Find Your Perfect Look
          </h2>
          <Link href="/appointment" className="btn-gold text-xs">
            Book a Private Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
