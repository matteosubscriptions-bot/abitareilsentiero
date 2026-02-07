import { Reveal } from "@/hooks/useScrollReveal";
import { Check, X } from "lucide-react";

export const ForYouSection = () => {
  const yesReasons = [
    "Vivi in ambiente urbano/strutturato",
    "Cerchi qualcosa di essenziale e reale",
    "Sei curioso del bosco",
    "Pronto a metterti in gioco fisicamente",
  ];

  const noReasons = [
    "Vuoi comfort garantito",
    "Cerchi risultati rapidi",
    "Preferisci intrattenimento passivo",
  ];

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                È per te?
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                Scopri se <span className="text-forest-mid italic">fa per te</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0}>
              <div className="bg-background rounded-3xl p-8 shadow-soft h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-forest-mid flex items-center justify-center">
                    <Check className="w-5 h-5 text-cream" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">Sì, se...</h3>
                </div>
                <ul className="space-y-4">
                  {yesReasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-forest-mid mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="bg-background rounded-3xl p-8 shadow-soft h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-earth-warm flex items-center justify-center">
                    <X className="w-5 h-5 text-cream" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">No, se...</h3>
                </div>
                <ul className="space-y-4">
                  {noReasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-earth-warm mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
