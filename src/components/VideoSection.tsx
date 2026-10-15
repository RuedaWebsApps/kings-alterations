"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { INTRO_VIDEO } from "@/config/media";
import { SectionHeading } from "@/components/SectionHeading";

/**
 * Nothing video-related is downloaded until the visitor presses play: only a small WebP poster loads.
 * Phones get the vertical file, tablets and desktops the horizontal one.
 */
export function VideoSection() {
  const { t } = useI18n();
  const [src, setSrc] = useState<string | null>(null);

  const start = () => {
    const wide = window.matchMedia(INTRO_VIDEO.desktopMediaQuery).matches;
    setSrc(wide ? INTRO_VIDEO.desktop.src : INTRO_VIDEO.mobile.src);
  };

  return (
    <section aria-labelledby="video-title" className="border-y border-mist bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.video.eyebrow} title={t.video.title} subtitle={t.video.subtitle} id="video-title" />

        <div className="relative mx-auto aspect-[9/16] w-full max-w-[22rem] overflow-hidden rounded-md bg-navy md:aspect-video md:max-w-none">
          {src ? (
            <video
              key={src}
              src={src}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="h-full w-full bg-navy object-contain"
            >
              {t.video.unsupported}
            </video>
          ) : (
            <button type="button" onClick={start} aria-label={t.video.play} className="group absolute inset-0 block h-full w-full cursor-pointer">
              <picture>
                <source media={INTRO_VIDEO.desktopMediaQuery} srcSet={INTRO_VIDEO.desktop.poster} />
                <img
                  src={INTRO_VIDEO.mobile.poster}
                  alt=""
                  width={INTRO_VIDEO.mobile.width}
                  height={INTRO_VIDEO.mobile.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </picture>
              <span className="absolute inset-0 bg-navy/25 transition-colors group-hover:bg-navy/10" />
              <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-navy shadow-lg transition-transform group-hover:scale-105">
                <Play aria-hidden className="ml-1 h-8 w-8 fill-current" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
