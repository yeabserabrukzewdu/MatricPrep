import { QuizSubject } from '../types';

export const subjects: Record<string, QuizSubject> = {
    math: {
        "Relations_and_Functions": {
            1: [
                {
                    question: "A relation is defined as a set of:",
                    options: ["Ordered pairs", "Single numbers", "Equations only", "Inequalities only"],
                    correct: 0,
                    explanation: "A relation is a set of ordered pairs (x, y) that describe a relationship between elements of two sets (domain and codomain). Options B, C, and D do not define a relation."
                },
                {
                    question: "Which of the following represents a function?",
                    options: ["{(1, 2), (1, 3), (2, 4)}", "{(1, 2), (2, 3), (3, 4)}", "{(1, 2), (2, 2), (1, 3)}", "{(2, 1), (2, 2), (2, 3)}"],
                    correct: 1,
                    explanation: "A function requires each input (x) to map to exactly one output (y). Option B has unique x-values (1, 2, 3) each paired with one y-value. In A and C, x = 1 maps to multiple y-values (not a function). In D, x = 2 maps to multiple y-values."
                },
                {
                    question: "The domain of a relation is:",
                    options: ["The set of all output values", "The set of all input values", "The set of all ordered pairs", "The set of all equations"],
                    correct: 1,
                    explanation: "The domain is the set of all x-values (inputs) in a relation’s ordered pairs. Option A refers to the range, C is too broad, and D is unrelated."
                },
                {
                    question: "For the relation {(1, 4), (2, 5), (3, 6)}, what is the range?",
                    options: ["{1, 2, 3}", "{4, 5, 6}", "{1, 4, 2, 5}", "{3, 6}"],
                    correct: 1,
                    explanation: "The range is the set of all y-values in the relation. From the pairs, the y-values are 4, 5, 6. Option A is the domain, C mixes domain and range, and D is incomplete."
                },
                {
                    question: "Which of the following is NOT a function?",
                    options: ["y=2x + 3", "x = y²", "y = x² + 1", "y = 3x – 2"],
                    correct: 1,
                    explanation: "For x = y², one x-value (e.g., x = 4) corresponds to two y-values (y = 2, y = –2), violating the function definition. Options A, C, and D are functions (each x maps to one y)."
                },
                {
                    question: "The vertical line test is used to determine if a graph represents:",
                    options: ["A relation", "A function", "A domain", "A range"],
                    correct: 1,
                    explanation: "The vertical line test checks if a graph is a function: if any vertical line intersects the graph at most once, it’s a function. It doesn’t apply to relations (A), domain (C), or range (D)."
                },
                {
                    question: "If f(x) = 3x + 2, what is f(4)?",
                    options: ["10", "12", "14", "16"],
                    correct: 2,
                    explanation: "Substitute x = 4 into f(x) = 3x + 2: f(4) = 3(4) + 2 = 12 + 2 = 14."
                },
                {
                    question: "The relation {(x, y) | y = x + 1} is:",
                    options: ["Not a function", "A function", "A constant relation", "An empty relation"],
                    correct: 1,
                    explanation: "The equation y = x + 1 assigns exactly one y-value for each x-value, satisfying the function definition. It’s not constant (C) or empty (D), and it passes the vertical line test."
                },
                {
                    question: "What is the domain of the function f(x) = 1/(x – 2)?",
                    options: ["All real numbers", "All real numbers except x = 2", "x ≥ 2", "x ≤ 2"],
                    correct: 1,
                    explanation: "The denominator (x – 2) cannot be zero, so x ≠ 2. The domain is all real numbers except x = 2."
                },
                {
                    question: "The range of the function y = x² for all real numbers is:",
                    options: ["All real numbers", "y ≥ 0", "y ≤ 0", "y = 0"],
                    correct: 1,
                    explanation: "Since x² is always non-negative (e.g., (–2)² = 4, 0² = 0), the range of y = x² is y ≥ 0. It never produces negative values."
                }
            ],
            2: [
              
               {
                    question: "A relation is defined as a set of:",
                    options: ["Ordered pairs", "Single numbers", "Equations only", "Inequalities only"],
                    correct: 0,
                    explanation: "A relation is a set of ordered pairs (x, y) that describe a relationship between elements of two sets (domain and codomain). Options B, C, and D do not define a relation."
                },
                {
                    question: "Which of the following represents a function?",
                    options: ["{(1, 2), (1, 3), (2, 4)}", "{(1, 2), (2, 3), (3, 4)}", "{(1, 2), (2, 2), (1, 3)}", "{(2, 1), (2, 2), (2, 3)}"],
                    correct: 1,
                    explanation: "A function requires each input (x) to map to exactly one output (y). Option B has unique x-values (1, 2, 3) each paired with one y-value. In A and C, x = 1 maps to multiple y-values (not a function). In D, x = 2 maps to multiple y-values."
                },
                {
                    question: "The domain of a relation is:",
                    options: ["The set of all output values", "The set of all input values", "The set of all ordered pairs", "The set of all equations"],
                    correct: 1,
                    explanation: "The domain is the set of all x-values (inputs) in a relation’s ordered pairs. Option A refers to the range, C is too broad, and D is unrelated."
                },
                {
                    question: "For the relation {(1, 4), (2, 5), (3, 6)}, what is the range?",
                    options: ["{1, 2, 3}", "{4, 5, 6}", "{1, 4, 2, 5}", "{3, 6}"],
                    correct: 1,
                    explanation: "The range is the set of all y-values in the relation. From the pairs, the y-values are 4, 5, 6. Option A is the domain, C mixes domain and range, and D is incomplete."
                },
                {
                    question: "Which of the following is NOT a function?",
                    options: ["y=2x + 3", "x = y²", "y = x² + 1", "y = 3x – 2"],
                    correct: 1,
                    explanation: "For x = y², one x-value (e.g., x = 4) corresponds to two y-values (y = 2, y = –2), violating the function definition. Options A, C, and D are functions (each x maps to one y)."
                },
                {
                    question: "The vertical line test is used to determine if a graph represents:",
                    options: ["A relation", "A function", "A domain", "A range"],
                    correct: 1,
                    explanation: "The vertical line test checks if a graph is a function: if any vertical line intersects the graph at most once, it’s a function. It doesn’t apply to relations (A), domain (C), or range (D)."
                },
                {
                    question: "If f(x) = 3x + 2, what is f(4)?",
                    options: ["10", "12", "14", "16"],
                    correct: 2,
                    explanation: "Substitute x = 4 into f(x) = 3x + 2: f(4) = 3(4) + 2 = 12 + 2 = 14."
                },
                {
                    question: "The relation {(x, y) | y = x + 1} is:",
                    options: ["Not a function", "A function", "A constant relation", "An empty relation"],
                    correct: 1,
                    explanation: "The equation y = x + 1 assigns exactly one y-value for each x-value, satisfying the function definition. It’s not constant (C) or empty (D), and it passes the vertical line test."
                },
                {
                    question: "What is the domain of the function f(x) = 1/(x – 2)?",
                    options: ["All real numbers", "All real numbers except x = 2", "x ≥ 2", "x ≤ 2"],
                    correct: 1,
                    explanation: "The denominator (x – 2) cannot be zero, so x ≠ 2. The domain is all real numbers except x = 2."
                },
                {
                    question: "The range of the function y = x² for all real numbers is:",
                    options: ["All real numbers", "y ≥ 0", "y ≤ 0", "y = 0"],
                    correct: 1,
                    explanation: "Since x² is always non-negative (e.g., (–2)² = 4, 0² = 0), the range of y = x² is y ≥ 0. It never produces negative values."
                }
            ], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        },
        "Rational_Expressions": {
            1: [
                {
                    question: "What is 2 + 3?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "2 + 3 equals 5 because you add the two numbers together."
                },
                {
                    question: "What is 7 - 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2,
                    explanation: "7 - 2 equals 5 because you subtract 2 from 7."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        },
        "Coordinate_Geometry": {
            1: [
                {
                    question: "What is 2 + 3?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "2 + 3 equals 5 because you add the two numbers together."
                },
                {
                    question: "What is 7 - 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2,
                    explanation: "7 - 2 equals 5 because you subtract 2 from 7."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        },
        "Trigonometry": {
            1: [
                {
                    question: "What is 2 + 3?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "2 + 3 equals 5 because you add the two numbers together."
                },
                {
                    question: "What is 7 - 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2,
                    explanation: "7 - 2 equals 5 because you subtract 2 from 7."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        },
        "Statistics": {
            1: [
                {
                    question: "What is 2 + 3?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "2 + 3 equals 5 because you add the two numbers together."
                },
                {
                    question: "What is 7 - 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2,
                    explanation: "7 - 2 equals 5 because you subtract 2 from 7."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        },
        "Probability": {
            1: [
                {
                    question: "What is 2 + 3?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "2 + 3 equals 5 because you add the two numbers together."
                },
                {
                    question: "What is 7 - 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2,
                    explanation: "7 - 2 equals 5 because you subtract 2 from 7."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        },
        "Limits and Continuity": {
            1: [
                {
                    question: "What is 2 + 3?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "2 + 3 equals 5 because you add the two numbers together."
                },
                {
                    question: "What is 7 - 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2,
                    explanation: "7 - 2 equals 5 because you subtract 2 from 7."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        },
        "Matrices and Determinants": {
            1: [
                {
                    question: "What is 2 + 3?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "2 + 3 equals 5 because you add the two numbers together."
                },
                {
                    question: "What is 7 - 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2,
                    explanation: "7 - 2 equals 5 because you subtract 2 from 7."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        },
        "Sequences and Series": {
            1: [
                {
                    question: "What is 2 + 3?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "2 + 3 equals 5 because you add the two numbers together."
                },
                {
                    question: "What is 7 - 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2,
                    explanation: "7 - 2 equals 5 because you subtract 2 from 7."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        },
        "Vectors": {
            1: [
                {
                    question: "What is 2 + 3?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "2 + 3 equals 5 because you add the two numbers together."
                },
                {
                    question: "What is 7 - 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2,
                    explanation: "7 - 2 equals 5 because you subtract 2 from 7."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        },
        "Linear_Programming": {
            1: [
                {
                    question: "What is 2 + 3?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "2 + 3 equals 5 because you add the two numbers together."
                },
                {
                    question: "What is 7 - 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2,
                    explanation: "7 - 2 equals 5 because you subtract 2 from 7."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        },
        "Financial_Mathematics": {
            1: [
                {
                    question: "What is 2 + 3?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "2 + 3 equals 5 because you add the two numbers together."
                },
                {
                    question: "What is 7 - 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2,
                    explanation: "7 - 2 equals 5 because you subtract 2 from 7."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        },
    },
    biology: {
        "cell_biology": {
            1: [
                {
                    question: "What is the powerhouse of the cell?",
                    options: ["Nucleus", "Mitochondrion", "Ribosome", "Golgi Apparatus"],
                    correct: 1,
                    explanation: "The mitochondrion produces energy in the form of ATP."
                },
                {
                    question: "What molecule carries genetic information?",
                    options: ["DNA", "RNA", "Protein", "Lipid"],
                    correct: 0,
                    explanation: "DNA carries genetic information in cells."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        }
    },
    chemistry: {
        "basics": {
            1: [
                {
                    question: "What is the chemical symbol for water?",
                    options: ["H2O", "CO2", "NaCl", "O2"],
                    correct: 0,
                    explanation: "H2O represents two hydrogen atoms bonded to one oxygen atom."
                },
                {
                    question: "What is the atomic number of carbon?",
                    options: ["4", "6", "8", "12"],
                    correct: 1,
                    explanation: "Carbon has 6 protons, so its atomic number is 6."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        }
    },
    english: {
        "grammar": {
            1: [
                {
                    question: "What is the synonym of 'happy'?",
                    options: ["Sad", "Joyful", "Angry", "Tired"],
                    correct: 1,
                    explanation: "Joyful is a synonym for happy."
                },
                {
                    question: "What is the plural of 'child'?",
                    options: ["Childs", "Childes", "Children", "Childrens"],
                    correct: 2,
                    explanation: "The plural of 'child' is 'children.'"
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        }
    },
    physics: {
        "mechanics": {
            1: [
                {
                    question: "What is the SI unit of force?",
                    options: ["Joule", "Newton", "Watt", "Meter"],
                    correct: 1,
                    explanation: "The SI unit of force is the Newton (kg·m/s²)."
                },
                {
                    question: "What is the acceleration due to gravity?",
                    options: ["9.8 m/s²", "7.8 m/s²", "8.8 m/s²", "10.8 m/s²"],
                    correct: 0,
                    explanation: "Gravity on Earth is approximately 9.8 m/s²."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        }
    },
    civics: {
        "government_basics": {
            1: [
                {
                    question: "What are the three branches of the U.S. government?",
                    options: ["Executive, Legislative, Judicial", "Federal, State, Local", "President, Senate, House", "Democratic, Republican, Independent"],
                    correct: 0,
                    explanation: "The three branches are the Executive (President), Legislative (Congress), and Judicial (Supreme Court), designed to provide checks and balances."
                },
                {
                    question: "What is the Bill of Rights?",
                    options: ["The first 10 amendments to the Constitution", "The preamble to the Constitution", "A list of all laws", "The declaration of independence"],
                    correct: 0,
                    explanation: "The Bill of Rights consists of the first 10 amendments to the U.S. Constitution, which guarantee essential rights and civil liberties."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        }
    },
    history: {
        "world_war_1": {
            1: [
                {
                    question: "What event is widely considered the trigger for World War I?",
                    options: ["The sinking of the Lusitania", "The invasion of Poland", "The assassination of Archduke Franz Ferdinand", "The Russian Revolution"],
                    correct: 2,
                    explanation: "The assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo on June 28, 1914, triggered the July Crisis and led to the outbreak of WWI."
                },
                {
                    question: "What was the name of the treaty that officially ended World War I?",
                    options: ["The Treaty of Paris", "The Treaty of Versailles", "The Geneva Convention", "The Yalta Conference"],
                    correct: 1,
                    explanation: "The Treaty of Versailles, signed in 1919, officially ended the state of war between Germany and the Allied Powers."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        }
    },
    geography: {
        "world_capitals": {
            1: [
                {
                    question: "What is the capital of Canada?",
                    options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
                    correct: 3,
                    explanation: "Ottawa is the capital of Canada, although Toronto is its largest city."
                },
                {
                    question: "What is the capital of Australia?",
                    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                    correct: 2,
                    explanation: "Canberra was chosen as the capital of Australia in 1908 as a compromise between rivals Sydney and Melbourne."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        }
    },
    economics: {
        "supply_and_demand": {
            1: [
                {
                    question: "According to the law of demand, if the price of a good increases, what happens to the quantity demanded, ceteris paribus?",
                    options: ["It increases", "It decreases", "It stays the same", "It becomes zero"],
                    correct: 1,
                    explanation: "The law of demand states that, all else being equal (ceteris paribus), as the price of a product increases, quantity demanded falls."
                },
                {
                    question: "A situation where quantity supplied is greater than quantity demanded is called a:",
                    options: ["Shortage", "Surplus", "Equilibrium", "Deficit"],
                    correct: 1,
                    explanation: "A surplus occurs when there is excess supply—that is, the quantity of a good or service supplied is more than the quantity demanded."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        }
    },
    sat: {
        "vocabulary": {
            1: [
                {
                    question: "Which word is a synonym for 'ubiquitous'?",
                    options: ["Rare", "Pervasive", "Hidden", "Complex"],
                    correct: 1,
                    explanation: "'Ubiquitous' means present, appearing, or found everywhere. 'Pervasive' is a close synonym."
                },
                {
                    question: "Choose the word that best completes the sentence: The speaker's __________ remarks were both insightful and entertaining.",
                    options: ["laconic", "pithy", "verbose", "mundane"],
                    correct: 1,
                    explanation: "'Pithy' means concise and forcefully expressive, which fits the context of being both insightful and entertaining. 'Laconic' means using few words, 'verbose' means using too many words, and 'mundane' means dull."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        }
    },
    aptitude: {
        "logical_reasoning": {
            1: [
                {
                    question: "Find the next number in the series: 2, 5, 10, 17, 26, ?",
                    options: ["35", "36", "37", "38"],
                    correct: 2,
                    explanation: "The pattern is n² + 1, starting with n=1. For n=6, the value is 6² + 1 = 37."
                },
                {
                    question: "All books in the library are fiction. 'The Great Gatsby' is a book in the library. Therefore, 'The Great Gatsby' is:",
                    options: ["Non-fiction", "Fiction", "A magazine", "Cannot be determined"],
                    correct: 1,
                    explanation: "This is a simple deductive reasoning problem. If the premise (all books in the library are fiction) is true, and the condition is met ('The Great Gatsby' is in the library), then the conclusion must be true."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        }
    },
};