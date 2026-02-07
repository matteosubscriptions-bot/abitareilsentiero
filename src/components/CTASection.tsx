import { Button } from "@/components/ui/button";
import { TreePine, Mail } from "lucide-react";
import campfireForest from "@/assets/campfire-forest.jpg";

export const CTASection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={campfireForest}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-golden/20 backdrop-blur-sm mb-8">
            <TreePine className="w-10 h-10 text-golden" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
            Abita il tuo <span className="text-golden-soft italic">sentiero</span>
          </h2>

          <p className="text-xl md:text-2xl text-cream/80 mb-4 font-display">
            Dalla sopravvivenza alla convivenza.
          </p>
          <p className="text-lg text-cream/60 mb-10">
            Attraverso il bosco. Da portare nella vita.
          </p>

          <Button variant="forest" size="xl" className="group" asChild>
            <a href="mailto:info@escapethecity.it">
              <Mail className="w-5 h-5 mr-2" />
              Scrivimi ora per le date
            </a>
          </Button>

          <p className="mt-6 text-sm text-cream/50">
            Rispondo personalmente entro 24 ore
          </p>
        </div>
      </div>
    </section>
  );
};
