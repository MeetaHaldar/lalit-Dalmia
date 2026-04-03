"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

import { productImages } from "@/lib/images";

const products = [
  { id: 1, name: "Crimson Zardozi Lehenga", price: "₹2,85,000", category: "Bridal", image: productImages[0], badge: "Bestseller", slug: "crimson-zardozi-lehenga" },
  { id: 2, name: "Ivory Pearl Sherwani", price: "₹1,45,000", category: "Groom", image: productImages[1], badge: "New", slug: "ivory-pearl-sherwani" },
  { id: 3, name: "Midnight Velvet Gown", price: "₹95,000", category: "Cocktail", image: productImages[2], badge: "Limited", slug: "midnight-velvet-gown" },
  { id: 4, name: "Blush Chikankari Lehenga", price: "₹3,20,000", category: "Bridal", image: productImages[3], badge: "Bestseller", slug: "blush-chikankari-lehenga" },
  { id: 5, name: "Royal Blue Bandhgala", price: "₹1,20,000", category: "Groom", image: productImages[4], badge: "New", slug: "royal-blue-bandhgala" },
  { id: 6, name: "Gold Tissue Saree", price: "₹75,000", category: "Resort", image: productImages[5], badge: null, slug: "gold-tissue-saree" },
  { id: 7, name: "Emerald Gotta-Patti Lehenga", price: "₹2,60,000", category: "Bridal", image: productImages[6], badge: "Limited", slug: "emerald-gotta-patti-lehenga" },
  { id: 8, name: "Dusty Rose Anarkali", price: "₹85,000", category: "Cocktail", image: productImages[7], badge: "New", slug: "dusty-rose-anarkali" },
];

const badgeColors: Record<string, string> = {
  Bestseller: "bg-[#5C0E1E] text-[#F5DEB3]",
  New:        "bg-[#B8860B] text-[#FDF6E3]",
  Limited:    "bg-[#7B1C2E] text-[#F5DEB3]",
};

export default function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-[#FDF6E3]" aria-labelledby="featured-heading">
      <div className="container-luxury">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-label text-xs text-[#B8860B] mb-3">Handpicked for You</p>
            <h2 id="featured-heading" className="font-display text-4xl md:text-5xl text-[#2A0A10]">
              Current Obsessions
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-[#C4974A]/40 flex items-center justify-center hover:border-[#C4974A] hover:text-[#C4974A] transition-all duration-300"
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-[#C4974A]/40 flex items-center justify-center hover:border-[#C4974A] hover:text-[#C4974A] transition-all duration-300"
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-64 md:w-72 snap-start group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F5DEB3]/20 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badge */}
                {product.badge && (
                  <span className={`absolute top-3 left-3 font-label text-[9px] tracking-[0.15em] px-2 py-1 ${badgeColors[product.badge]}`}>
                    {product.badge}
                  </span>
                )}

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                  aria-label={wishlist.includes(product.id) ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
                >
                  <svg
                    width="14" height="14" viewBox="0 0 24 24"
                    fill={wishlist.includes(product.id) ? "#6B1A2A" : "none"}
                    stroke={wishlist.includes(product.id) ? "#6B1A2A" : "#1A1A1A"}
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>

                {/* Quick View overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-[#1A1A1A]/90 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Link
                    href={`/product/${product.slug}`}
                    className="font-label text-[10px] text-[#C4974A] tracking-[0.2em] flex items-center justify-center gap-2"
                  >
                    Quick View
                  </Link>
                </div>
              </div>

              <div>
                <p className="font-label text-[9px] text-[#6B6B6B] tracking-[0.2em] mb-1">{product.category}</p>
                <h3 className="font-display text-lg text-[#1A1A1A] mb-1">{product.name}</h3>
                <p className="font-body text-sm text-[#6B6B6B]">{product.price}</p>
                <Link
                  href={`/product/${product.slug}`}
                  className="mt-3 w-full btn-gold text-[10px] py-2.5 block text-center"
                  aria-label={`Add ${product.name} to bag`}
                >
                  Add to Bag
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/collections" className="btn-gold text-xs">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
