export default function Footer() {
  return (
    <footer className="py-8 border-t text-center text-muted-foreground text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Engleo Adrianna Nawrot. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
