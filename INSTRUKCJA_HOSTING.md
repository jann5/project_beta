# 📦 Instrukcja Wdrożenia Strony na Hosting

## ✅ Strona jest GOTOWA do wrzucenia na hosting!

### Co zrobiłem:
- ✅ Usunąłem wszystkie zależności od Convex (backend)
- ✅ Zbudowałem statyczną wersję produkcyjną
- ✅ Skonfigurowałem routing dla React Router
- ✅ Dodałem plik .htaccess dla Apache
- ✅ Formularz kontaktowy działa przez mailto (otwiera program pocztowy)

---

## 🚀 Metoda 1: Hosting z panelem (np. home.pl, nazwa.pl, OVH)

### Krok 1: Pobierz folder `dist`
Cała zawartość strony jest w folderze `/dist`. To jedyny folder, który musisz wrzucić na hosting.

### Krok 2: Spakuj folder dist
```bash
cd dist
zip -r strona-engleo.zip .
```

Lub po prostu spakuj folder `dist` w ZIP używając programu do archiwizacji (WinRAR, 7-Zip, itp.)

### Krok 3: Wrzuć na hosting
1. Zaloguj się do panelu hostingowego (cPanel, Plesk, DirectAdmin)
2. Przejdź do **Menedżera plików** (File Manager)
3. Znajdź folder **public_html** (lub **www**, **htdocs** - zależy od hostingu)
4. **USUŃ wszystko** co jest w tym folderze (jeśli tam była jakaś stara strona)
5. Wgraj plik ZIP i **rozpakuj go**
6. Upewnij się, że w `public_html` są pliki:
   - `index.html`
   - `.htaccess`
   - folder `assets/`
   - `logo.png`
   - `manifest.webmanifest`

### Krok 4: Sprawdź czy działa
Wejdź na swoją domenę (np. `engleo.pl`). Strona powinna działać!

---

## 🌐 Metoda 2: GitHub Pages (DARMOWY hosting)

### Krok 1: Stwórz repozytorium GitHub
1. Idź na [github.com](https://github.com)
2. Kliknij **New repository**
3. Nazwa: `engleo-website`
4. Public
5. **Create repository**

### Krok 2: Wrzuć kod
```bash
cd /home/daytona/codebase
git init
git add dist/*
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TWOJ_USERNAME/engleo-website.git
git push -u origin main
```

### Krok 3: Skonfiguruj GitHub Pages
1. W repozytorium idź do **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` → folder: `/root` (lub `/dist` jeśli wrzuciłeś cały projekt)
4. Save

Strona będzie dostępna pod: `https://TWOJ_USERNAME.github.io/engleo-website/`

**UWAGA**: GitHub Pages może wymagać dostosowania `base` w vite.config.ts do `/engleo-website/`

---

## 🔥 Metoda 3: Netlify (DARMOWY hosting, najłatwiejszy)

### Sposób A: Drag & Drop
1. Idź na [netlify.com](https://netlify.com)
2. Zaloguj się / Zarejestruj
3. Kliknij **Add new site** → **Deploy manually**
4. **PRZECIĄGNIJ folder `dist`** na stronę
5. Gotowe! Netlify da Ci link typu `random-name-123.netlify.app`

### Sposób B: Z GitHub
1. Wrzuć kod na GitHub (jak w Metodzie 2)
2. Na Netlify kliknij **Add new site** → **Import from Git**
3. Wybierz repozytorium
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

---

## ☁️ Metoda 4: Vercel (DARMOWY hosting)

1. Idź na [vercel.com](https://vercel.com)
2. Zaloguj się przez GitHub
3. Kliknij **Add New** → **Project**
4. Import repozytorium GitHub
5. Framework Preset: **Vite**
6. Root Directory: `./`
7. Build Command: `npm run build`
8. Output Directory: `dist`
9. Deploy!

---

## 📝 Co działa na tej stronie:

### ✅ Działające funkcje:
- Wszystkie animacje (Framer Motion)
- Particle canvas effect (interaktywne cząstki)
- Galeria 3D z perspective transform
- Dark/light mode toggle
- Cookie consent banner
- Responsive design (mobile + desktop)
- Smooth scroll między sekcjami
- Routing React Router (wszystkie podstrony)

### 📧 Formularz kontaktowy:
Formularz otwiera **domyślny program pocztowy** (Outlook, Gmail, Apple Mail) z wypełnionym:
- Adresatem: `kontakt@engleo.pl`
- Tematem: "Wiadomość od [imię]"
- Treścią: dane z formularza

**Jeśli chcesz backend do formularza:**
Możesz dodać:
- [Formspree](https://formspree.io) - darmowy
- [EmailJS](https://emailjs.com) - darmowy
- Własny backend (PHP, Node.js)

---

## 🔧 Rozwiązywanie problemów

### Problem: Strona nie ładuje się po odświeżeniu
**Rozwiązanie**: Upewnij się, że plik `.htaccess` jest w głównym folderze i że hosting obsługuje `mod_rewrite`.

### Problem: 404 na podstronach
**Rozwiązanie**:
1. Sprawdź czy `.htaccess` jest wgrany
2. Upewnij się że hosting to Apache (lub Nginx z inną konfiguracją)
3. Sprawdź czy `AllowOverride All` jest włączone

### Problem: Strona wygląda źle / brak stylów
**Rozwiązanie**:
1. Sprawdź czy folder `assets/` został wgrany
2. Sprawdź ścieżki w przeglądarce (F12 → Network)
3. Upewnij się że rozpakowanie było w dobrym miejscu

### Problem: Animacje nie działają
**Rozwiązanie**: To nie powinno się zdarzyć, ale:
1. Wyczyść cache przeglądarki (Ctrl+Shift+R)
2. Sprawdź konsole JavaScript (F12)

---

## 📱 Testowanie

Po wrzuceniu na hosting, przetestuj:
- [ ] Strona główna ładuje się
- [ ] Dark mode działa
- [ ] Particle effect reaguje na myszkę
- [ ] Galeria pokazuje obrazy
- [ ] Formularz otwiera program pocztowy
- [ ] Podstrony działają (gallery, privacy-policy)
- [ ] Responsywność na mobile (Chrome DevTools → Toggle device toolbar)

---

## 🎨 Personalizacja po wdrożeniu

### Zmiana kontaktu:
Edytuj w `src/components/landing/Contact.tsx`:
```tsx
const phoneNumber = "+48 123 456 789"; // Twój numer
const emailAddress = "kontakt@engleo.pl"; // Twój email
```

### Zmiana zdjęć w galerii:
Edytuj w `src/components/ui/landing-page.tsx`:
```tsx
images={[
  { src: "https://twoj-link.com/zdjecie1.jpg", alt: "Opis" },
  // ... więcej
]}
```

### Zmiana kolorów (motywu):
Edytuj w `src/index.css`:
```css
:root {
  --primary: oklch(0.205 0 0); /* Kolor główny */
  --background: oklch(1 0 0); /* Tło */
  /* ... itp */
}
```

Po zmianach:
```bash
npm run build
```
I wgraj nowy `dist` folder.

---

## 🆘 Wsparcie

Jeśli coś nie działa:
1. Sprawdź konsolę przeglądarki (F12)
2. Sprawdź czy wszystkie pliki są wgrane
3. Sprawdź logi serwera (w panelu hostingowym)
4. Upewnij się, że hosting obsługuje statyczne strony HTML

---

**Sukcesu z wdrożeniem! 🎉**
