import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MetricsSection from "@/components/MetricsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#050510]">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MetricsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
