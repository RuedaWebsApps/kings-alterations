import type { Locale } from "@/lib/i18n";

export interface ServiceGroup {
  id: string;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  items: Record<Locale, string[]>;
}

/** Mirrors section 9 of the client brief. Do not add services that are not confirmed by the business. */
export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "everyday",
    title: { en: "Everyday Alterations & Repairs", es: "Arreglos Cotidianos y Reparaciones" },
    intro: {
      en: "Keep the clothes you wear every day fitting the way they should.",
      es: "Mantén la ropa que usas a diario con el ajuste que le corresponde.",
    },
    items: {
      en: ["Hemming and length adjustments", "Clothing resizing and fit adjustments", "Zipper replacement and repairs", "General garment repairs"],
      es: ["Bastas y ajustes de largo", "Ajuste de talla y de calce", "Cambio y reparación de cierres", "Reparaciones generales de ropa"],
    },
  },
  {
    id: "bridal",
    title: { en: "Bridal, Formalwear & Special Occasions", es: "Novias, Ropa Formal y Ocasiones Especiales" },
    intro: {
      en: "Careful fittings for the days that matter most.",
      es: "Pruebas cuidadosas para los días más importantes.",
    },
    items: {
      en: ["Wedding gown alterations", "Formal dresses and evening gowns", "Suits and formal garments", "Special occasion tailoring"],
      es: ["Ajustes de vestidos de novia", "Vestidos formales y de noche", "Trajes y prendas formales", "Sastrería para ocasiones especiales"],
    },
  },
  {
    id: "creative",
    title: { en: "Creative & Custom Projects", es: "Proyectos Creativos y a Medida" },
    intro: {
      en: "Bring your idea. Custom projects are evaluated one by one.",
      es: "Trae tu idea. Los proyectos a medida se evalúan caso por caso.",
    },
    items: {
      en: ["Cosplay costumes", "Custom bags", "Home décor projects", "Curtains and bedding"],
      es: ["Disfraces y cosplay", "Bolsos a medida", "Proyectos de decoración del hogar", "Cortinas y ropa de cama"],
    },
  },
  {
    id: "technical",
    title: { en: "Technical & Specialized Garments", es: "Prendas Técnicas y Especializadas" },
    intro: {
      en: "Fit work for garments with special fabrics and uses.",
      es: "Ajustes para prendas con telas y usos especiales.",
    },
    items: {
      en: ["Swimwear alterations", "Activewear alterations", "School uniforms", "Workwear and construction clothing"],
      es: ["Ajustes de trajes de baño", "Ajustes de ropa deportiva", "Uniformes escolares", "Ropa de trabajo y de construcción"],
    },
  },
  {
    id: "leather",
    title: { en: "Leather Alterations", es: "Arreglos en Cuero" },
    intro: {
      en: "Leather needs different handling. Ask us about your piece.",
      es: "El cuero requiere un manejo distinto. Consúltanos sobre tu prenda.",
    },
    items: {
      en: ["Leather garment repairs", "Alterations to leather accessories"],
      es: ["Reparación de prendas de cuero", "Arreglos en accesorios de cuero"],
    },
  },
];
