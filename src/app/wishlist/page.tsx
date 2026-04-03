"use client";
import Link from "next/link";

export default function WishlistPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FDFAF5]">
      <div className="container-luxury py-20 text-center">
        <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Your Saved Pieces</p>
        <h1 className="font-display text-5xl text-[#1A1A1A] mb-6">Wishlist</h1>
        <div className="gold-divider" />
        <div className="py-16">
          <svg className="mx-auto mb-6 text-[#C4974A]/30" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <p className="font-display text-2xl text-[#1A1A1A] mb-3">Your wishlist is empty</p>
          <p className="font-body text-[#6B6B6B] mb-10">Save pieces you love by clicking the heart icon on any product.</p>
          <Link href="/collections" className="btn-gold text-xs">Explore Collections</Link>
        </div>
      </div>
    </div>
  );
}
