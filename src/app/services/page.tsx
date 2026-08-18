import EveryTrip from "@/components/ServicesPage/EveryTrip/EveryTrip";
import MoreWays from "@/components/ServicesPage/MoreWays/MoreWays";
import ServiceAreas from "@/components/ServicesPage/ServiceAreas/ServiceAreas";
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
      <EveryTrip />
      <ServiceAreas />
    </main>
  );
}
