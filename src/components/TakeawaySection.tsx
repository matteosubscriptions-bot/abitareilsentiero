import { Reveal } from "@/hooks/useScrollReveal";
import { CheckCircle } from "lucide-react";

export const TakeawaySection = () => {
  const takeaways = [
    "Uno sguardo più attento",
    "Presenza corporea",
    "Relazioni autentiche",
    "Capacità di stare nell'imprevisto",
    "Senso di connessione che continua",
  ];

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
              Cosa porti a casa
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Non perché qualcosa sia stato <span className="text-forest-mid italic">risolto</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Ma perché è stato <strong className="text-foreground">abitato.</strong>
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {takeaways.map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="flex items-center gap-4 bg-background rounded-xl p-6 text-left shadow-soft">
                  <CheckCircle className="w-6 h-6 text-forest-mid flex-shrink-0" />
                  <span className="font-display text-xl text-foreground">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
