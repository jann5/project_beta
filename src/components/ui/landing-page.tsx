import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Switch from "@/components/ui/sky-toggle";
import { LocationMap } from "@/components/ui/expand-map";
import { AntiGravityCanvas } from "@/components/ui/particle-effect-for-hero";
import { useTheme } from "next-themes";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  GraduationCap, 
  Languages,
  Star,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Users,
  Sparkles,
  User
} from "lucide-react";
import { PortfolioGallery } from "@/components/ui/portfolio-gallery";
import { ShareDialog } from "@/components/ui/share-dialog";

export function DesignAgency() {
  const { theme, setTheme } = useTheme();
  const testimonials = useQuery(api.testimonials.get);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <img 
              src="https://harmless-tapir-303.convex.cloud/api/storage/f5d797b2-34f6-4897-ad1d-c045409fd9bb" 
              alt="Engleo Logo" 
              className="h-10 w-auto object-contain"
            />
            <span>Engleo</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-primary transition-colors">O mnie</a>
              <a href="#offer" onClick={(e) => { e.preventDefault(); scrollToSection('offer'); }} className="hover:text-primary transition-colors">Oferta</a>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="hover:text-primary transition-colors">Galeria</a>
              <a href="#location" onClick={(e) => { e.preventDefault(); scrollToSection('location'); }} className="hover:text-primary transition-colors">Lokalizacja</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-primary transition-colors">Kontakt</a>
            </div>
            <div className="flex items-center gap-2">
              <ShareDialog />
              <div className="origin-right">
                <Switch 
                  checked={theme === 'dark'} 
                  onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} 
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <AntiGravityCanvas />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-pulse">
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

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Opinie</h2>
              <p className="text-muted-foreground text-lg">
                Co mówią moi uczniowie i klienci
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      {testimonial.role && (
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Offer / Pricing Section */}
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
                      <span>Małe grupy (max 4-6 osób)</span>
                    </li>
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

      {/* Gallery Section */}
      <PortfolioGallery 
        title="Galeria z zajęć"
        archiveButton={{
          text: "Zobacz całą galerię",
          href: "/gallery"
        }}
        images={[
          {
            src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80",
            alt: "Zajęcia grupowe",
          },
          {
            src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=600&fit=crop&q=80",
            alt: "Materiały dydaktyczne",
          },
          {
            src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80",
            alt: "Sala lekcyjna",
          },
          {
            src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80",
            alt: "Nauka online",
          },
          {
            src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop&q=80",
            alt: "Certyfikaty",
          },
          {
            src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80",
            alt: "Nauczanie indywidualne",
          },
          {
            src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop&q=80",
            alt: "Biblioteczka",
          },
          {
            src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&q=80",
            alt: "E-learning",
          },
        ]}
      />

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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <LocationMap />

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
              <Button className="w-full mt-auto" onClick={() => window.location.href = 'tel:+48123456789'}>
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
                  <h3 className="text-3xl font-bold mb-2">Napisz do mnie</h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-medium mb-6 opacity-90">
                    <span>lub zadzwoń:</span>
                    <a href="tel:+48123456789" className="hover:underline flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full transition-colors hover:bg-white/20">
                      <Phone className="w-4 h-4" />
                      +48 123 456 789
                    </a>
                  </div>
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