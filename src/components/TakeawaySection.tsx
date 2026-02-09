import { Reveal } from "@/hooks/useScrollReveal";
import { CheckCircle } from "lucide-react";

export const TakeawaySection = () => {
  const takeaways = [
    "Gesti concreti che sai fare (accendere il fuoco, leggere una mappa, orientarti)",
    "La capacità di viverli in presenza, non solo di eseguirli",
    "Meno bisogno di controllare tutto. Più capacità di affidarti",
    "Uno sguardo diverso sulle cose che credevi di conoscere",
    "Relazioni più autentiche nate dall'esperienza condivisa",
    "Senso di appartenenza — alla natura, al gruppo, a te stesso",
    "La differenza tra sopravvivere e convivere",
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-6">
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                Cosa porti a casa
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
                Non tecniche. <span className="text-forest-mid italic">Presenza nelle tecniche.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Non esci da qui solo con nuove abilità. Esci con un modo diverso di viverle.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-12">
            {takeaways.map((item, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="flex items-start gap-4 bg-cream rounded-xl p-6">
                  <CheckCircle className="w-6 h-6 text-forest-mid flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={600}>
            <div className="text-center mt-12 max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground italic font-display">
                Non è un cambiamento radicale. È un ritorno.
                <br />
                A come si sta. A come si convive invece di sopravvivere.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
