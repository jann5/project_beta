import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, FileText } from "lucide-react";

interface LevelTestResultProps {
  score: number;
  totalQuestions: number;
  level: string;
  desc: string;
  onRestart: () => void;
  onClose: () => void;
  onReview?: () => void;
}

export function LevelTestResult({ score, totalQuestions, level, desc, onRestart, onClose, onReview }: LevelTestResultProps) {
  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-6 py-4"
    >
      <div className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
        <Trophy className="w-12 h-12 text-yellow-500" />
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-2">Twój wynik</h3>
        <div className="text-5xl font-black text-primary mb-2">{level}</div>
        <p className="text-muted-foreground">{score} / {totalQuestions} poprawnych odpowiedzi</p>
      </div>

      <div className="bg-muted/30 p-6 rounded-2xl border">
        <p className="text-lg font-medium mb-2">{desc}</p>
        <p className="text-sm text-muted-foreground">
          To świetny punkt wyjścia! Umów się na darmową lekcję próbną, aby potwierdzić ten wynik w rozmowie.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Button size="lg" className="w-full rounded-full" onClick={() => {
          onClose();
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Umów darmową lekcję
        </Button>
        {onReview && (
          <Button variant="outline" size="lg" className="w-full gap-2" onClick={onReview}>
            <FileText className="w-4 h-4" />
            Zobacz odpowiedzi
          </Button>
        )}
        <Button variant="ghost" onClick={onRestart}>
          Spróbuj ponownie
        </Button>
      </div>
    </motion.div>
  );
}
