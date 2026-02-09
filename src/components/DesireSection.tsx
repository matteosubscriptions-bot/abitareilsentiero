import { Reveal } from "@/hooks/useScrollReveal";

export const DesireSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center">
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                Il desiderio nascosto
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-10">
                Forse cerchi <span className="text-forest-mid italic">questo</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              <p>
                Non cerchi una svolta. Non cerchi di cambiare vita. Non cerchi una lista di cose da imparare.
              </p>
              <p className="text-foreground font-display text-2xl md:text-3xl italic">
                Cerchi presenza.
              </p>
              <p>
                Un modo per rallentare senza sentirti in colpa. Uno spazio dove il corpo non sia solo uno strumento. Un momento in cui vivere l'esperienza, non spiegarla.
              </p>
              <p>
                Un luogo dove osservarti mentre fai, e scoprire cosa si muove dentro.
              </p>
              <p className="text-forest-deep font-medium text-xl font-display pt-4">
                Cerchi di tornare. Non di scappare.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
