import ContactUsHero from "@/components/ContactUs/ContactUsHero/ContactUsHero";
import Faq from "@/components/HomePage/Faq/Faq";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Nav from "@/components/shared/Nav/Nav";
import React from "react";

export default function ContactPage() {
  return (
    <main>
      <Nav background='white' />
      <ContactUsHero />
      <Faq />
      <FinalCTA />
    </main>
  );
}
