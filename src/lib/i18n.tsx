"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";

export type Locale = "en" | "es";

const en = {
  nav: {
    walkIns: "Walk-ins welcome",
    catalog: "Catalog",
    services: "Services",
    about: "About",
    faq: "FAQ",
    location: "Visit",
    call: "Call the Shop",
    menu: "Menu",
    closeMenu: "Close menu",
    switchTo: "Español",
    switchLabel: "Switch language to Spanish",
    hours: "Mon–Fri 9 AM–5 PM · Sat 9 AM–3 PM",
  },
  hero: {
    eyebrow: "Alterations & tailoring · Oak Hill, Austin",
    title1: "The Perfect Fit.",
    title2: "Thoughtful Alterations.",
    subtitle:
      "From everyday adjustments to special occasion garments and creative custom projects, we help make your clothing fit your needs and your style.",
    explore: "Explore Our Work",
    call: "Call the Shop",
    whatsapp: "Message us on WhatsApp",
    points: ["No appointment needed", "About 1–1½ weeks on average", "Express service available"],
    caption: "Sample garment photo",
  },
  video: {
    eyebrow: "Meet the shop",
    title: "A closer look at King's Alterations",
    subtitle: "A short introduction to how we think about every garment.",
    play: "Play introduction video",
    unsupported: "Your browser cannot play this video.",
  },
  catalog: {
    eyebrow: "Catalog",
    title: "What we work on",
    subtitle:
      "Browse the kinds of garments and projects we handle. These are sample photos for illustration; ask us about your own piece.",
    notice: "Photos are illustrative samples, not before-and-after work.",
    all: "All",
    count: (n: number) => `${n} photos`,
    empty: "No photos in this category yet.",
    reset: "Show all",
    open: "View larger photo",
    askAbout: "Ask about this",
    more: "Show more",
    remaining: (n: number) => `${n} more`,
    dialog: "Photo viewer",
    close: "Close",
    prev: "Previous photo",
    next: "Next photo",
    position: (i: number, n: number) => `${i} of ${n}`,
    pricing: "Contact us for details",
    waAbout: (title: string) =>
      `Hello King's Alterations! I'm interested in alterations on a garment like this: ${title}.`,
  },
  services: {
    eyebrow: "Services",
    title: "Alterations for how you live and dress",
    subtitle:
      "Grouped by what you need. Pricing depends on the garment and the work, so contact us for details. Special projects are evaluated individually.",
    ask: "Ask about this service",
    waAbout: (title: string) => `Hello King's Alterations! I'd like to ask about: ${title}.`,
  },
  about: {
    eyebrow: "About the shop",
    title: "A family business built on trust, passion and collaboration",
    p1: "King's Alterations is the new name of Pink Alterations LLC: same owner, new look. Every piece is handled with the same care as if it were our own.",
    p2: "We love working closely with our clients to bring their ideas to life, whether it is the perfect fit for a favorite outfit or a custom design that reflects your personality.",
    walkIns: "Walk-ins welcome",
    walkInsText: "No appointment needed for fittings or price questions.",
    ready: "We tell you when it's ready",
    readyText: "We take your name and number and reach out by text or phone.",
    cta: "Ask us a question",
    imageCaption: "Sample garment photo",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    helpTitle: "Still have a question?",
    helpText: "Send us a message with a photo of your garment.",
    helpCta: "Message us on WhatsApp",
  },
  location: {
    eyebrow: "Visit us",
    title: "Find the shop in Oak Hill",
    subtitle: "On State Hwy 71 in Southwest Austin. Walk-ins are welcome.",
    address: "Address",
    hours: "Hours",
    mon: "Monday–Friday",
    sat: "Saturday",
    sun: "Sunday",
    closed: "Closed",
    phone: "Phone",
    whatsapp: "Message us on WhatsApp",
    text: "Send a text message",
    call: "Call (512) 679-9240",
    directions: "Open in Maps",
    mapTitle: "Map showing King's Alterations in Austin, Texas",
    formerly: "Formerly Pink Alterations LLC",
  },
  footer: {
    blurb: "Alterations and tailoring in Oak Hill, Southwest Austin.",
    explore: "Explore",
    contact: "Contact",
    rights: "All rights reserved.",
    top: "Back to top",
  },
  wa: {
    general: "Hello King's Alterations! I'd like to ask about your alteration services.",
    float: "Message King's Alterations on WhatsApp",
    text: "Hello King's Alterations! I'd like to ask about an alteration.",
  },
};

export type Dict = typeof en;

const es: Dict = {
  nav: {
    walkIns: "Sin cita",
    catalog: "Catálogo",
    services: "Servicios",
    about: "Nosotros",
    faq: "Preguntas",
    location: "Visítanos",
    call: "Llamar al Taller",
    menu: "Menú",
    closeMenu: "Cerrar menú",
    switchTo: "English",
    switchLabel: "Cambiar el idioma a inglés",
    hours: "Lun–Vie 9 AM–5 PM · Sáb 9 AM–3 PM",
  },
  hero: {
    eyebrow: "Arreglos y sastrería · Oak Hill, Austin",
    title1: "El Ajuste Perfecto.",
    title2: "Arreglos Hechos con Cuidado.",
    subtitle:
      "Desde ajustes cotidianos hasta prendas para ocasiones especiales y proyectos creativos a medida, hacemos que tu ropa se adapte a tus necesidades y a tu estilo.",
    explore: "Ver Nuestro Trabajo",
    call: "Llamar al Taller",
    whatsapp: "Escríbenos por WhatsApp",
    points: ["No se necesita cita", "En promedio 1 a 1½ semanas", "Servicio express disponible"],
    caption: "Foto de prenda de muestra",
  },
  video: {
    eyebrow: "Conoce el taller",
    title: "Un vistazo a King's Alterations",
    subtitle: "Una breve introducción a cómo cuidamos cada prenda.",
    play: "Reproducir video de introducción",
    unsupported: "Tu navegador no puede reproducir este video.",
  },
  catalog: {
    eyebrow: "Catálogo",
    title: "En qué trabajamos",
    subtitle:
      "Explora los tipos de prendas y proyectos que atendemos. Son fotos de muestra para ilustrar; pregúntanos por tu propia prenda.",
    notice: "Las fotos son muestras ilustrativas, no trabajos de antes y después.",
    all: "Todo",
    count: (n: number) => `${n} fotos`,
    empty: "Aún no hay fotos en esta categoría.",
    reset: "Ver todo",
    open: "Ver foto ampliada",
    askAbout: "Preguntar por esto",
    more: "Ver más",
    remaining: (n: number) => `${n} más`,
    dialog: "Visor de fotos",
    close: "Cerrar",
    prev: "Foto anterior",
    next: "Foto siguiente",
    position: (i: number, n: number) => `${i} de ${n}`,
    pricing: "Contáctanos para más detalles",
    waAbout: (title: string) =>
      `¡Hola King's Alterations! Me interesa un arreglo en una prenda como esta: ${title}.`,
  },
  services: {
    eyebrow: "Servicios",
    title: "Arreglos para tu forma de vivir y vestir",
    subtitle:
      "Agrupados según lo que necesitas. El precio depende de la prenda y del trabajo, así que contáctanos para más detalles. Los proyectos especiales se evalúan individualmente.",
    ask: "Preguntar por este servicio",
    waAbout: (title: string) => `¡Hola King's Alterations! Quisiera preguntar por: ${title}.`,
  },
  about: {
    eyebrow: "Sobre el taller",
    title: "Un negocio familiar basado en confianza, pasión y colaboración",
    p1: "King's Alterations es el nuevo nombre de Pink Alterations LLC: mismo dueño, nueva imagen. Cada prenda se trata con el mismo cuidado que si fuera nuestra.",
    p2: "Nos encanta trabajar de cerca con nuestros clientes para hacer realidad sus ideas, ya sea el ajuste perfecto de tu atuendo favorito o un diseño a medida que refleje tu personalidad.",
    walkIns: "Sin cita previa",
    walkInsText: "No se necesita cita para pruebas ni para preguntar precios.",
    ready: "Te avisamos cuando esté lista",
    readyText: "Tomamos tu nombre y número y te avisamos por mensaje o llamada.",
    cta: "Haznos una pregunta",
    imageCaption: "Foto de prenda de muestra",
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Preguntas frecuentes",
    helpTitle: "¿Aún tienes una duda?",
    helpText: "Envíanos un mensaje con una foto de tu prenda.",
    helpCta: "Escríbenos por WhatsApp",
  },
  location: {
    eyebrow: "Visítanos",
    title: "Encuentra el taller en Oak Hill",
    subtitle: "En la State Hwy 71, al suroeste de Austin. Te atendemos sin cita.",
    address: "Dirección",
    hours: "Horario",
    mon: "Lunes a viernes",
    sat: "Sábado",
    sun: "Domingo",
    closed: "Cerrado",
    phone: "Teléfono",
    whatsapp: "Escríbenos por WhatsApp",
    text: "Enviar un mensaje de texto",
    call: "Llamar al (512) 679-9240",
    directions: "Abrir en Mapas",
    mapTitle: "Mapa con la ubicación de King's Alterations en Austin, Texas",
    formerly: "Antes Pink Alterations LLC",
  },
  footer: {
    blurb: "Arreglos y sastrería en Oak Hill, suroeste de Austin.",
    explore: "Explorar",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
    top: "Volver arriba",
  },
  wa: {
    general: "¡Hola King's Alterations! Quisiera preguntar por sus servicios de arreglos.",
    float: "Escribir a King's Alterations por WhatsApp",
    text: "¡Hola King's Alterations! Quisiera preguntar por un arreglo.",
  },
};

export const translations: Record<Locale, Dict> = { en, es };

interface I18nValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: Dict;
}

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = "ka-locale";

const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};
const getSnapshot = (): Locale => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "es" ? "es" : "en";
  } catch {
    return "en";
  }
};
// Server and first client render are both "en"; React swaps to the saved value right after hydration.
const getServerSnapshot = (): Locale => "en";

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable; the choice just won't persist */
    }
    listeners.forEach((cb) => cb());
  }, []);

  const value = useMemo<I18nValue>(
    () => ({ locale, setLocale, toggle: () => setLocale(locale === "en" ? "es" : "en"), t: translations[locale] }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
