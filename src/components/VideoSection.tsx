"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Scissors } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useI18n();

  return (
    <section className="py-16 bg-[#FCFAF6] border-y border-[#DCEAF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEAF7] text-[#203A5B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A15A]" />
            {t.video.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#203A5B]">
            {t.video.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#667386]">
            {t.video.subtitle}
          </p>
        </div>

        {/* Responsive Video Container:
            - Desktop/Tablet (md and up): Uses 16:9 aspect ratio and kings-intro-desktop.mp4
            - Mobile (under md): Uses vertical 9:16 mobile framing and kings-intro-mobile.mp4
        */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DCEAF7] bg-[#203A5B] mx-auto max-w-xs md:max-w-5xl aspect-[9/16] md:aspect-[16/9]">
          {/* Mobile Video element */}
          <div className="block md:hidden w-full h-full relative">
            <video
              src="/kings-intro-mobile.mp4"
              poster="/catalog/Gemini_Generated_Image_1eh3o51eh3o51eh3.jpg"
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop/Tablet Video element */}
          <div className="hidden md:block w-full h-full relative">
            <video
              src="/kings-intro-desktop.mp4"
              poster="/catalog/Gemini_Generated_Image_1eh3o51eh3o51eh3.jpg"
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-[#667386] flex items-center justify-center gap-1.5">
            <Scissors className="w-3.5 h-3.5 text-[#C5A15A]" />
            {t.video.subtext}
          </p>
        </div>
      </div>
    </section>
  );
}
