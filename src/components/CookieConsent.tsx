import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { Link } from "react-router";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 z-50 md:max-w-md"
        >
          <div className="bg-background/80 backdrop-blur-xl border shadow-2xl rounded-2xl p-6 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    Ciasteczka? 🍪
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Używamy plików cookies, aby zapewnić Ci najlepsze doświadczenia na naszej stronie, w tym do poprawnego wyświetlania mapy dojazdu.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  onClick={handleAccept} 
                  className="flex-1 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                >
                  Akceptuję wszystkie
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleDecline}
                  className="flex-1 rounded-xl hover:bg-muted"
                >
                  Tylko niezbędne
                </Button>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Twoje dane są bezpieczne</span>
                </div>
                <Link to="/privacy-policy" className="hover:text-primary underline underline-offset-2 transition-colors">
                  Polityka prywatności
                </Link>
              </div>
            </div>

            <button 
              onClick={handleDecline}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
