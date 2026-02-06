import { Button } from "@/components/ui/button";
import heroForest from "@/assets/hero-forest.jpg";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroForest}
          alt="Foresta nebbiosa all'alba"
          className="w-full h-full object-cover animate-breathe"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-golden font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
            Un'esperienza in natura
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-medium leading-[1.1] mb-8 animate-fade-up">
            Non stai scappando dalla città.
            <br />
            <span className="italic text-golden-soft">Stai imparando a stare.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            Se vivi giornate piene ma senza respiro, se fai tutto "come si deve" ma senti di essere sempre in apnea...
            <strong className="text-cream"> Escape the City</strong> è il tuo laboratorio esperienziale in bosco.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button variant="forest" size="lg" asChild>
              <a href="#dates">Scopri le prossime date</a>
            </Button>
            <Button variant="ghost" size="lg" className="text-cream/90 hover:text-cream hover:bg-cream/10" asChild>
              <a href="#problem">Scopri di più</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <a href="#problem" className="flex flex-col items-center text-cream/60 hover:text-cream transition-colors">
          <span className="text-xs tracking-widest uppercase mb-2">Esplora</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
