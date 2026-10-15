"use client";

import { ReactNode, useState, useSyncExternalStore } from "react";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SplashLoader } from "@/components/SplashLoader";

const emptySubscribe = () => () => {};

export function ClientProviders({ children }: { children: ReactNode }) {
  const [splashFinished, setSplashFinished] = useState(false);
  // useSyncExternalStore safely resolves client-only mounting without triggering effect setState cascading renders
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <I18nProvider>
      {/* Splash intro loader identical to Loba Fashion architecture */}
      {isMounted && !splashFinished && (
        <SplashLoader onComplete={() => setSplashFinished(true)} />
      )}

      <a
        href="#catalog"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </I18nProvider>
  );
}
