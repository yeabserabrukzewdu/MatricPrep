

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
        "Physics_and_human_society": {
            1: [
                {
                    question: "Which branch of physics deals with the study of light?",
                    options: ["Mechanics", "Thermodynamics", "Optics", "Electromagnetism"],
                    correct: 2,
                    explanation: "Optics is the branch of physics that studies the behavior and properties of light."
                }
            ]
        },
        "Vectors": {
            1: [
                {
                    question: "The resultant of two vectors is maximum when the angle between them is:",
                    options: ["0°", "90°", "180°", "45°"],
                    correct: 0,
                    explanation: "Vectors add directly when they point in the same direction (0°)."
                }
            ]
        },
        "Motion_in_one_and_two_dimensions": {
             1: [
                {
                    question: "In projectile motion, the horizontal component of velocity:",
                    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
                    correct: 2,
                    explanation: "Ignoring air resistance, there is no acceleration in the horizontal direction, so velocity stays constant."
                }
            ]
        },
        "Dynamics": {
            1: [
                {
                    question: "Newton's First Law is also known as the law of:",
                    options: ["Acceleration", "Inertia", "Action-Reaction", "Gravity"],
                    correct: 1,
                    explanation: "It states that an object resists changes to its state of motion (inertia)."
                }
            ]
        },
        "Heat_conduction_and_calorimetry": {
             1: [
                {
                    question: "Which method of heat transfer requires a medium?",
                    options: ["Conduction only", "Radiation only", "Conduction and Convection", "Radiation and Convection"],
                    correct: 2,
                    explanation: "Conduction and convection require matter (solid/fluid) to transfer heat, while radiation does not."
                }
            ]
        },
        "Electrostatics_and_electric_circuit": {
             1: [
                {
                    question: "The unit of electric potential is:",
                    options: ["Joule", "Newton", "Volt", "Ampere"],
                    correct: 2,
                    explanation: "Electric potential (voltage) is measured in Volts (V)."
                }
            ]
        },
        "Nuclear_physics": {
             1: [
                {
                    question: "Which particle has a positive charge in the nucleus?",
                    options: ["Electron", "Neutron", "Proton", "Photon"],
                    correct: 2,
                    explanation: "Protons are positively charged particles found in the atomic nucleus."
                }
            ]
        },
        "Application_of_physics_in_other_fields": {
             1: [
                {
                    question: "Geophysics applies physics principles to study:",
                    options: ["Living organisms", "The Earth", "Space", "Chemicals"],
                    correct: 1,
                    explanation: "Geophysics is the physics of the Earth and its environment in space."
                }
            ]
        },
        "Two_dimensional_motion": {
             1: [
                {
                    question: "Which of these is an example of 2D motion?",
                    options: ["A train on a straight track", "A ball thrown in the air", "An elevator going up", "Dropping a stone"],
                    correct: 1,
                    explanation: "Projectile motion (ball in air) involves movement in both x (horizontal) and y (vertical) axes."
                }
            ]
        },
        "Fluid_mechanics": {
             1: [
                {
                    question: "Archimedes' principle explains:",
                    options: ["Viscosity", "Surface Tension", "Buoyancy", "Turbulence"],
                    correct: 2,
                    explanation: "It states that the upward buoyant force is equal to the weight of the fluid displaced."
                }
            ]
        },
        "Electromagnetism": {
            1: [
                {
                    question: "The unit of magnetic field strength is:",
                    options: ["Tesla", "Weber", "Volt", "Ampere"],
                    correct: 0,
                    explanation: "Magnetic field strength is measured in Tesla (T)."
                }
            ]
        },
        "Basics_of_electronics": {
             1: [
                {
                    question: "Which component stores electrical charge?",
                    options: ["Resistor", "Capacitor", "Diode", "Transistor"],
                    correct: 1,
                    explanation: "A capacitor is a passive electronic component that stores electrical energy in an electric field."
                }
            ]
        }
    },
    chemistry: {
        "Atomic_structure_and_periodic_properties_of_the_Elements": {
            1: [
                {
                    question: "Which subatomic particle has a positive charge?",
                    options: ["Electron", "Neutron", "Proton", "Photon"],
                    correct: 2,
                    explanation: "Protons are located in the nucleus and carry a positive charge."
                }
            ]
        },
        "Chemical_bonding": {
            1: [
                {
                    question: "Which type of bond involves the transfer of electrons?",
                    options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
                    correct: 1,
                    explanation: "Ionic bonds are formed through the electrostatic attraction between oppositely charged ions after electron transfer."
                }
            ]
        },
        "Physical_States_of_matter": {
            1: [
                {
                    question: "Which state of matter has a definite volume but no definite shape?",
                    options: ["Solid", "Liquid", "Gas", "Plasma"],
                    correct: 1,
                    explanation: "Liquids take the shape of their container but maintain a constant volume."
                }
            ]
        },
        "Chemical_kinetics": {
            1: [
                {
                    question: "What factor does NOT affect the rate of reaction?",
                    options: ["Temperature", "Concentration", "Catalyst", "Molar Mass of Products"],
                    correct: 3,
                    explanation: "While temperature, concentration, and catalysts affect the rate, the molar mass of the products generally does not directly influence the speed of the reaction."
                }
            ]
        },
        "Chemical_equilibrium": {
            1: [
                {
                    question: "Le Chatelier's Principle applies to:",
                    options: ["Irreversible reactions", "Reversible reactions at equilibrium", "Solids only", "Gases only"],
                    correct: 1,
                    explanation: "It states that a system at equilibrium will adjust to counteract any stress (change in conditions) applied to it."
                }
            ]
        },
        "Some_important_oxygen_containing_organic_compound": {
            1: [
                {
                    question: "What is the functional group of alcohols?",
                    options: ["-COOH", "-OH", "-CHO", "-NH2"],
                    correct: 1,
                    explanation: "The hydroxyl group (-OH) is the functional group characteristic of alcohols."
                }
            ]
        },
        "Acid_Base_equilibria": {
            1: [
                {
                    question: "What is the pH of a neutral solution at 25°C?",
                    options: ["0", "1", "7", "14"],
                    correct: 2,
                    explanation: "A pH of 7 is considered neutral, being neither acidic nor basic."
                }
            ]
        },
        "Electrochemistry": {
            1: [
                {
                    question: "In an electrolytic cell, oxidation occurs at the:",
                    options: ["Anode", "Cathode", "Salt bridge", "Power source"],
                    correct: 0,
                    explanation: "Oxidation is the loss of electrons and always occurs at the Anode (An Ox)."
                }
            ]
        },
        "Industrial_chemistry": {
            1: [
                {
                    question: "Which process is used to produce Ammonia industrially?",
                    options: ["Contact Process", "Haber Process", "Ostwald Process", "Solvay Process"],
                    correct: 1,
                    explanation: "The Haber process combines nitrogen and hydrogen to produce ammonia."
                }
            ]
        },
        "Polymers": {
            1: [
                {
                    question: "Which of the following is a natural polymer?",
                    options: ["Nylon", "Polyester", "Cellulose", "PVC"],
                    correct: 2,
                    explanation: "Cellulose is a natural polymer found in the cell walls of plants."
                }
            ]
        },
        "Introduction_of_environmental_chemistry": {
            1: [
                {
                    question: "Which gas is primarily responsible for the greenhouse effect?",
                    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
                    correct: 2,
                    explanation: "Carbon dioxide (CO2) traps heat in the atmosphere, contributing significantly to global warming."
                }
            ]
        }
    },
    biology: {
        "Biology_and_technology": {
            1: [
                {
                    question: "Which instrument is essential for viewing microscopic cells?",
                    options: ["Telescope", "Microscope", "Periscope", "Stethoscope"],
                    correct: 1,
                    explanation: "A microscope is used to magnify small objects like cells that are not visible to the naked eye."
                }
            ]
        },
        "Animals": {
            1: [
                {
                    question: "Which group of animals is characterized by having a backbone?",
                    options: ["Invertebrates", "Vertebrates", "Arthropods", "Mollusks"],
                    correct: 1,
                    explanation: "Vertebrates are animals that possess a vertebral column or backbone."
                }
            ]
        },
        "Enzymes": {
            1: [
                {
                    question: "Enzymes are biological catalysts made primarily of:",
                    options: ["Lipids", "Carbohydrates", "Proteins", "Nucleic Acids"],
                    correct: 2,
                    explanation: "Most enzymes are proteins that speed up chemical reactions in the body."
                }
            ]
        },
        "Genetics": {
            1: [
                {
                    question: "Who is known as the father of modern genetics?",
                    options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Hooke"],
                    correct: 1,
                    explanation: "Gregor Mendel established the fundamental laws of inheritance through his work on pea plants."
                }
            ]
        },
        "The_human_body_systems": {
            1: [
                {
                    question: "Which system is responsible for pumping blood throughout the body?",
                    options: ["Respiratory System", "Circulatory System", "Digestive System", "Nervous System"],
                    correct: 1,
                    explanation: "The circulatory system, including the heart and vessels, transports blood."
                }
            ]
        },
        "Population_and_natural_resources": {
            1: [
                {
                    question: "A resource that can be replenished naturally over time is called:",
                    options: ["Renewable", "Non-renewable", "Fossil Fuel", "Synthetic"],
                    correct: 0,
                    explanation: "Renewable resources, like solar energy or wind, can be replenished naturally."
                }
            ]
        },
        "Application_of_Biology": {
            1: [
                {
                    question: "Which field involves the use of living organisms to make products?",
                    options: ["Biotechnology", "Geology", "Astronomy", "Physics"],
                    correct: 0,
                    explanation: "Biotechnology uses biological systems and organisms to develop or make products."
                }
            ]
        },
        "Microorganisms": {
            1: [
                {
                    question: "Which of the following is NOT a microorganism?",
                    options: ["Bacteria", "Virus", "Fungi", "Mushroom"],
                    correct: 3,
                    explanation: "While fungi can be microscopic, a mushroom is a macroscopic reproductive structure of fungi."
                }
            ]
        },
        "Energy_transformation": {
            1: [
                {
                    question: "In photosynthesis, light energy is converted into:",
                    options: ["Chemical energy", "Heat energy", "Mechanical energy", "Electrical energy"],
                    correct: 0,
                    explanation: "Plants convert light energy into chemical energy stored in glucose."
                }
            ]
        },
        "Evolution": {
            1: [
                {
                    question: "The process by which species change over time is known as:",
                    options: ["Revolution", "Evolution", "Succession", "Adaptation"],
                    correct: 1,
                    explanation: "Evolution is the change in the heritable characteristics of biological populations over successive generations."
                }
            ]
        },
        "Human_body_System": {
            1: [
                {
                    question: "Which system controls body functions via electrical signals?",
                    options: ["Endocrine", "Nervous", "Muscular", "Skeletal"],
                    correct: 1,
                    explanation: "The nervous system uses electrical signals to coordinate rapid body actions."
                }
            ]
        },
        "Climate_change": {
            1: [
                {
                    question: "Which gas is a major contributor to global warming?",
                    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
                    correct: 2,
                    explanation: "Carbon dioxide acts as a greenhouse gas, trapping heat in the atmosphere."
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
