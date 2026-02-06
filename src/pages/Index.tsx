import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { ForestSection } from "@/components/ForestSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SensorySection } from "@/components/SensorySection";
import { TakeawaySection } from "@/components/TakeawaySection";
import { ForYouSection } from "@/components/ForYouSection";
import { DatesSection } from "@/components/DatesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FacilitatorSection } from "@/components/FacilitatorSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <DifferenceSection />
      <ForestSection />
      <ExperienceSection />
      <SensorySection />
      <TakeawaySection />
      <ForYouSection />
      <DatesSection />
      <TestimonialsSection />
      <FacilitatorSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
