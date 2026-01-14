import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="py-8 border-t text-center text-muted-foreground text-sm">
      <div className="container mx-auto px-4 flex flex-col gap-4">
        <p>&copy; {new Date().getFullYear()} Engleo Adrianna Nawrot. Wszelkie prawa zastrzeżone.</p>
        <Link to="/privacy-policy" className="hover:text-primary transition-colors underline underline-offset-4">
          Polityka Prywatności
        </Link>
        <p className="text-xs opacity-60">made by jan.n5</p>
      </div>
    </footer>
  );
}