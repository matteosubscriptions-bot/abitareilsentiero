import { CheckCircle } from "lucide-react";

export const TakeawaySection = () => {
  const takeaways = [
    "Maggiore fiducia nel corpo",
    "Presenza quotidiana",
    "Relazione semplice con le difficoltà",
    "Ricordo concreto di come si sta davvero",
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
            Cosa porti a casa
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
            E <span className="text-forest-mid italic">nella città</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Non nostalgia. <strong className="text-foreground">Riferimento vivo.</strong>
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {takeaways.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-cream rounded-xl p-6 text-left"
              >
                <CheckCircle className="w-6 h-6 text-forest-mid flex-shrink-0" />
                <span className="font-display text-xl text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
