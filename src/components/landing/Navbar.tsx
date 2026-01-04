import { ShareDialog } from "@/components/ui/share-dialog";
import Switch from "@/components/ui/sky-toggle";
import { useTheme } from "next-themes";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
  );
}
