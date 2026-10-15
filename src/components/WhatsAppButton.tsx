"use client";

import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/site";

export function WhatsAppButton() {
  const { t } = useI18n();

  return (
    <a
      href={waLink(t.wa.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.wa.float}
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-lg transition-transform hover:scale-105 hover:bg-wa-dark active:scale-95"
    >
      <MessageCircle aria-hidden className="h-7 w-7" />
    </a>
  );
}
