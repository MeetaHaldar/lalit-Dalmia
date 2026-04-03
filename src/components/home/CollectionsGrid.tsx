"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { images } from "@/lib/images";

const collections = [
  { title: "Bridal Lehengas", subtitle: "The Bride's Canvas", summary: "Hand-embroidered couture for brides.", href: "/collections/bridal", span: "lg:col-span-2 lg:row-span-2", image: images.collectionBridal },
  { title: "Groom's Wear", subtitle: "Sherwanis & Bandhgalas", summary: "Regal looks for modern grooms.", href: "/collections/groom", span: "", image: images.collectionGroom },
  { title: "Cocktail & Gowns", subtitle: "Evening Elegance", summary: "Indo-western gowns for celebrations.", href: "/collections/cocktail", span: "", image: images.collectionCocktail },
  { title: "Resort Wear", subtitle: "Vacation Couture", summary: "Effortless luxury, destination ready.", href: "/collections/resort-wear", span: "", image: images.collectionResort },
];

export default function CollectionsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#FDFAF5] flex flex-col h-screen min-h-[600px] py-8 px-4 md:px-8" ref={sectionRef} aria-labelledby="collections-heading">
      <div className="flex flex-col h-full max-w-screen-xl mx-auto w-full">
        <div className="text-center mb-6 flex-none">
          <p className="font-label text-xs text-[#C4974A] mb-2">Curated for You</p>
          <h2 id="collections-heading" className="font-display text-3xl md:text-4xl text-[#1A1A1A]">
            The Collections
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 flex-1 min-h-0 lg:grid-rows-2">
          {collections.map((col, i) => (
            <Link
              key={col.href}
              href={col.href}
              className={`group flex flex-col ${col.span} ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } transition-all duration-700`}
              style={{ transitionDelay: `${i * 120}ms` }}
              aria-label={`View ${col.title} collection`}
            >
              {/* Image */}
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gold border on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#C4974A]/60 transition-all duration-500" />
              </div>

              {/* Text below image — equal horizontal padding */}
              <div className="px-4 py-3 bg-[#FDFAF5]">
                <p className="font-label text-[9px] text-[#C4974A] tracking-[0.3em] mb-1 uppercase">
                  {col.subtitle}
                </p>
                <h3 className="font-display text-lg text-[#1A1A1A] leading-tight">
                  {col.title}
                </h3>
                <p className="font-body text-[11px] text-[#6B6B6B] mt-1">{col.summary}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-4 flex-none">
          <Link href="/collections" className="btn-gold text-xs">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
