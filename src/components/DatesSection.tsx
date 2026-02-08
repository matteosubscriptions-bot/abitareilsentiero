import { Reveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface DateItem {
  date: string;
  location: string;
  pathway: string;
  status: "available" | "few-spots" | "waitlist";
}

const dates: DateItem[] = [
  { date: "15-16 Marzo", location: "Toscana (Appennino)", pathway: "Dalla sopravvivenza all'abitare", status: "available" },
  { date: "22-23 Marzo", location: "Lazio (Monti Simbruini)", pathway: "Leggere la natura", status: "available" },
  { date: "5-6 Aprile", location: "Lombardia (Alpi Orobie)", pathway: "Dare forma", status: "few-spots" },
  { date: "20-21 Aprile", location: "Toscana (Maremma)", pathway: "Sulla stessa traccia", status: "available" },
  { date: "10-11 Maggio", location: "Lazio (Reatino)", pathway: "Dalla sopravvivenza all'abitare", status: "waitlist" },
];

const statusConfig = {
  available: { label: "Disponibile", className: "bg-forest-mid text-cream" },
  "few-spots": { label: "Pochi posti", className: "bg-golden text-charcoal" },
  waitlist: { label: "Lista d'attesa", className: "bg-earth-warm text-cream" },
};

export const DatesSection = () => {
  return (
    <section id="dates" className="py-24 md:py-32 bg-forest-deep text-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-golden font-body text-sm tracking-[0.2em] uppercase mb-4">
                Prossimi eventi
              </span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">
                Esperienze in programma
              </h2>
              <p className="text-lg text-cream/70">
                Gruppo ristretto, 1-2 giorni, accompagnamento discreto. <strong className="text-cream">Posti limitati.</strong>
              </p>
            </div>
          </Reveal>

          <div className="space-y-4 mb-12">
            {dates.map((item, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-cream/5 backdrop-blur-sm rounded-xl p-6 border border-cream/10 gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-golden" />
                      <span className="font-display text-xl">{item.date}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 ml-8">
                      <div className="flex items-center gap-2 text-cream/70">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                      <span className="text-golden-soft text-sm font-display italic">{item.pathway}</span>
                    </div>
                  </div>
                  <Badge className={statusConfig[item.status].className}>
                    {statusConfig[item.status].label}
                  </Badge>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="text-center">
              <Button variant="forest" size="xl" asChild>
                <a href="#contact">Contattaci per saperne di più</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
