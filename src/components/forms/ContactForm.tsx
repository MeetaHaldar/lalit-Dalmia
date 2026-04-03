"use client";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Name *</label>
          <input id="contact-name" type="text" required placeholder="Your name" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors" />
        </div>
        <div>
          <label htmlFor="contact-phone" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Phone</label>
          <input id="contact-phone" type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors" />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Email *</label>
        <input id="contact-email" type="email" required placeholder="your@email.com" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors" />
      </div>
      <div>
        <label htmlFor="contact-subject" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Subject</label>
        <select id="contact-subject" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4974A] transition-colors">
          <option>Bridal Enquiry</option>
          <option>Appointment Request</option>
          <option>Order Status</option>
          <option>Press &amp; Media</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2">Message *</label>
        <textarea id="contact-message" rows={5} required placeholder="How can we help you?" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors resize-none" />
      </div>
      <button type="submit" className="btn-gold w-full text-xs py-4">Send Message</button>
    </form>
  );
}
