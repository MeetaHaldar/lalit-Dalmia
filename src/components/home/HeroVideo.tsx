"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function HeroVideo() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setMuted((m) => {
      if (videoRef.current) videoRef.current.muted = !m;
      return !m;
    });
  };

  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      aria-label="Hero — Lalit Dalmia Bridal Couture"
    >
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/header.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.35) 55%, rgba(10,10,10,0.2) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p
          className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-6"
          style={{ animation: "fadeUp 0.8s 0.4s both" }}
        >
          LUXURY BRIDAL COUTURE · DELHI
        </p>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5EFE0] leading-none mb-6"
          style={{ animation: "fadeUp 0.8s 0.7s both" }}
        >
          LALIT DALMIA
        </h1>

        <p
          className="font-display italic text-xl md:text-2xl text-[#E8C07A] mb-10"
          style={{ animation: "fadeUp 0.8s 1s both" }}
        >
          Every bride deserves to look like a princess
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4"
          style={{ animation: "fadeUp 0.8s 1.3s both" }}
        >
          <Link href="/appointment" className="btn-gold text-xs px-10 py-4">
            Book Your Consultation
          </Link>
          <Link
            href="/collections"
            className="font-label text-xs tracking-[0.2em] text-[#F5EFE0] border border-[#F5EFE0]/40 px-10 py-4 hover:border-[#C4974A] hover:text-[#C4974A] transition-all duration-300"
          >
            Explore Collections
          </Link>
        </div>
      </div>

      {/* Mute toggle */}
      <button
        onClick={toggleMute}
        className="absolute top-24 right-6 z-10 text-[#F5EFE0]/70 hover:text-[#C4974A] transition-colors p-2"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? <MuteIcon /> : <UnmuteIcon />}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span className="font-label text-[10px] text-[#F5EFE0]/50 tracking-[0.3em]">SCROLL</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-[#C4974A]">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="7" r="2" fill="currentColor" style={{ animation: "scrollDot 1.5s ease-in-out infinite" }} />
        </svg>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0);   opacity: 1; }
          50%       { transform: translateY(8px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}

function MuteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function UnmuteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}
