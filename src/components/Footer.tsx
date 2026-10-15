"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, MessageSquare, ArrowUp, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#203A5B] text-white pt-16 pb-12 border-t border-[#C5A15A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative w-44 h-16 bg-[#FCFAF6] p-2 rounded-xl">
              <Image
                src="/logo-king-alterations.png"
                alt="King's Alterations Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-xs text-[#B7D0E8] leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
            <p className="text-[11px] text-white/50">
              {t.footer.formerly}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E5D2A6]">
              {t.footer.explore}
            </h4>
            <ul className="space-y-2 text-xs text-[#B7D0E8]">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  {t.nav.catalog}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E5D2A6]">
              {t.footer.specialties}
            </h4>
            <ul className="space-y-1.5 text-xs text-[#B7D0E8]">
              <li>Bridal &amp; Formalwear Fitting</li>
              <li>Suits &amp; Tuxedo Tailoring</li>
              <li>Pants &amp; Jeans Hemming</li>
              <li>Zippers &amp; Seam Restorations</li>
              <li>Cosplay &amp; Creative Projects</li>
              <li>Uniforms &amp; Workwear</li>
              <li>Leather Goods &amp; Repairs</li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct WhatsApp */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E5D2A6]">
              {t.footer.contactDirectly}
            </h4>
            <div className="space-y-2 text-xs text-[#B7D0E8]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
                <span>7500 State Hwy 71 Suite 100, Austin, TX 78735</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A15A] shrink-0" />
                <a href="tel:5126799240" className="hover:text-white font-medium">
                  (512) 679-9240
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A15A] shrink-0" />
                <span>Mon-Fri 9-5 | Sat 9-3 | Sun Closed</span>
              </p>
            </div>

            <a
              href={`https://wa.me/15126799240?text=${encodeURIComponent(t.whatsapp.generalMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20bd5a] transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              {t.footer.chatWhatsapp}
            </a>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} King&apos;s Alterations. {t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px]">
              {t.footer.craftedWith} <Heart className="w-3 h-3 text-[#C5A15A] fill-[#C5A15A]" />
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-[#C5A15A] hover:text-[#203A5B] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
