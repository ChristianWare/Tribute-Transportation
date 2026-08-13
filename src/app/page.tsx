import Nav from "./components/shared/Nav/Nav";
import Hero from "./components/HomePage/Hero/Hero";
import TrustStrip from "./components/HomePage/TrustStrip/TrustStrip";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustStrip />
    </main>
  );
}
