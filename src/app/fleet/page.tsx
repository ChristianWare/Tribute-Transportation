import BestOption from "@/components/FleetPage/BestOption/BestOption";
import Chauffeur from "@/components/FleetPage/Chauffeur/Chauffeur";
import FleetPageHero from "@/components/FleetPage/FleetPageHero/FleetPageHero";
import Vehicles from "@/components/FleetPage/Vehicles/Vehicles";
import Nav from "@/components/shared/Nav/Nav";

export default function FleetPage() {
  return (
    <main>
      <Nav />
      <FleetPageHero />
      <Vehicles />
      <Chauffeur />
      <BestOption />
    </main>
  );
}
