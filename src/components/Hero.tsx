import { Button } from "@/components/ui/button";
import heroSentiero from "@/assets/hero-sentiero.jpg";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroSentiero}
          alt="Sentiero nel bosco all'alba"
          className="w-full h-full object-cover animate-breathe"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-charcoal/40 to-charcoal/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-golden font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
            Esperienze in natura
          </span>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-medium leading-[1.1] mb-6 animate-fade-up">
            Abitare il Sentiero
          </h1>

          <p className="font-display text-xl md:text-2xl text-golden-soft italic mb-8 animate-fade-up delay-100">
            Un modo di stare mentre si attraversa.
          </p>

          <p className="font-body text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-up delay-200">
            Un progetto che crea esperienze in natura per persone, adolescenti e gruppi che desiderano fermarsi, osservare e fare esperienza di come stanno attraversando il loro percorso.
          </p>

          <p className="font-body text-base text-cream/60 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up delay-300">
            Non proponiamo fughe. Non promettiamo soluzioni rapide.
            <br />
            <strong className="text-cream/90">Creiamo spazi reali per stare nell'esperienza.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-400">
            <Button variant="forest" size="lg" asChild>
              <a href="#percorsi">Scopri i percorsi</a>
            </Button>
            <Button variant="ghost" size="lg" className="text-cream/90 hover:text-cream hover:bg-cream/10" asChild>
              <a href="#come-lavoriamo">Come lavoriamo</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <a href="#perche" className="flex flex-col items-center text-cream/60 hover:text-cream transition-colors">
          <span className="text-xs tracking-widest uppercase mb-2">Esplora</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
