import { Reveal } from "@/hooks/useScrollReveal";
import { User, Sprout, Users } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Persone adulte",
    description: "Per chi vuole uscire dall'automatismo quotidiano e ritrovare un contatto più presente con sé stesso, il proprio corpo e ciò che lo circonda.",
  },
  {
    icon: Sprout,
    title: "Adolescenti e giovani",
    description: "Esperienze reali, corporee, non giudicanti. Uno spazio in cui è possibile esplorare senza dover dimostrare nulla.",
  },
  {
    icon: Users,
    title: "Gruppi e team",
    description: "Esplorare come si sta insieme, fuori dai ruoli abituali. Fiducia, ascolto e collaborazione attraverso l'esperienza diretta nella natura.",
  },
];

export const AudienceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                A chi ci rivolgiamo
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
                Per chi sente il bisogno di <span className="text-forest-mid italic">fermarsi</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {audiences.map((item, index) => (
              <Reveal key={index} delay={index * 120}>
                <div className="bg-background rounded-2xl p-8 shadow-soft h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-forest-deep/10 mb-6">
                    <item.icon className="w-7 h-7 text-forest-mid" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p className="text-center font-display text-xl text-muted-foreground italic">
              "Qui non c'è un profilo giusto. C'è un'esperienza da attraversare."
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
