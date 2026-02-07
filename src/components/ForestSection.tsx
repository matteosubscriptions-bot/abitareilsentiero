import { Reveal } from "@/hooks/useScrollReveal";
import { Volume2, Compass, Users, TreePine } from "lucide-react";

export const ForestSection = () => {
  const teachings = [
    { icon: Volume2, text: "Ascoltare il silenzio" },
    { icon: Compass, text: "Adattarti all'imprevisto" },
    { icon: Users, text: "Collaborare davvero" },
    { icon: TreePine, text: "Fidarti del corpo" },
  ];

  return (
    <section className="py-24 md:py-32 bg-forest-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--golden)) 1px, transparent 1px),
                           radial-gradient(circle at 80% 50%, hsl(var(--golden)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-golden font-body text-sm tracking-[0.2em] uppercase mb-4">
                Il bosco come maestro
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Nel bosco non deleghi,
                <br />
                <span className="italic text-golden-soft">non acceleri, non fingi.</span>
              </h2>
              <p className="text-xl text-cream/70 max-w-2xl mx-auto">
                È il luogo perfetto per riscoprire ciò che hai dimenticato.
                La natura insegna con l'esperienza diretta.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {teachings.map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="flex items-center gap-5 bg-cream/5 backdrop-blur-sm rounded-xl p-6 border border-cream/10 hover:bg-cream/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-golden/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-golden" />
                  </div>
                  <span className="font-display text-xl md:text-2xl">{item.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
