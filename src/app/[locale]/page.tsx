import AboutSection from "@/modules/home/components/AboutSection";
import Hero from "@/modules/home/components/Hero";
import ServicesSection from "@/modules/home/components/ServicesSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
