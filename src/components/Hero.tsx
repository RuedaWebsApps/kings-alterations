"use client";

import Image from "next/image";
import { Scissors, CheckCircle, ArrowRight, MessageSquare, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#DCEAF7]/30 via-[#FCFAF6] to-[#FCFAF6] pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DCEAF7]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 left-1/4 w-80 h-80 bg-[#E5D2A6]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B7D0E8]/30 border border-[#B7D0E8] text-[#203A5B] text-xs font-semibold tracking-wide uppercase">
              <Scissors className="w-3.5 h-3.5 text-[#C5A15A]" />
              {t.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#203A5B] tracking-tight leading-[1.15]">
              {t.hero.titleStart} <br />
              <span className="text-[#C5A15A] italic font-normal">
                {t.hero.titleAccent}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#667386] max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Quick highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-[#263447]">
                <CheckCircle className="w-4 h-4 text-[#C5A15A] shrink-0" />
                <span>{t.hero.walkIns}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#263447]">
                <CheckCircle className="w-4 h-4 text-[#C5A15A] shrink-0" />
                <span>{t.hero.turnaround}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#263447]">
                <CheckCircle className="w-4 h-4 text-[#C5A15A] shrink-0" />
                <span>{t.hero.express}</span>
              </div>
            </div>

            {/* Direct CTA buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={`https://wa.me/15126799240?text=${encodeURIComponent(t.whatsapp.generalMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] font-semibold text-base shadow-lg shadow-[#25D366]/20 hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5" />
                {t.hero.chatWhatsapp}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#catalog"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#203A5B] text-[#203A5B] hover:bg-[#DCEAF7]/50 font-semibold text-base transition-all"
              >
                {t.hero.exploreCatalog}
              </a>

              <a
                href="tel:5126799240"
                className="flex items-center gap-2 px-5 py-3.5 text-[#203A5B] hover:text-[#C5A15A] font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A15A]" />
                (512) 679-9240
              </a>
            </div>
          </div>

          {/* Image composition Right Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#B7D0E8] to-[#E5D2A6] rounded-3xl opacity-50 blur-lg transform -rotate-1" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#DCEAF7] aspect-[4/5]">
                <Image
                  src="/catalog/Gemini_Generated_Image_12tdat12tdat12td.jpg"
                  alt="High quality tailoring craftsmanship at King's Alterations Austin"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FCFAF6]/90 backdrop-blur-md rounded-xl p-3 border border-[#DCEAF7]/80 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#203A5B]">{t.hero.familyBadge}</p>
                      <p className="text-[11px] text-[#667386]">{t.hero.oakHillBadge}</p>
                    </div>
                    <span className="text-[11px] font-bold text-[#C5A15A] bg-[#FCFAF6] px-2 py-0.5 rounded border border-[#E5D2A6]">
                      {t.hero.topRated}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
