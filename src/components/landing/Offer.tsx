import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, User, Users, CheckCircle2 } from "lucide-react";

export default function Offer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offer" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-base font-bold mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
            <Sparkles className="w-5 h-5" />
            <span>Pierwsza lekcja (60 min) całkowicie ZA DARMO!</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Oferta i Cennik</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wybierz formę nauki, która najbardziej Ci odpowiada. 
            Oferuję zajęcia indywidualne oraz grupowe, zarówno online jak i stacjonarnie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Individual Option */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-card border rounded-3xl p-8 shadow-lg relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <User className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Zajęcia Indywidualne</h3>
              <p className="text-muted-foreground mb-6">
                Pełne skupienie na Twoich potrzebach. Idealne dla osób ceniących prywatność i własne tempo nauki.
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">-- PLN</span>
                <span className="text-muted-foreground">/ 60 min</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Dostępne formy:</div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Online (Google Meet / Zoom)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Stacjonarnie (Sala w Dusznikach)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Materiały w cenie</span>
                  </li>
                </ul>
              </div>
              <Button className="w-full" variant="outline" onClick={() => scrollToSection('contact')}>Wybieram Indywidualne</Button>
            </div>
          </motion.div>

          {/* Group Option */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-card border rounded-3xl p-8 shadow-lg relative overflow-hidden group border-primary/20"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Zajęcia Grupowe</h3>
              <p className="text-muted-foreground mb-6">
                Nauka w małych grupach. Motywacja, interakcja i niższa cena przy zachowaniu wysokiej jakości.
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">-- PLN</span>
                <span className="text-muted-foreground">/ 60 min</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Dostępne formy:</div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Online (Google Meet / Zoom)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Stacjonarnie (Sala w Dusznikach)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Małe grupy (max 4-6 osób)</span>\n                  </li>
                </ul>
              </div>
              <Button className="w-full" onClick={() => scrollToSection('contact')}>Wybieram Grupowe</Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            * Pierwsze zajęcia próbne (60 min) są całkowicie <span className="text-primary font-bold">darmowe</span>!
          </p>
        </div>
      </div>
    </section>
  );
}
