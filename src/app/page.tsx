import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StakesSection from "@/components/StakesSection";
import AudienceSection from "@/components/AudienceSection";
import ProcessSection from "@/components/ProcessSection";
import OutcomesSection from "@/components/OutcomesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#04060f]">
      <Navigation />
      <HeroSection />
      <StakesSection />
      <AudienceSection />
      <ProcessSection />
      <OutcomesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
