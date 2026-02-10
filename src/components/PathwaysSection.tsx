import { Reveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import pathSopravvivenza from "@/assets/path-sopravvivenza.jpg";
import pathLeggere from "@/assets/path-leggere.jpg";
import pathForma from "@/assets/path-forma.jpg";
import pathTraccia from "@/assets/path-traccia.jpg";

const pathways = [
  {
    id: "sopravvivenza",
    title: "Dalla sopravvivenza all'abitare",
    subtitle: "Percorso per adulti",
    description: "Ritrovare presenza nel quotidiano. Uscire dalla modalità automatica e riscoprire un modo più consapevole di stare nella propria vita, attraverso l'esperienza diretta in natura.",
    image: pathSopravvivenza,
  },
  {
    id: "leggere",
    title: "Leggere la natura",
    subtitle: "Per adolescenti, studenti e curiosi",
    description: "Un percorso di esplorazione del bosco: osservazione di tracce, segni, orientamento. Imparare a leggere ciò che ci circonda con attenzione e rispetto.",
    image: pathLeggere,
  },
  {
    id: "forma",
    title: "Dare forma",
    subtitle: "Percorso creativo in natura",
    description: "Espressione senza prestazione. Materiali naturali, ascolto e gesti creativi per dare forma a ciò che si sente, senza giudizio né obiettivi di risultato.",
    image: pathForma,
  },
  {
    id: "traccia",
    title: "Sulla stessa traccia",
    subtitle: "Per gruppi e team",
    description: "Un percorso per esplorare fiducia, ascolto e collaborazione. Camminare insieme, fuori dai ruoli abituali, per riscoprire come si sta insieme.",
    image: pathTraccia,
  },
];

export const PathwaysSection = () => {
  return (
    <section id="percorsi" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                I percorsi
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
                Quattro modi di <span className="text-forest-mid italic">attraversare</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ogni percorso è un invito diverso. Tutti condividono lo stesso principio: stare nell'esperienza, con attenzione.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {pathways.map((path, index) => (
              <Reveal key={path.id} delay={index * 120}>
                <div className="group bg-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow duration-500 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={path.image}
                      alt={path.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                    <span className="absolute bottom-4 left-6 text-cream/80 font-body text-sm tracking-wide">
                      {path.subtitle}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-display text-2xl text-foreground mb-3">{path.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{path.description}</p>
                    <Button variant="ghost" className="self-start text-forest-mid hover:text-forest-deep group/btn p-0 h-auto" asChild>
                      <a href="#dates">
                        Scopri il percorso
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
