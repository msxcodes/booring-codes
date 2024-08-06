import ContactSection from "@/components/home/contact/contact-section";
import HeroSection from "@/components/home/hero/hero-section";
import ServicesSection from "@/components/home/services/services-section";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
