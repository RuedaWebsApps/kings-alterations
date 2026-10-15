"use client";

import { Clock, ExternalLink, MapPin, MessageCircle, MessageSquareText, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE, mapsEmbedUrl, mapsUrl, smsLink, telLink, waLink } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";

export function LocationSection() {
  const { t } = useI18n();
  const btn = "flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors";

  return (
    <section id="location" aria-labelledby="location-title" className="border-t border-mist bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.location.eyebrow} title={t.location.title} subtitle={t.location.subtitle} id="location-title" />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-xl font-bold text-navy">{SITE.name}</p>
            <p className="text-xs text-muted">{t.location.formerly}</p>

            <dl className="mt-6 space-y-6">
              <div className="flex gap-4">
                <MapPin aria-hidden className="mt-1 h-5 w-5 shrink-0 text-gold-ink" />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted">{t.location.address}</dt>
                  <dd className="mt-1 text-base font-medium text-navy">
                    {SITE.street}
                    <br />
                    {SITE.city}, {SITE.region} {SITE.postalCode}
                    <span className="block text-sm font-normal text-muted">{SITE.area}</span>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock aria-hidden className="mt-1 h-5 w-5 shrink-0 text-gold-ink" />
                <div className="w-full">
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted">{t.location.hours}</dt>
                  <dd className="mt-1 max-w-xs space-y-1 text-sm text-navy">
                    <p className="flex justify-between"><span>{t.location.mon}</span><span className="font-semibold">9 AM – 5 PM</span></p>
                    <p className="flex justify-between"><span>{t.location.sat}</span><span className="font-semibold">9 AM – 3 PM</span></p>
                    <p className="flex justify-between"><span>{t.location.sun}</span><span className="font-semibold">{t.location.closed}</span></p>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone aria-hidden className="mt-1 h-5 w-5 shrink-0 text-gold-ink" />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted">{t.location.phone}</dt>
                  <dd className="mt-1">
                    <a href={telLink} className="text-lg font-bold text-navy hover:text-gold-ink">{SITE.phoneDisplay}</a>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a href={telLink} className={`${btn} bg-navy text-white hover:bg-ink`}>
                <Phone aria-hidden className="h-4 w-4" />
                {t.location.call}
              </a>
              <a href={waLink(t.wa.general)} target="_blank" rel="noopener noreferrer" className={`${btn} bg-wa text-white hover:bg-wa-dark`}>
                <MessageCircle aria-hidden className="h-4 w-4" />
                {t.location.whatsapp}
              </a>
              <a href={smsLink(t.wa.text)} className={`${btn} border border-navy text-navy hover:bg-mist`}>
                <MessageSquareText aria-hidden className="h-4 w-4" />
                {t.location.text}
              </a>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={`${btn} border border-navy text-navy hover:bg-mist`}>
                <ExternalLink aria-hidden className="h-4 w-4" />
                {t.location.directions}
              </a>
            </div>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-md border border-mist-deep bg-mist lg:col-span-7">
            <iframe
              title={t.location.mapTitle}
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
