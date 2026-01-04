import { ShareDialog } from "@/components/ui/share-dialog";
import Switch from "@/components/ui/sky-toggle";
import { useTheme } from "next-themes";
import { Link, useLocation, useNavigate } from "react-router";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
          <img 
            src="https://harmless-tapir-303.convex.cloud/api/storage/f5d797b2-34f6-4897-ad1d-c045409fd9bb" 
            alt="Engleo Logo" 
            className="h-10 w-auto object-contain"
          />
          <span>Engleo</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button onClick={() => handleNavigation('about')} className="hover:text-primary transition-colors">O mnie</button>
            <button onClick={() => handleNavigation('offer')} className="hover:text-primary transition-colors">Oferta</button>
            <button onClick={() => handleNavigation('gallery')} className="hover:text-primary transition-colors">Galeria</button>
            <button onClick={() => handleNavigation('location')} className="hover:text-primary transition-colors">Lokalizacja</button>
            <button onClick={() => handleNavigation('contact')} className="hover:text-primary transition-colors">Kontakt</button>
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