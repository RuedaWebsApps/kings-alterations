"use client";

import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Navigation } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function LocationSection() {
  const { t } = useI18n();
  const address = "7500 State Hwy 71 Suite 100, Austin, TX 78735, USA";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "King's Alterations 7500 State Hwy 71 Suite 100 Austin TX 78735"
  )}`;

  return (
    <section id="location" className="py-20 bg-white border-t border-[#DCEAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A15A] block mb-2">
            {t.location.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#203A5B] tracking-tight">
            {t.location.title}
          </h2>
          <div className="w-16 h-1 bg-[#C5A15A] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-[#667386]">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#FCFAF6] rounded-3xl p-8 border border-[#DCEAF7] shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#203A5B] mb-2">
                  King&apos;s Alterations
                </h3>
                <p className="text-xs text-[#667386]">
                  {t.location.formerly}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#DCEAF7] text-[#203A5B] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#C5A15A]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#667386]">
                    {t.location.addressTitle}
                  </h4>
                  <p className="text-sm font-semibold text-[#203A5B] mt-0.5 leading-snug">
                    7500 State Hwy 71 Suite 100 <br />
                    Austin, TX 78735, USA
                  </p>
                  <span className="text-xs text-[#667386]">
                    {t.location.areaNote}
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#DCEAF7] text-[#203A5B] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#C5A15A]" />
                </div>
                <div className="w-full">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#667386]">
                    {t.location.hoursTitle}
                  </h4>
                  <div className="mt-1 space-y-1 text-xs text-[#203A5B]">
                    <div className="flex justify-between">
                      <span>{t.location.monFri}</span>
                      <span className="font-semibold">9:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.location.sat}</span>
                      <span className="font-semibold">9:00 AM – 3:00 PM</span>
                    </div>
                    <div className="flex justify-between text-red-600/80">
                      <span>{t.location.sun}</span>
                      <span className="font-semibold">{t.location.closed}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#DCEAF7] text-[#203A5B] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#C5A15A]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#667386]">
                    {t.location.phoneTitle}
                  </h4>
                  <a
                    href="tel:5126799240"
                    className="text-base font-bold text-[#203A5B] hover:text-[#C5A15A] transition-colors block mt-0.5"
                  >
                    (512) 679-9240
                  </a>
                  <span className="text-xs text-[#667386]">{t.location.callText}</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons: WhatsApp & Maps */}
            <div className="mt-8 pt-6 border-t border-[#DCEAF7] space-y-3">
              <a
                href={`https://wa.me/15126799240?text=${encodeURIComponent(t.whatsapp.generalMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                {t.location.chatWhatsapp}
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#203A5B] text-[#203A5B] hover:bg-[#DCEAF7]/50 font-semibold text-xs transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C5A15A]" />
                {t.location.googleMapsBtn}
                <ExternalLink className="w-3 h-3 text-[#667386]" />
              </a>
            </div>
          </div>

          {/* Interactive Map Box */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#DCEAF7] shadow-sm bg-slate-100 min-h-[380px] relative">
            <iframe
              title="King's Alterations Location Map"
              src="https://maps.google.com/maps?q=7500+State+Hwy+71+Suite+100+Austin+TX+78735&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
