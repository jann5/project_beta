import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AntiGravityCanvas } from "@/components/ui/particle-effect-for-hero";
import { Languages, Star, CheckCircle2 } from "lucide-react";

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
          <AntiGravityCanvas />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
              <Languages className="w-32 h-32 text-primary/40" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <div>
                  <div className="font-bold text-lg">5.0/5.0</div>
                  <div className="text-sm text-muted-foreground">Opinie uczniów</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">O mnie</h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                Jestem absolwentką studiów dziennych Filologii Angielskiej z przygotowaniem pedagogicznym Uniwersytetu im. Adama Mickiewicza w Poznaniu oraz Uniwersytetu Ekonomicznego w Poznaniu (Stosunki Międzynarodowe).
              </p>
              <p>
                Ukończyłam również Szkołę Tłumaczy i Języków Obcych na Uniwersytecie im. Adama Mickiewicza w Poznaniu. Specjalizacja to tłumaczenia ustne symultaniczne oraz konsekutywne.
              </p>
              <p>
                Doświadczenie zdobywałam jako nauczyciel oraz egzaminator maturalny w liceum ogólnokształcącym (Zespół Szkół Sióstr Urszulanek SJK w Pniewach).
              </p>
              <p>
                Od kilkunastu lat uczę języka angielskiego jako lektor w szkole językowej. Prowadzę również szkolenia językowe dla kadry zarządzającej oraz kursy grupowe dla pracowników firm.
              </p>
              <p>
                Od wielu lat współpracuję z takimi firmami jak SKANSKA, NCC oraz WAVIN (analiza potrzeb szkoleniowych, opracowanie i przeprowadzenie szkolenia językowego dla różnych stanowisk kierowniczych oraz tłumaczenia tekstów specjalistycznych).
              </p>
              <p>
                Tłumaczę książki dla wydawnict literatury angielskiej.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Indywidualne podejście do każdego ucznia",
                "Przygotowanie do egzaminów i certyfikatów",
                "Konwersacje i język biznesowy",
                "Zajęcia dla dzieci, młodzieży i dorosłych"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button size="lg" onClick={() => scrollToSection('offer')}>Poznaj moją metodę</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
