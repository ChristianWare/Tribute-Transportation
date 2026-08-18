import ServicesHero from "@/components/ServicesPage/ServicesHero/ServicesHero";
import ServicesVideo from "@/components/ServicesPage/ServicesVideo/ServicesVideo";
import Nav from "@/components/shared/Nav/Nav";

export default function ServicesPage() {
  return (
    <main>
      <Nav background='white' />
      <ServicesHero />
      <ServicesVideo />
    </main>
  );
}
