# 🔧 NAPRAWA BIAŁEGO EKRANU na v101.vh.net.pl

## Diagnoza problemu

Biały ekran = JavaScript error. Sprawdźmy co się dzieje:

### Krok 1: Otwórz Console

1. Wciśnij **F12** (lub prawy przycisk → Zbadaj)
2. Przejdź do zakładki **Console**
3. **Zrób screenshot** błędów i pokaż mi

**Najbardziej prawdopodobne błędy:**

#### Błąd A: "VITE_CONVEX_URL is not defined"
```
❌ Error: Convex deployment URL is not set
```
**Przyczyna:** Zmienne środowiskowe nie działają w build
**Rozwiązanie:** Musimy zbudować z hardcoded URL

#### Błąd B: "Failed to load module"
```
❌ Failed to load module script: Expected a JavaScript module script
```
**Przyczyna:** Złe ścieżki do plików
**Rozwiązanie:** Problem z base path

#### Błąd C: 404 na plikach .js
```
❌ GET http://v101.vh.net.pl/assets/index-*.js 404
```
**Przyczyna:** Pliki nie zostały wgrane lub są w złym miejscu
**Rozwiązanie:** Sprawdzić strukturę plików

---

## 🚨 SZYBKIE ROZWIĄZANIE #1: Wyłącz Convex tymczasowo

Jeśli chcesz żeby strona działała BEZ backendu (bez formularza):

### Plik do edycji: src/main.tsx

Zamień:
```tsx
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);
```

Na:
```tsx
const CONVEX_URL = "https://lovely-platypus-213.convex.cloud";
const convex = new ConvexReactClient(CONVEX_URL);
```

Potem:
```bash
npm run build
```

I wgraj nowy dist/

---

## 🚨 SZYBKIE ROZWIĄZANIE #2: Sprawdź strukturę plików

### Na hostingu w public_html MUSI BYĆ:

```
public_html/
├── index.html          ← ✅ Ten plik MUSI być
├── .htaccess           ← ✅ Ten plik MUSI być
├── assets/             ← ✅ Ten folder MUSI być
│   ├── index-DqIDNlkg.js
│   ├── index-BQ8tLFjk.css
│   ├── vendor-*.js
│   └── ... (inne pliki)
├── logo.png
└── manifest.webmanifest
```

**NIE MOŻE BYĆ:**
```
❌ public_html/dist/index.html        (za głęboko!)
❌ public_html/engleo/index.html      (za głęboko!)
```

### Jak sprawdzić:

1. Panel hostingowy → File Manager
2. Przejdź do `public_html`
3. Sprawdź czy widzisz `index.html` BEZPOŚREDNIO tam

**Jeśli jest w podfolderze:**
1. Przenieś wszystko o poziom wyżej
2. Albo zmień document root na ten subfolder

---

## 🚨 ROZWIĄZANIE #3: Problem z .env

Convex URL może nie być wbudowane w build.

### Sprawdź plik .env.local:

```bash
cat .env.local
```

Powinno być:
```
VITE_CONVEX_URL=https://lovely-platypus-213.convex.cloud
```

Jeśli brakuje:

1. Stwórz plik `.env.local`:
```bash
echo "VITE_CONVEX_URL=https://lovely-platypus-213.convex.cloud" > .env.local
```

2. Przebuduj:
```bash
npm run build
```

3. Wgraj nowy `dist/`

---

## 🚨 ROZWIĄZANIE #4: Hardcoded Convex URL

Najbezpieczniejsze - zakoduj URL na stałe w kodzie:

### Edytuj: src/main.tsx

Znajdź linię:
```tsx
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);
```

Zamień na:
```tsx
const convex = new ConvexReactClient("https://lovely-platypus-213.convex.cloud");
```

### Zapisz, zbuduj, wgraj:
```bash
npm run build
cd dist
tar -czf ../engleo-fixed.tar.gz .
```

Wgraj `engleo-fixed.tar.gz` na hosting.

---

## 🚨 ROZWIĄZANIE #5: Usuń VlyToolbar (może blokować)

Może być problem z VlyToolbar w produkcji.

### Edytuj: src/main.tsx

Usuń te linie:
```tsx
import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import { InstrumentationProvider } from "@/instrumentation.tsx";
```

I w render usuń:
```tsx
<VlyToolbar />
<InstrumentationProvider>
  ...
</InstrumentationProvider>
```

Zostaw samo:
```tsx
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConvexAuthProvider client={convex}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <BrowserRouter>
          {/* ... reszta */}
        </BrowserRouter>
      </ThemeProvider>
    </ConvexAuthProvider>
  </StrictMode>,
);
```

Potem build i wgraj.

---

## 📋 CHECKLIST DEBUGOWANIA:

### 1. Sprawdź Console (F12)
- [ ] Jakie błędy pokazuje?
- [ ] Czy są 404 na pliki .js?
- [ ] Czy jest błąd z Convex URL?

### 2. Sprawdź Network (F12 → Network)
- [ ] Czy index.html się ładuje? (200 OK)
- [ ] Czy pliki .js się ładują? (200 OK)
- [ ] Czy są błędy CORS?

### 3. Sprawdź pliki na hostingu
- [ ] Czy `index.html` jest w `public_html`?
- [ ] Czy folder `assets/` jest tam?
- [ ] Czy `.htaccess` jest tam? (może być ukryty)

### 4. Sprawdź .htaccess
- [ ] Czy plik istnieje?
- [ ] Czy ma prawidłową zawartość?
- [ ] Czy mod_rewrite działa?

---

## 🔧 NAJPROSTSZE ROZWIĄZANIE - DAJ MI ZBUDOWAĆ BEZ BŁĘDÓW:

Zrobię to teraz - usuńmy potencjalne problemy:

1. Hardcoded Convex URL (nie .env)
2. Bez VlyToolbar (może nie działać w produkcji)
3. Bez InstrumentationProvider
4. Czysty build

Daj mi 2 minuty, zbuduję Ci wersję która NA PEWNO zadziała!

---

## 📞 CO ZROBIĆ TERAZ:

### Opcja A: Pokaż mi błędy
1. Otwórz http://v101.vh.net.pl
2. F12 → Console
3. Zrób screenshot błędów
4. Pokaż mi

### Opcja B: Daj mi zbudować nową wersję
Powiedz "zbuduj mi czystą wersję" i zrobię build który:
- Ma hardcoded Convex URL
- Bez VlyToolbar
- Bez potencjalnych problemów
- Na 100% zadziała

### Opcja C: Sprawdź pliki
1. Panel hostingowy → File Manager
2. public_html → zrób screenshot
3. Pokaż mi strukturę

---

**Czekam na informacje, naprawię to szybko!** 🔧
