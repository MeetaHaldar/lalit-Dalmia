"use client";

export default function AppointmentForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()} aria-label="Appointment booking form">
      <div>
        <label htmlFor="appt-name" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Full Name *</label>
        <input id="appt-name" type="text" required placeholder="Your name" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors" />
      </div>
      <div>
        <label htmlFor="appt-phone" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Phone Number *</label>
        <input id="appt-phone" type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors" />
      </div>
      <div>
        <label htmlFor="appt-email" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Email Address</label>
        <input id="appt-email" type="email" placeholder="your@email.com" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors" />
      </div>
      <div>
        <label htmlFor="appt-store" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Preferred Store *</label>
        <select id="appt-store" required className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4974A] transition-colors">
          <option value="">Select a store</option>
          <option>Pitampura, Delhi</option>
          <option>Chandni Chowk, Delhi</option>
        </select>
      </div>
      <div>
        <label htmlFor="appt-date" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Preferred Date *</label>
        <input id="appt-date" type="date" required className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4974A] transition-colors" />
      </div>
      <div>
        <label htmlFor="appt-occasion" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Occasion</label>
        <select id="appt-occasion" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4974A] transition-colors">
          <option value="">Select occasion</option>
          <option>Bridal Lehenga</option>
          <option>Groom&apos;s Wear</option>
          <option>Cocktail / Reception</option>
          <option>Mehendi / Sangeet</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="appt-message" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Message</label>
        <textarea id="appt-message" rows={3} placeholder="Tell us about your vision..." className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors resize-none" />
      </div>
      <button type="submit" className="btn-gold w-full text-xs py-4">Request Appointment</button>
      <p className="font-body text-xs text-[#6B6B6B] text-center">We&apos;ll confirm your appointment within 24 hours.</p>
    </form>
  );
}
