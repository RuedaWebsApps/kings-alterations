"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      tagline: "Master Tailoring & Alteration Studio in Austin, TX",
      address: "7500 State Hwy 71 Suite 100, Austin, TX (Oak Hill)",
      hours: "Mon-Fri 9AM-5PM | Sat 9AM-3PM",
      walkIns: "Walk-ins Welcome",
      catalog: "Portfolio & Catalog",
      services: "Services",
      about: "Our Story",
      faq: "FAQ",
      location: "Location & Hours",
      callShop: "Call Shop",
      whatsapp: "WhatsApp",
    },
    hero: {
      badge: "Master Tailoring Studio • Austin, TX",
      titleStart: "The Perfect Fit.",
      titleAccent: "Thoughtful Alterations.",
      subtitle:
        "From everyday wardrobe adjustments and precise hemming to bridal alterations, bespoke suit tailoring, and creative custom projects. We craft your clothing to fit your body, lifestyle, and individual expression.",
      walkIns: "Walk-Ins Welcome",
      turnaround: "~1-1.5 Week Turnaround",
      express: "Express Service Available",
      chatWhatsapp: "Chat on WhatsApp",
      exploreCatalog: "Explore Catalog",
      familyBadge: "Family-Owned Craftsmanship",
      oakHillBadge: "Southwest Austin / Oak Hill",
      topRated: "Top Rated",
    },
    video: {
      badge: "Studio Film",
      title: "Behind the Seams at King's Alterations",
      subtitle: "Precision, dedication, and attention to every stitch in Austin, TX",
      tag: "Official Studio Tour",
      subtext: "Watch our master tailoring process in Oak Hill, Austin TX.",
    },
    catalog: {
      badge: "Visual Catalog & Portfolio",
      title: "Exemplary Craftsmanship",
      subtitle: "Browse our curated portfolio of garments, custom tailoring, bridal alterations, and specialized creations completed with precision in Austin, Texas.",
      all: "All Portfolio",
      searchPlaceholder: "Search garments...",
      emptyTitle: "No matching items found",
      emptySubtitle: "Try adjusting your search criteria or switch back to All Portfolio.",
      resetFilters: "Reset Filters",
      tailoredIn: "Tailored in Austin, TX",
      walkInsPill: "Walk-ins Welcome",
      inquire: "Inquire",
      loadMore: "Load More Garments",
      remaining: "remaining",
      modalDescription: "Handled with extreme precision and dedicated craftsmanship at King's Alterations. Each piece is tailored to ensure optimal fit, clean silhouette, and lasting comfort.",
      modalLocation: "Location",
      modalTurnaround: "Turnaround",
      modalTurnaroundVal: "~1 to 1.5 Weeks",
      modalFitting: "Fitting",
      modalFittingVal: "Walk-ins Welcome",
      consultWhatsapp: "Consult via WhatsApp",
      callDirectly: "Or call us directly at",
    },
    services: {
      badge: "Tailoring Expertise",
      title: "Comprehensive Alteration Services",
      subtitle: "Every garment receives personalized master craftsmanship. Whether you need an everyday adjustment or a delicate bridal fitting, we bring precision and care to every stitch.",
      inquireWhatsapp: "Inquire on WhatsApp",
    },
    about: {
      badge: "Family-Owned & Dedicated",
      title: "A Family Business Built on Trust, Passion & Collaboration",
      p1: "At King's Alterations (formerly Pink Alterations LLC — same dedicated owner, new elevated look!), every single garment is handled with the exact same care and devotion as if it were our own.",
      p2: "We love collaborating closely with our Austin neighbors to bring their visions to reality. Whether perfecting the drape of your wedding gown, restoring a vintage leather jacket, or adjusting your daily denim for an effortless silhouette, our workshop is dedicated to precision and friendly, transparent service.",
      fittingsTitle: "Personalized Fittings",
      fittingsDesc: "No appointments needed. Walk in during open hours to meet our seamstresses.",
      pickupTitle: "Reliable Pickup",
      pickupDesc: "Nathalie will notify you via call or text the moment your piece is ready.",
      btnWhatsapp: "Ask Us Any Question on WhatsApp",
      quoteBadge: "Crafted with love in Oak Hill",
      quote: "Every stitch tells a story of care and dedication to our Austin community.",
    },
    faq: {
      badge: "Clear & Transparent",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our Austin workshop, fittings, turnaround times, and pricing.",
      helpTitle: "Have a specific alteration question?",
      helpSubtitle: "Send us a quick photo or message on WhatsApp and we will gladly answer right away.",
      helpBtn: "Send Question on WhatsApp",
    },
    location: {
      badge: "Visit Our Studio",
      title: "Convenient Oak Hill Location",
      subtitle: "Located on State Hwy 71 in Southwest Austin. Easy parking and walk-ins always welcome for fittings.",
      formerly: "(Formerly Pink Alterations LLC — Same trusted owner, new look)",
      addressTitle: "Address",
      areaNote: "Oak Hill / Southwest Austin area",
      hoursTitle: "Business Hours",
      monFri: "Monday – Friday:",
      sat: "Saturday:",
      sun: "Sunday:",
      closed: "Closed",
      phoneTitle: "Direct Telephone",
      callText: "Call or text anytime",
      chatWhatsapp: "Chat with Us on WhatsApp",
      googleMapsBtn: "Open Directions in Google Maps",
    },
    footer: {
      desc: "Austin's premier tailoring and garment alteration studio. Combining master craftsmanship, family care, and bespoke attention for bridal, formalwear, suits, and daily wardrobe adjustments.",
      formerly: "Formerly Pink Alterations LLC. Same trusted ownership, new refined identity.",
      explore: "Explore",
      specialties: "Specialties",
      contactDirectly: "Contact Directly",
      chatWhatsapp: "Chat on WhatsApp",
      rights: "All rights reserved. Oak Hill, Austin, Texas.",
      craftedWith: "Crafted with love for Austin, TX",
    },
    whatsapp: {
      generalMessage: "Hello King's Alterations! I would like to inquire about your tailoring and alteration services.",
      itemMessage: "Hello King's Alterations! I am interested in an alteration similar to: {name} ({category}).",
      serviceMessage: "Hello King's Alterations! I would like to inquire about your {name} service.",
    }
  },
  es: {
    nav: {
      tagline: "Estudio de Sastrería y Modificaciones en Austin, TX",
      address: "7500 State Hwy 71 Suite 100, Austin, TX (Oak Hill)",
      hours: "Lun-Vie 9AM-5PM | Sáb 9AM-3PM",
      walkIns: "Sin Cita Previa",
      catalog: "Catálogo y Portafolio",
      services: "Servicios",
      about: "Nosotros",
      faq: "Preguntas Frecuentes",
      location: "Ubicación y Horarios",
      callShop: "Llamar al Taller",
      whatsapp: "WhatsApp",
    },
    hero: {
      badge: "Estudio de Sastrería • Austin, TX",
      titleStart: "El Ajuste Perfecto.",
      titleAccent: "Modificaciones con Estilo.",
      subtitle:
        "Desde ajustes diarios y bastas precisas hasta vestidos de novia, trajes a medida y proyectos especiales. Hacemos que tus prendas se adapten a tu cuerpo, tu vida y tu estilo.",
      walkIns: "Sin Cita Previa",
      turnaround: "Entrega en ~1-1.5 semanas",
      express: "Servicio Express Disponible",
      chatWhatsapp: "Consultar por WhatsApp",
      exploreCatalog: "Ver Catálogo",
      familyBadge: "Negocio Familiar Artesanal",
      oakHillBadge: "Suroeste de Austin / Oak Hill",
      topRated: "Mejor Valorado",
    },
    video: {
      badge: "Video del Taller",
      title: "Detrás de las Costuras en King's Alterations",
      subtitle: "Precisión, dedicación y cuidado en cada puntada en Austin, TX",
      tag: "Recorrido por el Taller",
      subtext: "Conoce nuestro proceso artesanal en Oak Hill, Austin TX.",
    },
    catalog: {
      badge: "Catálogo Visual y Portafolio",
      title: "Artesanía y Acabados Ejemplares",
      subtitle: "Explora nuestro portafolio de prendas, sastrería a medida, vestidos de novia y proyectos especiales realizados con precisión en Austin, Texas.",
      all: "Todo el Portafolio",
      searchPlaceholder: "Buscar prendas...",
      emptyTitle: "No se encontraron resultados",
      emptySubtitle: "Prueba ajustando el término de búsqueda o regresa a Todo el Portafolio.",
      resetFilters: "Restablecer Filtros",
      tailoredIn: "Ajustado en Austin, TX",
      walkInsPill: "Sin Cita Previa",
      inquire: "Consultar",
      loadMore: "Cargar Más Prendas",
      remaining: "restantes",
      modalDescription: "Elaborado con máxima precisión y dedicación en King's Alterations. Cada prenda se ajusta para garantizar una silueta impecable y comodidad duradera.",
      modalLocation: "Ubicación",
      modalTurnaround: "Tiempo de entrega",
      modalTurnaroundVal: "~1 a 1.5 Semanas",
      modalFitting: "Pruebas",
      modalFittingVal: "Sin Cita Previa (Walk-ins)",
      consultWhatsapp: "Consultar por WhatsApp",
      callDirectly: "O llámanos directamente al",
    },
    services: {
      badge: "Especialidades de Sastrería",
      title: "Servicios Integrales de Arreglos",
      subtitle: "Cada prenda recibe atención personalizada de sastres expertos. Desde un ajuste cotidiano hasta un delicado vestido de gala, cuidamos cada detalle.",
      inquireWhatsapp: "Consultar por WhatsApp",
    },
    about: {
      badge: "Negocio Familiar y Dedicado",
      title: "Una Familia Construida sobre la Confianza, Pasión y Cuidado",
      p1: "En King's Alterations (anteriormente Pink Alterations LLC — ¡mismo dueño y equipo, nueva imagen refinada!), cada prenda se trata con el mismo cariño y dedicación que si fuera nuestra.",
      p2: "Nos encanta trabajar de cerca con nuestros vecinos de Austin para hacer realidad sus ideas. Ya sea el ajuste perfecto de tu vestido de novia, la restauración de una chaqueta de cuero o tus jeans favoritos, nuestro taller te ofrece precisión y un trato cercano y honesto.",
      fittingsTitle: "Pruebas Personalizadas",
      fittingsDesc: "No requieres cita. Visítanos en horario laboral para que nuestras costureras te atiendan.",
      pickupTitle: "Aviso de Recogida",
      pickupDesc: "Nathalie te avisará por llamada o mensaje de texto en cuanto tu prenda esté lista.",
      btnWhatsapp: "Envíanos tu Consulta por WhatsApp",
      quoteBadge: "Hecho con amor en Oak Hill",
      quote: "Cada puntada cuenta una historia de cuidado y dedicación para nuestra comunidad.",
    },
    faq: {
      badge: "Claro y Transparente",
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre nuestro taller en Austin, tiempos de entrega, pruebas y tarifas.",
      helpTitle: "¿Tienes una consulta sobre una prenda específica?",
      helpSubtitle: "Envíanos una foto o mensaje por WhatsApp y te responderemos con gusto de inmediato.",
      helpBtn: "Enviar Pregunta por WhatsApp",
    },
    location: {
      badge: "Visita Nuestro Taller",
      title: "Ubicación Conveniente en Oak Hill",
      subtitle: "Ubicados en la State Hwy 71 en el suroeste de Austin. Estacionamiento fácil y siempre bienvenidos sin cita.",
      formerly: "(Antes Pink Alterations LLC — Mismo taller de confianza, nueva imagen)",
      addressTitle: "Dirección",
      areaNote: "Zona Oak Hill / Suroeste de Austin",
      hoursTitle: "Horarios de Atención",
      monFri: "Lunes – Viernes:",
      sat: "Sábado:",
      sun: "Domingo:",
      closed: "Cerrado",
      phoneTitle: "Teléfono Directo",
      callText: "Llámanos o envíanos un texto",
      chatWhatsapp: "Chatea con Nosotros por WhatsApp",
      googleMapsBtn: "Abrir Ubicación en Google Maps",
    },
    footer: {
      desc: "El estudio de sastrería y arreglos de referencia en Austin. Combinamos maestría artesanal, trato familiar y atención personalizada para novias, trajes y ropa diaria.",
      formerly: "Anteriormente Pink Alterations LLC. Misma dueña de confianza, nueva identidad refinada.",
      explore: "Explorar",
      specialties: "Especialidades",
      contactDirectly: "Contacto Directo",
      chatWhatsapp: "Chatear por WhatsApp",
      rights: "Todos los derechos reservados. Oak Hill, Austin, Texas.",
      craftedWith: "Hecho con amor para Austin, TX",
    },
    whatsapp: {
      generalMessage: "¡Hola King's Alterations! Me gustaría consultar sobre sus servicios de arreglos y sastrería.",
      itemMessage: "¡Hola King's Alterations! Me interesa consultar por un arreglo similar a: {name} ({category}).",
      serviceMessage: "¡Hola King's Alterations! Quisiera consultar sobre el servicio de: {name}.",
    }
  }
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations["en"];
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const value = {
    locale,
    setLocale,
    t: translations[locale]
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
