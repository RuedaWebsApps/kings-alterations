import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { CatalogSection } from "@/components/CatalogSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { LocationSection } from "@/components/LocationSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Spotlight */}
      <Hero />

      {/* 2. Video Tour Provisional Section */}
      <VideoSection />

      {/* 3. Comprehensive Visual Catalog with Category Filter & Search */}
      <CatalogSection />

      {/* 4. Complete Services Breakdown */}
      <ServicesSection />

      {/* 5. Authentic Story & Craftsmanship */}
      <AboutSection />

      {/* 6. Frequently Asked Questions */}
      <FAQSection />

      {/* 7. Location, Hours, Map & WhatsApp */}
      <LocationSection />
    </>
  );
}
