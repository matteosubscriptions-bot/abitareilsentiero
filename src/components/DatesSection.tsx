import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface DateItem {
  date: string;
  location: string;
  status: "available" | "few-spots" | "waitlist";
}

const dates: DateItem[] = [
  { date: "15-16 Marzo", location: "Toscana (Appennino)", status: "available" },
  { date: "20-21 Aprile", location: "Lazio (Monti Simbruini)", status: "available" },
  { date: "10-11 Maggio", location: "Lombardia (Alpi Orobie)", status: "few-spots" },
  { date: "12-13 Giugno", location: "Toscana (Maremma)", status: "waitlist" },
  { date: "24-25 Luglio", location: "Lazio (Reatino)", status: "waitlist" },
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
          <div className="text-center mb-16">
            <span className="inline-block text-golden font-body text-sm tracking-[0.2em] uppercase mb-4">
              Prossime date
            </span>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">
              Esperienza immersiva
            </h2>
            <p className="text-lg text-cream/70">
              Gruppo ristretto, 1-2 giorni, accompagnamento discreto. <strong className="text-cream">Posti limitati.</strong>
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {dates.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-cream/5 backdrop-blur-sm rounded-xl p-6 border border-cream/10 gap-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-golden" />
                    <span className="font-display text-xl">{item.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-cream/70">
                    <MapPin className="w-5 h-5" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <Badge className={statusConfig[item.status].className}>
                  {statusConfig[item.status].label}
                </Badge>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="forest" size="xl" asChild>
              <a href="#contact">Contattami per capire se fa per te</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
