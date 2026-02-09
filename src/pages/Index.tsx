import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { DesireSection } from "@/components/DesireSection";
import { ForestSection } from "@/components/ForestSection";
import { ForYouSection } from "@/components/ForYouSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ImageBreakSection } from "@/components/ImageBreakSection";
import { TakeawaySection } from "@/components/TakeawaySection";
import { AfterExperienceSection } from "@/components/AfterExperienceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GallerySection } from "@/components/GallerySection";
import { FacilitatorSection } from "@/components/FacilitatorSection";
import { CTASection } from "@/components/CTASection";
import { DatesSection } from "@/components/DatesSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <DesireSection />
      <ForestSection />
      <ForYouSection />
      <ExperienceSection />
      <ImageBreakSection />
      <TakeawaySection />
      <AfterExperienceSection />
      <TestimonialsSection />
      <GallerySection />
      <FacilitatorSection />
      <CTASection />
      <DatesSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
