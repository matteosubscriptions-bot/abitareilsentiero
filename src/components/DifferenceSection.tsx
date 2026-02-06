import { Leaf, Eye, Mountain } from "lucide-react";

export const DifferenceSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "Non una vacanza",
      description: "È un'immersione pratica in natura, dove impari facendo – col corpo e i sensi.",
    },
    {
      icon: Eye,
      title: "Non un ritiro spirituale",
      description: "Nessuna teoria. Solo esperienza diretta che rende visibile l'automatico.",
    },
    {
      icon: Mountain,
      title: "Non un corso teorico",
      description: "Uscire dalla città crea uno spazio dove puoi finalmente osservarti.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
              Perché fa la differenza
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              Escape the City è qualcosa di{" "}
              <span className="text-forest-mid italic">diverso</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-forest-deep/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-forest-mid" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
