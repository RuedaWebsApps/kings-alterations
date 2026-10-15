"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { INTRO_VIDEO } from "@/config/media";
import { useI18n } from "@/lib/i18n";

export function SplashLoader({ onComplete }: { onComplete: () => void }) {
  const [isClosing, setIsClosing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { locale } = useI18n();

  const handleComplete = useCallback(() => {
    setIsClosing((prev) => {
      if (!prev) {
        setTimeout(onComplete, 600);
        return true;
      }
      return prev;
    });
  }, [onComplete]);

  useEffect(() => {
    // Fallback timer (auto complete if video ends or takes too long)
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, 10500);

    return () => clearTimeout(fallbackTimer);
  }, [handleComplete]);

  const skipText = locale === "es" ? "Saltar Intro" : "Skip Intro";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-600 ${
        isClosing ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Official King's Alterations Logo on black background at top left (matching Loba Fashion) */}
      <div className="absolute top-6 left-6 z-[10001] md:top-8 md:left-8">
        <Image
          src="/logo-king-alterations-web.png"
          alt="King's Alterations"
          width={180}
          height={65}
          className="h-10 md:h-12 w-auto object-contain brightness-0 invert drop-shadow-md"
          priority
        />
      </div>

      {/* Main Video presentation responsive with HTML5 source media tags */}
      <div className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center p-2 sm:p-4">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          onEnded={handleComplete}
          className="w-full h-full object-contain"
        >
          {/* Serves horizontal video on desktop/tablet, vertical video on phones natively */}
          <source src={INTRO_VIDEO.desktop.src} media={INTRO_VIDEO.desktopMediaQuery} type="video/mp4" />
          <source src={INTRO_VIDEO.mobile.src} type="video/mp4" />
        </video>
      </div>

      {/* Skip Button (Bottom right) */}
      <button
        type="button"
        onClick={handleComplete}
        className="absolute bottom-8 right-6 md:bottom-8 md:right-8 z-[10001] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full transition-all cursor-pointer shadow-lg tracking-wide uppercase"
      >
        {skipText} &rarr;
      </button>
    </div>
  );
}
