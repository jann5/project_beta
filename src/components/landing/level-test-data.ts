export type Question = {
  id: number;
  question: string;
  options: string[];
  correct: string;
  level: string;
  explanation?: string;
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

  // Additional GSE questions (26-85) for comprehensive test
  // A1 Level (GSE 10-21)
  { id: 26, question: "My name ___ Anna.", options: ["is", "am", "are", "be"], correct: "is", level: "A1", explanation: "Use 'is' for third person singular (he/she/it)." },
  { id: 27, question: "How old ___ you?", options: ["is", "am", "are", "be"], correct: "are", level: "A1", explanation: "Use 'are' with 'you'." },
  { id: 28, question: "This is ___ book.", options: ["my", "I", "me", "mine"], correct: "my", level: "A1", explanation: "Possessive adjective before noun." },
  { id: 29, question: "___ is your brother?", options: ["Where", "What", "How", "When"], correct: "Where", level: "A1", explanation: "Use 'Where' for location questions." },
  { id: 30, question: "I ___ two sisters.", options: ["have", "has", "having", "had"], correct: "have", level: "A1", explanation: "Use 'have' with I/you/we/they." },

  // A2 Level (GSE 22-35)
  { id: 31, question: "She ___ to school every day.", options: ["go", "goes", "going", "gone"], correct: "goes", level: "A2", explanation: "Add -es for third person singular present." },
  { id: 32, question: "They ___ watching TV now.", options: ["is", "am", "are", "be"], correct: "are", level: "A2", explanation: "Use 'are' with plural subjects in present continuous." },
  { id: 33, question: "I ___ born in 1990.", options: ["am", "was", "were", "be"], correct: "was", level: "A2", explanation: "Use 'was' for past with I/he/she/it." },
  { id: 34, question: "There ___ many people at the party.", options: ["was", "were", "is", "be"], correct: "were", level: "A2", explanation: "Use 'were' with plural nouns in past." },
  { id: 35, question: "Can you ___ me the salt?", options: ["pass", "passing", "passed", "to pass"], correct: "pass", level: "A2", explanation: "Use base form after modal verbs." },
  { id: 36, question: "She is ___ than her sister.", options: ["tall", "taller", "tallest", "more tall"], correct: "taller", level: "A2", explanation: "Add -er for comparative adjectives." },
  { id: 37, question: "I don't have ___ money.", options: ["some", "any", "many", "much"], correct: "any", level: "A2", explanation: "Use 'any' in negative sentences." },
  { id: 38, question: "Would you like ___ coffee?", options: ["some", "any", "a", "the"], correct: "some", level: "A2", explanation: "Use 'some' in offers and requests." },

  // B1 Level (GSE 36-50)
  { id: 39, question: "I ___ here for three years.", options: ["live", "am living", "have lived", "lived"], correct: "have lived", level: "B1", explanation: "Use present perfect for time period continuing to now." },
  { id: 40, question: "If it ___ tomorrow, we'll stay home.", options: ["rain", "rains", "will rain", "rained"], correct: "rains", level: "B1", explanation: "Use present simple in if-clause of first conditional." },
  { id: 41, question: "She made me ___ for her.", options: ["wait", "to wait", "waiting", "waited"], correct: "wait", level: "B1", explanation: "Use base form after 'make someone'." },
  { id: 42, question: "The book ___ by millions of people.", options: ["read", "reads", "is read", "was reading"], correct: "is read", level: "B1", explanation: "Use passive voice: be + past participle." },
  { id: 43, question: "I'm not used to ___ up early.", options: ["get", "getting", "got", "gotten"], correct: "getting", level: "B1", explanation: "Use gerund after 'be used to'." },
  { id: 44, question: "He suggested ___ to the cinema.", options: ["go", "to go", "going", "gone"], correct: "going", level: "B1", explanation: "Use gerund after 'suggest'." },
  { id: 45, question: "I've been working ___ six hours.", options: ["since", "for", "from", "during"], correct: "for", level: "B1", explanation: "Use 'for' with duration of time." },
  { id: 46, question: "She's the ___ intelligent person I know.", options: ["more", "most", "much", "very"], correct: "most", level: "B1", explanation: "Use 'most' for superlative with long adjectives." },
  { id: 47, question: "I'll call you as soon as I ___.", options: ["arrive", "will arrive", "arrived", "am arriving"], correct: "arrive", level: "B1", explanation: "Use present simple after time clauses." },
  { id: 48, question: "You ___ wear a uniform at work.", options: ["must", "have to", "should", "can"], correct: "have to", level: "B1", explanation: "Use 'have to' for external obligation." },

  // B2 Level (GSE 51-65)
  { id: 49, question: "I wish I ___ play the piano.", options: ["can", "could", "would", "will"], correct: "could", level: "B2", explanation: "Use past modal after 'wish' for present wishes." },
  { id: 50, question: "By the time you arrive, I ___ dinner.", options: ["cook", "will cook", "will have cooked", "am cooking"], correct: "will have cooked", level: "B2", explanation: "Use future perfect for actions completed before future time." },
  { id: 51, question: "She acts ___ she knows everything.", options: ["like", "as", "as if", "if"], correct: "as if", level: "B2", explanation: "Use 'as if' to describe how someone behaves." },
  { id: 52, question: "The meeting has been ___ until Friday.", options: ["put off", "put on", "put up", "put down"], correct: "put off", level: "B2", explanation: "'Put off' means postpone." },
  { id: 53, question: "I'd sooner you ___ come tomorrow.", options: ["don't", "didn't", "won't", "wouldn't"], correct: "didn't", level: "B2", explanation: "Use past simple after 'would sooner'." },
  { id: 54, question: "___ being tired, she continued working.", options: ["Despite", "Although", "However", "But"], correct: "Despite", level: "B2", explanation: "Use 'despite' + noun/gerund." },
  { id: 55, question: "The house ___ we lived was very old.", options: ["which", "where", "that", "what"], correct: "where", level: "B2", explanation: "Use 'where' for place in relative clauses." },
  { id: 56, question: "I can't stand people ___ are rude.", options: ["which", "what", "who", "whose"], correct: "who", level: "B2", explanation: "Use 'who' for people in relative clauses." },
  { id: 57, question: "Little ___ he know what would happen.", options: ["does", "did", "has", "had"], correct: "did", level: "B2", explanation: "Inversion after negative adverb 'little'." },
  { id: 58, question: "She denied ___ the money.", options: ["take", "to take", "taking", "taken"], correct: "taking", level: "B2", explanation: "Use gerund after 'deny'." },

  // C1 Level (GSE 66-90)
  { id: 59, question: "Scarcely ___ arrived when the phone rang.", options: ["I had", "had I", "have I", "I have"], correct: "had I", level: "C1", explanation: "Inversion after 'scarcely' with past perfect." },
  { id: 60, question: "Under no circumstances ___ this rule be broken.", options: ["can", "should", "would", "might"], correct: "should", level: "C1", explanation: "Inversion after negative expressions." },
  { id: 61, question: "It's about time you ___ a decision.", options: ["make", "made", "have made", "will make"], correct: "made", level: "C1", explanation: "Use past simple after 'it's time'." },
  { id: 62, question: "But for your help, I ___ failed.", options: ["would have", "will have", "had", "have"], correct: "would have", level: "C1", explanation: "'But for' means 'if it were not for'." },
  { id: 63, question: "No matter ___ hard he tries, he can't succeed.", options: ["what", "how", "which", "where"], correct: "how", level: "C1", explanation: "Use 'how' with adjectives/adverbs after 'no matter'." },
  { id: 64, question: "The project ___ by now.", options: ["should complete", "should have completed", "should be completed", "should have been completed"], correct: "should have been completed", level: "C1", explanation: "Modal perfect passive for past expectation." },
  { id: 65, question: "Were I you, I ___ accept the offer.", options: ["will", "would", "shall", "should"], correct: "would", level: "C1", explanation: "Inversion in conditional: 'Were I' = 'If I were'." },
  { id: 66, question: "She is said ___ very wealthy.", options: ["be", "to be", "being", "been"], correct: "to be", level: "C1", explanation: "Passive reporting structure with infinitive." },
  { id: 67, question: "Such ___ the circumstances, we had no choice.", options: ["were", "was", "are", "is"], correct: "were", level: "C1", explanation: "Inversion with 'such'." },
  { id: 68, question: "I object to ___ like a child.", options: ["treat", "treating", "be treated", "being treated"], correct: "being treated", level: "C1", explanation: "Passive gerund after 'object to'." },

  // Additional C1 and mixed levels (69-85)
  { id: 69, question: "The coffee is too hot ___.", options: ["to drink", "for drinking", "to drink it", "for drink"], correct: "to drink", level: "B2", explanation: "Use 'too + adjective + infinitive'." },
  { id: 70, question: "He earns ___ money to buy a car.", options: ["enough", "too", "so", "very"], correct: "enough", level: "B1", explanation: "Use 'enough' before nouns." },
  { id: 71, question: "I'd like you ___ me with this.", options: ["help", "to help", "helping", "helped"], correct: "to help", level: "B1", explanation: "Use infinitive after 'would like someone'." },
  { id: 72, question: "She succeeded ___ passing the exam.", options: ["in", "at", "on", "to"], correct: "in", level: "B2", explanation: "'Succeed in' + gerund." },
  { id: 73, question: "I'm looking forward to ___ you.", options: ["see", "seeing", "saw", "seen"], correct: "seeing", level: "B1", explanation: "Use gerund after 'look forward to'." },
  { id: 74, question: "He ___ have left by now.", options: ["must", "should", "would", "can"], correct: "must", level: "B2", explanation: "Use 'must have' for logical deduction about past." },
  { id: 75, question: "I remember ___ her at the party.", options: ["meet", "to meet", "meeting", "met"], correct: "meeting", level: "B2", explanation: "Use gerund after 'remember' for past events." },
  { id: 76, question: "Don't forget ___ the door.", options: ["lock", "to lock", "locking", "locked"], correct: "to lock", level: "B1", explanation: "Use infinitive after 'forget' for future actions." },
  { id: 77, question: "She avoided ___ my question.", options: ["answer", "to answer", "answering", "answered"], correct: "answering", level: "B2", explanation: "Use gerund after 'avoid'." },
  { id: 78, question: "It's no use ___ over spilt milk.", options: ["cry", "to cry", "crying", "cried"], correct: "crying", level: "B2", explanation: "Use gerund after 'it's no use'." },
  { id: 79, question: "He seems ___ about something.", options: ["worry", "to worry", "worrying", "worried"], correct: "worried", level: "B1", explanation: "Use past participle as adjective after 'seem'." },
  { id: 80, question: "The film was so boring that I fell ___.", options: ["sleep", "asleep", "sleeping", "slept"], correct: "asleep", level: "A2", explanation: "'Fall asleep' is the correct expression." },
  { id: 81, question: "We arrived ___ the station on time.", options: ["at", "in", "to", "on"], correct: "at", level: "A2", explanation: "Use 'at' with specific locations." },
  { id: 82, question: "I've been waiting ___ an hour.", options: ["since", "for", "from", "during"], correct: "for", level: "B1", explanation: "Use 'for' with duration." },
  { id: 83, question: "This is the man ___ daughter is a doctor.", options: ["who", "which", "whose", "whom"], correct: "whose", level: "B2", explanation: "Use 'whose' for possession in relative clauses." },
  { id: 84, question: "Neither John nor Mary ___ coming.", options: ["is", "are", "am", "be"], correct: "is", level: "B2", explanation: "Verb agrees with nearest subject (Mary)." },
  { id: 85, question: "I ___ rather stay home tonight.", options: ["would", "will", "should", "can"], correct: "would", level: "B2", explanation: "'Would rather' expresses preference." },
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

// GSE Test IDs - comprehensive test with 80 questions covering all levels
export const GSE_TEST_IDS = [
  // A1 Level (8 questions)
  1, 26, 27, 28, 29, 30, 2, 3,
  // A2 Level (12 questions)
  4, 5, 31, 32, 33, 34, 35, 36, 37, 38, 80, 81,
  // B1 Level (20 questions)
  6, 7, 8, 9, 10, 25, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 70, 71, 76, 79,
  // B2 Level (25 questions)
  11, 12, 13, 14, 15, 23, 24, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 69, 72, 74, 75, 77, 78, 83, 85,
  // C1 Level (15 questions)
  16, 17, 18, 19, 20, 21, 22, 59, 60, 61, 62, 63, 64, 65, 84,
];