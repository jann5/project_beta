import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export default function Contact() {
  const sendMessage = useMutation(api.messages.send);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async () => {
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Proszę wypełnić wszystkie pola.");
      return;
    }

    setIsSubmitting(true);
    try {
      await sendMessage({
        name: contactForm.name,
        email: contactForm.email,
        content: contactForm.message,
      });
      toast.success("Wiadomość została wysłana! Skontaktuję się wkrótce.");
      setContactForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Wystąpił błąd podczas wysyłania wiadomości.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-card border shadow-lg flex flex-col items-center text-center gap-6 h-full justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Phone className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-2">Kontakt</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Skontaktuj się ze mną<br />
                telefonicznie lub mailowo
              </p>
              <div className="space-y-4 mb-8 text-left inline-block">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>kontakt@engleo.pl</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+48 123 456 789</span>
                </div>
              </div>
            </div>
            <Button size="lg" className="w-full max-w-xs rounded-full" onClick={() => window.location.href = 'tel:+48123456789'}>
              Zadzwoń teraz
            </Button>
          </motion.div>

          {/* Contact Form Card */}
          <div className="rounded-3xl bg-card border shadow-lg overflow-hidden p-8 md:p-10">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">Napisz do mnie</h3>
              <p className="text-muted-foreground">
                Masz pytania? Chcesz umówić się na lekcję próbną? Wypełnij formularz.
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Imię i nazwisko</label>
                <Input 
                  placeholder="Jan Kowalski" 
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  placeholder="jan@example.com" 
                  type="email" 
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Wiadomość</label>
                <Textarea 
                  placeholder="Dzień dobry, chciałbym zapytać o..." 
                  className="min-h-[120px]" 
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                />
              </div>
              <Button 
                className="w-full rounded-full" 
                size="lg"
                onClick={handleContactSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
