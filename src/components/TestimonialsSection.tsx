import { Quote } from "lucide-react";

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

export const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-forest-light font-body text-sm tracking-[0.2em] uppercase mb-4">
              Cosa dicono
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              Voci dal <span className="text-forest-mid italic">bosco</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-background rounded-3xl p-10 shadow-soft"
              >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
