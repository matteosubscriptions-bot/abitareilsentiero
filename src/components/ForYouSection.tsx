import { Reveal } from "@/hooks/useScrollReveal";
import { Check, X } from "lucide-react";

export const ForYouSection = () => {
  const yesReasons = [
    "Hai una vita apparentemente stabile: casa, lavoro, sicurezza",
    "Ti senti spesso in tensione, come se dovessi controllare tutto",
    "Funzioni bene nella società, ma senti una disconnessione silenziosa",
    "Hai già provato trekking, viaggi, weekend outdoor — ma cerchi qualcosa di diverso",
    "Non cerchi una svolta, ma presenza",
    "Vuoi vivere esperienze, non solo accumulare abilità",
    "Sei disposto a osservarti mentre fai",
    "Vuoi crescere attraverso il corpo e i sensi, non solo attraverso la mente",
  ];

  const noReasons = [
    "Cerchi performance o certificazioni",
    "Vuoi motivazione o insegnamenti spirituali",
    "Cerchi adrenalina o survival sportivo",
    "Non sei disponibile a fermarti e osservarti",
    "Non ti senti a tuo agio con momenti di silenzio e momenti di condivisione",
    "Cerchi comfort e servizi strutturati",
  ];

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                Per chi è
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                Questo spazio è <span className="text-forest-mid italic">per te</span> se:
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
