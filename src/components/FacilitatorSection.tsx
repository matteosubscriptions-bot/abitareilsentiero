import { Reveal } from "@/hooks/useScrollReveal";
import matteoImage from "@/assets/matteo-facilitator.jpg";

export const FacilitatorSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                Chi facilita l'esperienza
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                Chi ti <span className="text-forest-mid italic">accompagna</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-sm">
                  <img
                    src={matteoImage}
                    alt="Matteo Mancini, guida ambientale e facilitatore"
                    className="w-full rounded-3xl shadow-elevated"
                  />
                  <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-golden/10 rounded-full -z-10" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-3xl text-foreground mb-2">
                    Matteo Mancini
                  </h3>
                  <p className="text-lg text-forest-mid font-body">
                    Guida ambientale escursionistica · Facilitatore di esperienze in natura
                  </p>
                </div>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Non sono un coach. Non sono un terapeuta. Non sono un guru.
                  </p>
                  <p>
                    <strong className="text-foreground">Sono una persona che conosce il bosco e sa creare spazi dove le persone possono fermarsi, osservarsi e tornare presenti.</strong>
                  </p>
                  <p>
                    Facilito processi. Non do risposte. Accompagno. Non insegno.
                  </p>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-forest-light italic">
                      Approccio: sobrio, incarnato, concreto. Niente motivazione. Niente spiritualità astratta. Niente performance.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
