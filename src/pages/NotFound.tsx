import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, WifiOff, RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function NotFound() {
  const navigate = useNavigate();
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md mx-auto space-y-6"
      >
        <div className="relative w-32 h-32 mx-auto mb-8">
          <motion.div
            className="absolute inset-0 bg-primary/10 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {isOffline ? (
              <WifiOff className="w-16 h-16 text-primary" />
            ) : (
              <span className="text-6xl font-bold text-primary">404</span>
            )}
          </div>
        </div>

        <h1 className="text-3xl font-bold">
          {isOffline ? "Brak połączenia z internetem" : "Strona nie znaleziona"}
        </h1>
        
        <p className="text-muted-foreground text-lg">
          {isOffline 
            ? "Sprawdź swoje połączenie z internetem i spróbuj ponownie."
            : "Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona."}
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Button onClick={() => navigate("/")} size="lg" className="gap-2">
            <Home className="w-4 h-4" />
            Wróć na stronę główną
          </Button>
          {isOffline && (
            <Button variant="outline" onClick={() => window.location.reload()} size="lg" className="gap-2">
              <RefreshCcw className="w-4 h-4" />
              Odśwież
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}