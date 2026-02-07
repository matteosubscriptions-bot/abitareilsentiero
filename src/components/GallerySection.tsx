import { useState } from "react";
import { X } from "lucide-react";
import heroForest from "@/assets/hero-forest.jpg";
import campfireForest from "@/assets/campfire-forest.jpg";
import forestTrail from "@/assets/forest-trail.jpg";
import cookingOutdoor from "@/assets/cooking-outdoor.jpg";
import nightWalk from "@/assets/night-walk.jpg";
import compassNavigation from "@/assets/compass-navigation.jpg";
import shelterBushcraft from "@/assets/shelter-bushcraft.jpg";
import groupForest from "@/assets/group-forest.jpg";
import sensoryTouch from "@/assets/sensory-touch.jpg";

const galleryImages = [
  { src: forestTrail, alt: "Sentiero nella foresta all'alba", span: "row-span-2" },
  { src: campfireForest, alt: "Fuoco da campo nella nebbia", span: "" },
  { src: sensoryTouch, alt: "Contatto sensoriale con la natura", span: "" },
  { src: cookingOutdoor, alt: "Cucina trapper all'aperto", span: "row-span-2" },
  { src: shelterBushcraft, alt: "Rifugio bushcraft nel bosco", span: "" },
  { src: nightWalk, alt: "Camminata notturna con la luna", span: "" },
  { src: groupForest, alt: "Gruppo in cerchio nella radura", span: "md:col-span-2" },
  { src: heroForest, alt: "Foresta nebbiosa al mattino", span: "" },
];

export const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section className="py-24 md:py-32 bg-forest-deep">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-golden font-body text-sm tracking-[0.2em] uppercase mb-4">
              Momenti dal bosco
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight">
              L'esperienza in <span className="italic text-golden-soft">immagini</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto auto-rows-[200px] md:auto-rows-[240px]">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${img.span}`}
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
