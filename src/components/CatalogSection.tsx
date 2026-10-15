"use client";

import { useMemo, useState } from "react";
import { CATALOG_ITEMS, CATEGORIES, type CategoryId } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";
import { CatalogImage } from "@/components/CatalogImage";
import { Lightbox } from "@/components/Lightbox";

const PAGE = 24;
type Filter = "all" | CategoryId;

export function CatalogSection() {
  const { t, locale } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const [visible, setVisible] = useState(PAGE);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
      CATALOG_ITEMS.filter((i) => filter === "all" || i.category === filter || i.secondary?.includes(filter)).sort(
        (a, b) => a.order - b.order,
      ),
    [filter],
  );

  const counts = useMemo(() => {
    const m = new Map<Filter, number>([["all", CATALOG_ITEMS.length]]);
    for (const c of CATEGORIES) {
      m.set(c.id, CATALOG_ITEMS.filter((i) => i.category === c.id || i.secondary?.includes(c.id)).length);
    }
    return m;
  }, []);

  const select = (f: Filter) => {
    setFilter(f);
    setVisible(PAGE);
  };

  const shown = items.slice(0, visible);
  const chip = (active: boolean) =>
    `min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors ${
      active ? "border-navy bg-navy text-white" : "border-mist-deep bg-white text-navy hover:bg-mist"
    }`;

  return (
    <section id="catalog" aria-labelledby="catalog-title" className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.catalog.eyebrow} title={t.catalog.title} subtitle={t.catalog.subtitle} id="catalog-title" />

        <div className="no-scrollbar -mx-4 mb-3 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0" role="group" aria-label={t.catalog.eyebrow}>
          <button type="button" aria-pressed={filter === "all"} onClick={() => select("all")} className={chip(filter === "all")}>
            {t.catalog.all} <span className="font-normal opacity-70">({counts.get("all")})</span>
          </button>
          {CATEGORIES.map((c) => (
            <button key={c.id} type="button" aria-pressed={filter === c.id} onClick={() => select(c.id)} className={chip(filter === c.id)}>
              {c[locale]} <span className="font-normal opacity-70">({counts.get(c.id)})</span>
            </button>
          ))}
        </div>
        <p className="mb-8 text-center text-xs text-muted">{t.catalog.notice}</p>

        {shown.length === 0 ? (
          <div className="rounded-md border border-dashed border-mist-deep bg-white px-6 py-16 text-center">
            <p className="text-lg font-semibold text-navy">{t.catalog.empty}</p>
            <button type="button" onClick={() => select("all")} className="mt-4 min-h-11 rounded-full bg-navy px-6 text-sm font-semibold text-white">
              {t.catalog.reset}
            </button>
          </div>
        ) : (
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
            {shown.map((item, i) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`${t.catalog.open}: ${item.title}`}
                  className="group block w-full text-left"
                >
                  <span className="block overflow-hidden rounded-sm border border-mist bg-white">
                    <CatalogImage
                      id={item.id}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(min-width:1280px) 20vw, (min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                      className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="mt-2 block text-sm font-medium leading-snug text-ink group-hover:text-navy">{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {visible < items.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE)}
              className="min-h-12 rounded-full border border-navy px-8 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              {t.catalog.more} · {t.catalog.remaining(items.length - visible)}
            </button>
          </div>
        )}
      </div>

      {openIndex !== null && (
        <Lightbox items={items} index={openIndex} onIndex={setOpenIndex} onClose={() => setOpenIndex(null)} />
      )}
    </section>
  );
}
