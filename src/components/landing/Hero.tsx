import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SimpleParticles } from "@/components/ui/simple-particles";
import { Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70">
          <SimpleParticles />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-pulse relative z-10">
              <Sparkles className="w-4 h-4" />
              <span className="font-bold">PIERWSZA LEKCJA (60 MIN) GRATIS!</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Engleo
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent text-2xl md:text-4xl font-medium block mt-2">
                Adrianna Nawrot
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Odkryj pasję do języka angielskiego. Indywidualne podejście, nowoczesne metody i przyjazna atmosfera.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="rounded-full px-8 text-lg h-12 shadow-lg shadow-primary/20" onClick={() => scrollToSection('contact')}>
                Odbierz darmową lekcję
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-12" onClick={() => scrollToSection('about')}>
                Dowiedz się więcej
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
