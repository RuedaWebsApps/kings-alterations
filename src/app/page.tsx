import { Hero } from "@/components/Hero";
import { CatalogSection } from "@/components/CatalogSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { LocationSection } from "@/components/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CatalogSection />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
      <LocationSection />
    </>
  );
}
