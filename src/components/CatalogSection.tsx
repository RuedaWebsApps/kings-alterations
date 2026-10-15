"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { CATALOG_ITEMS, CATEGORIES, CatalogItem } from "@/data/catalog";
import { Search, X, Maximize2, MessageSquare, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function CatalogSection() {
  const { t, locale } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const categoryNames: Record<string, { en: string; es: string }> = {
    "bridal-formal": { en: "Bridal & Formalwear", es: "Novias y Vestidos de Gala" },
    "suits-tailoring": { en: "Suits & Tailoring", es: "Trajes y Sastrería" },
    "everyday-alterations": { en: "Everyday Alterations", es: "Arreglos Cotidianos" },
    "creative-custom": { en: "Creative & Custom Projects", es: "Proyectos Creativos y Personalizados" },
    "uniforms-workwear": { en: "Uniforms & Workwear", es: "Uniformes y Ropa de Trabajo" },
    "leather-accessories": { en: "Leather & Accessories", es: "Cuero y Accesorios" }
  };

  const filteredItems = useMemo(() => {
    return CATALOG_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <section id="catalog" className="py-20 md:py-28 bg-[#FCFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A15A] block mb-2">
            {t.catalog.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#203A5B] tracking-tight">
            {t.catalog.title}
          </h2>
          <div className="w-16 h-1 bg-[#C5A15A] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-[#667386] leading-relaxed">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Filter Bar & Live Search */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-[#DCEAF7] shadow-sm">
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => {
                setActiveCategory("all");
                setVisibleCount(24);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#203A5B] text-white shadow-sm"
                  : "bg-[#FCFAF6] text-[#667386] hover:bg-[#DCEAF7]/50 hover:text-[#203A5B]"
              }`}
            >
              {t.catalog.all} ({CATALOG_ITEMS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const localizedName = categoryNames[cat.id]
                ? categoryNames[cat.id][locale]
                : cat.name;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setVisibleCount(24);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#203A5B] text-white shadow-sm"
                      : "bg-[#FCFAF6] text-[#667386] hover:bg-[#DCEAF7]/50 hover:text-[#203A5B]"
                  }`}
                >
                  {localizedName}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#667386]" />
            <input
              type="text"
              placeholder={t.catalog.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(24);
              }}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FCFAF6] border border-[#DCEAF7] text-xs sm:text-sm text-[#263447] placeholder:text-[#667386]/70 focus:outline-none focus:ring-2 focus:ring-[#C5A15A]/40"
            />
          </div>
        </div>

        {/* Catalog Grid */}
        {displayedItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-[#B7D0E8]">
            <p className="text-lg font-medium text-[#203A5B]">{t.catalog.emptyTitle}</p>
            <p className="text-sm text-[#667386] mt-1">{t.catalog.emptySubtitle}</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#203A5B] text-white text-xs font-semibold cursor-pointer"
            >
              {t.catalog.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {displayedItems.map((item) => {
              const localizedCat = categoryNames[item.category]
                ? categoryNames[item.category][locale]
                : item.categoryName;
              return (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-[#DCEAF7] shadow-sm hover:shadow-xl hover:border-[#C5A15A]/40 transition-all duration-300 flex flex-col"
                >
                  <div
                    className="relative aspect-[3/4] w-full bg-[#FCFAF6] overflow-hidden cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    <div className="absolute top-3 left-3 bg-[#FCFAF6]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#DCEAF7] text-[10px] font-semibold text-[#203A5B] shadow-sm">
                      {localizedCat}
                    </div>

                    <div className="absolute inset-0 bg-[#203A5B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <span className="p-2.5 rounded-full bg-white text-[#203A5B] shadow-lg hover:scale-110 transition-transform">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 flex flex-col flex-1 justify-between bg-white border-t border-[#DCEAF7]/40">
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-[#203A5B] line-clamp-1 group-hover:text-[#C5A15A] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#667386] mt-0.5">
                        {t.catalog.tailoredIn}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-medium text-[#C5A15A]">{t.catalog.walkInsPill}</span>
                      <a
                        href={`https://wa.me/15126799240?text=${encodeURIComponent(
                          t.whatsapp.itemMessage
                            .replace("{name}", item.title)
                            .replace("{category}", localizedCat)
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#25D366] hover:text-[#20bd5a] transition-colors"
                      >
                        {t.catalog.inquire} <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {visibleCount < filteredItems.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 24)}
              className="px-8 py-3.5 rounded-full bg-[#203A5B] text-white hover:bg-[#263447] text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              {t.catalog.loadMore} ({filteredItems.length - visibleCount} {t.catalog.remaining})
            </button>
          </div>
        )}

        {/* Modal / Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#DCEAF7]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[3/4] md:w-3/5 bg-slate-900">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain"
                />
              </div>

              <div className="p-6 md:w-2/5 flex flex-col justify-between bg-[#FCFAF6]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A15A]">
                    {categoryNames[selectedItem.category]
                      ? categoryNames[selectedItem.category][locale]
                      : selectedItem.categoryName}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#203A5B] mt-1 mb-3">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs text-[#667386] leading-relaxed mb-4">
                    {t.catalog.modalDescription}
                  </p>
                  
                  <div className="space-y-2 py-3 border-y border-[#DCEAF7] text-xs text-[#263447]">
                    <div className="flex justify-between">
                      <span className="text-[#667386]">{t.catalog.modalLocation}:</span>
                      <span className="font-medium">Oak Hill, Austin TX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#667386]">{t.catalog.modalTurnaround}:</span>
                      <span className="font-medium">{t.catalog.modalTurnaroundVal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#667386]">{t.catalog.modalFitting}:</span>
                      <span className="font-medium">{t.catalog.modalFittingVal}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={`https://wa.me/15126799240?text=${encodeURIComponent(
                      t.whatsapp.itemMessage
                        .replace("{name}", selectedItem.title)
                        .replace(
                          "{category}",
                          categoryNames[selectedItem.category]
                            ? categoryNames[selectedItem.category][locale]
                            : selectedItem.categoryName
                        )
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    {t.catalog.consultWhatsapp}
                  </a>
                  <p className="text-[11px] text-center text-[#667386] mt-2">
                    {t.catalog.callDirectly}{" "}
                    <a href="tel:5126799240" className="underline font-semibold text-[#203A5B]">
                      (512) 679-9240
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
