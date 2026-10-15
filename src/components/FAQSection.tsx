"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { FAQS } from "@/data/faq";
import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";

export function FAQSection() {
  const { t, locale } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-mist bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} id="faq-title" />

        <div className="divide-y divide-mist border-y border-mist">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-display text-lg font-semibold text-navy"
                  >
                    {f.q[locale]}
                    <ChevronDown aria-hidden className={`h-5 w-5 shrink-0 text-gold-ink transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen} className="pb-5 pr-9 text-base leading-relaxed text-muted">
                  {f.a[locale]}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="font-display text-lg font-semibold text-navy">{t.faq.helpTitle}</p>
          <p className="mt-1 text-sm text-muted">{t.faq.helpText}</p>
          <a
            href={waLink(t.wa.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-wa px-7 text-sm font-semibold text-white transition-colors hover:bg-wa-dark"
          >
            <MessageCircle aria-hidden className="h-4 w-4" />
            {t.faq.helpCta}
          </a>
        </div>
      </div>
    </section>
  );
}
