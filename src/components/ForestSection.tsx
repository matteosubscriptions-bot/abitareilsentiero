import { Reveal } from "@/hooks/useScrollReveal";
import { Flame, Droplets, Home, Apple, X, Check } from "lucide-react";

export const ForestSection = () => {
  const survivalElements = [
    { icon: Home, label: "Riparo", desc: "Protezione dagli elementi" },
    { icon: Droplets, label: "Acqua", desc: "Idratazione e vita" },
    { icon: Flame, label: "Fuoco", desc: "Calore, luce, trasformazione" },
    { icon: Apple, label: "Cibo", desc: "Nutrimento ed energia" },
  ];

  const whatItIsNot = [
    {
      title: "Non è survival",
      desc: "Nessuna prova da superare. Nessuno stress intenzionale. Il bushcraft qui non serve a dominare la natura. Serve a rallentarti, a riportarti ai sensi.",
    },
    {
      title: "Non è un'escursione o una vacanza",
      desc: "Non sei qui solo per camminare o per rilassarti. Non è turismo. Il bosco non è la meta. È il contesto in cui tornare presente.",
    },
    {
      title: "Non è un corso teorico",
      desc: "Non ti spieghiamo concetti. Non ti insegniamo modelli o framework. Qui si fa. Si vive. Si osserva.",
    },
    {
      title: "Non è un ritiro spirituale",
      desc: "Non ci sono insegnamenti da guru. Non ci sono meditazioni guidate. Nessuno ti chiede di diventare altro.",
    },
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
          {/* Header */}
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-golden font-body text-sm tracking-[0.2em] uppercase mb-4">
                Cos'è Escape the City
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                Dalla sopravvivenza
                <br />
                <span className="italic text-golden-soft">alla convivenza.</span>
              </h2>
              <p className="text-xl text-cream/70 max-w-2xl mx-auto">
                Cosa significa davvero sopravvivere
              </p>
            </div>
          </Reveal>

          {/* Survival Elements */}
          <Reveal delay={100}>
            <div className="mb-12">
              <p className="text-center text-cream/80 text-lg mb-8">
                Nella natura, la sopravvivenza si basa su quattro elementi essenziali:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {survivalElements.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-cream/5 backdrop-blur-sm rounded-xl p-5 border border-cream/10">
                    <div className="w-12 h-12 rounded-full bg-golden/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-golden" />
                    </div>
                    <div>
                      <span className="font-display text-lg block">{item.label}</span>
                      <span className="text-cream/50 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* The Shift */}
          <Reveal delay={200}>
            <div className="text-center space-y-6 text-lg text-cream/80 leading-relaxed mb-16 max-w-3xl mx-auto">
              <p>
                Questi elementi ti tengono in vita. <strong className="text-cream">Ma non ti fanno vivere.</strong>
              </p>
              <p>
                Nella vita moderna non rischiamo più di morire di freddo o di sete. Eppure viviamo in <strong className="text-cream">modalità sopravvivenza continua.</strong>
              </p>
              <p>
                Teniamo tutto insieme. Controlliamo ogni dettaglio. Funzioniamo sempre in emergenza, anche quando non ce n'è bisogno.
              </p>
              <p className="text-golden font-display text-2xl italic">
                Abbiamo dimenticato come convivere — con gli elementi, con gli altri, con noi stessi.
              </p>
            </div>
          </Reveal>

          {/* What happens in ETC */}
          <Reveal delay={300}>
            <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-cream/10 mb-16">
              <h3 className="font-display text-2xl md:text-3xl text-cream mb-6 text-center">
                In Escape the City riscopri questo passaggio:
              </h3>
              <div className="space-y-4 text-cream/80 text-lg max-w-2xl mx-auto">
                <p>Attraverso gesti semplici e antichi, <strong className="text-cream">torni presente.</strong></p>
                <p>Lasci andare il bisogno di controllare.</p>
                <p>Osservi cosa accade quando rallenti.</p>
                <p>Riconosci ciò che hai, qui, ora.</p>
                <p className="text-golden-soft italic pt-4">
                  Non sono solo tecniche di bushcraft. Sono porte di accesso alla presenza.
                </p>
              </div>
            </div>
          </Reveal>

          {/* What it is NOT */}
          <Reveal delay={100}>
            <h3 className="font-display text-3xl text-cream text-center mb-8">
              Cosa <span className="text-golden-soft italic">non</span> è
            </h3>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {whatItIsNot.map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="bg-cream/5 backdrop-blur-sm rounded-xl p-6 border border-cream/10 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <X className="w-5 h-5 text-earth-warm flex-shrink-0" />
                    <h4 className="font-display text-xl text-cream">{item.title}</h4>
                  </div>
                  <p className="text-cream/60 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* What it IS */}
          <Reveal delay={100}>
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="font-display text-3xl text-cream mb-8">
                Cosa <span className="text-golden-soft italic">è</span>
              </h3>
              <div className="space-y-6 text-lg text-cream/80 leading-relaxed">
                <p className="text-golden font-display text-2xl italic">
                  È una soglia.
                </p>
                <p>
                  Uno spazio dove smetti di tenere tutto insieme per un momento. Dove il controllo si allenta e la presenza si riattiva.
                </p>
                <p>
                  Usi le mani per accendere un fuoco, per orientarti con una mappa, per costruire qualcosa di semplice. Ma non impari solo tecniche. <strong className="text-cream">Vivi gesti.</strong>
                </p>
                <p>
                  E in quei gesti osservi come stai. Dove sei rigido. Dove sei fluido. Dove tieni tutto insieme e dove potresti lasciare andare.
                </p>
                <p>
                  Non ti diamo risposte. <strong className="text-cream">Ti diamo esperienze.</strong> Poi, insieme, osserviamo cosa emerge.
                </p>
                <p className="text-golden-soft italic font-display text-xl pt-4">
                  È una piccola iniziazione contemporanea. Un modo per attraversare una porta e tornare alla vita quotidiana un po' più presente.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
