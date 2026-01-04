export type Question = {
  id: number;
  question: string;
  options: string[];
  correct: string;
  level: string;
};

export const QUESTIONS: Question[] = [
  // A1/A2
  { id: 1, question: "I ___ from Poland.", options: ["am", "is", "are", "be"], correct: "am", level: "A1" },
  { id: 2, question: "She ___ a doctor.", options: ["no is", "is not", "aren't", "not"], correct: "is not", level: "A1" },
  { id: 3, question: "___ you like pizza?", options: ["Does", "Are", "Do", "Is"], correct: "Do", level: "A1" },
  { id: 4, question: "Where ___ yesterday?", options: ["you were", "was you", "were you", "did you be"], correct: "were you", level: "A2" },
  { id: 5, question: "I have ___ money.", options: ["any", "no", "none", "not"], correct: "no", level: "A2" },
  // B1
  { id: 6, question: "If I ___ you, I would go there.", options: ["was", "were", "am", "would be"], correct: "were", level: "B1" },
  { id: 7, question: "I have been living here ___ 2010.", options: ["since", "for", "from", "in"], correct: "since", level: "B1" },
  { id: 8, question: "He told me that he ___ busy.", options: ["is", "was", "will be", "has been"], correct: "was", level: "B1" },
  { id: 9, question: "This car ___ in Germany.", options: ["made", "is making", "was made", "has made"], correct: "was made", level: "B1" },
  { id: 10, question: "I look forward to ___ you.", options: ["see", "seeing", "saw", "seen"], correct: "seeing", level: "B1" },
  // B2
  { id: 11, question: "I wish I ___ harder for the exam.", options: ["studied", "would study", "had studied", "have studied"], correct: "had studied", level: "B2" },
  { id: 12, question: "By this time next year, I ___ my degree.", options: ["will finish", "will have finished", "am finishing", "have finished"], correct: "will have finished", level: "B2" },
  { id: 13, question: "Hardly ___ entered the room when the phone rang.", options: ["I had", "had I", "have I", "I have"], correct: "had I", level: "B2" },
  { id: 14, question: "It's high time we ___ home.", options: ["go", "went", "have gone", "will go"], correct: "went", level: "B2" },
  { id: 15, question: "I'd rather you ___ smoke here.", options: ["don't", "didn't", "not", "won't"], correct: "didn't", level: "B2" },
  // C1
  { id: 16, question: "Not only ___ the race, but he also broke the record.", options: ["he won", "did he win", "he did win", "won he"], correct: "did he win", level: "C1" },
  { id: 17, question: "___ the rain, we went for a walk.", options: ["Despite", "Although", "In spite", "Even though"], correct: "Despite", level: "C1" },
  { id: 18, question: "He is believed ___ the country.", options: ["to leave", "to have left", "leaving", "that he left"], correct: "to have left", level: "C1" },
  { id: 19, question: "No sooner ___ down than the noise started.", options: ["I sat", "had I sat", "did I sit", "was I sitting"], correct: "had I sat", level: "C1" },
  { id: 20, question: "Let's go, ___?", options: ["will we", "shall we", "do we", "let us"], correct: "shall we", level: "C1" },
  { id: 21, question: "I suggest that he ___ a doctor immediately.", options: ["see", "sees", "saw", "will see"], correct: "see", level: "C1" },
  { id: 22, question: "Had I known, I ___ you.", options: ["would help", "will help", "would have helped", "helped"], correct: "would have helped", level: "C1" },
  { id: 23, question: "She is used to ___ up early.", options: ["get", "getting", "got", "have got"], correct: "getting", level: "B2" },
  { id: 24, question: "You ___ have seen him; he is in Paris.", options: ["mustn't", "can't", "shouldn't", "needn't"], correct: "can't", level: "B2" },
  { id: 25, question: "The more you practice, ___ you get.", options: ["the better", "better", "the good", "best"], correct: "the better", level: "B1" },
];

// Balanced mix for short test (10 questions):
// 1x A1, 1x A2, 2x B1, 3x B2, 3x C1
export const SHORT_TEST_IDS = [
  1,  // A1
  4,  // A2
  6,  // B1
  8,  // B1
  11, // B2
  13, // B2
  15, // B2
  16, // C1
  18, // C1
  22  // C1 (Swapped 20 for 22 for better difficulty check)
];