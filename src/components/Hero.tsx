"use client";

import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE, telLink, waLink } from "@/lib/site";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative bg-ivory">
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[42%] bg-mist/60 lg:block" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="animate-rise text-center lg:col-span-7 lg:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-ink">{t.hero.eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
            {t.hero.title1}
            <span className="block italic text-gold-ink">{t.hero.title2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">{t.hero.subtitle}</p>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink lg:justify-start">
            {t.hero.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check aria-hidden className="h-4 w-4 text-gold-ink" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <a
              href="#catalog"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-7 text-base font-semibold text-white transition-colors hover:bg-ink"
            >
              {t.hero.explore}
              <ArrowRight aria-hidden className="h-4 w-4" />
            </a>
            <a
              href={telLink}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-navy px-7 text-base font-semibold text-navy transition-colors hover:bg-mist"
            >
              <Phone aria-hidden className="h-4 w-4" />
              {t.hero.call}
            </a>
            <a
              href={waLink(t.wa.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-wa px-7 text-base font-semibold text-white transition-colors hover:bg-wa-dark"
            >
              <MessageCircle aria-hidden className="h-4 w-4" />
              {t.hero.whatsapp}
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            {SITE.street}, {SITE.city}, {SITE.region} {SITE.postalCode}
          </p>
        </div>

        <figure className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md">
          <div className="overflow-hidden rounded-xl border border-mist-deep bg-white shadow-lg transition-transform duration-300 hover:shadow-xl">
            <img
              src="/images/hero-kin-640.webp"
              srcSet="/images/hero-kin-640.webp 640w, /images/hero-kin-1280.webp 1280w"
              sizes="(min-width: 1024px) 448px, 90vw"
              width={640}
              height={795}
              alt="King's Alterations Bridal & Beyond - Your Dream Dress, Perfected"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-muted">{t.hero.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
