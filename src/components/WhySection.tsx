import { Reveal } from "@/hooks/useScrollReveal";

export const WhySection = () => {
  return (
    <section id="perche" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
              Perché
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-8">
              Perché <span className="text-forest-mid italic">Abitare il Sentiero</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Viviamo vite accelerate. Produciamo, rispondiamo, ci adattiamo. Ma raramente ci fermiamo a sentire come stiamo davvero attraversando ciò che viviamo.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              La natura offre qualcosa che la città fatica a dare: <strong className="text-foreground">tempo, presenza, attenzione e relazione</strong>. Non come concetti, ma come esperienze concrete.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="bg-forest-deep/5 rounded-2xl p-8 mt-10 border border-forest-mid/10">
              <p className="font-display text-2xl md:text-3xl text-foreground leading-snug italic">
                "Non si tratta di arrivare da qualche parte.
                <br />
                Si tratta di abitare il percorso mentre accade."
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
