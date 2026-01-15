import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, ArrowRight, Copy, Check, PhoneCall } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Contact() {
  const sendMessage = useMutation(api.messages.send);
  const [copied, setCopied] = useState(false);
  const phoneNumber = "502 296 572";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ''));
    setCopied(true);
    toast.success("Numer telefonu został skopiowany!");
    setTimeout(() => setCopied(false), 2000);
  };

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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      toast.error("Proszę podać prawidłowy adres email.");
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
                  <span>adrianna.demel@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>502 296 572</span>
                </div>
              </div>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full max-w-xs rounded-full group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <PhoneCall className="w-4 h-4" />
                    Zadzwoń teraz
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md border-none shadow-2xl bg-gradient-to-b from-background to-muted/20">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-bold">Skontaktuj się</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center space-y-8 py-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75" />
                    <div className="relative p-6 bg-primary/10 rounded-full border-2 border-primary/20">
                      <Phone className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  
                  <div className="text-center space-y-2 w-full">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Numer telefonu</p>
                    <div className="flex items-center justify-center gap-3 p-4 bg-muted/50 rounded-2xl border border-border/50">
                      <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground tabular-nums">
                        {phoneNumber}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="gap-2 hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all duration-300"
                      onClick={handleCopy}
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? "Skopiowano" : "Kopiuj"}
                    </Button>
                    <Button 
                      size="lg"
                      className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                      onClick={() => window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`}
                    >
                      <PhoneCall className="w-4 h-4" />
                      Zadzwoń
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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