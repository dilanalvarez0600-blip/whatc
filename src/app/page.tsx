import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Incident from "@/components/Incident";
import Manifesto from "@/components/Manifesto";
import Gallery from "@/components/Gallery";
import HowToBuy from "@/components/HowToBuy";
import Chart from "@/components/Chart";
import Community from "@/components/Community";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Incident />
      <Manifesto />
      <Gallery />
      <HowToBuy />
      <Chart />
      <Community />
      <FinalCTA />
      <Footer />
    </main>
  );
}
