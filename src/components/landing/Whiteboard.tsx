import { Monitor, Presentation, Sparkles, CheckCircle2 } from "lucide-react";

export default function Whiteboard() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Monitor className="w-64 h-64" />
          </div>
          
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center relative z-10">
            <div className="flex justify-center md:justify-start">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-background shadow-lg flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Presentation className="w-16 h-16 md:w-20 md:h-20 text-primary" />
              </div>
            </div>
            
            <div className="text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Nowoczesna Edukacja
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Tablica Interaktywna</h2>
              <h3 className="text-xl text-primary font-medium">Technologia na naszych lekcjach</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Na każdych zajęciach uczniowie korzystają z tablicy interaktywnej, która uatrakcyjnia zajęcia oraz pozwala na równoległe oddziaływanie na wiele zmysłów, co daje wymierne efekty w szybkim i efektywniejszym przyswajaniu wiedzy.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm font-medium bg-background/50 px-3 py-1.5 rounded-lg border">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Wizualizacja
                </div>
                <div className="flex items-center gap-2 text-sm font-medium bg-background/50 px-3 py-1.5 rounded-lg border">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Interakcja
                </div>
                <div className="flex items-center gap-2 text-sm font-medium bg-background/50 px-3 py-1.5 rounded-lg border">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Zaangażowanie
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
