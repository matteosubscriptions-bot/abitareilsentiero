import { Reveal } from "@/hooks/useScrollReveal";
import { Users } from "lucide-react";

export const AfterExperienceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-deep/10 mb-8">
              <Users className="w-8 h-8 text-forest-mid" />
            </div>
            <span className="block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
              Dopo l'esperienza
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-8">
              Il gruppo di <span className="text-forest-mid italic">scambio</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Escape the City non finisce quando torni a casa.
              </p>
              <p>
                Dopo l'esperienza, chi lo desidera può entrare in un <strong className="text-foreground">gruppo di scambio</strong>: uno spazio dove condividere pratiche, osservazioni, scoperte.
              </p>
              <p className="text-foreground font-display text-xl italic">
                Non è obbligatorio. Non è strutturato. È semplicemente un filo che rimane, per chi vuole continuare a coltivare ciò che ha scoperto nel bosco.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
