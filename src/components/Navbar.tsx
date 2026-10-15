"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, Menu, X, MessageSquare, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "es" : "en");
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCFAF6]/95 backdrop-blur-md border-b border-[#DCEAF7] transition-all">
      {/* Top micro bar for quick shop details */}
      <div className="bg-[#203A5B] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="w-3.5 h-3.5 text-[#E5D2A6]" />
              {t.nav.address}
            </span>
            <span className="hidden md:flex items-center gap-1.5 opacity-90">
              <Clock className="w-3.5 h-3.5 text-[#E5D2A6]" />
              {t.nav.hours}
            </span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <a
              href="tel:5126799240"
              className="flex items-center gap-1.5 hover:text-[#E5D2A6] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (512) 679-9240
            </a>
            <span className="text-white/40">|</span>
            <span className="text-[#E5D2A6] font-semibold">{t.nav.walkIns}</span>
            <span className="text-white/40">|</span>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 hover:bg-[#C5A15A] hover:text-[#203A5B] transition-colors font-bold text-[11px] cursor-pointer"
              aria-label="Switch Language"
            >
              <Globe className="w-3 h-3" />
              {locale === "en" ? "ES" : "EN"}
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo official */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-36 h-14 md:w-44 md:h-16">
              <Image
                src="/logo-king-alterations.png"
                alt="King's Alterations - Tailoring & Custom Garments Austin TX"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8 text-[#263447] font-medium text-sm">
            <a href="#catalog" className="hover:text-[#C5A15A] transition-colors">
              {t.nav.catalog}
            </a>
            <a href="#services" className="hover:text-[#C5A15A] transition-colors">
              {t.nav.services}
            </a>
            <a href="#about" className="hover:text-[#C5A15A] transition-colors">
              {t.nav.about}
            </a>
            <a href="#faq" className="hover:text-[#C5A15A] transition-colors">
              {t.nav.faq}
            </a>
            <a href="#location" className="hover:text-[#C5A15A] transition-colors">
              {t.nav.location}
            </a>
          </nav>

          {/* Quick Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#B7D0E8] text-[#203A5B] hover:bg-[#DCEAF7] font-semibold text-xs transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#C5A15A]" />
              <span>{locale === "en" ? "Español" : "English"}</span>
            </button>

            <a
              href="tel:5126799240"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#203A5B] text-[#203A5B] hover:bg-[#DCEAF7]/50 font-semibold text-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              {t.nav.callShop}
            </a>
            <a
              href={`https://wa.me/15126799240?text=${encodeURIComponent(t.whatsapp.generalMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] font-semibold text-xs shadow-sm transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              {t.nav.whatsapp}
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded bg-[#DCEAF7] text-[#203A5B] text-xs font-bold"
            >
              {locale === "en" ? "ES" : "EN"}
            </button>
            <a
              href="tel:5126799240"
              className="p-2 rounded-lg bg-[#203A5B] text-white"
              aria-label="Call shop"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#203A5B] focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FCFAF6] border-b border-[#DCEAF7] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#catalog"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-[#263447] hover:text-[#C5A15A]"
          >
            {t.nav.catalog}
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-[#263447] hover:text-[#C5A15A]"
          >
            {t.nav.services}
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-[#263447] hover:text-[#C5A15A]"
          >
            {t.nav.about}
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-[#263447] hover:text-[#C5A15A]"
          >
            {t.nav.faq}
          </a>
          <a
            href="#location"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-[#263447] hover:text-[#C5A15A]"
          >
            {t.nav.location}
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/15126799240?text=${encodeURIComponent(t.whatsapp.generalMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              {t.hero.chatWhatsapp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
