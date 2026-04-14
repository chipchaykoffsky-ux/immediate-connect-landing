import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BitcoinBackground from "@/components/visuals/BitcoinBackground";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Opportunities from "@/sections/Opportunities";
import SafetyTimeline from "@/sections/SafetyTimeline";
import Stats from "@/sections/Stats";
import Steps from "@/sections/Steps";
import FAQ from "@/sections/FAQ";
import CtaBand from "@/sections/CtaBand";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-bg-900">
      <BitcoinBackground />
      <div className="relative">
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <Opportunities />
        <SafetyTimeline />
        <Steps />
        <FAQ />
        <CtaBand />
        <Footer />
      </div>
    </main>
  );
}
