import { TreePine } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal text-cream/60">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <TreePine className="w-6 h-6 text-golden" />
            <span className="font-display text-xl text-cream">Escape the City</span>
          </div>

          <p className="text-sm text-center md:text-right">
            Un'esperienza in natura per riscoprire un modo più presente di abitare la vita.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-cream/10 text-center text-sm">
          <p>© {new Date().getFullYear()} Escape the City. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};
