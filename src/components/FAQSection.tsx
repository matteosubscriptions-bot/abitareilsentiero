import { Reveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Quanto costa?",
    answer: "Voglio prima capire se l'esperienza fa per te. Poi affrontiamo questo aspetto nella chiamata.",
  },
  {
    question: "Dove si svolge esattamente?",
    answer: "La location specifica ti viene comunicata una volta allineati. Si tratta di luoghi nel bosco dell'Appennino, lontani da centri abitati.",
  },
  {
    question: "Che livello fisico serve?",
    answer: "Nessuna preparazione atletica. Non è una prova di resistenza. Le attività sono accessibili a chiunque possa camminare e usare le mani.",
  },
  {
    question: "Vengo da solo/a?",
    answer: "Sì, la maggior parte delle persone arriva da sola. Il gruppo si forma lì.",
  },
  {
    question: "Ci sono momenti di condivisione o è tutto in silenzio?",
    answer: "Escape the City alterna momenti di silenzio e momenti di parola. Non è isolamento assoluto né cerchio di condivisione forzato. È un equilibrio naturale.",
  },
  {
    question: "Cosa devo portare?",
    answer: "Una volta confermata la partecipazione, ti invio una lista dettagliata dell'equipaggiamento necessario (abbigliamento adeguato, scarpe da trekking, sacco a pelo se ce l'hai).",
  },
  {
    question: "E se piove?",
    answer: "L'esperienza si svolge ugualmente. La natura non si ferma con la pioggia, e nemmeno noi. Ti chiediamo solo di avere abbigliamento adeguato.",
  },
  {
    question: "Posso usare il telefono?",
    answer: "Puoi tenerlo spento nello zaino per emergenze. L'esperienza richiede di staccarsi dai dispositivi.",
  },
  {
    question: "È sicuro?",
    answer: "Sì. Ogni esperienza è accompagnata da guide con formazione specifica e assicurazione. Le attività non sono estreme né pericolose.",
  },
  {
    question: "Cosa include concretamente?",
    answer: "Alloggio (rifugio/bivacco in bosco), tutti i pasti (da venerdì sera a domenica pranzo), guida esperta per tutta la durata, materiali necessari per le attività, assicurazione.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                Domande frequenti
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                Tutto quello che ti <span className="text-forest-mid italic">serve sapere</span>
              </h2>
            </div>
          </Reveal>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <Reveal key={index} delay={index * 60}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-forest-light/20 rounded-xl overflow-hidden bg-background shadow-soft data-[state=open]:shadow-elevated transition-shadow duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 hover:bg-forest-deep/5 transition-colors duration-300 [&>svg]:text-forest-mid">
                    <span className="font-display text-lg text-foreground text-left">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-forest-light/10">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
