import type { Locale } from "@/lib/i18n";

export interface FaqItem {
  q: Record<Locale, string>;
  a: Record<Locale, string>;
}

/** Sourced from the previous shop website FAQ and the official business data. */
export const FAQS: FaqItem[] = [
  {
    q: { en: "Do you require appointments for fittings?", es: "¿Necesito cita para una prueba?" },
    a: {
      en: "No appointment is needed. If you have pricing questions or would like to be fitted, we gladly take walk-ins. Hours: Monday–Friday 9 AM–5 PM, Saturday 9 AM–3 PM, closed Sunday.",
      es: "No se necesita cita. Si tienes preguntas sobre precios o quieres probarte una prenda, te atendemos sin cita. Horario: lunes a viernes de 9 AM a 5 PM, sábado de 9 AM a 3 PM, domingo cerrado.",
    },
  },
  {
    q: { en: "How long does an alteration usually take?", es: "¿Cuánto tarda normalmente un arreglo?" },
    a: {
      en: "Turnaround times vary, but on average it is about 1 week to a week and a half.",
      es: "Los tiempos varían, pero en promedio son de 1 semana a semana y media.",
    },
  },
  {
    q: { en: "How will I know when my item is ready?", es: "¿Cómo sabré cuándo está lista mi prenda?" },
    a: {
      en: "When you drop off your items we take your name and phone number. Our assistants and team will reach out by text or phone call when your items are ready, or sooner if they finish ahead of time.",
      es: "Al dejar tus prendas tomamos tu nombre y teléfono. Nuestras encargadas/asistentes te avisarán por mensaje de texto o llamada cuando estén listas, o antes si terminan antes de tiempo.",
    },
  },
  {
    q: { en: "Do you offer express or rush service?", es: "¿Ofrecen servicio express?" },
    a: {
      en: "Yes, express service is available at an additional cost. Contact us for details.",
      es: "Sí, hay servicio express con un costo adicional. Contáctanos para más detalles.",
    },
  },
  {
    q: { en: "What payment methods do you accept?", es: "¿Qué formas de pago aceptan?" },
    a: {
      en: "We accept cash or card, as well as Zelle.",
      es: "Aceptamos efectivo o tarjeta, y también Zelle.",
    },
  },
  {
    q: { en: "How much does a custom project cost?", es: "¿Cuánto cuesta un proyecto a medida?" },
    a: {
      en: "Custom projects follow a different pricing scale that depends on the idea. We welcome custom projects, from redesigning bridal dresses to cosplay. Come into the shop or send us photos and we will let you know what is possible.",
      es: "Los proyectos a medida tienen una escala de precios distinta que depende de la idea. Recibimos proyectos a medida, desde rediseño de vestidos de novia hasta cosplay. Visítanos o envíanos fotos y te diremos qué es posible.",
    },
  },
  {
    q: { en: "What is the best way to reach you quickly?", es: "¿Cuál es la forma más rápida de contactarlos?" },
    a: {
      en: "Call or text (512) 679-9240, or message us on WhatsApp. Our team replies during business hours.",
      es: "Llama o envía un mensaje al (512) 679-9240, o escríbenos por WhatsApp. Respondemos durante el horario de atención.",
    },
  },
];
