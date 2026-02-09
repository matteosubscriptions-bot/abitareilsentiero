import { Reveal } from "@/hooks/useScrollReveal";
import forestTrail from "@/assets/forest-trail.jpg";

export const ProblemSection = () => {
  return (
    <section id="recognition" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                Forse ti riconosci
              </span>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] mb-8">
                Forse ti riconosci
                <br />
                <span className="text-forest-mid italic">in questo.</span>
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  Hai una vita piena. Lavoro, relazioni, responsabilità. Apparentemente va tutto bene.
                </p>
                <p>
                  <strong className="text-foreground">Eppure c'è qualcosa.</strong>
                </p>
                <p>
                  Una tensione che non se ne va. Come se dovessi sempre tenere tutto sotto controllo. Come se fossi sempre un passo avanti rispetto a dove sei.
                </p>
                <p>
                  <strong className="text-foreground">Funzioni bene. Ma senti poco.</strong>
                </p>
                <p>
                  Hai provato palestre, corsi, viaggi. Ma quella disconnessione di fondo rimane.
                </p>
                <p className="text-forest-deep font-medium text-xl font-display pt-4">
                  Non è stanchezza fisica. È vivere sempre orientati all'esterno, senza mai davvero fermarti.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src={forestTrail}
                    alt="Persona che cammina su un sentiero nella foresta all'alba"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-forest-light/10 rounded-full -z-10" />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-golden/10 rounded-full -z-10" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
