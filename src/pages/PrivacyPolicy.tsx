import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose dark:prose-invert max-w-none"
        >
          <h1 className="text-4xl font-bold mb-8">Polityka Prywatności</h1>
          
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">1. Postanowienia ogólne</h2>
            <p className="text-muted-foreground">
              Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z serwisu internetowego Engleo.
            </p>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">2. Administrator Danych</h2>
            <p className="text-muted-foreground">
              Administratorem danych osobowych zawartych w serwisie jest Engleo Adrianna Nawrot.
            </p>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">3. Dane Osobowe</h2>
            <p className="text-muted-foreground">
              W trosce o bezpieczeństwo powierzonych nam danych opracowaliśmy wewnętrzne procedury i zalecenia, które mają zapobiec udostępnieniu danych osobom nieupoważnionym. Kontrolujemy ich wykonywanie i stale sprawdzamy ich zgodność z odpowiednimi aktami prawnymi - ustawą o ochronie danych osobowych, ustawą o świadczeniu usług drogą elektroniczną, a także wszelkiego rodzaju aktach wykonawczych i aktach prawa wspólnotowego.
            </p>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">4. Cel przetwarzania</h2>
            <p className="text-muted-foreground">
              Dane Osobowe przetwarzane są na podstawie zgody wyrażanej przez Użytkownika oraz w przypadkach, w których przepisy prawa upoważniają Administratora do przetwarzania danych osobowych na podstawie przepisów prawa lub w celu realizacji zawartej pomiędzy stronami umowy.
            </p>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">5. Kontakt</h2>
            <p className="text-muted-foreground">
              W sprawach związanych z ochroną danych osobowych prosimy o kontakt mailowy pod adresem: kontakt@engleo.pl
            </p>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">6. Pliki Cookies i Technologie Śledzące</h2>
            <p className="text-muted-foreground">
              Serwis wykorzystuje pliki cookies oraz technologię Local Storage wyłącznie w celach technicznych, niezbędnych do prawidłowego funkcjonowania strony, w tym:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Utrzymania sesji użytkownika (logowanie i autoryzacja).</li>
              <li>Zapamiętywania preferencji wyglądu (tryb jasny/ciemny).</li>
              <li>Zapewnienia bezpieczeństwa i wydajności serwisu.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Nie wykorzystujemy plików cookies do celów reklamowych, marketingowych ani do śledzenia aktywności użytkownika poza naszym serwisem.
            </p>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}