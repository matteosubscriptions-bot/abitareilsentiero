import { Button } from "@/components/ui/button";
import { TreePine, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-forest-light/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-forest-deep mb-8">
            <TreePine className="w-10 h-10 text-golden" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Abita il tuo <span className="text-forest-mid italic">sentiero</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-display">
            Dalla sopravvivenza alla convivenza.
          </p>
          <p className="text-lg text-muted-foreground mb-10">
            Attraverso il bosco. Da portare nella vita.
          </p>

          <Button variant="forest" size="xl" className="group" asChild>
            <a href="mailto:info@escapethecity.it">
              <Mail className="w-5 h-5 mr-2" />
              Scrivimi ora per le date
            </a>
          </Button>

          <p className="mt-6 text-sm text-muted-foreground">
            Rispondo personalmente entro 24 ore
          </p>
        </div>
      </div>
    </section>
  );
};
