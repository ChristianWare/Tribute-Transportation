import MoreWays from "@/components/ServicesPage/MoreWays/MoreWays";
import ServicesHeroMain from "@/components/ServicesPage/ServicesHeroMain/ServicesHeroMain";
import ServicesPreview from "@/components/ServicesPage/ServicesPreview/ServicesPreview";
import Nav from "@/components/shared/Nav/Nav";

export default function ServicesPage() {
  return (
    <main>
      <Nav background='white' />
      <ServicesHeroMain />
      <ServicesPreview />
      <MoreWays />
    </main>
  );
}
