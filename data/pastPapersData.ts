import { PastPaperSubject } from '../types';

export const pastPapers: Record<string, PastPaperSubject> = {
    math: {
        name: "Mathematics",
        icon: "➕",
        description: "Practice with real matric math papers covering algebra, geometry, calculus, and more.",
        papers: {
            "2005": {
                questions: [
                    { question: "Solve for x: 2x + 5 = 15", options: ["3", "5", "7", "10"], correct: 1, explanation: "2x + 5 = 15 → 2x = 10 → x = 5" },
                    { question: "What is the area of a circle with radius 4?", options: ["12.56", "16π", "25.12", "50.24"], correct: 1, explanation: "Area = πr² = π × 16 = 16π square units" }, // Corrected option index
                    { question: "Factorize: x² - 9", options: ["(x-3)(x+3)", "(x-9)(x+1)", "(x-3)²", "x(x-9)"], correct: 0, explanation: "Difference of squares: x² - 9 = x² - 3² = (x-3)(x+3)" },
                    { question: "What is sin(30°)?", options: ["0", "0.5", "1", "√2/2"], correct: 1, explanation: "sin(30°) = 1/2 = 0.5" },
                    { question: "If f(x) = 2x + 3, what is f(4)?", options: ["5", "7", "9", "11"], correct: 3, explanation: "f(4) = 2(4) + 3 = 8 + 3 = 11" }
                ],
                totalQuestions: 50,
                duration: "3 hours"
            },
            "2010": {
                questions: [
                    { question: "What is the derivative of x³?", options: ["x²", "3x²", "3x³", "x³/3"], correct: 1, explanation: "d/dx(x³) = 3x² by power rule" },
                    { question: "Solve: 3x - 7 = 14", options: ["5", "7", "9", "11"], correct: 1, explanation: "3x - 7 = 14 → 3x = 21 → x = 7" },
                    { question: "What is cos(60°)?", options: ["0", "0.5", "√3/2", "1"], correct: 1, explanation: "cos(60°) = 1/2 = 0.5" },
                    { question: "Volume of a cylinder with r=3, h=5?", options: ["45π", "15π", "30π", "60π"], correct: 0, explanation: "V = πr²h = π × 9 × 5 = 45π" },
                    { question: "What is log₁₀(100)?", options: ["1", "2", "10", "100"], correct: 1, explanation: "log₁₀(100) = log₁₀(10²) = 2" }
                ],
                totalQuestions: 50,
                duration: "3 hours"
            },
            "2015": {
                questions: [
                    { question: "What is the integral of 2x dx?", options: ["x²", "x² + C", "2x + C", "x²/2 + C"], correct: 1, explanation: "∫2x dx = x² + C" }, // Corrected option index
                    { question: "Probability of rolling a 6 on a die?", options: ["1/2", "1/3", "1/6", "1/12"], correct: 2, explanation: "There are 6 possible outcomes, 1 favorable: P = 1/6" },
                    { question: "What is tan(45°)?", options: ["0", "1", "√2", "√3"], correct: 1, explanation: "tan(45°) = 1" },
                    { question: "What is 15% of 200?", options: ["20", "25", "30", "35"], correct: 2, explanation: "15% of 200 = 0.15 × 200 = 30" }
                ],
                totalQuestions: 50,
                duration: "3 hours"
            },
            "2020": {
                questions: [
                    { question: "What is the slope of y = 3x + 2?", options: ["2", "3", "5", "0"], correct: 1, explanation: "In y = mx + b, m = 3 is the slope" },
                    { question: "Solve the quadratic: x² - 5x + 6 = 0", options: ["x=2,3", "x=1,6", "x=0,5", "x=-2,-3"], correct: 0, explanation: "(x-2)(x-3) = 0 → x=2, x=3" },
                    { question: "What is e^0?", options: ["0", "1", "e", "∞"], correct: 1, explanation: "Any number to the power 0 is 1, including e^0 = 1" },
                    { question: "Arithmetic sequence: 2, 5, 8, ?", options: ["9", "10", "11", "12"], correct: 2, explanation: "Common difference d=3, so 8+3=11" },
                    { question: "What is sin(90°)?", options: ["0", "0.5", "√2/2", "1"], correct: 3, explanation: "sin(90°) = 1" }
                ],
                totalQuestions: 50,
                duration: "3 hours"
            }
        }
    },
    english: {
        name: "English",
        icon: "📖",
        description: "Practice reading comprehension, grammar, vocabulary, and essay writing from past papers.",
        papers: {
            "2005": {
                questions: [
                    { question: "What is a synonym for 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], correct: 1, explanation: "Joyful means the same as happy" },
                    { question: "Choose the correct spelling:", options: ["Recieve", "Receive", "Receve", "Recive"], correct: 1, explanation: "'i' before 'e' except after 'c'" },
                    { question: "What is the past tense of 'go'?", options: ["Goed", "Went", "Gone", "Going"], correct: 1, explanation: "The irregular verb 'go' becomes 'went' in past tense" },
                    { question: "Which sentence is correct?", options: ["She don't like apples", "She doesn't like apples", "She not like apples", "She isn't like apples"], correct: 1, explanation: "Third person singular requires 'doesn't'" },
                    { question: "What does 'benevolent' mean?", options: ["Evil", "Kind", "Lazy", "Rich"], correct: 1, explanation: "'Bene-' means good, so benevolent = kind-hearted" }
                ],
                totalQuestions: 40,
                duration: "2.5 hours"
            },
            "2010": {
                questions: [
                    { question: "What is an antonym for 'ancient'?", options: ["Old", "Modern", "Historic", "Traditional"], correct: 1, explanation: "Modern is the opposite of ancient" },
                    { question: "Fill in: The cat _____ on the mat.", options: ["is lay", "is lying", "lay", "lying"], correct: 1, explanation: "Present continuous: is + lying" },
                    { question: "Which is a complete sentence?", options: ["Running quickly", "The dog barked loudly", "Because it was raining", "Under the old oak tree"], correct: 1, explanation: "Has subject + verb = complete sentence" },
                    { question: "What is 'meticulous'?", options: ["Careless", "Careful", "Quick", "Lazy"], correct: 1, explanation: "Meticulous means very careful and precise" },
                    { question: "Passive voice: 'The chef cooked the meal'", options: ["The meal was cooked by the chef", "The chef was cooked by the meal", "The meal cooked the chef", "The chef is cooking the meal"], correct: 0, explanation: "Object becomes subject in passive voice" }
                ],
                totalQuestions: 40,
                duration: "2.5 hours"
            },
            "2015": {
                questions: [
                    { question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Childrens"], correct: 1, explanation: "Children is the irregular plural form" },
                    { question: "Choose the correct preposition: 'She is afraid ___ dogs'", options: ["from", "of", "with", "to"], correct: 1, explanation: "Afraid of is the correct idiom" },
                    { question: "What does 'procrastinate' mean?", options: ["To hurry", "To delay", "To plan", "To finish"], correct: 1, explanation: "Procrastinate means to put off doing something" },
                    { question: "Which is a compound sentence?", options: ["I like tea", "I like tea, and she likes coffee", "Running is healthy", "The book is interesting"], correct: 1, explanation: "Has two independent clauses joined by 'and'" },
                    { question: "Direct speech: 'I am tired,' he said", options: ["He said that he is tired", "He said that he was tired", "He says he was tired", "He said he has been tired"], correct: 1, explanation: "Backshift: am → was in reported speech" }
                ],
                totalQuestions: 40,
                duration: "2.5 hours"
            }
        }
    },
    physics: {
        name: "Physics",
        icon: "⚡️",
        description: "Test your understanding of mechanics, electricity, waves, and modern physics from past exams.",
        papers: {
            "2005": {
                questions: [
                    { question: "What is the SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], correct: 1, explanation: "Force is measured in Newtons (N = kg·m/s²)" },
                    { question: "Acceleration due to gravity on Earth?", options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "11 m/s²"], correct: 0, explanation: "g ≈ 9.8 m/s²" },
                    { question: "What is Ohm's Law?", options: ["V = IR", "P = VI", "E = mc²", "F = ma"], correct: 0, explanation: "Voltage = Current × Resistance" },
                    { question: "Speed of light in vacuum?", options: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10¹² m/s"], correct: 1, explanation: "c = 3×10⁸ m/s" },
                    { question: "What is kinetic energy formula?", options: ["½mv", "mv²", "½mv²", "mgh"], correct: 2, explanation: "KE = ½ × mass × velocity²" }
                ],
                totalQuestions: 45,
                duration: "3 hours"
            },
            "2010": {
                questions: [
                    { question: "Power = ?", options: ["Work/Time", "Force/Distance", "Energy/Mass", "Mass/Volume"], correct: 0, explanation: "Power is the rate of doing work: P = W/t" },
                    { question: "What is the unit of electric charge?", options: ["Volt", "Ampere", "Coulomb", "Ohm"], correct: 2, explanation: "Charge is measured in Coulombs (C)" },
                    { question: "Frequency unit?", options: ["Hertz", "Newton", "Joule", "Watt"], correct: 0, explanation: "Frequency is measured in Hertz (Hz = 1/s)" },
                    { question: "Work = ?", options: ["Force × Distance", "Mass × Acceleration", "Energy × Time", "Power × Distance"], correct: 0, explanation: "Work = Force × Distance in direction of force" },
                    { question: "What is wavelength symbol?", options: ["f", "λ", "v", "T"], correct: 1, explanation: "λ (lambda) represents wavelength" }
                ],
                totalQuestions: 45,
                duration: "3 hours"
            }
        }
    },
    chemistry: {
        name: "Chemistry",
        icon: "🧪",
        description: "Practice organic, inorganic, and physical chemistry questions from previous exams.",
        papers: {
            "2005": {
                questions: [
                    { question: "Atomic number of Carbon?", options: ["4", "6", "8", "12"], correct: 1, explanation: "Carbon has 6 protons, atomic number = 6" },
                    { question: "Chemical formula for water?", options: ["H2O", "CO2", "NaCl", "O2"], correct: 0, explanation: "H₂O = 2 hydrogen + 1 oxygen" },
                    { question: "What is pH of neutral solution?", options: ["0", "7", "14", "1"], correct: 1, explanation: "pH = 7 is neutral (pure water)" },
                    { question: "Mole concept: 1 mole = ?", options: ["6.02×10²² particles", "6.02×10²³ particles", "6.02×10²⁴ particles", "6.02×10²⁰ particles"], correct: 1, explanation: "Avogadro's number = 6.02×10²³" },
                    { question: "What gas do plants absorb?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], correct: 1, explanation: "Plants use CO₂ for photosynthesis" }
                ],
                totalQuestions: 45,
                duration: "3 hours"
            },
            "2015": {
                questions: [
                    { question: "What is the molecular weight of H₂O?", options: ["16", "17", "18", "19"], correct: 2, explanation: "(2×1) + 16 = 18 g/mol" },
                    { question: "Acid + Base → ?", options: ["Salt + Water", "Gas + Heat", "Precipitate", "Light"], correct: 0, explanation: "Neutralization reaction produces salt and water" },
                    { question: "Which is a noble gas?", options: ["Oxygen", "Nitrogen", "Helium", "Chlorine"], correct: 2, explanation: "Helium has complete electron shell (Group 18)" },
                    { question: "What is Avogadro's number?", options: ["6.02×10²²", "6.02×10²³", "6.02×10²⁴", "6.02×10²⁰"], correct: 1, explanation: "6.02×10²³ particles per mole" },
                    { question: "Oxidation is?", options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"], correct: 1, explanation: "Oxidation = loss of electrons (OIL RIG)" }
                ],
                totalQuestions: 45,
                duration: "3 hours"
            }
        }
    },
    biology: {
        name: "Biology",
        icon: "🧬",
        description: "Test your knowledge of cell biology, genetics, ecology, and human physiology from past papers.",
        papers: {
            "2010": {
                questions: [
                    { question: "Powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], correct: 1, explanation: "Mitochondria produce ATP (energy)" },
                    { question: "DNA base pairs with?", options: ["A-T, C-G", "A-C, T-G", "A-G, T-C", "A-U, C-G"], correct: 0, explanation: "A pairs with T, C pairs with G" },
                    { question: "What is photosynthesis equation?", options: ["6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O", "6O₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂", "CO₂ + H₂O → O₂ + Sugar"], correct: 0, explanation: "Plants convert CO₂ + H₂O to glucose + O₂" },
                    { question: "Human blood type determined by?", options: ["Mitochondrial DNA", "Nuclear DNA", "RNA", "Proteins only"], correct: 1, explanation: "Blood type genes inherited from parents" },
                    { question: "What is an enzyme?", options: ["Carbohydrate", "Biological catalyst", "Hormone", "Vitamin"], correct: 1, explanation: "Enzymes speed up chemical reactions in cells" }
                ],
                totalQuestions: 45,
                duration: "3 hours"
            }
        }
    }
};
