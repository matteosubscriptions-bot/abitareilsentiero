import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TreePine, Send, CalendarCheck } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";
import { toast } from "@/hooks/use-toast";
import campfireForest from "@/assets/campfire-forest.jpg";

export const CTASection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: "Compila tutti i campi", variant: "destructive" });
      return;
    }

    const subject = encodeURIComponent(`Richiesta da ${name} – Escape The City`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`
    );
    window.location.href = `mailto:info@escapethecity.it?subject=${subject}&body=${body}`;

    toast({ title: "Messaggio pronto!", description: "Si aprirà il tuo client email." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={campfireForest} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-golden/20 backdrop-blur-sm mb-8">
                <TreePine className="w-10 h-10 text-golden" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
                Abita il tuo <span className="text-golden-soft italic">sentiero</span>
              </h2>
              <p className="text-xl md:text-2xl text-cream/80 mb-2 font-display">
                Dalla sopravvivenza alla convivenza.
              </p>
              <p className="text-lg text-cream/60">
                Attraverso il bosco. Da portare nella vita.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <Reveal delay={100}>
              <form
                onSubmit={handleSubmit}
                className="bg-cream/5 backdrop-blur-md rounded-2xl p-8 border border-cream/10 space-y-5"
              >
                <h3 className="font-display text-2xl text-cream mb-2">Scrivimi</h3>
                <p className="text-cream/60 text-sm mb-4">Rispondo personalmente entro 24 ore</p>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-cream/80">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Il tuo nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40 focus-visible:ring-golden/50"
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-cream/80">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="la.tua@email.it"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40 focus-visible:ring-golden/50"
                    maxLength={255}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-cream/80">Messaggio</Label>
                  <Textarea
                    id="message"
                    placeholder="Raccontami cosa cerchi in questa esperienza..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40 focus-visible:ring-golden/50 min-h-[120px]"
                    maxLength={1000}
                  />
                </div>

                <Button variant="forest" size="lg" type="submit" className="w-full group">
                  <Send className="w-4 h-4 mr-2" />
                  Invia messaggio
                </Button>
              </form>
            </Reveal>

            {/* Calendly Card */}
            <Reveal delay={200}>
              <div className="bg-cream/5 backdrop-blur-md rounded-2xl p-8 border border-cream/10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-display text-2xl text-cream mb-2">Prenota una call</h3>
                  <p className="text-cream/60 text-sm mb-6">
                    Preferisci parlarne a voce? Prenota una chiamata conoscitiva gratuita di 15 minuti.
                  </p>

                  <div className="space-y-4 text-cream/70 text-sm mb-8">
                    <div className="flex items-start gap-3">
                      <span className="text-golden font-display text-lg leading-none mt-0.5">01</span>
                      <p>Ci conosciamo e capiamo se l'esperienza fa per te</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-golden font-display text-lg leading-none mt-0.5">02</span>
                      <p>Ti racconto i dettagli pratici e rispondo alle tue domande</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-golden font-display text-lg leading-none mt-0.5">03</span>
                      <p>Nessun impegno — solo una chiacchierata sincera</p>
                    </div>
                  </div>
                </div>

                <Button variant="forestOutline" size="lg" className="w-full group" asChild>
                  <a
                    href="https://calendly.com/tuo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CalendarCheck className="w-5 h-5 mr-2" />
                    Scegli data e ora
                  </a>
                </Button>

                <p className="text-center text-cream/40 text-xs mt-4">
                  Gratuita · 15 min · Senza impegno
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
