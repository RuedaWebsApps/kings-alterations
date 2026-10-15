"use client";

import { Check, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { CatalogImage } from "@/components/CatalogImage";

const ABOUT_PHOTO_ID = "ka-022";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-mist bg-ivory py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-ink">{t.about.eyebrow}</p>
          <h2 id="about-title" className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
            {t.about.title}
          </h2>
          <div aria-hidden className="mt-4 h-0.5 w-14 bg-gold" />
          <p className="mt-5 text-base leading-relaxed text-muted">{t.about.p1}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{t.about.p2}</p>

          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              [t.about.walkIns, t.about.walkInsText],
              [t.about.ready, t.about.readyText],
            ].map(([title, text]) => (
              <div key={title} className="border-l-2 border-gold pl-4">
                <dt className="flex items-center gap-2 font-semibold text-navy">
                  <Check aria-hidden className="h-4 w-4 text-gold-ink" />
                  {title}
                </dt>
                <dd className="mt-1 text-sm text-muted">{text}</dd>
              </div>
            ))}
          </dl>

          <a
            href={waLink(t.wa.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-wa px-7 text-sm font-semibold text-white transition-colors hover:bg-wa-dark"
          >
            <MessageCircle aria-hidden className="h-4 w-4" />
            {t.about.cta}
          </a>
        </div>

        <figure className="mx-auto w-full max-w-sm lg:max-w-md lg:justify-self-end">
          <div className="overflow-hidden rounded-md border border-mist-deep bg-white">
            <CatalogImage id={ABOUT_PHOTO_ID} alt="Sample photo: navy blazer" width={640} height={795} sizes="(min-width:1024px) 448px, 90vw" className="aspect-[4/5] w-full object-cover object-top" />
          </div>
          <figcaption className="mt-2 text-center text-xs text-muted">{t.about.imageCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
