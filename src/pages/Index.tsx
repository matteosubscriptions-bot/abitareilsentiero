import { Hero } from "@/components/Hero";
import { WhySection } from "@/components/WhySection";
import { AudienceSection } from "@/components/AudienceSection";
import { ApproachSection } from "@/components/ApproachSection";
import { PathwaysSection } from "@/components/PathwaysSection";
import { TakeawaySection } from "@/components/TakeawaySection";
import { DatesSection } from "@/components/DatesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhySection />
      <AudienceSection />
      <ApproachSection />
      <PathwaysSection />
      <TakeawaySection />
      <DatesSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
