"use client";

import { MessageCircle } from "lucide-react";
import { SERVICE_GROUPS } from "@/data/services";
import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";

export function ServicesSection() {
  const { t, locale } = useI18n();

  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-mist bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} id="services-title" />

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_GROUPS.map((g, n) => (
            <article key={g.id} className="flex flex-col border-t-2 border-gold pt-5">
              <p className="font-display text-sm text-gold-ink" aria-hidden>
                {String(n + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold leading-snug text-navy">{g.title[locale]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{g.intro[locale]}</p>
              <ul className="mt-4 space-y-2 text-[0.95rem] text-ink">
                {g.items[locale].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(t.services.waAbout(g.title[locale]))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-5 text-sm font-semibold text-wa hover:text-wa-dark"
              >
                <MessageCircle aria-hidden className="h-4 w-4" />
                {t.services.ask}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
