import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SimpleParticles } from "@/components/ui/simple-particles";
import { Star, CheckCircle2 } from "lucide-react";

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SimpleParticles />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/about-adrianna.jpg"
                alt="Adrianna Nawrot - Lektorka języka angielskiego"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
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
                Jestem lektorką i trenerką języka angielskiego z ponad 15-letnim doświadczeniem w edukacji szkolnej i biznesowej. Uczę dzieci, młodzież oraz dorosłych, pracując zarówno z uczniami indywidualnymi, jak i grupami.
              </p>
              <p>
                Jestem absolwentką Filologii Angielskiej z przygotowaniem pedagogicznym Uniwersytetu im. Adama Mickiewicza w Poznaniu oraz Stosunków Międzynarodowych na Uniwersytecie Ekonomicznym w Poznaniu. Ukończyłam także Szkołę Tłumaczy i Języków Obcych UAM (tłumaczenia ustne symultaniczne i konsekutywne).
              </p>
              <p>
                Pracowałam jako nauczycielka i egzaminatorka maturalna w liceum ogólnokształcącym. Od kilkunastu lat prowadzę kursy językowe oraz szkolenia dla firm, w tym dla kadry menedżerskiej. Współpracowałam m.in. z firmami SKANSKA, NCC i WAVIN.
              </p>
              <p>
                Obecnie współpracuję również z międzynarodowym wydawnictwem MM Publications Ltd, gdzie tworzę rozkłady materiału, próbne egzaminy, materiały dodatkowe do podręczników oraz współtworzę publikacje edukacyjne oraz podręczniki. Zajmuję się także tłumaczeniami i korektą merytoryczną materiałów dydaktycznych.
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
