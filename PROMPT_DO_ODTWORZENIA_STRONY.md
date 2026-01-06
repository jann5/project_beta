# Prompt do Odtworzenia Strony Engleo - Adrianna Nawrot

## Cel
Zbuduj od zera profesjonalną stronę internetową dla szkoły językowej "Engleo" prowadzonej przez Adriannę Nawrot - lektorkę języka angielskiego. Strona powinna mieć nowoczesny design z zaawansowanymi animacjami i efektami wizualnymi.

## Stack Technologiczny

### Core
- **Framework**: React 19.2.0 z TypeScript
- **Build Tool**: Vite 7.2.6
- **Routing**: React Router 7.10.0
- **Styling**: Tailwind CSS 4.1.17 z @tailwindcss/vite

### Biblioteki UI i Animacji
- **framer-motion**: 12.23.25 - dla wszystkich animacji
- **lucide-react**: najnowsza - ikony
- **@radix-ui/***: komponenty UI (dialog, accordion, dropdown-menu, navigation-menu, scroll-area, etc.)
- **next-themes**: 0.4.6 - dark/light mode
- **sonner**: 2.0.7 - toast notifications
- **tw-animate-css**: 1.4.0 - dodatkowe animacje CSS

### Backend i Auth
- **Convex**: 1.30.0 - backend as a service
- **@convex-dev/auth**: 0.0.90 - autentykacja

### Inne
- **class-variance-authority**: do wariantów komponentów
- **tailwind-merge**: do łączenia klas Tailwind
- **react-intersection-observer**: do animacji przy scrollu

## Struktura Projektu

```
/
├── src/
│   ├── main.tsx                    # Entry point
│   ├── index.css                   # Global styles + Tailwind config
│   ├── pages/
│   │   ├── Landing.tsx             # Główna strona
│   │   ├── Gallery.tsx             # Galeria zdjęć
│   │   ├── Auth.tsx                # Strona logowania (opcjonalna)
│   │   ├── NotFound.tsx            # 404
│   │   └── PrivacyPolicy.tsx       # Polityka prywatności
│   └── components/
│       ├── landing/
│       │   ├── Navbar.tsx          # Nawigacja sticky
│       │   ├── Hero.tsx            # Sekcja hero z efektem cząstek
│       │   ├── About.tsx           # Sekcja "O mnie"
│       │   ├── Whiteboard.tsx      # Sekcja z tablicą/metodologią
│       │   ├── LevelTest.tsx       # Test poziomu
│       │   ├── Testimonials.tsx    # Opinie uczniów
│       │   ├── Offer.tsx           # Oferta
│       │   ├── Contact.tsx         # Formularz kontaktowy
│       │   └── Footer.tsx          # Stopka
│       ├── ui/
│       │   ├── landing-page.tsx    # Main layout wrapper
│       │   ├── particle-effect-for-hero.tsx  # Canvas z animacją cząstek
│       │   ├── portfolio-gallery.tsx         # Galeria 3D
│       │   ├── expand-map.tsx                # Mapa z lokalizacją
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   ├── dialog.tsx
│       │   └── ... (inne komponenty Radix UI)
│       ├── CookieConsent.tsx       # Banner cookies
│       └── ErrorBoundary.tsx       # Error handling
├── index.html
├── vite.config.ts
├── package.json
└── tsconfig.json
```

## Główne Sekcje Strony

### 1. **Navbar** (Sticky Navigation)
- Logo "Engleo" po lewej
- Linki nawigacyjne: O mnie, Oferta, Galeria, Lokalizacja, Kontakt
- Toggle dark/light mode
- Smooth scroll do sekcji
- Transparentny tył z blur na scroll
- Animacja pokazywania/ukrywania przy scrollu

### 2. **Hero Section**
**Najważniejsze efekty:**
- **AntiGravityCanvas**: Interaktywny efekt cząstek Canvas 2D
  - Cząstki reagujące na ruch myszki (repulsja w promieniu 180px)
  - Fizyka sprężyn - cząstki wracają do pozycji wyjściowej
  - Kolizje między cząstkami z elastic collision
  - Tło z pulsującym radial gradient
  - Dryftujące cząstki tła z efektem migotania
  - FPS: 60, particle density: 0.00015
  - Damping: 0.90, Return speed: 0.08

**Treść:**
- Badge z pulsującym "PIERWSZA LEKCJA (60 MIN) GRATIS!"
- Tytuł: "Engleo" + podtytuł "Adrianna Nawrot" z gradient
- Opis: "Odkryj pasję do języka angielskiego..."
- 2 CTA buttony: "Odbierz darmową lekcję", "Dowiedz się więcej"
- Wszystkie elementy z framer-motion fade-in animations

### 3. **About Section** (O mnie)
**Layout:** Grid 2 kolumny (desktop)
- **Lewa strona:**
  - Duży placeholder z ikoną Languages
  - Card z ratingiem "5.0/5.0 - Opinie uczniów" (absolutnie pozycjonowany)
  - Tło sekcji z particle canvas (opacity: 0.5)

- **Prawa strona:**
  - Tytuł "O mnie"
  - Długi tekst o doświadczeniu i kwalifikacjach:
    * Absolwentka Filologii Angielskiej UAM
    * Tłumaczenia symultaniczne
    * Egzaminator maturalny
    * Współpraca z SKANSKA, NCC, WAVIN
  - Lista z checkmarkami:
    * Indywidualne podejście
    * Przygotowanie do egzaminów
    * Konwersacje i język biznesowy
    * Zajęcia dla wszystkich grup wiekowych
  - CTA Button: "Poznaj moją metodę"

**Animacje:** framer-motion initial + whileInView (opacity, x)

### 4. **Whiteboard Section**
- Wizualizacja metodyki nauczania
- Interaktywne elementy pokazujące podejście do nauki

### 5. **LevelTest Section**
- Quiz/test do określenia poziomu języka
- Interaktywny formularz z walidacją

### 6. **Testimonials Section**
- Carousel z opiniami uczniów
- Karty z ocenami gwiazdkowymi
- Avatary uczniów
- Animacje slide-in przy scrollu

### 7. **Offer Section**
- Siatka kart z różnymi pakietami zajęć
- Pricing cards z hover effects
- Lista benefitów każdego pakietu
- CTA buttons

### 8. **Gallery Section** (PortfolioGallery)
**Desktop:**
- 3D overlapping cards z perspective transform
- `rotateY(-45deg)` + stagger height
- Hover effect: karta przesuwa się do góry, inne opadają
- Z-index layering
- Smooth transitions z ease curves

**Mobile:**
- Marquee animation (infinite scroll w poziomie)
- Pause on hover
- 4x repetition dla seamless loop
- CSS keyframes: `translateX(calc(-100% - var(--gap)))`

**Images:** 8 placeholder obrazów z Unsplash
- Zajęcia grupowe, materiały, sala lekcyjna, nauka online, certyfikaty, etc.

**Button:** "Zobacz całą galerię" → link do /gallery

### 9. **Location Section** (LocationMap)
- Interaktywna mapa z expand effect
- Adres: (placeholder - do uzupełnienia)
- Animacja rozwijania mapy on click
- Framer-motion animations

### 10. **Contact Section**
- Formularz kontaktowy:
  - Imię i nazwisko
  - Email
  - Telefon
  - Wiadomość
- Validacja z zod + react-hook-form
- Submit z obsługą API (Convex)
- Toast notifications (sonner)

### 11. **Footer**
- Logo + krótki opis
- Linki nawigacyjne
- Social media icons (opcjonalne)
- Copyright
- Link do polityki prywatności

### 12. **Cookie Consent Banner**
- Sticky bottom banner
- Accept/Decline buttons
- Persist w localStorage
- Zgodnie z RODO

## Konfiguracja Tailwind CSS (index.css)

```css
@import "tailwindcss";
@import "tw-animate-css";
@custom-variant dark (&:is(.dark *));

/* Theme variables */
@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  /* ... colors ... */
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... więcej kolorów w OKLCH ... */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... dark mode colors ... */
}

/* Marquee animation */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - var(--gap))); }
}

.animate-marquee {
  animation: marquee var(--duration) linear infinite;
}
```

## Kluczowe Funkcjonalności

### Animacje (framer-motion)
1. **Page transitions**: Lazy loading z Suspense
2. **Scroll animations**:
   ```tsx
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.6 }}
   >
   ```
3. **Hover effects**: scale, translate, color transitions
4. **Stagger children**: dla list i grid layouts

### Particle Canvas Physics
- **Mouse tracking**: Global event listener
- **Force calculation**:
  - Repulsion: `(MOUSE_RADIUS - distance) / MOUSE_RADIUS * REPULSION_STRENGTH`
  - Spring: `(originX - x) * RETURN_SPEED`
- **Collision detection**: O(n²) z elastic collision resolution
- **Velocity damping**: `velocity *= 0.90`
- **Background effects**:
  - Radial gradient pulse (sin wave)
  - Drifting stars z twinkle effect

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Desktop: grid layouts, 3D effects
- Mobile: stacked layouts, marquee scrolls

### Performance Optimizations
- Lazy loading routes (React.lazy)
- Image lazy loading
- Code splitting (manualChunks w Vite):
  ```js
  vendor: ['react', 'react-dom', 'react-router'],
  framer: ['framer-motion'],
  ui: ['@radix-ui/*', 'lucide-react']
  ```
- Gzip + Brotli compression
- Canvas requestAnimationFrame optimization

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Alt texts na obrazach

## Vite Configuration

```ts
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({ algorithm: 'gzip', ext: '.gz' }),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router'],
          framer: ['framer-motion'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-slot', 'lucide-react'],
        },
      },
    },
  },
})
```

## Routing Structure

```tsx
<Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/gallery" element={<GalleryPage />} />
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/auth" element={<AuthPage />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## Treści Tekstowe

### Hero
- **Tytuł główny**: "Engleo"
- **Podtytuł**: "Adrianna Nawrot"
- **Opis**: "Odkryj pasję do języka angielskiego. Indywidualne podejście, nowoczesne metody i przyjazna atmosfera."
- **Badge**: "PIERWSZA LEKCJA (60 MIN) GRATIS!"

### O mnie (skrócona wersja)
```
Jestem absolwentką studiów dziennych Filologii Angielskiej z przygotowaniem
pedagogicznym Uniwersytetu im. Adama Mickiewicza w Poznaniu oraz Uniwersytetu
Ekonomicznego w Poznaniu (Stosunki Międzynarodowe).

Ukończyłam również Szkołę Tłumaczy i Języków Obcych na Uniwersytecie im. Adama
Mickiewicza w Poznaniu. Specjalizacja to tłumaczenia ustne symultaniczne oraz
konsekutywne.

Doświadczenie zdobywałam jako nauczyciel oraz egzaminator maturalny w liceum
ogólnokształcącym (Zespół Szkół Sióstr Urszulanek SJK w Pniewach).

Od kilkunastu lat uczę języka angielskiego jako lektor w szkole językowej.
Prowadzę również szkolenia językowe dla kadry zarządzającej oraz kursy grupowe
dla pracowników firm.

Od wielu lat współpracuję z takimi firmami jak SKANSKA, NCC oraz WAVIN (analiza
potrzeb szkoleniowych, opracowanie i przeprowadzenie szkolenia językowego dla
różnych stanowisk kierowniczych oraz tłumaczenia tekstów specjalistycznych).

Tłumaczę książki dla wydawnictw literatury angielskiej.
```

## Wymagania Szczegółowe

### 1. Navbar Implementation
```tsx
- Sticky positioning (fixed z-50)
- Backdrop blur: backdrop-blur-lg
- Border bottom on scroll
- Smooth scroll behavior
- Mobile menu (hamburger) z Radix Dialog
- Dark mode toggle z next-themes
```

### 2. Particle Canvas Specifications
```tsx
const PARTICLE_DENSITY = 0.00015;
const BG_PARTICLE_DENSITY = 0.00005;
const MOUSE_RADIUS = 180;
const RETURN_SPEED = 0.08;
const DAMPING = 0.90;
const REPULSION_STRENGTH = 1.2;

- Main particles: gray (#808080) i blue (#4285F4)
- Background particles: alpha 0.1-0.4, twinkle effect
- Radial gradient pulse: sin(time * 0.0008)
- Canvas DPR scaling
- Elastic collision physics
```

### 3. Gallery 3D Transform
```tsx
Desktop:
- perspective(5000px) rotateY(-45deg)
- Stagger: middle highest, edges lower
- Hover: move to y=-120px, others to y=0
- Transition: duration 0.4s, ease [0.25, 0.1, 0.25, 1]
- Box shadow: multi-layer (0.796192px → 20px)

Mobile:
- Marquee: --duration: 40s
- Repeat: 4x
- Gap: 1rem
- Pause on hover
```

### 4. Form Validation (Contact)
```tsx
- react-hook-form + zod resolver
- Walidacja:
  * Email format
  * Telefon (opcjonalny, format PL)
  * Min length message: 10 chars
- Toast notifications:
  * Sukces: "Wiadomość wysłana!"
  * Błąd: "Coś poszło nie tak..."
- Disable button during submit
```

### 5. Cookie Consent
```tsx
- Fixed bottom-0, z-50
- LocalStorage key: "cookieConsent"
- Buttons: Accept, Decline, Settings
- Slide-in animation (framer-motion)
- Link do polityki prywatności
```

## SEO & Meta Tags

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Engleo - Adrianna Nawrot | Lekcje Języka Angielskiego</title>
  <meta name="description" content="Profesjonalne lekcje języka angielskiego. Indywidualne podejście, przygotowanie do egzaminów, język biznesowy. Pierwsza lekcja gratis!" />
  <link rel="icon" type="image/png" href="/logo.png" />
</head>
```

## Instrukcje dla AI

1. **Zacznij od setupu projektu:**
   ```bash
   npm create vite@latest engleo-website -- --template react-ts
   cd engleo-website
   npm install [wszystkie dependencies z package.json]
   ```

2. **Skonfiguruj Vite + Tailwind:**
   - Dodaj vite.config.ts z aliasami i chunking
   - Ustaw tailwindcss plugin
   - Skopiuj cały index.css z theme variables

3. **Zbuduj strukturę komponentów:**
   - Najpierw UI primitives (button, card, dialog)
   - Potem landing components (Navbar, Hero, etc.)
   - Na końcu złożone (ParticleCanvas, Gallery3D)

4. **Implementuj animacje:**
   - Zacznij od prostych fade-in
   - Potem scroll-triggered animations
   - Na końcu canvas physics

5. **Testuj responsive:**
   - Desktop: 1920px, 1440px, 1280px
   - Tablet: 768px
   - Mobile: 375px, 414px

6. **Optymalizuj:**
   - Lazy loading images
   - Code splitting routes
   - Memo dla drogich komponentów
   - Debounce dla resize handlers

## Dodatkowe Wskazówki

- **Kolory**: Używaj oklch() dla lepszego contrast w dark mode
- **Fonty**: System fonts lub Inter z Google Fonts
- **Ikony**: Tylko z lucide-react (Star, CheckCircle2, Languages, ArrowRight, etc.)
- **Shadcn/ui**: Wszystkie komponenty w src/components/ui/
- **Utils**: cn() z clsx + tailwind-merge w lib/utils.ts
- **Error handling**: ErrorBoundary wrapper + try-catch w async
- **Loading states**: Suspense + LoadingSpinner component

## Expected Output

Strona powinna:
1. ✅ Załadować się w <2s (desktop, fast 3G)
2. ✅ Mieć 60 FPS na canvas animations
3. ✅ Być w pełni responsive (mobile → desktop)
4. ✅ Działać w dark/light mode
5. ✅ Mieć smooth scroll i transitions
6. ✅ Być accessible (A11y)
7. ✅ Mieć working contact form
8. ✅ Zawierać cookie consent
9. ✅ Być SEO-friendly

---

**POWODZENIA! 🚀**

Masz teraz kompletny blueprint do zbudowania tej strony od zera. Wszystkie animacje, fizyka, layout i styling są szczegółowo opisane. Po prostu follow instrukcje step-by-step i zbudujesz identyczną stronę z wszystkimi efektami!
