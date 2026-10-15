"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Clock, Globe, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE, telLink, waLink } from "@/lib/site";

const LINKS = [
  { href: "#catalog", key: "catalog" },
  { href: "#services", key: "services" },
  { href: "#about", key: "about" },
  { href: "#faq", key: "faq" },
  { href: "#location", key: "location" },
] as const;

export function Navbar() {
  const { t, toggle } = useI18n();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/85">
      <div className="hidden bg-navy text-xs text-white sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-1.5 lg:px-8">
          <p className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin aria-hidden className="h-3.5 w-3.5 text-gold-light" />
              {SITE.street}, {SITE.city}, {SITE.region}
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              <Clock aria-hidden className="h-3.5 w-3.5 text-gold-light" />
              {t.nav.hours}
            </span>
          </p>
          <a href={telLink} className="flex items-center gap-1.5 font-medium hover:text-gold-light">
            <Phone aria-hidden className="h-3.5 w-3.5" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="shrink-0" aria-label="King's Alterations, back to top">
          <Image
            src="/logo-king-alterations-web.png"
            alt="King's Alterations"
            width={910}
            height={402}
            priority
            className="h-14 w-auto md:h-16"
          />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium text-ink md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="py-2 transition-colors hover:text-gold-ink">
              {t.nav[l.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.switchLabel}
            className="flex min-h-11 items-center gap-1.5 rounded-full border border-mist-deep px-3 text-xs font-semibold text-navy transition-colors hover:bg-mist"
          >
            <Globe aria-hidden className="h-3.5 w-3.5" />
            {t.nav.switchTo}
          </button>
          <a
            href={telLink}
            className="hidden min-h-11 items-center gap-2 rounded-full bg-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-ink md:flex"
          >
            <Phone aria-hidden className="h-4 w-4" />
            {t.nav.call}
          </a>
          <a
            href={telLink}
            aria-label={t.nav.call}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white md:hidden"
          >
            <Phone aria-hidden className="h-4 w-4" />
          </a>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.menu}
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy md:hidden"
          >
            {open ? <X aria-hidden className="h-6 w-6" /> : <Menu aria-hidden className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="animate-fade-in border-t border-mist bg-ivory px-4 pb-5 pt-2 md:hidden">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-mist/70 py-3.5 text-base font-medium text-ink"
                >
                  {t.nav[l.key]}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink(t.wa.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-wa text-sm font-semibold text-white"
          >
            <MessageCircle aria-hidden className="h-4 w-4" />
            {t.hero.whatsapp}
          </a>
          <p className="mt-3 text-center text-xs text-muted">{t.nav.hours}</p>
        </nav>
      )}
    </header>
  );
}
