import { Flame, Compass, UtensilsCrossed, Tent, Moon } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      icon: Flame,
      title: "Accensione del fuoco",
      description: "Attenzione e relazione con gli elementi. Un gesto primordiale di presenza.",
    },
    {
      icon: Compass,
      title: "Orientamento",
      description: "Leggere il territorio per ritrovare fiducia interiore.",
    },
    {
      icon: UtensilsCrossed,
      title: "Cucina trapper",
      description: "Cibo semplice e condiviso. Nutrimento essenziale.",
    },
    {
      icon: Tent,
      title: "Base di sopravvivenza",
      description: "Riparo, risorse, adattamento. Solo l'essenziale.",
    },
    {
      icon: Moon,
      title: "Camminata notturna",
      description: "Riattiva i sensi nell'incertezza. Scopri il buio che non fa paura.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
              Cosa vivi durante l'esperienza
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Arti essenziali del <span className="text-forest-mid italic">bushcraft</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Non per diventare esperto. <strong className="text-foreground">Per tornare essenziale.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group relative bg-cream rounded-2xl p-8 hover:bg-forest-deep transition-colors duration-500 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-forest-deep/10 group-hover:bg-golden/20 flex items-center justify-center mb-6 transition-colors duration-500">
                  <exp.icon className="w-8 h-8 text-forest-mid group-hover:text-golden transition-colors duration-500" />
                </div>
                <h3 className="font-display text-2xl text-foreground group-hover:text-cream mb-3 transition-colors duration-500">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-cream/70 leading-relaxed transition-colors duration-500">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
