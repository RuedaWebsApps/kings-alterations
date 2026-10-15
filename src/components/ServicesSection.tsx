"use client";

import { Scissors, Sparkles, Shirt, ShieldCheck, HeartHandshake, Layers } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ServicesSection() {
  const { t, locale } = useI18n();

  const serviceGroups = [
    {
      titleEn: "Everyday Alterations & Repairs",
      titleEs: "Arreglos Cotidianos y Reparaciones",
      icon: Scissors,
      descEn: "Keep your daily favorites fitting effortlessly and looking brand new.",
      descEs: "Mantén tus prendas favoritas con un ajuste impecable y como nuevas.",
      itemsEn: [
        "Hemming and length adjustments (original hems, blind hems)",
        "Clothing resizing, waist taking in/letting out, and tapering",
        "Zipper replacement and slider repairs (jackets, pants, dresses)",
        "General garment mending, seam reinforcement, and button replacement"
      ],
      itemsEs: [
        "Bastas y ajustes de largo (ruedos originales, bastas invisibles)",
        "Ajuste de talla, entalle de cintura y disminución de piernas",
        "Cambio de cremalleras / zippers y deslizadores (chaquetas, pantalones, vestidos)",
        "Zurcido general, refuerzo de costuras y cambio de botones"
      ]
    },
    {
      titleEn: "Bridal, Formalwear & Special Occasions",
      titleEs: "Novias, Vestidos de Gala y Ocasiones Especiales",
      icon: Sparkles,
      descEn: "Exquisite attention for life's most unforgettable moments.",
      descEs: "Cuidado minucioso para los momentos más inolvidables de tu vida.",
      itemsEn: [
        "Wedding gown alterations, train adjustments, and bustles",
        "Formal evening dresses, bridesmaid gowns, and prom attire",
        "Bespoke suits, tuxedos, blazer tapering, and shoulder adjustments",
        "Delicate silk, satin, lace, and beaded garment handling"
      ],
      itemsEs: [
        "Ajuste de vestidos de novia, ajuste de cauda y colocación de recogedores",
        "Vestidos de fiesta, vestidos de damas de honor y graduaciones",
        "Trajes a medida, esmoquin, entalle de saco y hombreras",
        "Manejo experto de seda, satén, encaje y pedrería fina"
      ]
    },
    {
      titleEn: "Creative & Custom Projects",
      titleEs: "Proyectos Creativos y Personalizados",
      icon: HeartHandshake,
      descEn: "Custom solutions for unique designs, cosplay, and textiles.",
      descEs: "Soluciones a medida para disfraces, cosplay, decoración y diseños únicos.",
      itemsEn: [
        "Cosplay costume tailoring and structure remodeling",
        "Custom handmade bags and canvas reinforcements",
        "Home décor textiles, draperies, and custom curtains",
        "Bespoke bedding, cushion covers, and specialized adjustments"
      ],
      itemsEs: [
        "Confección y adaptación de trajes de cosplay y fantasía",
        "Bolsos artesanales y refuerzo de lona resistente",
        "Textiles del hogar, cortinas a medida y cortinajes",
        "Ropa de cama personalizada, fundas de cojín y ajustes especiales"
      ]
    },
    {
      titleEn: "Technical, Uniforms & Specialized Garments",
      titleEs: "Uniformes, Ropa Técnica y de Trabajo",
      icon: Shirt,
      descEn: "Engineered fit for performance, duty, and athletic wear.",
      descEs: "Ajuste perfecto para uniformes escolares, deportivos y de trabajo pesado.",
      itemsEn: [
        "Swimwear adjustments and elastic replacements",
        "Activewear, compression gear, and technical stretch fabrics",
        "School uniforms and private academy dress codes",
        "Workwear, heavy denim, and construction work clothing"
      ],
      itemsEs: [
        "Ajustes de trajes de baño y reemplazo de elásticos",
        "Ropa deportiva, prendas de compresión y lycras técnicas",
        "Uniformes escolares y códigos de vestimenta de academias",
        "Ropa de trabajo industrial, mezclilla pesada y pantalones de obra"
      ]
    },
    {
      titleEn: "Leather & Heavy Materials",
      titleEs: "Cuero y Materiales Pesados",
      icon: ShieldCheck,
      descEn: "Specialized tools and techniques for durable leather goods.",
      descEs: "Herramientas especializadas para artículos de cuero y piel auténtica.",
      itemsEn: [
        "Leather jacket repairs, sleeve shortening, and lining repairs",
        "Alterations to leather accessories and straps",
        "Heavy-duty zipper replacements for leather outerwear",
        "Conditioning and hardware adjustments"
      ],
      itemsEs: [
        "Reparación de chaquetas de cuero, mangas y cambio de forros",
        "Ajustes en correas y accesorios de piel",
        "Cremalleras de alta resistencia para abrigos de cuero",
        "Ajuste de broches, hebillas y herrajes"
      ]
    },
    {
      titleEn: "Personalized Fittings & Express Services",
      titleEs: "Pruebas Personalizadas y Servicio Express",
      icon: Layers,
      descEn: "Friendly family care with options when time is of the essence.",
      descEs: "Atención familiar cálida con opciones urgentes cuando el tiempo apremia.",
      itemsEn: [
        "Walk-in fittings without mandatory appointments",
        "Average turnaround around 1 to 1.5 weeks",
        "Express rush services available upon request",
        "Direct text or call updates when your garments are completed"
      ],
      itemsEs: [
        "Pruebas presenciales sin necesidad de cita previa",
        "Tiempo de entrega promedio de 1 a 1.5 semanas",
        "Servicio express de entrega rápida disponible bajo solicitud",
        "Aviso directo por mensaje de texto o llamada cuando esté listo"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#FCFAF6] border-t border-[#DCEAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A15A] block mb-2">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#203A5B] tracking-tight">
            {t.services.title}
          </h2>
          <div className="w-16 h-1 bg-[#C5A15A] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-[#667386]">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceGroups.map((group, idx) => {
            const Icon = group.icon;
            const title = locale === "en" ? group.titleEn : group.titleEs;
            const desc = locale === "en" ? group.descEn : group.descEs;
            const items = locale === "en" ? group.itemsEn : group.itemsEs;

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-[#DCEAF7] shadow-sm hover:shadow-xl hover:border-[#C5A15A]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#DCEAF7]/50 border border-[#B7D0E8] flex items-center justify-center text-[#203A5B] mb-5">
                    <Icon className="w-6 h-6 text-[#C5A15A]" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#203A5B] mb-2">
                    {title}
                  </h3>
                  <p className="text-xs text-[#667386] mb-5 leading-relaxed">
                    {desc}
                  </p>
                  <ul className="space-y-2.5 text-xs text-[#263447]">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCEAF7]/50 flex items-center justify-between">
                  <span className="text-[11px] text-[#667386] font-medium">Austin Studio</span>
                  <a
                    href={`https://wa.me/15126799240?text=${encodeURIComponent(
                      t.whatsapp.serviceMessage.replace("{name}", title)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#25D366] hover:text-[#20bd5a] transition-colors"
                  >
                    {t.services.inquireWhatsapp} &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
