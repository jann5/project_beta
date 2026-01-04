import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Switch from "@/components/ui/sky-toggle";
import { useTheme } from "next-themes";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  GraduationCap, 
  Languages,
  Star,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export function DesignAgency() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              E
            </div>
            <span>Engleo</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#about" className="hover:text-primary transition-colors">O mnie</a>
              <a href="#offer" className="hover:text-primary transition-colors">Oferta</a>
              <a href="#location" className="hover:text-primary transition-colors">Lokalizacja</a>
              <a href="#contact" className="hover:text-primary transition-colors">Kontakt</a>
            </div>
            <div className="origin-right">
              <Switch 
                checked={theme === 'dark'} 
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} 
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                <span>Profesjonalna Nauka Języka Angielskiego</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Engleo
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Adrianna Nawrot
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Odkryj pasję do języka angielskiego. Indywidualne podejście, nowoczesne metody i przyjazna atmosfera.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="rounded-full px-8 text-lg h-12">
                  Zapisz się na zajęcia
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-12">
                  Dowiedz się więcej
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
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
              <p className="text-lg text-muted-foreground">
                Nazywam się Adrianna Nawrot i jestem założycielką Engleo. Moim celem jest sprawienie, by nauka języka angielskiego była nie tylko efektywna, ale również przyjemna.
              </p>
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
                <Button size="lg">Poznaj moją metodę</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lokalizacja</h2>
            <p className="text-muted-foreground text-lg">
              Zapraszam do mojej sali wykładowej
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-card border shadow-sm flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Adres</h3>
              <p className="text-muted-foreground">
                Sala bankietowa "Halszka"<br />
                ul. Jesionowa 15<br />
                64-550 Duszniki
              </p>
              <Button className="w-full mt-auto">
                Nawiguj
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-card border shadow-sm flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Online</h3>
              <p className="text-muted-foreground">
                Więcej informacji na stronie:<br />
                <a href="https://www.engleo.pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.engleo.pl
                </a>
              </p>
              <Button variant="outline" className="w-full mt-auto">
                Odwiedź stronę
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-card border shadow-sm flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Kontakt</h3>
              <p className="text-muted-foreground">
                Skontaktuj się ze mną<br />
                telefonicznie lub mailowo
              </p>
              <Button className="w-full mt-auto">
                Zadzwoń teraz
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-3xl bg-card border shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 bg-primary text-primary-foreground flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Napisz do mnie</h3>
                  <p className="opacity-90 mb-8">
                    Masz pytania? Chcesz umówić się na lekcję próbną? Wypełnij formularz, a odezwę się najszybciej jak to możliwe.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>kontakt@engleo.pl</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>+48 123 456 789</span>
                  </div>
                </div>
              </div>
              <div className="p-12 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Imię i nazwisko</label>
                  <Input placeholder="Jan Kowalski" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="jan@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Wiadomość</label>
                  <Textarea placeholder="Dzień dobry, chciałbym zapytać o..." className="min-h-[120px]" />
                </div>
                <Button className="w-full" size="lg">
                  Wyślij wiadomość
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Engleo Adrianna Nawrot. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}