
import { BookSubject } from '../types';

export const books: Record<string, BookSubject> = {
    math: {
        name: "Mathematics",
        icon: "➕",
        description: "Comprehensive guides for Algebra, Calculus, and Geometry.",
        grades: {
            11: {
                pdfUrl: "", // Add your Supabase URL here
                chapters: [
                    { 
                        title: "Unit 1: Relations and Functions", 
                        content: "## Relations and Functions\n\nA **relation** is a set of ordered pairs $(x, y)$. The domain is the set of first coordinates, and the range is the set of second coordinates.\n\nA **function** is a specific type of relation where every input $x$ has exactly one output $y$.\n\n### Key Concepts:\n- **One-to-One Function**: Every element of the range corresponds to exactly one element of the domain.\n- **Onto Function**: Every element in the codomain is the image of at least one element in the domain.\n- **Inverse Function**: If $f$ is one-to-one and onto, $f^{-1}$ exists."
                    },
                    { 
                        title: "Unit 2: Rational Expressions", 
                        content: "## Rational Expressions\n\nA rational expression is the quotient of two polynomials, $P(x)/Q(x)$, where $Q(x) \\neq 0$.\n\n### Operations:\n1. **Simplification**: Factor numerator and denominator and cancel common factors.\n2. **Multiplication**: Multiply numerators and denominators.\n3. **Addition/Subtraction**: Find the Least Common Denominator (LCD)."
                    },
                    {
                        title: "Unit 3: Coordinate Geometry",
                        content: "## Coordinate Geometry\n\nThis unit covers lines, circles, and conic sections.\n\n### The Line\nEquation: $y = mx + b$ where $m$ is slope.\n\n### The Circle\nEquation: $(x-h)^2 + (y-k)^2 = r^2$ with center $(h,k)$ and radius $r$."
                    }
                ]
            },
            12: {
                pdfUrl: "", // Add your Supabase URL here
                chapters: [
                    { 
                        title: "Unit 1: Sequences and Series", 
                        content: "## Sequences and Series\n\n### Arithmetic Sequence\nA sequence where the difference between consecutive terms is constant ($d$).\n$a_n = a_1 + (n-1)d$\n\n### Geometric Sequence\nA sequence where the ratio between consecutive terms is constant ($r$).\n$a_n = a_1 \\cdot r^{n-1}$\n\n### Limits of Sequences\nConvergence and divergence of infinite sequences."
                    },
                    { 
                        title: "Unit 2: Introduction to Calculus", 
                        content: "## Calculus: Limits and Continuity\n\n### Limits\nThe limit of $f(x)$ as $x$ approaches $c$ is $L$ if $f(x)$ gets arbitrarily close to $L$ as $x$ gets close to $c$.\n\n### Derivatives\nThe derivative measures the instantaneous rate of change.\n$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$"
                    }
                ]
            }
        }
    },
    physics: {
        name: "Physics",
        icon: "⚡️",
        description: "Study mechanics, thermodynamics, and electromagnetism.",
        grades: {
            11: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Vectors", content: "## Vectors\n\nPhysical quantities are classified as scalars (magnitude only) or vectors (magnitude and direction).\n\n### Vector Operations\n- **Addition**: Triangle or Parallelogram law.\n- **Resolution**: Breaking a vector into x and y components.\n- **Dot Product**: $A \\cdot B = |A||B|\\cos(\\theta)$\n- **Cross Product**: $A \\times B = |A||B|\\sin(\\theta)\\hat{n}$" },
                    { title: "Unit 2: Kinematics", content: "## Kinematics\n\nStudy of motion without considering forces.\n\n### Equations of Uniform Acceleration\n1. $v = u + at$\n2. $s = ut + \\frac{1}{2}at^2$\n3. $v^2 = u^2 + 2as$" }
                ]
            },
            12: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Thermodynamics", content: "## Thermodynamics\n\n### First Law\nEnergy cannot be created or destroyed. $\\Delta U = Q - W$\n\n### Second Law\nEntropy of an isolated system always increases. Heat flows from hot to cold naturally." },
                    { title: "Unit 2: Electromagnetism", content: "## Electromagnetism\n\n### Coulomb's Law\nForce between two charges: $F = k \\frac{q_1 q_2}{r^2}$\n\n### Electric Field\nRegion where an electric charge experiences a force." }
                ]
            }
        }
    },
    chemistry: {
        name: "Chemistry",
        icon: "🧪",
        description: "Organic, inorganic, and physical chemistry notes.",
        grades: {
            11: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Atomic Theory", content: "## Atomic Theory\n\n### Subatomic Particles\n- Protons (positive, nucleus)\n- Neutrons (neutral, nucleus)\n- Electrons (negative, orbitals)\n\n### Electronic Configuration\nArrangement of electrons in energy levels (s, p, d, f orbitals)." },
                    { title: "Unit 2: Chemical Bonding", content: "## Chemical Bonding\n\n### Ionic Bond\nTransfer of electrons from metal to non-metal.\n\n### Covalent Bond\nSharing of electrons between non-metals." }
                ]
            },
            12: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Acid-Base Equilibria", content: "## Acid-Base Equilibria\n\n### Arrhenius Definition\nAcids produce $H^+$, Bases produce $OH^-$.\n\n### Bronsted-Lowry\nAcids are proton donors, Bases are proton acceptors.\n\n### pH Scale\n$pH = -\\log[H^+]$" },
                    { title: "Unit 2: Electrochemistry", content: "## Electrochemistry\n\nStudy of chemical processes that cause electrons to move.\n\n### Galvanic Cells\nConvert chemical energy to electrical energy.\n\n### Electrolysis\nUsing electrical energy to drive a non-spontaneous reaction." }
                ]
            }
        }
    },
    biology: {
        name: "Biology",
        icon: "🧬",
        description: "Life sciences, genetics, and ecology.",
        grades: {
            11: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Cell Biology", content: "## Cell Biology\n\nThe cell is the basic unit of life.\n\n### Organelles\n- **Nucleus**: Control center, contains DNA.\n- **Mitochondria**: Powerhouse, respiration.\n- **Ribosomes**: Protein synthesis." }
                ]
            },
            12: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Genetics", content: "## Genetics\n\nStudy of heredity and variation.\n\n### Mendel's Laws\n1. Law of Segregation\n2. Law of Independent Assortment\n\n### DNA Structure\nDouble helix composed of nucleotides (A, T, C, G)." }
                ]
            }
        }
    },
    english: {
        name: "English",
        icon: "📖",
        description: "Literature, grammar, and writing skills.",
        grades: {
            11: {
                pdfUrl: "",
                chapters: [
                   { title: "Unit 1: Tenses", content: "## Tenses\n\n### Present Simple\nHabits, facts. *She walks to school.*\n\n### Present Continuous\nHappening now. *She is walking to school.*\n\n### Past Simple\nCompleted action. *She walked to school.*" }
                ]
            },
            12: {
                pdfUrl: "",
                chapters: [
                   { title: "Unit 1: Essay Writing", content: "## Essay Writing\n\n### Structure\n1. **Introduction**: Hook, background, thesis statement.\n2. **Body Paragraphs**: Topic sentence, evidence, analysis.\n3. **Conclusion**: Restate thesis, summary, final thought." }
                ]
            }
        }
    },
    civics: {
        name: "Civics",
        icon: "🏛️",
        description: "Citizenship, constitution, and ethics.",
        grades: {
            11: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Building a Democratic System", content: "## Building a Democratic System\n\n### Principles of Democracy\n- **Rule of Law**: No one is above the law.\n- **Popular Sovereignty**: Authority of a state and its government is created and sustained by the consent of its people.\n\n### Human Rights\nFundamental rights inherent to all human beings, regardless of race, sex, nationality, ethnicity, language, religion, or any other status." }
                ]
            },
            12: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: International Relations", content: "## International Relations\n\n### Foreign Policy\nA government's strategy in dealing with other nations.\n\n### International Organizations\n- **UN**: United Nations\n- **AU**: African Union\n- **EU**: European Union" }
                ]
            }
        }
    },
    history: {
        name: "History",
        icon: "🗿",
        description: "World and Ethiopian history.",
        grades: {
            11: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Ancient Civilizations", content: "## Ancient Civilizations\n\n### Mesopotamia\nLocated between the Tigris and Euphrates rivers. Known for the invention of writing (cuneiform).\n\n### Ancient Egypt\nNile River valley civilization. Known for pyramids, hieroglyphs, and pharaohs." }
                ]
            },
            12: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Modern World History", content: "## Modern World History\n\n### World War I (1914-1918)\nCauses: Militarism, Alliances, Imperialism, Nationalism.\n\n### World War II (1939-1945)\nGlobal conflict involving the Axis and Allied powers." }
                ]
            }
        }
    },
    geography: {
        name: "Geography",
        icon: "🌍",
        description: "Physical and human geography.",
        grades: {
            11: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Physical Geography of Africa", content: "## Physical Geography of Africa\n\n### Landforms\n- **Plateaus**: Africa is largely a plateau continent.\n- **Rift Valley**: The Great East African Rift Valley.\n\n### Climate Zones\nEquatorial, Tropical Savanna, Semi-arid, Arid, Mediterranean." }
                ]
            },
            12: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Population Studies", content: "## Population Studies\n\n### Demography\nThe study of statistics such as births, deaths, income, or the incidence of disease, which illustrate the changing structure of human populations.\n\n### Migration\nMovement of people from one place to another. Push and pull factors." }
                ]
            }
        }
    },
    economics: {
        name: "Economics",
        icon: "💰",
        description: "Micro and Macroeconomics.",
        grades: {
            11: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Introduction to Economics", content: "## Introduction to Economics\n\n### Scarcity\nThe fundamental economic problem of having seemingly unlimited human wants in a world of limited resources.\n\n### Opportunity Cost\nThe loss of potential gain from other alternatives when one alternative is chosen." }
                ]
            },
            12: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Macroeconomics", content: "## Macroeconomics\n\n### GDP (Gross Domestic Product)\nThe total value of goods produced and services provided in a country during one year.\n\n### Inflation\nA general increase in prices and fall in the purchasing power of money." }
                ]
            }
        }
    },
    sat: {
        name: "SAT Prep",
        icon: "📝",
        description: "Scholastic Assessment Test preparation.",
        grades: {
            11: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Critical Reading", content: "## Critical Reading Strategies\n\n### Passage Analysis\n- Identify the main idea.\n- Understanding the author's tone and purpose.\n- Vocabulary in context.\n\n### Question Types\n- **Big Picture**: Main point.\n- **Detail**: Specific facts.\n- **Inference**: Reading between the lines." }
                ]
            },
            12: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Advanced Math", content: "## SAT Math\n\n### Heart of Algebra\nLinear equations, systems of linear equations, and inequalities.\n\n### Problem Solving and Data Analysis\nRatios, percentages, and proportional reasoning." }
                ]
            }
        }
    },
    aptitude: {
        name: "Aptitude",
        icon: "🧠",
        description: "Logical reasoning and IQ tests.",
        grades: {
            11: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Verbal Reasoning", content: "## Verbal Reasoning\n\n### Analogies\nFinding relationships between words (e.g., Bird is to Fly as Fish is to Swim).\n\n### Logical Deduction\nDrawing conclusions from premises." }
                ]
            },
            12: {
                pdfUrl: "",
                chapters: [
                    { title: "Unit 1: Quantitative Reasoning", content: "## Quantitative Reasoning\n\n### Number Series\nidentifying patterns in number sequences.\n\n### Data Interpretation\nAnalyzing charts, graphs, and tables to solve problems." }
                ]
            }
        }
    }
};
