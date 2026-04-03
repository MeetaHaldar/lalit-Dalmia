"use client";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FDFAF5]">
      <div className="container-luxury py-20 text-center">
        <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Your Selection</p>
        <h1 className="font-display text-5xl text-[#1A1A1A] mb-6">Your Bag</h1>
        <div className="gold-divider" />
        <div className="py-16">
          <svg className="mx-auto mb-6 text-[#C4974A]/30" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <p className="font-display text-2xl text-[#1A1A1A] mb-3">Your bag is empty</p>
          <p className="font-body text-[#6B6B6B] mb-4">All our pieces are made-to-order.</p>
          <p className="font-body text-[#6B6B6B] mb-10">Book a consultation to begin your bespoke journey.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="btn-gold text-xs">Book a Consultation</Link>
            <Link href="/collections" className="font-label text-xs tracking-[0.2em] text-[#1A1A1A] border border-[#1A1A1A]/30 px-10 py-4 hover:border-[#C4974A] hover:text-[#C4974A] transition-all duration-300">
              Browse Collections
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
