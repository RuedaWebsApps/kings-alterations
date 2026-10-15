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
      <Hero />
      <VideoSection />
      <CatalogSection />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
      <LocationSection />
    </>
  );
}
