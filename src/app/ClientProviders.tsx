"use client";

import { ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </I18nProvider>
  );
}
