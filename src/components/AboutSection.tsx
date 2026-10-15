"use client";

import Image from "next/image";
import { Heart, Users, Clock, MessageSquare } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Story Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A15A] block">
              {t.about.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#203A5B] leading-tight">
              {t.about.title}
            </h2>
            <p className="text-sm sm:text-base text-[#667386] leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-sm sm:text-base text-[#667386] leading-relaxed">
              {t.about.p2}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#DCEAF7]">
                <div className="flex items-center gap-2 text-[#203A5B] font-semibold text-sm mb-1">
                  <Users className="w-4 h-4 text-[#C5A15A]" />
                  <span>{t.about.fittingsTitle}</span>
                </div>
                <p className="text-xs text-[#667386]">
                  {t.about.fittingsDesc}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#DCEAF7]">
                <div className="flex items-center gap-2 text-[#203A5B] font-semibold text-sm mb-1">
                  <Clock className="w-4 h-4 text-[#C5A15A]" />
                  <span>{t.about.pickupTitle}</span>
                </div>
                <p className="text-xs text-[#667386]">
                  {t.about.pickupDesc}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/15126799240?text=${encodeURIComponent(t.whatsapp.generalMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                {t.about.btnWhatsapp}
              </a>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-[#DCEAF7] shadow-xl">
              <Image
                src="/catalog/Gemini_Generated_Image_2wsba02wsba02wsb.jpg"
                alt="Seamstress measuring and tailoring garments at King's Alterations Austin"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#203A5B]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-[#E5D2A6] mb-2 border border-white/20">
                  <Heart className="w-3.5 h-3.5 text-[#E5D2A6]" />
                  {t.about.quoteBadge}
                </span>
                <p className="text-sm font-medium text-white/90">
                  &ldquo;{t.about.quote}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
