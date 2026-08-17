import AboutUsHero from "@/components/AboutUsPage/AboutUsHero/AboutUsHero";
import EveryCallerMatters from "@/components/AboutUsPage/EveryCallerMatters/EveryCallerMatters";
import MeetSteve from "@/components/AboutUsPage/MeetSteve/MeetSteve";
import Nav from "@/components/shared/Nav/Nav";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <AboutUsHero />
      <MeetSteve />
      <EveryCallerMatters />
    </main>
  );
}
