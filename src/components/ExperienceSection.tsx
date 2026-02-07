import campfireImg from "@/assets/campfire-forest.jpg";
import compassImg from "@/assets/compass-navigation.jpg";
import cookingImg from "@/assets/cooking-outdoor.jpg";
import shelterImg from "@/assets/shelter-bushcraft.jpg";
import nightWalkImg from "@/assets/night-walk.jpg";

export const ExperienceSection = () => {
  const experiences = [
    {
      image: campfireImg,
      title: "Accensione del fuoco",
      description: "Attenzione e relazione con gli elementi. Un gesto primordiale di presenza.",
    },
    {
      image: compassImg,
      title: "Orientamento",
      description: "Leggere il territorio per ritrovare fiducia interiore.",
    },
    {
      image: cookingImg,
      title: "Cucina trapper",
      description: "Cibo semplice e condiviso. Nutrimento essenziale.",
    },
    {
      image: shelterImg,
      title: "Base di sopravvivenza",
      description: "Riparo, risorse, adattamento. Solo l'essenziale.",
    },
    {
      image: nightWalkImg,
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
                className={`group relative rounded-2xl overflow-hidden ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-cream mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
