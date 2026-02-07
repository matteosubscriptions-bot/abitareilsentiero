import groupForest from "@/assets/group-forest.jpg";

export const ImageBreakSection = () => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <img
        src={groupForest}
        alt="Gruppo seduto in cerchio in una radura nella foresta al mattino"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-display text-3xl md:text-5xl text-cream text-center italic max-w-3xl px-6 drop-shadow-lg">
          "Il bosco fa metà del lavoro."
        </p>
      </div>
    </section>
  );
};
