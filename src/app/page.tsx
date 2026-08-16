import Areas from "@/components/HomePage/Areas/Areas";
import CoreServices from "@/components/HomePage/CoreServices/CoreServices";
import Faq from "@/components/HomePage/Faq/Faq";
import FleetPreview from "@/components/HomePage/FleetPreview/FleetPreview";
import Hero from "@/components/HomePage/Hero/Hero";
import ReviewsPreview from "@/components/HomePage/ReviewsPreview/ReviewsPreview";
import TheDifference from "@/components/HomePage/TheDifference/TheDifference";
import TheMission from "@/components/HomePage/TheMission/TheMission";
import TrustStrip from "@/components/HomePage/TrustStrip/TrustStrip";
import WhyTribute from "@/components/HomePage/WhyTribute/WhyTribute";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Nav from "@/components/shared/Nav/Nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustStrip />
      <CoreServices />
      <WhyTribute />
      <TheDifference />
      <TheMission />
      <FleetPreview />
      <Areas />
      <ReviewsPreview />
      <Faq />
      <FinalCTA />
    </main>
  );
}
