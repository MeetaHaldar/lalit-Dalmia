"use client";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";
import { useRef, useEffect, useState } from "react";

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-[#F5EFE0]" aria-labelledby="philosophy-heading">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

          {/* Left text */}
          <div className={`flex flex-col justify-center transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <p className="font-label text-xs text-[#C4974A] tracking-[0.3em] mb-6">The Philosophy</p>
            <blockquote>
              <p className="font-display italic text-2xl md:text-3xl text-[#1A1A1A] leading-snug mb-6">
                &ldquo;Clothes with an international styling with an Indian soul&rdquo;
              </p>
            </blockquote>
            <div className="gold-divider-left" />
            <p className="font-body text-[#6B6B6B] leading-relaxed text-sm">
              For over two decades, Lalit Dalmia has been weaving stories of love, heritage, and artistry into every creation. Born from a deep reverence for India&apos;s textile traditions and shaped by a global design sensibility, each piece is a bridge between worlds.
            </p>
          </div>

          {/* Centre image */}
          <div className={`relative aspect-[3/4] overflow-hidden transition-all duration-1000 delay-150 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <Image src={images.philosophy} alt="The Philosophy of Indian Couture" fill className="object-cover" />
            <div className="absolute inset-4 border border-[#C4974A]/30 pointer-events-none" aria-hidden="true" />
          </div>

          {/* Right text */}
          <div className={`flex flex-col justify-center transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <p className="font-body text-[#6B6B6B] leading-relaxed text-sm mb-10">
              From the zardozi ateliers of Old Delhi to the runways of Lakme Fashion Week — every stitch carries the weight of a thousand years of craft, reimagined for the modern bride.
            </p>
            <div className="flex flex-col gap-4">
              <Link href="/about" className="btn-gold text-xs self-start">Meet the Designer</Link>
              <Link href="/atelier" className="font-label text-xs tracking-[0.2em] text-[#C4974A] flex items-center gap-2 hover:gap-4 transition-all duration-300">
                The Atelier
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
