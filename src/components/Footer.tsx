"use client";

import Image from "next/image";
import { ArrowUp, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE, telLink, waLink } from "@/lib/site";

const LINKS = [
  { href: "#catalog", key: "catalog" },
  { href: "#services", key: "services" },
  { href: "#about", key: "about" },
  { href: "#faq", key: "faq" },
  { href: "#location", key: "location" },
] as const;

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="inline-block rounded-sm bg-ivory px-4 py-2">
            <Image src="/logo-king-alterations-web.png" alt="King's Alterations" width={910} height={402} className="h-14 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm text-mist-deep">{t.footer.blurb}</p>
          <p className="mt-2 text-xs text-white/60">{t.location.formerly}</p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">{t.footer.explore}</p>
          <ul className="mt-4 space-y-1 text-sm text-mist-deep">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-block py-1.5 hover:text-white">
                  {t.nav[l.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">{t.footer.contact}</p>
          <ul className="mt-4 space-y-3 text-sm text-mist-deep">
            <li className="flex gap-3"><MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />{SITE.street}, {SITE.city}, {SITE.region} {SITE.postalCode}</li>
            <li className="flex gap-3"><Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" /><a href={telLink} className="hover:text-white">{SITE.phoneDisplay}</a></li>
            <li className="flex gap-3"><Clock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />{t.nav.hours}</li>
          </ul>
          <a
            href={waLink(t.wa.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-wa px-6 text-sm font-semibold text-white hover:bg-wa-dark"
          >
            <MessageCircle aria-hidden className="h-4 w-4" />
            {t.hero.whatsapp}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 text-xs text-white/60 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. {t.footer.rights}</p>
          <a href="#top" aria-label={t.footer.top} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy">
            <ArrowUp aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
