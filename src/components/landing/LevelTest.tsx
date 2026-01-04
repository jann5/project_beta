import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Brain, Clock, CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { QUESTIONS, SHORT_TEST_IDS, type Question } from "./level-test-data";
import { LevelTestResult } from "./LevelTestResult";

export default function LevelTest() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"intro" | "test" | "result">("intro");
  const [testType, setTestType] = useState<"short" | "long">("short");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);

  const startTest = (type: "short" | "long") => {
    setTestType(type);
    // Short: 10 questions (balanced mix), Long: All questions
    const questions = type === "short" 
      ? QUESTIONS.filter(q => SHORT_TEST_IDS.includes(q.id))
      : QUESTIONS;
    setTestQuestions(questions);
    setCurrentQuestion(0);
    setScore(0);
    setMode("test");
    setSelectedAnswer(null);
  };

  const handleAnswer = () => {
    if (!selectedAnswer) return;
    
    if (selectedAnswer === testQuestions[currentQuestion].correct) {
      setScore(s => s + 1);
    }

    if (currentQuestion + 1 < testQuestions.length) {
      setCurrentQuestion(c => c + 1);
      setSelectedAnswer(null);
    } else {
      setMode("result");
    }
  };

  const getLevel = () => {
    const percentage = (score / testQuestions.length) * 100;
    if (percentage < 30) return { level: "A1", desc: "Początkujący. Czas zacząć przygodę z angielskim!" };
    if (percentage < 50) return { level: "A2", desc: "Podstawowy. Znasz podstawy, ale potrzebujesz praktyki." };
    if (percentage < 70) return { level: "B1", desc: "Średniozaawansowany. Potrafisz się komunikować, czas na gramatykę." };
    if (percentage < 90) return { level: "B2", desc: "Wyższy średniozaawansowany. Świetna robota! Czas na płynność." };
    return { level: "C1", desc: "Zaawansowany. Imponujący wynik! Szlifuj detale." };
  };

  const result = getLevel();

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card border rounded-3xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Brain className="w-3 h-3" />
              Sprawdź się
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Jaki jest Twój poziom angielskiego?</h2>
            <p className="text-muted-foreground text-lg">
              Rozwiąż darmowy test poziomujący i dowiedz się, od czego powinniśmy zacząć naukę. To zajmie tylko chwilę!
            </p>
            
            <Dialog open={isOpen} onOpenChange={(open) => {
              setIsOpen(open);
              if (!open) setTimeout(() => setMode("intro"), 300);
            }}>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full gap-2 shadow-lg shadow-primary/20">
                  Rozpocznij Test <ArrowRight className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl p-0 overflow-hidden bg-card border-none shadow-2xl">
                <div className="p-6 md:p-8">
                  <AnimatePresence mode="wait">
                    {mode === "intro" && (
                      <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6 text-center"
                      >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Brain className="w-8 h-8 text-primary" />
                        </div>
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-center">Wybierz rodzaj testu</DialogTitle>
                        </DialogHeader>
                        
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <Card 
                            className="cursor-pointer hover:border-primary transition-colors relative overflow-hidden group"
                            onClick={() => startTest("short")}
                          >
                            <CardContent className="p-6 flex flex-col items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6 text-blue-500" />
                              </div>
                              <div className="text-center">
                                <h3 className="font-bold text-lg">Szybki Test</h3>
                                <p className="text-sm text-muted-foreground">10 pytań • ok. 2 min</p>
                              </div>
                              <p className="text-xs text-muted-foreground mt-2">Szybka weryfikacja podstawowej wiedzy.</p>
                            </CardContent>
                          </Card>

                          <Card 
                            className="cursor-pointer hover:border-primary transition-colors relative overflow-hidden group"
                            onClick={() => startTest("long")}
                          >
                            <CardContent className="p-6 flex flex-col items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Brain className="w-6 h-6 text-purple-500" />
                              </div>
                              <div className="text-center">
                                <h3 className="font-bold text-lg">Pełny Test</h3>
                                <p className="text-sm text-muted-foreground">25 pytań • ok. 10 min</p>
                              </div>
                              <p className="text-xs text-muted-foreground mt-2">Dokładna analiza Twojego poziomu.</p>
                            </CardContent>
                          </Card>
                        </div>
                      </motion.div>
                    )}

                    {mode === "test" && (
                      <motion.div
                        key="test"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-medium text-muted-foreground">
                            Pytanie {currentQuestion + 1} z {testQuestions.length}
                          </span>
                          <span className="text-xs font-bold bg-muted px-2 py-1 rounded">
                            {testQuestions[currentQuestion].level}
                          </span>
                        </div>
                        <Progress value={((currentQuestion) / testQuestions.length) * 100} className="h-2" />
                        
                        <div className="py-4">
                          <h3 className="text-xl font-semibold mb-6 leading-relaxed">
                            {testQuestions[currentQuestion].question.split("___").map((part, i, arr) => (
                              <span key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                  <span className="inline-block w-16 border-b-2 border-primary mx-1"></span>
                                )}
                              </span>
                            ))}
                          </h3>

                          <RadioGroup value={selectedAnswer || ""} onValueChange={setSelectedAnswer} className="space-y-3">
                            {testQuestions[currentQuestion].options.map((option) => (
                              <div key={option} className={cn(
                                "flex items-center space-x-2 border rounded-xl p-4 cursor-pointer transition-all hover:bg-muted/50",
                                selectedAnswer === option ? "border-primary bg-primary/5" : "border-border"
                              )}>
                                <RadioGroupItem value={option} id={option} />
                                <Label htmlFor={option} className="flex-1 cursor-pointer font-medium text-base">{option}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <Button 
                          className="w-full rounded-full" 
                          size="lg"
                          disabled={!selectedAnswer}
                          onClick={handleAnswer}
                        >
                          {currentQuestion + 1 === testQuestions.length ? "Zakończ test" : "Następne pytanie"}
                        </Button>
                      </motion.div>
                    )}

                    {mode === "result" && (
                      <LevelTestResult 
                        score={score}
                        totalQuestions={testQuestions.length}
                        level={result.level}
                        desc={result.desc}
                        onRestart={() => setMode("intro")}
                        onClose={() => setIsOpen(false)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex-1 relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl opacity-50" />
            <div className="relative bg-background border rounded-2xl p-6 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-4 border-b pb-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-bold text-primary">A2</span>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-primary" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Gramatyka podstawowa</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                  <span>Czasy przeszłe</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-4 h-4 rounded-full border-2 border-muted" />
                  <span>Konstrukcje warunkowe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}