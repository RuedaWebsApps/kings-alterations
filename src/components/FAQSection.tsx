"use client";

import { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { t, locale } = useI18n();

  const faqs = [
    {
      qEn: "Do you require appointments for fittings?",
      qEs: "¿Se requiere cita previa para las pruebas de ropa?",
      aEn: "No! At King's Alterations we do not require appointments. If you have price inquiries or would like to be fitted, we gladly take walk-ins during regular business hours (Mon-Fri 9:00 AM - 5:00 PM, Sat 9:00 AM - 3:00 PM).",
      aEs: "¡No! En King's Alterations no requerimos cita previa. Si deseas consultar precios o probarte una prenda, con gusto te atendemos directamente durante nuestro horario de atención (Lun-Vie 9:00 AM - 5:00 PM, Sáb 9:00 AM - 3:00 PM)."
    },
    {
      qEn: "How long does it usually take to complete an alteration?",
      qEs: "¿Cuánto tiempo suele tardar la realización de un arreglo?",
      aEn: "Turnaround times can vary depending on the complexity of the garment, but on average our turnaround is about 1 week to a week and a half. Our seamstresses work diligently to return your items as quickly as possible.",
      aEs: "El tiempo puede variar según la complejidad de la prenda, pero en promedio nuestro plazo de entrega es de 1 semana a semana y media. Nuestras costureras trabajan con dedicación para entregarte tus prendas lo antes posible."
    },
    {
      qEn: "How will I know when my item is ready for pickup?",
      qEs: "¿Cómo sabré cuándo mi prenda está lista para recoger?",
      aEn: "Upon dropping off your items, we record your name and phone number. Our customer service expert Nathalie will reach out via text or phone call as soon as your garments are ready, or even ahead of time.",
      aEs: "Al dejar tus prendas tomamos tu nombre y número telefónico. Nathalie se comunicará contigo mediante llamada o mensaje de texto en cuanto tus prendas estén terminadas, incluso si están listas antes de tiempo."
    },
    {
      qEn: "Do you offer express services or rush orders?",
      qEs: "¿Ofrecen servicio express o pedidos de urgencia?",
      aEn: "Yes! We offer express rush services for urgent events and deadlines with a small additional fee, depending on current shop volume.",
      aEs: "¡Sí! Ofrecemos servicio express para eventos y fechas urgentes con un costo adicional accesible, sujeto a la disponibilidad del taller."
    },
    {
      qEn: "What types of payment do you accept?",
      qEs: "¿Qué formas de pago aceptan?",
      aEn: "We accept cash, all major credit/debit cards, as well as Zelle for your convenience.",
      aEs: "Aceptamos pagos en efectivo, todas las tarjetas de crédito y débito, y transferencias por Zelle."
    },
    {
      qEn: "How much does a custom project typically cost?",
      qEs: "¿Cuánto cuesta aproximadamente un proyecto personalizado?",
      aEn: "Custom projects have a varying pricing scale depending on the garment's complexity, design, and fabric. We welcome any and all custom projects — from redesigning bridal gowns to cosplay and specialized creations! Feel free to bring your garment or reach out via WhatsApp with photos.",
      aEs: "Los proyectos personalizados varían según la complejidad, el diseño y las telas requeridas. ¡Recibimos todo tipo de proyectos: desde rediseño de vestidos de novia hasta disfraces de cosplay y creaciones a medida! Tráenos tu idea o escríbenos por WhatsApp con fotos."
    },
    {
      qEn: "What's the best way to get in touch quickly?",
      qEs: "¿Cuál es la forma más rápida de contactarlos?",
      aEn: "The fastest way to reach us is by calling or sending a direct message via WhatsApp / text to (512) 679-9240. You can also walk into our Austin shop at Oak Hill any time during business hours!",
      aEs: "La forma más ágil es llamándonos o enviándonos un mensaje directo por WhatsApp al (512) 679-9240. ¡O bien visítanos directamente en nuestro taller en Oak Hill, Austin!"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#FCFAF6] border-t border-[#DCEAF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A15A] block mb-2">
            {t.faq.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#203A5B]">
            {t.faq.title}
          </h2>
          <div className="w-16 h-1 bg-[#C5A15A] mx-auto my-4 rounded-full" />
          <p className="text-sm text-[#667386]">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const q = locale === "en" ? faq.qEn : faq.qEs;
            const a = locale === "en" ? faq.aEn : faq.aEs;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#DCEAF7] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif font-semibold text-[#203A5B] hover:text-[#C5A15A] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg pr-4">{q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C5A15A] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#667386] leading-relaxed border-t border-slate-50 pt-3">
                    {a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp helper box */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#B7D0E8] text-center shadow-sm">
          <h3 className="text-base font-bold text-[#203A5B]">{t.faq.helpTitle}</h3>
          <p className="text-xs text-[#667386] mt-1 mb-4">
            {t.faq.helpSubtitle}
          </p>
          <a
            href={`https://wa.me/15126799240?text=${encodeURIComponent(t.whatsapp.generalMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs shadow hover:bg-[#20bd5a] transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            {t.faq.helpBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
