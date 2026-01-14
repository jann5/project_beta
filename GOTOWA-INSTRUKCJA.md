# 🎉 GOTOWA STRONA - INSTRUKCJA WGRANIA

## 📦 PLIK DO WGRANIA:

### **GOTOWA-STRONA-WGRAJ-TO.tar.gz** (799 KB)

To jest **KOMPLETNA** strona gotowa do wgrania na hosting!

---

## 🚀 JAK WGRAĆ - 3 KROKI:

### Krok 1: Rozpakuj archiwum na SWOIM KOMPUTERZE

Prawym przyciskiem na plik → "Rozpakuj tutaj" lub "Extract here"

Zobaczysz folder z plikami:
- index.html
- .htaccess
- assets/ (folder)
- logo.png
- manifest.webmanifest
- JAK_WGRAC.txt

### Krok 2: Wgraj na hosting

#### Sposób A - Panel File Manager (POLECAM):

1. Zaloguj się do panelu hostingowego v101.vh.net.pl
2. Otwórz **File Manager** (Menedżer plików)
3. Przejdź do folderu **public_html**
4. **USUŃ wszystko** co tam jest (jeśli coś było)
5. Kliknij **Upload** (Wgraj)
6. Wybierz **WSZYSTKIE pliki** z rozpakowanego folderu
7. Wgraj je
8. Sprawdź czy są:
   - ✅ index.html
   - ✅ .htaccess (włącz "Pokaż ukryte pliki" żeby zobaczyć)
   - ✅ assets/ (folder z ~20 plikami)

#### Sposób B - FTP (FileZilla, WinSCP):

1. Połącz się z v101.vh.net.pl przez FTP
2. Przejdź do folderu **public_html**
3. **Usuń wszystko** co tam jest
4. Przeciągnij **wszystkie pliki** z rozpakowanego folderu
5. Upewnij się że .htaccess też się wgrał

### Krok 3: Sprawdź czy działa

Wejdź na: **http://v101.vh.net.pl**

**STRONA POWINNA DZIAŁAĆ!** 🎉

---

## ⚠️ BARDZO WAŻNE:

### Pliki muszą być BEZPOŚREDNIO w public_html:

```
✅ DOBRZE:
public_html/
├── index.html       ← TU
├── .htaccess        ← TU
├── assets/          ← TU
│   ├── index-*.js
│   └── ...
├── logo.png
└── manifest.webmanifest
```

```
❌ ŹLE (w podfolderze):
public_html/
└── dist/
    ├── index.html   ← ZA GŁĘBOKO!
    └── assets/
```

```
❌ ŹLE (w podfolderze):
public_html/
└── engleo/
    ├── index.html   ← ZA GŁĘBOKO!
    └── assets/
```

---

## 🔍 CHECKLIST - Sprawdź to:

Po wgraniu sprawdź w panelu hostingowym:

- [ ] Plik `index.html` jest w `public_html`
- [ ] Plik `.htaccess` jest w `public_html` (włącz "Show hidden files")
- [ ] Folder `assets/` jest w `public_html` i ma ~20 plików
- [ ] Pliki są BEZPOŚREDNIO w `public_html`, nie w podfolderze

---

## 🎯 CO JEST W PACZCE:

### Główne pliki:
- **index.html** - strona główna
- **.htaccess** - routing (MUSI BYĆ!)
- **assets/** - wszystkie skrypty i style

### Grafiki:
- logo.png
- logo.svg
- logo_bg.png
- logo_bg.svg

### Inne:
- manifest.webmanifest - PWA manifest
- JAK_WGRAC.txt - krótka instrukcja

---

## ✅ CO DZIAŁA:

- ✅ Convex backend (działa automatycznie w chmurze)
- ✅ Formularz kontaktowy (zapisuje do bazy Convex)
- ✅ Particle canvas animations
- ✅ 3D galeria zdjęć
- ✅ Dark/light mode toggle
- ✅ Wszystkie podstrony (routing)
- ✅ Mobile responsive
- ✅ Cookie consent banner

---

## 🐛 JEŚLI MASZ BIAŁY EKRAN:

### Sprawdź te 3 rzeczy:

1. **Plik .htaccess jest wgrany?**
   - W panelu włącz "Show hidden files"
   - Sprawdź czy widzisz `.htaccess`
   - Jeśli nie - wgraj go ponownie

2. **Pliki są w dobrym miejscu?**
   - Sprawdź czy `index.html` jest BEZPOŚREDNIO w `public_html`
   - Nie w podfolderze `dist/` ani `engleo/`

3. **Folder assets/ ma wszystkie pliki?**
   - Powinno być ~20 plików .js i .css
   - Jeśli jest mniej - wgraj cały folder ponownie

### Sprawdź console:
1. Wejdź na stronę (nawet jeśli biały ekran)
2. Wciśnij **F12**
3. Zakładka **Console**
4. Zobacz jakie błędy
5. Powiedz mi jakie błędy widzisz

---

## 🔧 ROZWIĄZYWANIE PROBLEMÓW:

### Błąd: 404 na podstronach (np. /gallery)

**Przyczyna:** Brak `.htaccess` lub mod_rewrite wyłączony

**Rozwiązanie:**
1. Sprawdź czy `.htaccess` jest wgrany
2. Zapytaj support vh.net.pl czy `mod_rewrite` jest włączony

### Błąd: Failed to load module / 404 na pliki .js

**Przyczyna:** Pliki są w złym miejscu lub nie wszystkie się wgrały

**Rozwiązanie:**
1. Sprawdź czy pliki są BEZPOŚREDNIO w `public_html`
2. Sprawdź czy folder `assets/` ma wszystkie pliki
3. Wgraj wszystko ponownie

### Błąd: Convex connection failed

**Przyczyna:** Hosting blokuje połączenia do convex.cloud

**Rozwiązanie:**
1. Sprawdź czy domena ma HTTPS
2. Skontaktuj się z supportem vh.net.pl
3. Zapytaj czy firewall nie blokuje `lovely-platypus-213.convex.cloud`

---

## 💻 Backend Convex:

### Jak to działa:

- **Frontend** (strona) → v101.vh.net.pl
- **Backend** (baza, API) → https://lovely-platypus-213.convex.cloud

Strona łączy się z backendem przez internet.

### Co to oznacza:

✅ Nie potrzebujesz bazy danych na hostingu
✅ Nie potrzebujesz PHP ani Node.js
✅ Backend działa automatycznie w chmurze
✅ Formularze zapisują się do bazy Convex

### Dashboard Convex:

Wiadomości z formularza możesz zobaczyć na:
**https://dashboard.convex.dev**

Tam znajdziesz tabelę `messages` z wszystkimi wiadomościami.

---

## 📞 Dane kontaktowe:

W formularzu ustawione są:
- Email: **kontakt@engleo.pl**
- Telefon: **+48 123 456 789**

Jeśli to nie Twoje dane - powiedz mi, zmienię!

---

## 🎓 Testowanie po wdrożeniu:

Po wgraniu sprawdź:

- [ ] Strona się ładuje (nie biały ekran)
- [ ] Particle effect reaguje na ruch myszki
- [ ] Menu działa
- [ ] Dark mode toggle działa
- [ ] Podstrona /gallery działa
- [ ] Odświeżenie (F5) na /gallery nie daje 404
- [ ] Formularz wysyła (sprawdź toast "Wiadomość wysłana")
- [ ] Mobile - otwórz na telefonie, sprawdź czy responsywne

---

## 📁 STRUKTURA KTÓRA POWINNA BYĆ NA HOSTINGU:

```
public_html/
├── index.html                    (730 B)
├── .htaccess                     (ukryty - włącz "Show hidden")
├── assets/
│   ├── index-CCFBBJze.js        (458 KB)
│   ├── index-BQ8tLFjk.css       (125 KB)
│   ├── framer-DMQMcxpe.js       (116 KB)
│   ├── vendor-C95RmFyg.js       (44 KB)
│   ├── ui-b2pgAQSi.js           (44 KB)
│   ├── Auth-3j_VUFxo.js         (16 KB)
│   └── ... (więcej plików)
├── logo.png                      (8.5 KB)
├── logo.svg
├── logo_bg.png                   (118 KB)
├── logo_bg.svg
├── manifest.webmanifest
├── JAK_WGRAC.txt
└── PRZECZYTAJ_MNIE.txt
```

---

## ✨ TO WSZYSTKO!

Strona jest **w 100% gotowa**. Wystarczy wgrać pliki i działa!

**Nie musisz nic instalować, konfigurować ani uruchamiać.**

Po prostu:
1. Rozpakuj
2. Wgraj
3. Gotowe! 🚀

---

**Jeśli masz problemy - napisz mi jakie błędy widzisz w Console (F12) i naprawię!**
