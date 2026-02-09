import { Reveal } from "@/hooks/useScrollReveal";
import { Quote, Play } from "lucide-react";

const testimonials = [
  {
    quote: "Ho riscoperto il mio corpo dopo anni di apnee urbane. Indimenticabile.",
    author: "Marco",
    location: "Milano",
  },
  {
    quote: "Non un corso, una rinascita essenziale.",
    author: "Laura",
    location: "Roma",
  },
];

const videoTestimonials = [
  {
    name: "Alessandro",
    location: "Torino",
    caption: "\"Il fuoco mi ha insegnato la pazienza che cercavo da anni.\"",
    videoUrl: "#",
  },
  {
    name: "Chiara",
    location: "Bologna",
    caption: "\"Non pensavo che il silenzio potesse dire così tanto.\"",
    videoUrl: "#",
  },
  {
    name: "Federico",
    location: "Firenze",
    caption: "\"Sono tornato a casa diverso. Più presente, più leggero.\"",
    videoUrl: "#",
  },
  {
    name: "Giulia",
    location: "Milano",
    caption: "\"La camminata notturna ha cambiato il mio modo di vedere il buio.\"",
    videoUrl: "#",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
                Cosa dicono
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                Voci dal <span className="text-forest-mid italic">bosco</span>
              </h2>
            </div>
          </Reveal>

          {/* Written testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Reveal key={index} delay={index * 150}>
                <div className="relative bg-background rounded-3xl p-10 shadow-soft h-full">
                  <Quote className="w-10 h-10 text-golden/30 mb-6" />
                  <blockquote className="font-display text-2xl text-foreground italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-forest-deep flex items-center justify-center text-cream font-display text-lg">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{testimonial.author}</span>
                      <span className="text-muted-foreground">, {testimonial.location}</span>
                    </div>
                  </footer>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Video testimonials */}
          <Reveal>
            <h3 className="font-display text-3xl text-foreground text-center mb-10">
              Video <span className="text-forest-mid italic">testimonianze</span>
            </h3>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTestimonials.map((video, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow duration-300">
                  {/* Video placeholder */}
                  <div className="aspect-[9/16] bg-forest-deep/90 relative flex items-center justify-center cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="w-16 h-16 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-cream/30 transition-colors">
                      <Play className="w-7 h-7 text-cream ml-1" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-cream/90 text-sm font-display italic leading-snug">
                        {video.caption}
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="font-semibold text-foreground text-sm">{video.name}</span>
                    <span className="text-muted-foreground text-sm">, {video.location}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
