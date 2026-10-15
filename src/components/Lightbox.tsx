"use client";

import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, X } from "lucide-react";
import { imageSrc, type CatalogItem } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/site";

interface Props {
  items: CatalogItem[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}

export function Lightbox({ items, index, onIndex, onClose }: Props) {
  const { t } = useI18n();
  const item = items[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (delta: number) => onIndex((index + delta + items.length) % items.length),
    [index, items.length, onIndex],
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.scrollTo({ top: scrollY });
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab") {
        // keep focus inside the dialog
        const focusable = document.querySelectorAll<HTMLElement>("[data-lightbox] button, [data-lightbox] a[href]");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  if (!item) return null;

  return (
    <div
      data-lightbox
      role="dialog"
      aria-modal="true"
      aria-label={t.catalog.dialog}
      className="fixed inset-0 z-[100] flex animate-fade-in flex-col bg-[#121f31]"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 text-white" onClick={(e) => e.stopPropagation()}>
        <p className="text-sm" aria-live="polite">
          {t.catalog.position(index + 1, items.length)}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t.catalog.close}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
        >
          <X aria-hidden className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16">
        {items.length > 1 && (
          <button
            type="button"
            aria-label={t.catalog.prev}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <ChevronLeft aria-hidden className="h-6 w-6" />
          </button>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={item.id}
          src={imageSrc(item.id, 1280)}
          alt={item.alt}
          width={1280}
          height={Math.round((1280 * item.height) / item.width)}
          decoding="async"
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full animate-fade-in rounded-sm object-contain"
        />
        {items.length > 1 && (
          <button
            type="button"
            aria-label={t.catalog.next}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <ChevronRight aria-hidden className="h-6 w-6" />
          </button>
        )}
      </div>

      <div className="flex flex-col items-center gap-3 px-4 py-4 text-center text-white sm:flex-row sm:justify-between sm:px-8" onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="font-display text-lg font-semibold">{item.title}</p>
          <p className="text-xs text-white/70">{t.catalog.pricing}</p>
        </div>
        <a
          href={waLink(t.catalog.waAbout(item.title))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-wa px-6 text-sm font-semibold text-white hover:bg-wa-dark"
        >
          <MessageCircle aria-hidden className="h-4 w-4" />
          {t.catalog.askAbout}
        </a>
      </div>
    </div>
  );
}
