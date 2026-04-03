"use client";

export default function VirtualConsultationForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()} aria-label="Virtual consultation booking form">
      <div>
        <label htmlFor="vc-name" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Full Name *</label>
        <input id="vc-name" type="text" required placeholder="Your name" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors" />
      </div>
      <div>
        <label htmlFor="vc-email" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Email Address *</label>
        <input id="vc-email" type="email" required placeholder="your@email.com" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors" />
      </div>
      <div>
        <label htmlFor="vc-phone" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Phone / WhatsApp *</label>
        <input id="vc-phone" type="tel" required placeholder="+91 or international number" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors" />
      </div>
      <div>
        <label htmlFor="vc-country" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Country / Time Zone</label>
        <input id="vc-country" type="text" placeholder="e.g. India (IST), UK (GMT)" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors" />
      </div>
      <div>
        <label htmlFor="vc-date" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Preferred Date *</label>
        <input id="vc-date" type="date" required className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4974A] transition-colors" />
      </div>
      <div>
        <label htmlFor="vc-occasion" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">What are you looking for?</label>
        <select id="vc-occasion" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4974A] transition-colors">
          <option>Bridal Lehenga</option>
          <option>Groom&apos;s Wear</option>
          <option>Cocktail / Reception</option>
          <option>Bridesmaids</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="vc-message" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Tell us about your vision</label>
        <textarea id="vc-message" rows={4} placeholder="Wedding date, colour preferences, inspiration..." className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors resize-none" />
      </div>
      <button type="submit" className="btn-gold w-full text-xs py-4">Book Virtual Consultation</button>
    </form>
  );
}
