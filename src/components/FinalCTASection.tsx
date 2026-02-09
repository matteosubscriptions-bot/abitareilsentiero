import { Reveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { MessageCircle, CalendarCheck } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-forest-deep text-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              Sei arrivato <span className="text-golden-soft italic">fin qui</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-4 text-lg text-cream/80 leading-relaxed mb-10">
              <p>
                Se hai letto fino a questo punto, probabilmente qualcosa ha risuonato.
              </p>
              <p className="text-cream font-display text-xl italic">
                Forse è il momento di parlarne.
              </p>
              <p className="text-cream/60">
                Non per convincerti. Ma per capire insieme se Escape the City è ciò che stai cercando.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="forest" size="lg" className="w-full sm:w-auto group" asChild>
                <a
                  href="https://wa.me/39XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Scrivimi su WhatsApp
                </a>
              </Button>
              <Button variant="forestOutline" size="lg" className="w-full sm:w-auto group" asChild>
                <a
                  href="https://calendly.com/tuo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarCheck className="w-5 h-5 mr-2" />
                  Prenota una chiamata
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
