"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const allProducts = [
  { name: "Crimson Zardozi Lehenga", price: "₹2,85,000", category: "Bridal", image: "/images/product-1.jpg", slug: "crimson-zardozi-lehenga" },
  { name: "Ivory Pearl Sherwani", price: "₹1,45,000", category: "Groom", image: "/images/product-2.jpg", slug: "ivory-pearl-sherwani" },
  { name: "Midnight Velvet Gown", price: "₹95,000", category: "Cocktail", image: "/images/product-3.jpg", slug: "midnight-velvet-gown" },
  { name: "Blush Chikankari Lehenga", price: "₹3,20,000", category: "Bridal", image: "/images/product-4.jpg", slug: "blush-chikankari-lehenga" },
  { name: "Royal Blue Bandhgala", price: "₹1,20,000", category: "Groom", image: "/images/product-5.jpg", slug: "royal-blue-bandhgala" },
  { name: "Gold Tissue Saree", price: "₹75,000", category: "Resort", image: "/images/product-6.jpg", slug: "gold-tissue-saree" },
  { name: "Emerald Gotta-Patti Lehenga", price: "₹2,60,000", category: "Bridal", image: "/images/product-7.jpg", slug: "emerald-gotta-patti-lehenga" },
  { name: "Dusty Rose Anarkali", price: "₹85,000", category: "Cocktail", image: "/images/product-8.jpg", slug: "dusty-rose-anarkali" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = query.length > 1
    ? allProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="pt-20 min-h-screen bg-[#FDFAF5]">
      <div className="container-luxury py-16">
        <h1 className="font-display text-4xl text-[#1A1A1A] mb-10 text-center">Search</h1>

        <div className="max-w-xl mx-auto mb-12">
          <label htmlFor="search-input" className="sr-only">Search products</label>
          <div className="relative">
            <input
              id="search-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for lehengas, sherwanis, gowns..."
              autoFocus
              className="w-full border-b-2 border-[#C4974A] bg-transparent px-4 py-4 font-body text-lg text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C4974A]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </div>
        </div>

        {query.length > 1 && (
          <div>
            <p className="font-body text-sm text-[#6B6B6B] mb-8 text-center">
              {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
            </p>
            {results.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {results.map((product) => (
                  <div key={product.slug} className="group">
                    <Link href={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-[#F5EFE0] mb-3">
                        <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
                      </div>
                    </Link>
                    <p className="font-label text-[9px] text-[#6B6B6B] tracking-[0.2em] mb-1">{product.category}</p>
                    <h3 className="font-display text-base text-[#1A1A1A]">{product.name}</h3>
                    <p className="font-body text-sm text-[#6B6B6B] mt-0.5">{product.price}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-display text-2xl text-[#1A1A1A] mb-4">No results found</p>
                <p className="font-body text-[#6B6B6B] mb-8">Try a different search term or browse our collections.</p>
                <Link href="/collections" className="btn-gold text-xs">Browse Collections</Link>
              </div>
            )}
          </div>
        )}

        {query.length === 0 && (
          <div className="text-center py-8">
            <p className="font-body text-[#6B6B6B]">Start typing to search our collection.</p>
          </div>
        )}
      </div>
    </div>
  );
}
