import { Reveal } from "@/hooks/useScrollReveal";
import { Compass, Flame, Eye, Moon, Users, Hand, Heart, MessageCircle } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      icon: Hand,
      title: "Rallentamento",
      description: "Arrivi nel bosco e lasci andare le aspettative. Non solo quelle sull'esperienza, ma anche quelle che ti porti dentro: i pensieri sul futuro, i rimpianti del passato.",
    },
    {
      icon: Compass,
      title: "Orientamento",
      description: "Impari a leggere una mappa. Non solo per orientarti nel bosco, ma per scoprire tre domande essenziali: Dove sei? Dove vuoi andare? Come ci arrivi?",
    },
    {
      icon: Users,
      title: "Fiducia",
      description: "Ti muovi connesso al gruppo attraverso un filo invisibile. Non devi parlare. Non devi spiegarti. Scopri cosa significa affidarti, essere guidato, guidare.",
    },
    {
      icon: Flame,
      title: "Presenza nel gesto — Il fuoco",
      description: "Accendi un fuoco con le tue mani. Con pazienza. Con costanza. Senza fretta. Il gesto diventa uno specchio. Ogni abilità, se vissuta con presenza, ti riporta a te stesso.",
    },
    {
      icon: Eye,
      title: "Prospettive nuove",
      description: "Esplori il bosco bendato, poi con lo sguardo ribaltato. Scopri che il mondo non cambia — cambia il modo in cui lo guardi. La meraviglia non è lontana: è già qui.",
    },
    {
      icon: Moon,
      title: "Luce e buio — La camminata notturna",
      description: "Cammini nel bosco di notte, senza torce. All'inizio c'è paura. Poi gli occhi si abituano. Scopri che il buio non è assenza, ma un altro modo di percepire.",
    },
    {
      icon: Heart,
      title: "Nutrirsi insieme — Cucina Trapper",
      description: "Prepari il cibo con le tue mani e con gli altri. Cucina semplice, essenziale, condivisa. Non è solo mangiare. È prendersi cura. È nutrimento che va oltre il piatto.",
    },
    {
      icon: MessageCircle,
      title: "Condivisione",
      description: "Dopo un'esperienza, il gruppo si ferma. Si condivide ciò che si è vissuto. Se non vuoi parlare, puoi ascoltare. Un cerchio dove ciò che emerge può essere accolto.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-6">
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                Cosa sperimenterai
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
                Un giorno e mezzo <span className="text-forest-mid italic">nel bosco</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Non ti diciamo cosa succede minuto per minuto. Ma ti diamo il senso di quello che vivi.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="bg-cream rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-forest-deep/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <exp.icon className="w-6 h-6 text-forest-mid" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700}>
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ci sono momenti di silenzio e momenti di parola. Momenti in cui sei solo con te stesso e momenti in cui il gruppo condivide.{" "}
                <strong className="text-foreground">Il giusto equilibrio tra stare e connettersi.</strong>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
