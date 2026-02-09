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
            Escape the City
          </h1>

          <p className="font-display text-2xl md:text-3xl text-golden-soft italic mb-6 animate-fade-up delay-100">
            Un giorno e mezzo per smettere di tenere tutto insieme
          </p>

          <div className="space-y-4 font-body text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            <p>
              Non è una fuga. Non è una pausa. È un modo per tornare presente in mezzo al bosco, insieme ad altre persone che sentono lo stesso richiamo.
            </p>
            <p>
              Impari gesti concreti — accendere un fuoco, orientarti, costruire con le mani. Ma non per accumularli come abilità. <strong className="text-cream">Per viverli in presenza.</strong>
            </p>
            <p className="text-cream/60">
              Uno spazio dove finalmente lasciare andare.
            </p>
          </div>

          <div className="animate-fade-up delay-300">
            <Button variant="forest" size="lg" asChild>
              <a href="#contact">Scopri se è il tuo momento</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <a href="#recognition" className="flex flex-col items-center text-cream/60 hover:text-cream transition-colors">
          <span className="text-xs tracking-widest uppercase mb-2">Esplora</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
