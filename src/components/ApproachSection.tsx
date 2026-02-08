import { Reveal } from "@/hooks/useScrollReveal";
import { Footprints, Eye, Hand, TreePine } from "lucide-react";

const tools = [
  { icon: Footprints, label: "Cammino" },
  { icon: Eye, label: "Osservazione" },
  { icon: Hand, label: "Gesti essenziali" },
  { icon: TreePine, label: "Natura come spazio vivo" },
];

export const ApproachSection = () => {
  return (
    <section id="come-lavoriamo" className="py-24 md:py-32 bg-forest-deep text-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-golden font-body text-sm tracking-[0.2em] uppercase mb-4">
                Il nostro approccio
              </span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                Come <span className="text-golden-soft italic">lavoriamo</span>
              </h2>
              <p className="text-lg text-cream/70 max-w-2xl mx-auto">
                Esperienza prima delle spiegazioni. Corpo prima delle idee. Relazione prima della performance.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tools.map((tool, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="bg-cream/5 backdrop-blur-sm rounded-xl p-6 text-center border border-cream/10">
                  <tool.icon className="w-8 h-8 text-golden mx-auto mb-4" />
                  <span className="font-display text-lg">{tool.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="space-y-6 text-center max-w-2xl mx-auto">
              <p className="font-display text-2xl text-cream/90 italic leading-relaxed">
                "Il bosco non è uno sfondo. È parte attiva dell'esperienza."
              </p>
              <p className="text-cream/60 text-lg">
                Non insegniamo cosa pensare. Creiamo contesti in cui diventa possibile accorgersi.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
