"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  // Official shop contact: (512) 679-9240
  const phoneNumber = "15126799240";
  const message = encodeURIComponent(
    "Hello King's Alterations! I would like to inquire about your tailoring and alteration services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      aria-label="Direct WhatsApp Message to King's Alterations"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
