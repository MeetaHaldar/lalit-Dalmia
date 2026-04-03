import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";

export default function AppointmentTeaser() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="appointment-teaser-heading">
      {/* Background image */}
      <Image
        src={images.appointmentBg}
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* Rich layered overlay — deep burgundy-to-black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,4,8,0.92) 0%, rgba(61,10,20,0.88) 40%, rgba(10,4,8,0.95) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Gold shimmer top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C4974A, #E8C07A, #C4974A, transparent)" }}
        aria-hidden="true"
      />
      {/* Gold shimmer bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C4974A, #E8C07A, #C4974A, transparent)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative py-28 container-luxury text-center">

        {/* Ornamental top */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-[#C4974A]/50" />
          <span className="text-[#C4974A] text-sm tracking-[0.5em]">◆ ◆ ◆</span>
          <div className="h-px w-16 bg-[#C4974A]/50" />
        </div>

        <p
          className="font-label text-xs text-[#C4974A] tracking-[0.5em] mb-6 uppercase"
          style={{ letterSpacing: "0.5em" }}
        >
          Private Consultations
        </p>

        <h2
          id="appointment-teaser-heading"
          className="font-display text-5xl md:text-7xl text-[#F5EFE0] mb-4 leading-tight"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontStyle: "italic" }}
        >
          Your Dream Bridal
          <br />
          <span style={{ color: "#E8C07A" }}>Look Awaits</span>
        </h2>

        {/* Gold rule */}
        <div className="flex items-center justify-center gap-3 my-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#C4974A]" />
          <span className="text-[#C4974A] text-xs">◆</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#C4974A]" />
        </div>

        <p
          className="font-body text-[#F5EFE0]/75 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1.2rem" }}
        >
          Book a private consultation at our flagship stores in Pitampura or Chandni Chowk,
          or connect with us virtually from anywhere in the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <Link
            href="/appointment"
            className="btn-gold text-xs px-12 py-4"
            style={{ letterSpacing: "0.25em" }}
          >
            In-Store Consultation
          </Link>
          <Link
            href="/virtual-consultation"
            className="font-label text-xs tracking-[0.25em] text-[#E8C07A] border border-[#C4974A]/60 px-12 py-4 hover:border-[#E8C07A] hover:bg-[#C4974A]/10 transition-all duration-300"
          >
            Virtual Consultation
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {[
            { label: "20+",   sub: "Years of Couture" },
            { label: "5000+", sub: "Happy Brides" },
            { label: "2",     sub: "Flagship Stores" },
            { label: "30–60", sub: "Days Made to Order" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p
                className="font-display text-4xl"
                style={{ color: "#E8C07A", fontFamily: "Cormorant Garamond, Georgia, serif" }}
              >
                {item.label}
              </p>
              <p className="font-label text-[9px] text-[#F5EFE0]/45 tracking-[0.3em] mt-1 uppercase">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Ornamental bottom */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="h-px w-16 bg-[#C4974A]/50" />
          <span className="text-[#C4974A] text-sm tracking-[0.5em]">◆ ◆ ◆</span>
          <div className="h-px w-16 bg-[#C4974A]/50" />
        </div>
      </div>
    </section>
  );
}
