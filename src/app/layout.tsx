import type { Metadata, Viewport } from "next";
import { ClientProviders } from "./ClientProviders";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kingsalterations.com"),
  title: "King's Alterations | Master Tailoring & Garment Alterations Austin, TX",
  description:
    "Austin's premier tailor shop located in Oak Hill / Southwest Austin. Expert bridal gown alterations, suits & tuxedo fittings, hemming, repairs, and custom creative projects. Walk-ins welcome!",
  keywords: [
    "King's Alterations",
    "Austin alterations",
    "Oak Hill tailor",
    "bridal gown alterations Austin",
    "suit tailoring Austin TX",
    "zipper repair Austin",
    "pant hemming",
    "Pink Alterations LLC"
  ],
  authors: [{ name: "King's Alterations" }],
  icons: {
    icon: [
      { url: "/icono-kings-alterations.png", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/icono-kings-alterations.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: ["/icono-kings-alterations.png"]
  },
  openGraph: {
    title: "King's Alterations | Master Tailoring in Austin, TX",
    description:
      "Expert tailoring, bridal gown fittings, suits, everyday hemming, and custom projects. Walk-ins welcome in Oak Hill, Austin TX.",
    url: "https://kingsalterations.com",
    siteName: "King's Alterations",
    images: [
      {
        url: "/logo-king-alterations.png",
        width: 1000,
        height: 670,
        alt: "King's Alterations Austin TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FCFAF6] text-[#263447] antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
