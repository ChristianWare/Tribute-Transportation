import AboutUsHero from "@/components/AboutUsPage/AboutUsHero/AboutUsHero";
import EveryCallerMatters from "@/components/AboutUsPage/EveryCallerMatters/EveryCallerMatters";
import MeetSteve from "@/components/AboutUsPage/MeetSteve/MeetSteve";
import WhereEveryTripGoes from "@/components/AboutUsPage/WhereEveryTripGoes/WhereEveryTripGoes";
import Nav from "@/components/shared/Nav/Nav";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <AboutUsHero />
      <MeetSteve />
      <EveryCallerMatters />
      <WhereEveryTripGoes />
    </main>
  );
}
