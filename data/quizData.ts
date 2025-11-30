
import { QuizSubject } from '../types';

export const subjects: Record<string, QuizSubject> = {
    math: {
        "Relations_and_Functions": {
            1: [
                {
                    question: "A relation is defined as a set of:",
                    options: ["Ordered pairs", "Single numbers", "Equations only", "Inequalities only"],
                    correct: 0,
                    explanation: "A relation is a set of ordered pairs (x, y) that describe a relationship between elements of two sets."
                },
                {
                    question: "Which of the following represents a function?",
                    options: ["{(1, 2), (1, 3)}", "{(1, 2), (2, 3)}", "{(1, 2), (1, 2), (1, 3)}", "{(2, 1), (2, 2)}"],
                    correct: 1,
                    explanation: "A function requires each input (x) to map to exactly one output (y)."
                }
            ]
        },
        "Rational_Expressions": {
            1: [
                {
                    question: "What is the domain of f(x) = 1/(x-2)?",
                    options: ["All real numbers", "x ≠ 2", "x > 2", "x < 2"],
                    correct: 1,
                    explanation: "The denominator cannot be zero, so x - 2 ≠ 0, which means x ≠ 2."
                }
            ]
        },
        "Matrices": {
            1: [
                {
                    question: "What is the order of a matrix with 2 rows and 3 columns?",
                    options: ["2x2", "3x2", "2x3", "3x3"],
                    correct: 2,
                    explanation: "The order of a matrix is defined as rows x columns."
                }
            ]
        },
        "Determinants": {
            1: [
                {
                    question: "If the determinant of a matrix is zero, the matrix is:",
                    options: ["Invertible", "Singular", "Identity", "Diagonal"],
                    correct: 1,
                    explanation: "A matrix with a determinant of zero is called a singular matrix and does not have an inverse."
                }
            ]
        },
        "Vectors": {
            1: [
                {
                    question: "Which quantity is a vector?",
                    options: ["Speed", "Mass", "Velocity", "Distance"],
                    correct: 2,
                    explanation: "Velocity has both magnitude and direction, making it a vector quantity."
                }
            ]
        },
        "Transformations_of_the_plane": {
            1: [
                {
                    question: "Which transformation preserves size and shape?",
                    options: ["Dilation", "Isometry", "Shear", "Stretch"],
                    correct: 1,
                    explanation: "Isometries (translations, rotations, reflections) preserve both size and shape (congruence)."
                }
            ]
        },
        "Statistics": {
            1: [
                {
                    question: "Which measure is most affected by outliers?",
                    options: ["Mean", "Median", "Mode", "Range"],
                    correct: 0,
                    explanation: "The mean includes every value in its calculation, so extreme values (outliers) pull it towards them."
                }
            ]
        },
        "Probability": {
            1: [
                {
                    question: "The probability of an impossible event is:",
                    options: ["1", "0.5", "0", "-1"],
                    correct: 2,
                    explanation: "Probability ranges from 0 (impossible) to 1 (certain)."
                }
            ]
        },
        "Sequences and Series": {
            1: [
                {
                    question: "In an arithmetic sequence, the difference between consecutive terms is:",
                    options: ["Variable", "Constant", "Multiplied", "Zero"],
                    correct: 1,
                    explanation: "Arithmetic sequences have a constant common difference."
                }
            ]
        },
        "Introduction to Calculus": {
            1: [
                {
                    question: "The derivative of a constant is:",
                    options: ["1", "x", "0", "Undefined"],
                    correct: 2,
                    explanation: "Since a constant does not change, its rate of change (derivative) is zero."
                }
            ]
        },
        "Introduction to linear programming": {
            1: [
                {
                    question: "The region satisfying all constraints in linear programming is called:",
                    options: ["Feasible region", "Optimal region", "Solution set", "Constraint set"],
                    correct: 0,
                    explanation: "The feasible region contains all points that satisfy the system of inequalities."
                }
            ]
        },
        "Mathematical applications in business": {
            1: [
                {
                    question: "Simple interest is calculated on:",
                    options: ["Principal only", "Principal + Interest", "Interest only", "Time"],
                    correct: 0,
                    explanation: "Simple interest is calculated only on the original principal amount."
                }
            ]
        }
    },
    physics: {
        "vectors": {
            1: [
                {
                    question: "The resultant of two vectors is maximum when the angle between them is:",
                    options: ["0°", "90°", "180°", "45°"],
                    correct: 0,
                    explanation: "Vectors add directly when they point in the same direction (0°)."
                }
            ]
        },
        "mechanics": {
            1: [
                {
                    question: "Newton's First Law is also known as the law of:",
                    options: ["Acceleration", "Inertia", "Action-Reaction", "Gravity"],
                    correct: 1,
                    explanation: "It states that an object resists changes to its state of motion (inertia)."
                }
            ]
        },
        "thermodynamics": {
            1: [
                {
                    question: "Which law states that energy cannot be created or destroyed?",
                    options: ["Zeroth Law", "First Law", "Second Law", "Third Law"],
                    correct: 1,
                    explanation: "The First Law of Thermodynamics is the law of conservation of energy."
                }
            ]
        },
        "electromagnetism": {
            1: [
                {
                    question: "The unit of magnetic field strength is:",
                    options: ["Tesla", "Weber", "Volt", "Ampere"],
                    correct: 0,
                    explanation: "Magnetic field strength is measured in Tesla (T)."
                }
            ]
        }
    },
    chemistry: {
        "basics": {
            1: [
                {
                    question: "Which state of matter has definite volume but no definite shape?",
                    options: ["Solid", "Liquid", "Gas", "Plasma"],
                    correct: 1,
                    explanation: "Liquids take the shape of their container but maintain a constant volume."
                }
            ]
        },
        "atomic_theory": {
            1: [
                {
                    question: "The nucleus of an atom contains:",
                    options: ["Protons and Electrons", "Neutrons and Electrons", "Protons and Neutrons", "Protons only"],
                    correct: 2,
                    explanation: "Protons and neutrons reside in the nucleus, while electrons orbit outside."
                }
            ]
        },
        "chemical_bonding": {
            1: [
                {
                    question: "Which bond involves the sharing of electrons?",
                    options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
                    correct: 1,
                    explanation: "Covalent bonds are formed by the sharing of electron pairs between atoms."
                }
            ]
        },
        "acid_base": {
            1: [
                {
                    question: "A substance with a pH of 3 is:",
                    options: ["Neutral", "Basic", "Acidic", "Alkaline"],
                    correct: 2,
                    explanation: "pH values less than 7 indicate acidity."
                }
            ]
        },
        "electrochemistry": {
            1: [
                {
                    question: "Oxidation occurs at the:",
                    options: ["Anode", "Cathode", "Salt bridge", "Electrolyte"],
                    correct: 0,
                    explanation: "Oxidation (loss of electrons) always occurs at the Anode (An Ox)."
                }
            ]
        }
    },
    biology: {
        "cell_biology": {
            1: [
                {
                    question: "Which organelle is responsible for protein synthesis?",
                    options: ["Nucleus", "Ribosome", "Golgi Body", "Lysosome"],
                    correct: 1,
                    explanation: "Ribosomes translate mRNA into amino acid chains (proteins)."
                }
            ]
        },
        "genetics": {
            1: [
                {
                    question: "Who is known as the father of genetics?",
                    options: ["Darwin", "Mendel", "Watson", "Crick"],
                    correct: 1,
                    explanation: "Gregor Mendel founded the science of genetics with his pea plant experiments."
                }
            ]
        }
    },
    civics: {
        "government_basics": {
            1: [
                {
                    question: "The principle that no one is above the law is called:",
                    options: ["Popular Sovereignty", "Rule of Law", "Federalism", "Separation of Powers"],
                    correct: 1,
                    explanation: "Rule of Law means laws apply equally to every citizen, including leaders."
                }
            ]
        },
        "international_relations": {
            1: [
                {
                    question: "Which organization was formed to maintain international peace and security?",
                    options: ["WTO", "WHO", "UN", "IMF"],
                    correct: 2,
                    explanation: "The United Nations (UN) was established in 1945 for this primary purpose."
                }
            ]
        }
    },
    history: {
        "ancient_civilizations": {
            1: [
                {
                    question: "Which civilization built the pyramids?",
                    options: ["Mesopotamian", "Egyptian", "Indus Valley", "Chinese"],
                    correct: 1,
                    explanation: "The Ancient Egyptians built the pyramids as tombs for their pharaohs."
                }
            ]
        },
        "world_war_1": {
            1: [
                {
                    question: "Which year did WWI begin?",
                    options: ["1912", "1914", "1918", "1939"],
                    correct: 1,
                    explanation: "World War I began in July 1914 following the assassination of Archduke Franz Ferdinand."
                }
            ]
        }
    },
    geography: {
        "physical_geography": {
            1: [
                {
                    question: "Which is the longest river in Africa?",
                    options: ["Congo", "Niger", "Nile", "Zambezi"],
                    correct: 2,
                    explanation: "The Nile River is widely regarded as the longest river in Africa and the world."
                }
            ]
        },
        "population_studies": {
            1: [
                {
                    question: "The movement of people from rural to urban areas is called:",
                    options: ["Immigration", "Urbanization", "Emigration", "Colonization"],
                    correct: 1,
                    explanation: "Urbanization refers to the population shift from rural to urban residency."
                }
            ]
        }
    },
    economics: {
        "supply_and_demand": {
            1: [
                {
                    question: "If demand increases and supply remains constant, price will:",
                    options: ["Increase", "Decrease", "Stay same", "Fluctuate"],
                    correct: 0,
                    explanation: "Higher demand with constant supply creates a shortage, driving prices up."
                }
            ]
        },
        "macroeconomics": {
            1: [
                {
                    question: "Which of the following is a macroeconomic indicator?",
                    options: ["Price of corn", "Firm's profit", "GDP", "Individual wage"],
                    correct: 2,
                    explanation: "GDP measures the economic performance of an entire country, making it a macro indicator."
                }
            ]
        }
    },
    english: {
        "grammar": {
            1: [
                {
                    question: "Choose the correct sentence:",
                    options: ["She don't like apples.", "She doesn't like apples.", "She not like apples.", "She no like apples."],
                    correct: 1,
                    explanation: "Third-person singular (She) requires 'doesn't' for negative present simple."
                }
            ]
        },
        "vocabulary": {
            1: [
                {
                    question: "A synonym for 'benevolent' is:",
                    options: ["Cruel", "Kind", "Lazy", "Rich"],
                    correct: 1,
                    explanation: "Benevolent means well-meaning and kindly."
                }
            ]
        }
    },
    sat: {
        "vocabulary": {
            1: [
                {
                    question: "What is the meaning of 'Ephemeral'?",
                    options: ["Lasting forever", "Short-lived", "Heavy", "Bright"],
                    correct: 1,
                    explanation: "Ephemeral means lasting for a very short time."
                }
            ]
        },
        "advanced_math": {
            1: [
                {
                    question: "If 2x + 3 = 9, what is x?",
                    options: ["2", "3", "4", "5"],
                    correct: 1,
                    explanation: "2x = 6, so x = 3."
                }
            ]
        }
    },
    aptitude: {
        "logical_reasoning": {
            1: [
                {
                    question: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
                    options: ["(1/3)", "(1/8)", "(2/8)", "(1/16)"],
                    correct: 1,
                    explanation: "Each number is divided by 2 to get the next number."
                }
            ]
        }
    }
};
