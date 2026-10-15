import type { Metadata, Viewport } from "next";
import { ClientProviders } from "./ClientProviders";
import { SITE } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcfaf6",
};

const title = "King's Alterations | Clothing Alterations & Tailoring in Oak Hill, Austin, TX";
const description =
  "King's Alterations in Oak Hill, Southwest Austin: hemming, resizing, zipper repair, wedding and formal wear, suits, cosplay, custom bags and leather. Walk-ins welcome. (512) 679-9240.";

export const metadata: Metadata = {
  ...(SITE.url ? { metadataBase: new URL(SITE.url), alternates: { canonical: "/" } } : {}),
  title,
  description,
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    title,
    description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "King's Alterations logo" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
};

// Structured data: only verified facts (no ratings, reviews, prices or social profiles).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingAlterationService",
  name: SITE.name,
  alternateName: SITE.formerName,
  description,
  telephone: SITE.phoneTel,
  ...(SITE.url ? { url: SITE.url } : {}),
  areaServed: SITE.area,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  openingHoursSpecification: SITE.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
