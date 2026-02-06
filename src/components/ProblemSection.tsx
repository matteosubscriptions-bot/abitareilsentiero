export const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
            Il problema che riconosci
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] mb-8">
            La maggior parte delle persone non è infelice.
            <br />
            <span className="text-forest-mid italic">È disconnessa.</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Vive in <strong className="text-foreground">modalità sopravvivenza</strong>: 
              gestisce, organizza, resiste. Funziona, ma non sente.
            </p>
            <p>
              Il corpo ignorato, i sensi spenti, le relazioni funzionali.
            </p>
            <p className="text-forest-deep font-medium text-2xl font-display pt-4">
              Non manca qualcosa. Manca spazio per stare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
