import { Eye, Ear, Hand, Wind, Heart, Users } from "lucide-react";

export const SensorySection = () => {
  const senses = [
    { icon: Eye, label: "Vista" },
    { icon: Hand, label: "Tatto" },
    { icon: Ear, label: "Udito" },
    { icon: Wind, label: "Olfatto" },
  ];

  return (
    <section className="py-24 md:py-32 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                Esperienza sensoriale e relazionale
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
                Oltre alle pratiche: <span className="text-forest-mid italic">silenzi e ascolto</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Momenti individuali e di gruppo. Ascolto sensoriale profondo. 
                Perché sopravvivere soli è faticoso, ma <strong className="text-foreground">convivere è possibile</strong>.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {senses.map((sense, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-forest-deep flex items-center justify-center border-2 border-cream-dark"
                    >
                      <sense.icon className="w-5 h-5 text-golden" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Vista, Tatto, Udito, Olfatto
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-background rounded-3xl p-10 shadow-elevated">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-golden/20 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-golden" />
                  </div>
                  <div className="w-14 h-14 rounded-full bg-forest-deep/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-forest-mid" />
                  </div>
                </div>
                <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-snug">
                  "Sopravvivere soli è faticoso.
                  <br />
                  Convivere è possibile."
                </blockquote>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-forest-light/10 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-golden/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
