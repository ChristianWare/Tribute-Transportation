import AboutUsHero from "@/components/AboutUsPage/AboutUsHero/AboutUsHero";
import EveryCallerMatters from "@/components/AboutUsPage/EveryCallerMatters/EveryCallerMatters";
import MeetSteve from "@/components/AboutUsPage/MeetSteve/MeetSteve";
import TributeName from "@/components/AboutUsPage/TributeName/TributeName";
import Nav from "@/components/shared/Nav/Nav";
import React from "react";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <AboutUsHero />
      <TributeName />
      <MeetSteve />
      <EveryCallerMatters />
    </main>
  );
}
