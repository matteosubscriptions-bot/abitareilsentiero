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
    question: "Chi può partecipare all'evento?",
    answer:
      "L'esperienza è aperta a tutti coloro che vivono in un ambiente urbano o strutturato e cercano qualcosa di essenziale e reale. Non importa l'età: conta la disponibilità a metterti in gioco, a camminare nel bosco e a stare in gruppo. Se hai dubbi sulla tua idoneità, scrivimi e ne parliamo direttamente.",
  },
  {
    question: "Dove si svolgerà il ritiro?",
    answer:
      "Ogni edizione di Escape the City si svolge in un territorio diverso italiano, scelto per l'autenticità del paesaggio e l'opportunità di apprendimento. Le prossime date si terranno in Toscana, Lazio e Lombardia, in zone montane lontane dal rumore della città. Tutte le coordinate specifiche e le indicazioni di viaggio vengono comunicate al momento della conferma della prenotazione.",
  },
  {
    question: "Cosa è incluso nel prezzo?",
    answer:
      "Nel prezzo è incluso l'accompagnamento completo durante l'esperienza, tutte le attività di bushcraft, il vitto (pasti semplici e condivisi preparati insieme), il riparo e tutto ciò che serve per la sopravvivenza essenziale nel bosco. Non è incluso il viaggio per raggiungere il luogo della riunione.",
  },
  {
    question: "Cosa devo portare con me?",
    answer:
      "Dipende dalla stagione e dalla durata, ma generalmente: indumenti a strati (il bosco è sempre fresco), scarpe da trekking robuste, uno zaino, un sacco a pelo, una torcia, articoli da toilette essenziali e una mente aperta. Ti fornirò una lista completa una volta confermata la tua iscrizione, personalizzata in base alle condizioni meteorologiche previste.",
  },
  {
    question: "È necessario essere in forma per partecipare?",
    answer:
      "Non devi essere un atleta. L'esperienza è costruita intorno al movimento consapevole e all'adattamento ai tuoi ritmi. Se hai preoccupazioni fisiche o limitazioni di mobilità, condividile con me al momento della prenotazione: insieme valuteremo se l'esperienza fa per te e come adattarla.",
  },
  {
    question: "Posso partecipare se non ho mai fatto esperienze di questo tipo?",
    answer:
      "Assolutamente sì. Anzi, non è un'esperienza pensata per esperti di bushcraft. È un laboratorio dove le pratiche — accendere un fuoco, orientarsi, camminare — diventano strumenti per osservarti. L'assenza di esperienza previa non è un ostacolo; è spesso un vantaggio perché non hai abitudini consolidate da cui distaccarti.",
  },
  {
    question: "Come posso prenotare il mio posto?",
    answer:
      "Puoi contattarmi direttamente via email (info@escapethecity.it) o dal form nella sezione 'Contatti'. In entrambi i casi, parliamo per capire insieme se l'esperienza è adatta a te e accertare i dettagli pratici. Le iscrizioni sono aperte fino a un mese prima della data, salvo esaurimento posti.",
  },
  {
    question: "Qual è la politica di cancellazione?",
    answer:
      "Comprendo che piani cambiano. Se cancelli con almeno 14 giorni di preavviso, ricevi il 100% del rimborso. Cancellazioni con meno di 14 giorni comportano una perdita del 50%. Se la cancellazione avviene meno di 7 giorni prima, il rimborso non è possibile. Situazioni eccezionali possono essere discusse direttamente.",
  },
  {
    question: "Il ritiro si svolge anche in caso di maltempo?",
    answer:
      "Sì, il bosco non si ferma per il maltempo. L'esperienza è disegnata per insegnarti ad adattarti, non a fuggire. Pioggia, freddo e vento fanno parte dell'insegnamento. Ovviamente, nel caso di condizioni davvero estreme (fulmini, neve abbondante) che rendessero pericoloso stare al campo, avremo piani di ripiego o posticipo della data.",
  },
  {
    question: "Posso regalare l'esperienza a qualcuno?",
    answer:
      "Certo. È un dono bellissimo. Puoi contattarmi per richiedere un voucher o un certificato regalo. La persona che riceve il dono potrà poi mettersi in contatto con me per scegliere una data e discutere gli ultimi dettagli insieme.",
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

          <Reveal delay={600}>
            <div className="mt-12 p-8 bg-golden/5 rounded-2xl border border-golden/20">
              <p className="text-center text-muted-foreground">
                Non trovi la risposta che cerchi?{" "}
                <a
                  href="mailto:info@escapethecity.it"
                  className="font-semibold text-forest-mid hover:text-forest-deep transition-colors"
                >
                  Contattami direttamente
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
