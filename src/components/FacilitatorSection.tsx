import { Reveal } from "@/hooks/useScrollReveal";
import matteoImage from "@/assets/matteo-facilitator.jpg";

export const FacilitatorSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                Chi facilita l'esperienza
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                Conosci <span className="text-forest-mid italic">Matteo Mancini</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-sm">
                  <img
                    src={matteoImage}
                    alt="Matteo Mancini, guida ambientale e facilitatore"
                    className="w-full rounded-3xl shadow-elevated"
                  />
                  <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-golden/10 rounded-full -z-10" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-3xl text-foreground mb-2">
                    Matteo Mancini
                  </h3>
                  <p className="text-lg text-forest-mid font-body">
                    Guida ambientale · Facilitatore di esperienze in natura · Formatore esperienziale
                  </p>
                </div>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Escape the City nasce dalla mia stessa esperienza di vita.</strong>
                  </p>

                  <p>
                    Per molti anni ho lavorato nel mondo digitale e corporate, tra codice, design e progetti internazionali in Svizzera, Londra e Australia. Un ambiente stimolante, strutturato, veloce. Eppure, a un certo punto, mi sono accorto che stavo vivendo molto… senza sentire abbastanza.
                  </p>

                  <p>
                    Ho lasciato quel mondo e sono partito per un viaggio di due anni intorno al mondo. Non per fuggire, ma per togliere strati: rallentare, semplificare, tornare a un contatto diretto con la vita.
                  </p>

                  <p>
                    In quegli anni le mie "case" sono state boschi, tende, comunità, cammini lunghi. Ho vissuto esperienze di bushcraft e vita in natura, partecipato a progetti comunitari, approfondito pratiche legate alla sopravvivenza, alla relazione con l'ambiente e alla facilitazione di gruppi.
                  </p>

                  <p className="text-foreground font-semibold">
                    Quel viaggio è diventato una ricerca personale e professionale che mi ha portato a:
                  </p>

                  <ul className="space-y-2 pl-4 border-l-2 border-golden">
                    <li>• Praticare bushcraft e arti di abitare la natura in contesti diversi</li>
                    <li>• Formarmi nella facilitazione di gruppi e formazione esperienziale</li>
                    <li>• Integrare strumenti di coaching, permacultura e progettazione rigenerativa</li>
                    <li>• Lavorare con persone e gruppi in contesti naturali come spazio di apprendimento reale</li>
                  </ul>

                  <p className="pt-4">
                    Non accompagno le persone per cambiarle. Le accompagno per fare esperienza diretta, nel corpo e nei gesti, di un modo diverso di stare: con sé stesse, con gli altri, con l'ambiente.
                  </p>

                  <p className="text-sm text-forest-light italic">
                    Il bosco fa metà del lavoro. Io tengo lo spazio perché l'esperienza possa accadere — senza forzature, senza promesse, con rispetto per i tempi di ciascuno.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
