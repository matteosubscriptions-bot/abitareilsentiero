import { Reveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

interface DateItem {
  date: string;
  location: string;
  spots: number;
  status: "available" | "few-spots" | "waitlist";
}

const dates: DateItem[] = [
  { date: "15-16 Marzo", location: "Appennino Tosco-Emiliano", spots: 12, status: "available" },
  { date: "20-21 Aprile", location: "Appennino Centrale", spots: 8, status: "few-spots" },
  { date: "10-11 Maggio", location: "Appennino Ligure", spots: 12, status: "available" },
  { date: "12-13 Giugno", location: "Appennino Tosco-Emiliano", spots: 0, status: "waitlist" },
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
                Prossime date
              </span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">
                Prossime <span className="italic text-golden-soft">date</span>
              </h2>
              <p className="text-lg text-cream/70">
                Ogni esperienza: <strong className="text-cream">massimo 12 persone.</strong>
              </p>
            </div>
          </Reveal>

          <div className="space-y-4 mb-12">
            {dates.map((item, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-cream/5 backdrop-blur-sm rounded-xl p-6 border border-cream/10 gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-golden" />
                      <span className="font-display text-xl">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-cream/70">
                      <MapPin className="w-5 h-5" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cream/50 text-sm">
                      <Users className="w-4 h-4" />
                      <span>1 giorno e mezzo nel bosco</span>
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
            <div className="text-center space-y-4">
              <Button variant="forest" size="xl" asChild>
                <a href="#contact">Contattami per verificare disponibilità</a>
              </Button>
              <p className="text-cream/50 text-sm">
                Cosa include: vitto, alloggio, guida, materiali (dettagli dopo il contatto)
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
