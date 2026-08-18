import AboutUsHero from "@/components/AboutUsPage/AboutUsHero/AboutUsHero";
import Bridge from "@/components/AboutUsPage/Bridge/Bridge";
import EveryCallerMatters from "@/components/AboutUsPage/EveryCallerMatters/EveryCallerMatters";
import History from "@/components/AboutUsPage/History/History";
import MeetSteve from "@/components/AboutUsPage/MeetSteve/MeetSteve";
import WhereEveryTripGoes from "@/components/AboutUsPage/WhereEveryTripGoes/WhereEveryTripGoes";
import Faq from "@/components/HomePage/Faq/Faq";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Nav from "@/components/shared/Nav/Nav";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <AboutUsHero />
      <MeetSteve />
      <EveryCallerMatters />
      <WhereEveryTripGoes />
      <History />
      <Bridge />
      <Faq />
      <FinalCTA />
    </main>
  );
}
