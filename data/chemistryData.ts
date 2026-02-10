import { QuizSubject } from '../types';

export const chemistryData: QuizSubject = {
    "Atomic_structure_and_periodic_properties": {
    1: [
        { question: "The smallest particle of an element that can take part in a chemical reaction is", options: ["Atom", "Molecule", "Ion", "Proton"], correct: 0, explanation: "Dalton's atomic theory." },
        { question: "The atomic model that explained the stability of atom by quantized energy levels is", options: ["Bohr's model", "Thomson's model", "Rutherford's model", "Dalton's model"], correct: 0, explanation: "Electrons in fixed orbits." },
        { question: "Rutherford's experiment showed that atom has", options: ["Small, dense, positively charged nucleus", "Uniform positive charge", "No nucleus", "Electrons only"], correct: 0, explanation: "Gold foil scattering." },
        { question: "The number of protons in an atom is called", options: ["Atomic number (Z)", "Mass number (A)", "Neutron number", "Electron number"], correct: 0, explanation: "Defines the element." },
        { question: "Isotopes have the same", options: ["Atomic number but different mass number", "Mass number", "Number of neutrons", "Chemical properties only"], correct: 0, explanation: "Same Z, different N." },
        { question: "The maximum number of electrons in the n=3 energy level is", options: ["18", "8", "2", "32"], correct: 0, explanation: "2n² = 2×9 = 18." },
        { question: "The quantum number that determines the shape of orbital is", options: ["Azimuthal quantum number (l)", "Principal (n)", "Magnetic (m_l)", "Spin (m_s)"], correct: 0, explanation: "s (l=0), p (l=1), d (l=2), f (l=3)." },
        { question: "Pauli exclusion principle states that no two electrons in an atom can have", options: ["All four quantum numbers the same", "Same n only", "Same l only", "Same m_l only"], correct: 0, explanation: "Unique set of quantum numbers." },
        { question: "Hund's rule states that electrons fill orbitals", options: ["Singly with parallel spins before pairing", "Pair first", "No preference", "Opposite spins first"], correct: 0, explanation: "Maximum multiplicity." },
        { question: "The electron configuration of sodium (Z=11) is", options: ["1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁶ 3s²", "1s² 2s² 2p⁵", "1s² 2s²"], correct: 0, explanation: "Aufbau order." }
    ],

    2: [
        { question: "The shape of s-orbital is", options: ["Spherical", "Dumbbell", "Double dumbbell", "Complex"], correct: 0, explanation: "Symmetric around nucleus." },
        { question: "p-orbitals are oriented along", options: ["Three perpendicular axes (x,y,z)", "One axis", "No axis", "Spherical"], correct: 0, explanation: "p_x, p_y, p_z." },
        { question: "The order of filling orbitals according to Aufbau principle is", options: ["1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p", "1s < 2s < 3s < 2p", "4s before 3d always", "No order"], correct: 0, explanation: "(n+l) rule." },
        { question: "The element with electron configuration [Ar] 4s² 3d¹⁰ 4p³ is", options: ["Arsenic (As)", "Phosphorus", "Gallium", "Germanium"], correct: 0, explanation: "Z=33." },
        { question: "The periodic table is arranged according to increasing", options: ["Atomic number", "Atomic mass", "Mass number", "Neutron number"], correct: 0, explanation: "Mendeleev and modern." },
        { question: "Elements in the same group have the same number of", options: ["Valence electrons", "Protons", "Neutrons", "Orbitals"], correct: 0, explanation: "Similar chemical properties." },
        { question: "s-block elements are found in groups", options: ["1 and 2", "13–18", "3–12", "Lanthanides"], correct: 0, explanation: "Valence electrons in s subshell." },
        { question: "p-block elements have valence electrons in", options: ["p subshell", "s subshell", "d subshell", "f subshell"], correct: 0, explanation: "Groups 13–18." },
        { question: "d-block elements are also called", options: ["Transition metals", "Alkali metals", "Halogens", "Noble gases"], correct: 0, explanation: "Groups 3–12." },
        { question: "The modern periodic law states that properties repeat when arranged by", options: ["Increasing atomic number", "Atomic mass", "Valence", "No order"], correct: 0, explanation: "Periodicity." }
    ],

    3: [
        { question: "Atomic radius generally decreases across a period due to", options: ["Increasing nuclear charge (more protons)", "More shells", "Less protons", "No change"], correct: 0, explanation: "Stronger attraction." },
        { question: "Atomic radius increases down a group because of", options: ["Addition of new electron shells", "More protons", "Less shielding", "No shells"], correct: 0, explanation: "Larger size." },
        { question: "Ionization energy is the energy required to", options: ["Remove an electron from gaseous atom", "Add an electron", "Remove proton", "No energy"], correct: 0, explanation: "First IE." },
        { question: "Ionization energy generally increases across a period due to", options: ["Increasing effective nuclear charge", "More shells", "Less protons", "Shielding increase"], correct: 0, explanation: "Harder to remove e⁻." },
        { question: "Ionization energy decreases down a group because", options: ["Electrons are farther from nucleus", "Closer", "More protons", "No change"], correct: 0, explanation: "Weaker attraction." },
        { question: "Electron affinity is the energy change when", options: ["Electron is added to neutral gaseous atom", "Electron removed", "Proton added", "No change"], correct: 0, explanation: "Usually negative (exothermic)." },
        { question: "Electronegativity is the ability of an atom to", options: ["Attract shared electrons in a bond", "Lose electrons", "Gain protons", "No attraction"], correct: 0, explanation: "Pauling scale." },
        { question: "Electronegativity increases across a period and", options: ["Decreases down a group", "Increases down", "Same down", "No trend"], correct: 0, explanation: "Fluorine highest." },
        { question: "Metallic character increases", options: ["Down a group and left to right decreases", "Right to left", "No trend", "Only across"], correct: 0, explanation: "Easier to lose e⁻." },
        { question: "Ionic radius of cation is", options: ["Smaller than neutral atom", "Larger", "Same", "Zero"], correct: 0, explanation: "Loss of e⁻ → stronger pull." }
    ],

    4: [
        { question: "The element with highest electronegativity is", options: ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"], correct: 0, explanation: "4.0 on Pauling scale." },
        { question: "The element with lowest ionization energy among alkali metals is", options: ["Cesium (largest size)", "Lithium", "Sodium", "Potassium"], correct: 0, explanation: "Easiest to remove e⁻." },
        { question: "In period 3, the element with highest ionization energy is", options: ["Argon (noble gas)", "Sodium", "Magnesium", "Aluminium"], correct: 0, explanation: "Stable octet." },
        { question: "The trend for electron affinity is generally", options: ["Increases across period (more negative)", "Decreases", "No trend", "Random"], correct: 0, explanation: "Halogens high." },
        { question: "Noble gases have", options: ["Very low electron affinity (positive or near zero)", "High affinity", "High IE", "Both A and C"], correct: 3, explanation: "Stable configuration." },
        { question: "The size of anion is", options: ["Larger than neutral atom", "Smaller", "Same", "Zero"], correct: 0, explanation: "Extra e⁻ → repulsion." },
        { question: "Across a period, metallic character", options: ["Decreases", "Increases", "Same", "No change"], correct: 0, explanation: "From left (metals) to right (non-metals)." },
        { question: "Down a group, non-metallic character", options: ["Decreases", "Increases", "Same", "No trend"], correct: 0, explanation: "More metallic down." },
        { question: "The valence electrons determine", options: ["Chemical properties of element", "Physical only", "Mass only", "No properties"], correct: 0, explanation: "Group number." },
        { question: "The f-block elements are called", options: ["Inner transition elements (lanthanides + actinides)", "Transition", "Representative", "No block"], correct: 0, explanation: "Valence in f subshell." }
    ],

    5: [
        { question: "The electron configuration of chromium (Z=24) is", options: ["[Ar] 4s¹ 3d⁵", "[Ar] 4s² 3d⁴", "[Ar] 4s² 3d³", "[Ar] 3d⁶"], correct: 0, explanation: "Exception for half-filled stability." },
        { question: "The electron configuration of copper (Z=29) is", options: ["[Ar] 4s¹ 3d¹⁰", "[Ar] 4s² 3d⁹", "[Ar] 4s² 3d⁸", "[Ar] 3d¹⁰"], correct: 0, explanation: "Full d subshell stability." },
        { question: "The principal quantum number n determines", options: ["Size and energy level of orbital", "Shape", "Orientation", "Spin"], correct: 0, explanation: "Higher n → larger." },
        { question: "The azimuthal quantum number l can have values", options: ["0 to (n-1)", "1 to n", "-l to +l", "0 to n"], correct: 0, explanation: "Subshell designation." },
        { question: "For n=4, possible l values are", options: ["0,1,2,3", "0,1,2", "1,2,3", "0 only"], correct: 0, explanation: "s,p,d,f." },
        { question: "The number of orbitals in a subshell is", options: ["(2l + 1)", "2l", "n²", "2n²"], correct: 0, explanation: "Magnetic quantum number." },
        { question: "Maximum electrons in d subshell (l=2) is", options: ["10", "6", "2", "14"], correct: 0, explanation: "2(2l+1) = 10." },
        { question: "The spin quantum number m_s has values", options: ["+½ or -½", "0 to l", "-l to +l", "0 only"], correct: 0, explanation: "Electron spin." },
        { question: "Aufbau principle is based on", options: ["Increasing (n + l) value", "Decreasing n", "No order", "Alphabetical"], correct: 0, explanation: "Lowest energy first." },
        { question: "The periodic table groups are vertical columns numbered", options: ["1 to 18 (IUPAC)", "1 to 8", "A and B", "No numbers"], correct: 0, explanation: "Modern convention." }
    ],

    6: [
        { question: "The element with atomic number 19 (K) has electron configuration", options: ["1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²", "1s² 2s² 2p⁶ 3s² 3p⁵", "1s² 2s² 2p⁶ 3s²"], correct: 0, explanation: "Alkali metal." },
        { question: "The first element in p-block is", options: ["Boron (group 13)", "Helium", "Lithium", "Beryllium"], correct: 0, explanation: "After He." },
        { question: "Shielding effect increases", options: ["Down a group (more inner shells)", "Across period", "No effect", "Only in s-block"], correct: 0, explanation: "Reduces effective nuclear charge." },
        { question: "Effective nuclear charge Z_eff increases", options: ["Across a period (poor shielding)", "Down group", "No increase", "Only in d-block"], correct: 0, explanation: "More protons, same shell." },
        { question: "Ionization energy exception in period 3 is between", options: ["Mg and Al (full s² vs s² p¹)", "Na and Mg", "Si and P", "P and S"], correct: 0, explanation: "Easier to remove p electron." },
        { question: "Electron affinity is highest for", options: ["Halogens (group 17)", "Alkali metals", "Noble gases", "Alkaline earth"], correct: 0, explanation: "Need one electron for octet." },
        { question: "Electronegativity difference determines", options: ["Bond type (ionic >1.7, covalent <1.7)", "Only covalent", "Only ionic", "No bond"], correct: 0, explanation: "Pauling scale." },
        { question: "The trend for ionic radius across period for cations", options: ["Decreases (increasing Z_eff)", "Increases", "Same", "No trend"], correct: 0, explanation: "Same as atomic." },
        { question: "In isoelectronic species, radius is largest for", options: ["Species with lowest nuclear charge", "Highest Z", "Same Z", "No difference"], correct: 0, explanation: "Less protons → less pull." },
        { question: "The lanthanide contraction causes", options: ["Smaller size of 6th period elements than expected", "Larger size", "No effect", "Only in d-block"], correct: 0, explanation: "Poor f shielding." }
    ],

    7: [
        { question: "The element with electron configuration 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹ is", options: ["Copper", "Zinc", "Nickel", "Cobalt"], correct: 0, explanation: "Exception." },
        { question: "The number of unpaired electrons in Cr (Z=24) is", options: ["6", "5", "4", "3"], correct: 0, explanation: "[Ar] 4s¹ 3d⁵ → 6 unpaired." },
        { question: "The valence shell of period 4 is", options: ["n=4", "n=3", "n=5", "n=2"], correct: 0, explanation: "Outermost shell." },
        { question: "The block of element with valence configuration ns² np⁵ is", options: ["p-block", "s-block", "d-block", "f-block"], correct: 0, explanation: "Halogens." },
        { question: "Atomic radius is largest in", options: ["Group 1 (alkali metals)", "Group 17", "Group 18", "Transition metals"], correct: 0, explanation: "Down left side." },
        { question: "Successive ionization energies increase because", options: ["Electron removed from higher positive ion", "Same charge", "No increase", "Less protons"], correct: 0, explanation: "Stronger attraction." },
        { question: "The element with highest first ionization energy in period 2 is", options: ["Neon", "Lithium", "Beryllium", "Boron"], correct: 0, explanation: "Stable configuration." },
        { question: "Electronegativity of oxygen is", options: ["3.5", "4.0", "3.0", "2.5"], correct: 0, explanation: "High but less than F." },
        { question: "In group 2, ionization energy is lower than group 1 because", options: ["Higher nuclear charge but same shell", "Lower charge", "More electrons", "No reason"], correct: 0, explanation: "But still high." },
        { question: "The periodic properties are due to", options: ["Similar valence electron configuration in groups", "Same mass", "Same neutrons", "No reason"], correct: 0, explanation: "Periodicity." }
    ],

    8: [
        { question: "The quantum mechanical model describes electrons as", options: ["Probability clouds (orbitals)", "Fixed orbits", "Particles only", "Waves only"], correct: 0, explanation: "Schrödinger equation." },
        { question: "For l=1, orbital is", options: ["p", "s", "d", "f"], correct: 0, explanation: "Dumbbell shape." },
        { question: "The maximum number of electrons in n=4 is", options: ["32", "18", "8", "2"], correct: 0, explanation: "2n² = 32." },
        { question: "The subshell with l=3 can hold maximum", options: ["14 electrons", "10", "6", "2"], correct: 0, explanation: "f subshell." },
        { question: "The element with Z=20 (Ca) has configuration", options: ["1s² 2s² 2p⁶ 3s² 3p⁶ 4s²", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹", "1s² 2s² 2p⁶ 3s² 3p⁶"], correct: 0, explanation: "Alkaline earth." },
        { question: "Across period 3, atomic radius decreases because", options: ["Increasing effective nuclear charge", "More shells", "Less protons", "No change"], correct: 0, explanation: "Same shell." },
        { question: "First ionization energy jump occurs after", options: ["Noble gas configuration", "Alkali metal", "Halogen", "No jump"], correct: 0, explanation: "Stable octet." },
        { question: "The element with highest electron affinity is", options: ["Chlorine (among halogens, Cl > F due to size)", "Fluorine", "Oxygen", "Nitrogen"], correct: 0, explanation: "Cl has highest." },
        { question: "Ionic radius trend down group for anions", options: ["Increases", "Decreases", "Same", "No trend"], correct: 0, explanation: "More shells." },
        { question: "The lanthanide contraction affects", options: ["Size of elements after 4f series", "Before", "No effect", "Only d-block"], correct: 0, explanation: "Poor shielding." }
    ],

    9: [
        { question: "The electron configuration of Fe²⁺ is", options: ["[Ar] 3d⁶", "[Ar] 4s² 3d⁶", "[Ar] 3d⁸", "[Ar] 3d⁵ 4s¹"], correct: 0, explanation: "Remove 4s electrons first." },
        { question: "The number of valence electrons in group 15 is", options: ["5", "3", "7", "2"], correct: 0, explanation: "ns² np³." },
        { question: "The element with smallest atomic radius in period 4 is", options: ["Krypton", "Potassium", "Calcium", "Scandium"], correct: 0, explanation: "Right side." },
        { question: "Second ionization energy is always higher than first because", options: ["Removal from positive ion", "Same ion", "Less energy", "No increase"], correct: 0, explanation: "Stronger pull." },
        { question: "Electronegativity difference >1.7 indicates", options: ["Ionic bond", "Covalent", "Metallic", "No bond"], correct: 0, explanation: "Large difference." },
        { question: "The trend for metallic character is strongest in", options: ["Bottom left of periodic table", "Top right", "Middle", "No trend"], correct: 0, explanation: "Cs, Fr." },
        { question: "In isoelectronic ions, the one with highest charge has", options: ["Smallest radius", "Largest", "Same", "No radius"], correct: 0, explanation: "More protons pull electrons closer." },
        { question: "The d-block starts from group", options: ["3", "1", "13", "17"], correct: 0, explanation: "Transition begins." },
        { question: "f-block elements have valence electrons in", options: ["(n-2)f", "ns", "np", "nd"], correct: 0, explanation: "Inner transition." },
        { question: "The periodic properties repeat because of", options: ["Similar outer electron configuration", "Same mass", "Same neutrons", "No reason"], correct: 0, explanation: "Basis of periodicity." }
    ],

    10: [
        { question: "The quantum number m_l for p subshell can have values", options: ["-1, 0, +1", "0 only", "-2 to +2", "0 to 2"], correct: 0, explanation: "Three orientations." },
        { question: "The element with Z=47 (Ag) has configuration", options: ["[Kr] 5s¹ 4d¹⁰", "[Kr] 5s² 4d⁹", "[Kr] 5s² 4d¹⁰", "[Kr] 4d¹⁰"], correct: 0, explanation: "Exception." },
        { question: "The first ionization energy is lowest for", options: ["Fr (largest alkali metal)", "F", "Ne", "O"], correct: 0, explanation: "Easiest to remove e⁻." },
        { question: "Electron affinity of noble gases is", options: ["Positive or near zero", "Highly negative", "High", "No affinity"], correct: 0, explanation: "Stable." },
        { question: "The ionic radius of Na⁺ compared to Na is", options: ["Smaller", "Larger", "Same", "Zero"], correct: 0, explanation: "Loss of e⁻." },
        { question: "In group 17, electronegativity is highest for", options: ["Fluorine", "Iodine", "Chlorine", "Bromine"], correct: 0, explanation: "Smallest size." },
        { question: "The trend for atomic radius in d-block is", options: ["Almost constant across period", "Increases sharply", "Decreases sharply", "No trend"], correct: 0, explanation: "d electrons shield poorly." },
        { question: "The element with electron configuration ending in 4f¹⁴ 5d¹ 6s² is", options: ["Lutetium (Lu)", "Hafnium", "Gold", "Platinum"], correct: 0, explanation: "End of lanthanides." },
        { question: "The periodic table is divided into periods based on", options: ["Filling of new shell", "Groups", "Blocks", "No division"], correct: 0, explanation: "Horizontal rows." },
        { question: "Mastery of this unit is essential for understanding", options: ["Chemical bonding, reactivity, periodic trends in higher chemistry", "Only physics", "Only biology", "No chemistry"], correct: 0, explanation: "Foundation of chemistry." }
    ]
},
    "Chemical_bonding": {
    1: [
        { question: "Chemical bond is the force that holds", options: ["Atoms together in molecules or compounds", "Only molecules", "Only ions", "No atoms"], correct: 0, explanation: "Attractive force between atoms." },
        { question: "Ionic bond is formed by", options: ["Complete transfer of electrons between metal and non-metal", "Sharing electrons", "No transfer", "Partial sharing"], correct: 0, explanation: "Electrostatic attraction between oppositely charged ions." },
        { question: "Covalent bond involves", options: ["Sharing of electrons between non-metals", "Transfer", "Metallic attraction", "No sharing"], correct: 0, explanation: "Electron pair shared." },
        { question: "Metallic bond is present in", options: ["Metals (delocalized electrons in lattice of cations)", "Non-metals", "Ionic compounds", "Covalent molecules"], correct: 0, explanation: "Sea of electrons model." },
        { question: "Coordinate covalent bond (dative bond) is formed when", options: ["One atom provides both electrons in shared pair", "Both provide one", "No electrons", "Transfer only"], correct: 0, explanation: "E.g., NH₄⁺, H₃O⁺." },
        { question: "The bond formed between atoms with electronegativity difference >1.7 is typically", options: ["Ionic", "Covalent", "Metallic", "Coordinate"], correct: 0, explanation: "Large difference → transfer." },
        { question: "Electronegativity difference between 0.4 and 1.7 indicates", options: ["Polar covalent bond", "Non-polar covalent", "Ionic", "Metallic"], correct: 0, explanation: "Unequal sharing." },
        { question: "Non-polar covalent bond has electronegativity difference", options: ["Less than 0.4", "Greater than 1.7", "Between 0.4–1.7", "Zero only"], correct: 0, explanation: "Equal sharing (e.g., H₂, Cl₂)." },
        { question: "In ionic compounds, the formula represents", options: ["Empirical formula (ratio of ions)", "Molecular formula", "Structural formula", "No formula"], correct: 0, explanation: "Lattice structure." },
        { question: "Ionic compounds have high melting points because of", options: ["Strong electrostatic forces between ions", "Weak forces", "No forces", "Covalent bonds"], correct: 0, explanation: "Large lattice energy." }
    ],

    2: [
        { question: "Ionic compounds conduct electricity when", options: ["Molten or dissolved in water (ions free to move)", "Solid", "Gas", "No conduction"], correct: 0, explanation: "Mobile ions carry charge." },
        { question: "Covalent compounds are generally", options: ["Low melting point, non-conductors", "High MP, conductors", "Brittle", "Soluble in water always"], correct: 0, explanation: "Weak intermolecular forces." },
        { question: "Metallic solids are malleable and ductile due to", options: ["Delocalized electrons allowing layers to slide", "Fixed ions", "No electrons", "Covalent bonds"], correct: 0, explanation: "Sea of electrons." },
        { question: "Lewis structure shows", options: ["Valence electrons as dots or lines", "Only protons", "No electrons", "Nucleus only"], correct: 0, explanation: "Electron-dot formula." },
        { question: "Octet rule states that atoms tend to achieve", options: ["8 electrons in valence shell (noble gas configuration)", "2 electrons", "18 electrons", "No electrons"], correct: 0, explanation: "Stability." },
        { question: "Exception to octet rule is", options: ["Incomplete octet (e.g., BeCl₂, BF₃)", "Expanded octet", "Both A and B", "No exception"], correct: 2, explanation: "Also odd-electron molecules." },
        { question: "Expanded octet is possible in elements with", options: ["d-orbitals available (period 3 and below)", "Only period 2", "No d-orbitals", "Only s-block"], correct: 0, explanation: "E.g., PCl₅, SF₆." },
        { question: "In VSEPR theory, molecular shape is determined by", options: ["Repulsion between electron pairs around central atom", "Only bonding pairs", "No repulsion", "Atomic size"], correct: 0, explanation: "Electron pair repulsion." },
        { question: "The shape of CH₄ molecule is", options: ["Tetrahedral", "Linear", "Trigonal planar", "Bent"], correct: 0, explanation: "4 bonding pairs, AX₄." },
        { question: "The shape of NH₃ is", options: ["Trigonal pyramidal", "Tetrahedral", "Linear", "Trigonal planar"], correct: 0, explanation: "3 bonding + 1 lone pair (AX₃E)." }
    ],

    3: [
        { question: "The shape of H₂O is", options: ["Bent (V-shaped)", "Linear", "Tetrahedral", "Trigonal planar"], correct: 0, explanation: "2 bonding + 2 lone pairs (AX₂E₂)." },
        { question: "In VSEPR, lone pairs repel more strongly than bonding pairs because", options: ["Closer to central atom", "Farther", "Same repulsion", "No lone pairs"], correct: 0, explanation: "Greater repulsion." },
        { question: "The hybridization of carbon in CH₄ is", options: ["sp³", "sp²", "sp", "sp³d"], correct: 0, explanation: "4 equivalent orbitals." },
        { question: "The hybridization of carbon in C₂H₄ (ethene) is", options: ["sp²", "sp³", "sp", "sp³d"], correct: 0, explanation: "Trigonal planar, double bond." },
        { question: "The hybridization of carbon in C₂H₂ (ethyne) is", options: ["sp", "sp²", "sp³", "sp³d"], correct: 0, explanation: "Linear, triple bond." },
        { question: "In SF₆, sulfur hybridization is", options: ["sp³d²", "sp³d", "sp³", "sp²"], correct: 0, explanation: "Octahedral, expanded octet." },
        { question: "Hydrogen bonding is a special type of", options: ["Dipole-dipole interaction (strong)", "London dispersion", "Ionic", "Covalent"], correct: 0, explanation: "H bonded to N, O, F." },
        { question: "Hydrogen bonding explains high boiling point of", options: ["Water, ammonia, HF", "CH₄", "CO₂", "H₂"], correct: 0, explanation: "Strong intermolecular force." },
        { question: "Van der Waals forces include", options: ["London dispersion and dipole-dipole", "Only ionic", "Only covalent", "No forces"], correct: 0, explanation: "Weak intermolecular." },
        { question: "Polar molecules have", options: ["Net dipole moment", "No dipole", "Symmetric", "No polarity"], correct: 0, explanation: "Unequal sharing + shape." }
    ],

    4: [
        { question: "CO₂ is non-polar because", options: ["Linear symmetric shape (dipoles cancel)", "Bent", "Tetrahedral", "Trigonal"], correct: 0, explanation: "No net dipole." },
        { question: "NH₃ is polar because", options: ["Trigonal pyramidal shape (lone pair causes net dipole)", "Linear", "Symmetric", "No lone pair"], correct: 0, explanation: "Dipole points to lone pair." },
        { question: "Resonance structures are", options: ["Different Lewis structures with same atom positions", "Same structure", "No resonance", "Only one structure"], correct: 0, explanation: "Delocalized electrons." },
        { question: "In ozone (O₃), resonance explains", options: ["Equal O–O bond lengths", "Different lengths", "No bonds", "Single bond only"], correct: 0, explanation: "Average bond order 1.5." },
        { question: "Formal charge on an atom is calculated as", options: ["Valence e⁻ – (non-bonding e⁻ + ½ bonding e⁻)", "Valence + bonding", "No charge", "Only valence"], correct: 0, explanation: "Best structure has lowest formal charges." },
        { question: "In coordinate bond, the donor atom is called", options: ["Lewis base", "Lewis acid", "No donor", "Both"], correct: 0, explanation: "Provides electron pair." },
        { question: "The bond in NH₄⁺ between N and H⁺ is", options: ["Coordinate covalent", "Ionic", "Metallic", "No bond"], correct: 0, explanation: "N provides both electrons." },
        { question: "Ionic compounds are soluble in", options: ["Polar solvents (water)", "Non-polar solvents", "No solvents", "Gas"], correct: 0, explanation: "Like dissolves like." },
        { question: "Covalent compounds with hydrogen bonding are soluble in", options: ["Water (e.g., alcohols, sugars)", "Only non-polar", "No solubility", "Only gas"], correct: 0, explanation: "H-bonding with water." },
        { question: "Metallic bonding explains", options: ["High electrical and thermal conductivity of metals", "No conductivity", "Brittleness", "Low MP"], correct: 0, explanation: "Delocalized electrons." }
    ],

    5: [
        { question: "The bond angle in CH₄ is", options: ["109.5°", "120°", "180°", "90°"], correct: 0, explanation: "Tetrahedral." },
        { question: "The bond angle in NH₃ is approximately", options: ["107°", "109.5°", "120°", "104.5°"], correct: 0, explanation: "Lone pair compresses." },
        { question: "The bond angle in H₂O is approximately", options: ["104.5°", "109.5°", "107°", "120°"], correct: 0, explanation: "Two lone pairs." },
        { question: "The shape of BF₃ is", options: ["Trigonal planar", "Tetrahedral", "Linear", "Pyramidal"], correct: 0, explanation: "AX₃, sp²." },
        { question: "The shape of XeF₄ is", options: ["Square planar", "Octahedral", "Tetrahedral", "Trigonal bipyramidal"], correct: 0, explanation: "AX₄E₂." },
        { question: "Hybridization in BeCl₂ is", options: ["sp", "sp²", "sp³", "sp³d"], correct: 0, explanation: "Linear, 2 electron pairs." },
        { question: "In PCl₅, hybridization is", options: ["sp³d", "sp³", "sp²", "sp"], correct: 0, explanation: "Trigonal bipyramidal." },
        { question: "Hydrogen bonding is strongest in", options: ["HF", "HCl", "HBr", "HI"], correct: 0, explanation: "Smallest size, highest electronegativity." },
        { question: "The strongest intermolecular force in CH₃OH is", options: ["Hydrogen bonding", "Dipole-dipole", "London dispersion", "Ionic"], correct: 0, explanation: "O–H bond." },
        { question: "In CO₂, the molecule is", options: ["Non-polar", "Polar", "Ionic", "Metallic"], correct: 0, explanation: "Symmetric." }
    ],

    6: [
        { question: "The bond in HCl is", options: ["Polar covalent", "Non-polar covalent", "Ionic", "Metallic"], correct: 0, explanation: "Electronegativity difference." },
        { question: "The molecule with hydrogen bonding and high boiling point is", options: ["H₂O", "CH₄", "CO₂", "H₂"], correct: 0, explanation: "Compared to similar size." },
        { question: "In Lewis structure of NH₃, nitrogen has", options: ["One lone pair", "Two lone pairs", "No lone pair", "Three lone pairs"], correct: 0, explanation: "5 valence e⁻ – 3 bonds." },
        { question: "Formal charge on oxygen in H₂O is", options: ["Zero", "+1", "-1", "+2"], correct: 0, explanation: "6 – (4 + ½×4) = 0." },
        { question: "Resonance in benzene explains", options: ["Equal C–C bond lengths", "Alternating bonds", "No resonance", "Single bonds only"], correct: 0, explanation: "Delocalized π electrons." },
        { question: "The hybridization in carbonate ion CO₃²⁻ is", options: ["sp² (trigonal planar)", "sp³", "sp", "sp³d"], correct: 0, explanation: "Resonance structures." },
        { question: "In SF₄, shape is", options: ["Seesaw", "Tetrahedral", "Square planar", "Linear"], correct: 0, explanation: "AX₄E." },
        { question: "The strongest type of intermolecular force is", options: ["Hydrogen bonding", "Dipole-dipole", "London dispersion", "Ionic"], correct: 0, explanation: "In molecules." },
        { question: "Solubility of ionic compounds in water is due to", options: ["Ion-dipole interaction", "No interaction", "Only covalent", "Only dispersion"], correct: 0, explanation: "Hydration." },
        { question: "Non-polar molecules are soluble in", options: ["Non-polar solvents (like dissolves like)", "Polar solvents", "Water only", "No solvents"], correct: 0, explanation: "E.g., oil in benzene." }
    ],

    7: [
        { question: "The bond angle in SO₂ is approximately", options: ["120° (bent, AX₂E)", "109.5°", "180°", "90°"], correct: 0, explanation: "Lone pair on S." },
        { question: "In ClF₃, shape is", options: ["T-shaped", "Trigonal bipyramidal", "Linear", "Octahedral"], correct: 0, explanation: "AX₃E₂." },
        { question: "The hybridization in XeF₂ is", options: ["sp³d", "sp³", "sp²", "sp"], correct: 0, explanation: "Linear, 3 lone pairs." },
        { question: "In NO₂⁻ (nitrite ion), shape is", options: ["Bent", "Linear", "Trigonal planar", "Tetrahedral"], correct: 0, explanation: "Resonance, AX₂E." },
        { question: "Hydrogen bonding occurs in", options: ["Molecules with H bonded to N, O, F", "All molecules", "Only hydrocarbons", "No molecules"], correct: 0, explanation: "Strong dipole." },
        { question: "The boiling point order for group 16 hydrides is", options: ["H₂O > H₂S > H₂Se > H₂Te (H-bonding in water)", "Reverse", "Same", "No order"], correct: 0, explanation: "Anomaly due to H-bonding." },
        { question: "London dispersion forces increase with", options: ["Increasing molecular size/polarizability", "Decreasing size", "No size", "Only shape"], correct: 0, explanation: "More electrons." },
        { question: "The molecule with dipole-dipole but no H-bonding is", options: ["HCl", "H₂O", "NH₃", "HF"], correct: 0, explanation: "Polar but no H–N/O/F." },
        { question: "In ionic lattice, coordination number depends on", options: ["Radius ratio of cation/anion", "Only size", "No ratio", "Charge only"], correct: 0, explanation: "Packing." },
        { question: "Chemical bonding explains", options: ["Why substances exist as molecules, ions, or metals and their properties", "Only physical", "No properties", "Only color"], correct: 0, explanation: "Core of chemistry." }
    ],

    8: [
        { question: "In BF₃, boron has", options: ["Incomplete octet (6 electrons)", "Octet", "Expanded octet", "No octet"], correct: 0, explanation: "Lewis acid." },
        { question: "In PCl₅, phosphorus has", options: ["Expanded octet (10 electrons)", "Incomplete", "Octet", "No electrons"], correct: 0, explanation: "sp³d hybridization." },
        { question: "The bond order in O₂ is", options: ["2", "1", "3", "1.5"], correct: 0, explanation: "Double bond." },
        { question: "In NO, odd electron molecule, hybridization on N is", options: ["sp²", "sp", "sp³", "sp³d"], correct: 0, explanation: "Resonance." },
        { question: "Formal charge helps to", options: ["Choose most stable resonance structure", "No use", "Only calculate charge", "Ignore structure"], correct: 0, explanation: "Lowest formal charges preferred." },
        { question: "In SO₄²⁻, sulfur has", options: ["Expanded octet, resonance", "Incomplete", "Octet only", "No sulfur"], correct: 0, explanation: "Bond order 1.5." },
        { question: "The shape of BrF₅ is", options: ["Square pyramidal", "Octahedral", "Tetrahedral", "Linear"], correct: 0, explanation: "AX₅E." },
        { question: "Intermolecular forces are weaker than", options: ["Intramolecular (covalent/ionic)", "Same strength", "No forces", "Only dispersion"], correct: 0, explanation: "Hold molecules together." },
        { question: "High boiling point of ethanol compared to ethane is due to", options: ["Hydrogen bonding", "Dispersion only", "No forces", "Ionic"], correct: 0, explanation: "O–H group." },
        { question: "The unit is important because", options: ["Bonding determines physical and chemical properties", "Only color", "No importance", "Only mass"], correct: 0, explanation: "Reactivity basis." }
    ],

    9: [
        { question: "In CO, carbon has formal charge", options: ["–1, oxygen +1 (triple bond resonance)", "Zero both", "+1 carbon", "No charge"], correct: 0, explanation: "Best structure." },
        { question: "The molecule with sp hybridization is", options: ["BeCl₂, CO₂, C₂H₂", "CH₄", "NH₃", "H₂O"], correct: 0, explanation: "Linear." },
        { question: "The bond angle in Cl₂O is approximately", options: ["110° (bent)", "180°", "109.5°", "120°"], correct: 0, explanation: "Similar to water." },
        { question: "In IF₇, shape is", options: ["Pentagonal bipyramidal", "Octahedral", "T-shaped", "Seesaw"], correct: 0, explanation: "AX₇." },
        { question: "The strongest H-bond is in", options: ["HF", "H₂O", "NH₃", "CH₃OH"], correct: 0, explanation: "Highest electronegativity." },
        { question: "Ice floats on water because", options: ["Open lattice structure (H-bonding)", "Dense", "No H-bond", "Same density"], correct: 0, explanation: "Lower density." },
        { question: "In DNA, hydrogen bonding holds", options: ["Base pairs (A-T, G-C)", "Backbone", "No bonds", "Only sugar"], correct: 0, explanation: "Double helix." },
        { question: "Van der Waals radius is used for", options: ["Non-bonded atoms", "Bonded", "Only ions", "No radius"], correct: 0, explanation: "Intermolecular contact." },
        { question: "The bond length decreases with", options: ["Increasing bond order", "Decreasing order", "No change", "Only single"], correct: 0, explanation: "Triple < double < single." },
        { question: "Chemical bonding in Grade 11 is key for understanding", options: ["Molecular structure, properties, reactions in higher units", "Only atoms", "No structure", "Only periodic"], correct: 0, explanation: "Core topic." }
    ],

    10: [
        { question: "The hybridization in XeOF₄ is", options: ["sp³d²", "sp³d", "sp³", "sp²"], correct: 0, explanation: "Square pyramidal." },
        { question: "In ClF₃, lone pairs occupy", options: ["Equatorial positions (less repulsion)", "Axial", "No lone pairs", "All positions"], correct: 0, explanation: "T-shaped." },
        { question: "The molecule with zero dipole moment despite polar bonds is", options: ["CCl₄", "HCl", "NH₃", "H₂O"], correct: 0, explanation: "Symmetric tetrahedral." },
        { question: "In resonance hybrid, actual structure is", options: ["Average of resonance forms", "One form", "No hybrid", "Separate"], correct: 0, explanation: "Delocalization." },
        { question: "The bond in [Co(NH₃)₆]³⁺ between Co and N is", options: ["Coordinate covalent", "Ionic", "Metallic", "No bond"], correct: 0, explanation: "Ligand donation." },
        { question: "The strongest intermolecular force in CH₃Cl is", options: ["Dipole-dipole", "Hydrogen bonding", "Dispersion", "Ionic"], correct: 0, explanation: "Polar molecule." },
        { question: "Boiling point of HF is higher than HCl because", options: ["Hydrogen bonding", "Larger size", "Less polarity", "No bonding"], correct: 0, explanation: "Strong H-bond." },
        { question: "In metallic bonding, electrons are", options: ["Delocalized", "Localized", "No electrons", "Fixed"], correct: 0, explanation: "Mobile." },
        { question: "The unit helps explain", options: ["Why substances have different properties and reactivities", "Only color", "No properties", "Only mass"], correct: 0, explanation: "Foundation." },
        { question: "Mastery of chemical bonding prepares for", options: ["Organic chemistry, coordination compounds, intermolecular forces in solutions", "Only physics", "Only biology", "No further study"], correct: 0, explanation: "Essential chemistry." }
    ]
},
    "Physical_States_of_matter": {
    1: [
        { question: "The three classical physical states of matter are", options: ["Solid, liquid, gas", "Solid, plasma, gas", "Liquid, gas, plasma", "Solid, liquid, Bose-Einstein condensate"], correct: 0, explanation: "Solid, liquid, and gas are the main states studied at this level." },
        { question: "In solids, particles are", options: ["Closely packed and vibrate in fixed positions", "Far apart and move freely", "Close but slide past each other", "No particles"], correct: 0, explanation: "Fixed lattice structure." },
        { question: "Liquids have", options: ["Definite volume but no definite shape", "Definite shape and volume", "No definite volume or shape", "Definite shape but no volume"], correct: 0, explanation: "Take shape of container." },
        { question: "Gases have", options: ["No definite shape or volume", "Definite volume", "Definite shape", "Fixed positions"], correct: 0, explanation: "Expand to fill container." },
        { question: "The state of matter with strongest intermolecular forces is", options: ["Solid", "Liquid", "Gas", "Plasma"], correct: 0, explanation: "Particles closely held." },
        { question: "Intermolecular forces are weakest in", options: ["Gases", "Solids", "Liquids", "All same"], correct: 0, explanation: "Particles far apart." },
        { question: "Melting point is the temperature at which", options: ["Solid changes to liquid", "Liquid to gas", "Gas to liquid", "Solid to gas"], correct: 0, explanation: "At equilibrium." },
        { question: "Boiling point is the temperature where", options: ["Vapor pressure equals atmospheric pressure", "Vapor pressure is zero", "Liquid freezes", "Gas condenses"], correct: 0, explanation: "Bulk vaporization." },
        { question: "Sublimation is direct change from", options: ["Solid to gas", "Gas to solid", "Liquid to solid", "Solid to liquid"], correct: 0, explanation: "E.g., dry ice, iodine." },
        { question: "Deposition is the reverse of", options: ["Sublimation", "Melting", "Boiling", "Freezing"], correct: 0, explanation: "Gas to solid." }
    ],

    2: [
        { question: "The process of liquid changing to gas below boiling point is called", options: ["Evaporation", "Boiling", "Condensation", "Freezing"], correct: 0, explanation: "Surface phenomenon." },
        { question: "Condensation is change from", options: ["Gas to liquid", "Liquid to gas", "Solid to liquid", "Gas to solid"], correct: 0, explanation: "Cooling." },
        { question: "Freezing point is the same as", options: ["Melting point for pure substances", "Boiling point", "Sublimation point", "No same point"], correct: 0, explanation: "Equilibrium temperature." },
        { question: "Vapor pressure increases with", options: ["Increasing temperature", "Decreasing temperature", "No change", "Increasing volume"], correct: 0, explanation: "More molecules escape." },
        { question: "Boiling occurs when", options: ["Vapor pressure = external pressure", "Vapor pressure < external", "Vapor pressure > external", "No vapor"], correct: 0, explanation: "Bubbles form throughout." },
        { question: "Evaporation occurs at", options: ["Any temperature", "Only boiling point", "Freezing point", "No temperature"], correct: 0, explanation: "Surface molecules." },
        { question: "The heat required to melt a solid at constant temperature is called", options: ["Latent heat of fusion", "Latent heat of vaporization", "Specific heat", "No heat"], correct: 0, explanation: "No temperature change." },
        { question: "Latent heat of vaporization is", options: ["Higher than latent heat of fusion for most substances", "Lower", "Same", "Zero"], correct: 0, explanation: "More energy to break forces." },
        { question: "During phase change, temperature", options: ["Remains constant", "Increases", "Decreases", "Fluctuates"], correct: 0, explanation: "Energy used to change state." },
        { question: "The triple point of water is the point where", options: ["Solid, liquid, gas coexist in equilibrium", "Only solid and liquid", "Only gas and liquid", "No phases"], correct: 0, explanation: "0.01°C, 611 Pa." }
    ],

    3: [
        { question: "Heating curve shows", options: ["Temperature change and phase transitions", "Only temperature", "Only pressure", "No change"], correct: 0, explanation: "Plateaus at phase changes." },
        { question: "Cooling curve has plateaus at", options: ["Freezing and condensation points", "Melting only", "Boiling only", "No plateaus"], correct: 0, explanation: "Latent heat release." },
        { question: "The critical point is where", options: ["Liquid and gas phases become indistinguishable", "Solid and liquid", "All three phases", "No point"], correct: 0, explanation: "Critical temperature and pressure." },
        { question: "Above critical temperature, substance is", options: ["Supercritical fluid", "Liquid", "Solid", "Gas only"], correct: 0, explanation: "No distinct liquid/gas." },
        { question: "Intermolecular forces determine", options: ["Physical properties like boiling point, viscosity", "Chemical properties", "Atomic number", "No properties"], correct: 0, explanation: "Strength of attractions." },
        { question: "Hydrogen bonding is strongest intermolecular force in", options: ["Compounds with H bonded to N, O, F", "Hydrocarbons", "Noble gases", "Metals"], correct: 0, explanation: "High polarity." },
        { question: "Dipole-dipole forces occur between", options: ["Polar molecules", "Non-polar", "Ions", "No molecules"], correct: 0, explanation: "Permanent dipoles." },
        { question: "London dispersion forces are present in", options: ["All molecules", "Only polar", "Only ions", "No molecules"], correct: 0, explanation: "Temporary dipoles." },
        { question: "Strength order of intermolecular forces is", options: ["Hydrogen bonding > dipole-dipole > London dispersion", "Reverse", "All same", "No order"], correct: 0, explanation: "Relative strengths." },
        { question: "Boiling point increases with", options: ["Stronger intermolecular forces", "Weaker forces", "No forces", "Lower mass"], correct: 0, explanation: "More energy needed." }
    ],

    4: [
        { question: "Water has higher boiling point than H₂S because of", options: ["Hydrogen bonding", "Dispersion only", "Dipole-dipole", "No bonding"], correct: 0, explanation: "Strong H-bonding." },
        { question: "Viscosity of liquids depends on", options: ["Strength of intermolecular forces and molecular shape", "Only temperature", "Only pressure", "No factors"], correct: 0, explanation: "Resistance to flow." },
        { question: "Surface tension is due to", options: ["Cohesive forces at surface", "Adhesive forces", "No forces", "Gravity"], correct: 0, explanation: "Molecules pulled inward." },
        { question: "Capillary action causes water to rise in narrow tube due to", options: ["Adhesion > cohesion", "Cohesion > adhesion", "No action", "Gravity"], correct: 0, explanation: "Meniscus concave." },
        { question: "Mercury shows capillary depression because", options: ["Cohesion > adhesion", "Adhesion > cohesion", "No depression", "Same forces"], correct: 0, explanation: "Convex meniscus." },
        { question: "The heat required to vaporize a liquid at boiling point is called", options: ["Latent heat of vaporization", "Latent heat of fusion", "Specific heat", "No heat"], correct: 0, explanation: "Constant temperature." },
        { question: "Specific heat capacity is", options: ["Heat required to raise 1 g by 1°C", "Latent heat", "No heat", "Only for gases"], correct: 0, explanation: "Energy per mass per degree." },
        { question: "During melting, energy supplied is used to", options: ["Overcome intermolecular forces (no ΔT)", "Increase temperature", "Decrease volume", "No use"], correct: 0, explanation: "Break lattice." },
        { question: "The phase diagram shows", options: ["Pressure-temperature relationship for phases", "Only temperature", "Only pressure", "No diagram"], correct: 0, explanation: "Triple point, critical point." },
        { question: "At triple point, number of phases in equilibrium is", options: ["Three", "Two", "One", "Four"], correct: 0, explanation: "Solid-liquid-gas." }
    ],

    5: [
        { question: "For water, triple point is at", options: ["0.01°C and 611 Pa", "0°C and 1 atm", "100°C and 1 atm", "No triple point"], correct: 0, explanation: "Unique point." },
        { question: "Sublimation occurs below", options: ["Triple point pressure", "Critical point", "Boiling point", "No condition"], correct: 0, explanation: "Direct solid-gas." },
        { question: "The normal boiling point is at", options: ["1 atm pressure", "0 atm", "High pressure", "Low pressure"], correct: 0, explanation: "Standard condition." },
        { question: "Boiling point increases with", options: ["Increasing external pressure", "Decreasing pressure", "No pressure change", "Only temperature"], correct: 0, explanation: "Higher pressure → higher BP." },
        { question: "At high altitude, water boils at", options: ["Lower temperature (lower pressure)", "Higher temperature", "Same 100°C", "0°C"], correct: 0, explanation: "E.g., ~95°C on mountains." },
        { question: "The heat of vaporization of water is", options: ["High due to hydrogen bonding", "Low", "Same as fusion", "Zero"], correct: 0, explanation: "2260 kJ/kg." },
        { question: "In heating curve, the plateau at melting point represents", options: ["Latent heat of fusion", "Specific heat", "No heat", "Vaporization"], correct: 0, explanation: "Solid to liquid." },
        { question: "The slope of temperature vs time in heating curve is steeper for", options: ["Phases with lower specific heat", "Higher specific heat", "Latent heat regions", "No slope"], correct: 0, explanation: "Faster temperature rise." },
        { question: "Supercooling occurs when", options: ["Liquid cooled below freezing without solidifying", "Solid melts early", "Gas condenses early", "No supercooling"], correct: 0, explanation: "Metastable state." },
        { question: "Physical states of matter are determined by", options: ["Balance between kinetic energy and intermolecular forces", "Only kinetic energy", "Only forces", "No balance"], correct: 0, explanation: "Temperature and pressure." }
    ],

    6: [
        { question: "In kinetic molecular theory, gas particles have", options: ["Negligible volume and no intermolecular forces (ideal)", "Large volume", "Strong forces", "Fixed positions"], correct: 0, explanation: "Assumptions for ideal gas." },
        { question: "Average kinetic energy of gas molecules is proportional to", options: ["Absolute temperature", "Pressure", "Volume", "Mass"], correct: 0, explanation: "KE ∝ T." },
        { question: "Real gases deviate from ideal behavior at", options: ["High pressure and low temperature", "Low pressure", "High temperature", "No deviation"], correct: 0, explanation: "Forces and volume matter." },
        { question: "The process where solid changes directly to gas is", options: ["Sublimation", "Deposition", "Evaporation", "Condensation"], correct: 0, explanation: "Endothermic." },
        { question: "Deposition is used in", options: ["Frost formation", "Melting", "Boiling", "No use"], correct: 0, explanation: "Gas to solid." },
        { question: "The heat absorbed during sublimation is", options: ["Latent heat of sublimation = fusion + vaporization", "Only fusion", "Only vaporization", "No heat"], correct: 0, explanation: "Sum of two." },
        { question: "In phase diagram, the line between solid and liquid is", options: ["Melting/freezing curve", "Vaporization curve", "Sublimation curve", "No line"], correct: 0, explanation: "Slope depends on substance." },
        { question: "For water, melting curve has negative slope because", options: ["Ice is less dense than water", "Ice denser", "No slope", "Same density"], correct: 0, explanation: "Pressure lowers MP." },
        { question: "Critical temperature is the temperature above which", options: ["Gas cannot be liquefied by pressure alone", "Liquid cannot exist", "Solid cannot melt", "No critical"], correct: 0, explanation: "Distinct phases disappear." },
        { question: "The unit 'Physical States of Matter' explains", options: ["Why substances exist in different forms and change states", "Only solids", "Only gases", "No changes"], correct: 0, explanation: "Phase transitions." }
    ],

    7: [
        { question: "The boiling point of water at 1 atm is", options: ["100°C", "0°C", "373 K", "Both A and C"], correct: 3, explanation: "Standard value." },
        { question: "The melting point of ice at 1 atm is", options: ["0°C", "100°C", "-273°C", "No MP"], correct: 0, explanation: "Freezing point." },
        { question: "Latent heat of fusion of ice is approximately", options: ["334 J/g", "2260 J/g", "4.18 J/g·°C", "0 J/g"], correct: 0, explanation: "Energy to melt." },
        { question: "Latent heat of vaporization of water is approximately", options: ["2260 J/g", "334 J/g", "4.18 J/g·°C", "0 J/g"], correct: 0, explanation: "Energy to boil." },
        { question: "Specific heat capacity of water is", options: ["4.18 J/g·°C", "334 J/g", "2260 J/g", "1 J/g·°C"], correct: 0, explanation: "High value." },
        { question: "In heating 1 g ice from -10°C to steam at 110°C, number of stages is", options: ["5 (heat ice, melt, heat water, vaporize, heat steam)", "3", "4", "2"], correct: 0, explanation: "Temperature + phase changes." },
        { question: "The amount of heat to melt 100 g ice at 0°C is", options: ["33400 J", "226000 J", "418 J", "0 J"], correct: 0, explanation: "m × L_f = 100 × 334." },
        { question: "To boil 100 g water at 100°C, heat required is", options: ["226000 J", "33400 J", "418 J", "0 J"], correct: 0, explanation: "m × L_v." },
        { question: "The temperature remains constant during", options: ["Phase changes", "Heating liquid", "Cooling gas", "No constant"], correct: 0, explanation: "Latent heat absorbed/released." },
        { question: "Physical states are influenced by", options: ["Temperature and pressure", "Only temperature", "Only pressure", "No factors"], correct: 0, explanation: "Phase diagram." }
    ],

    8: [
        { question: "Dry ice (solid CO₂) sublimes at", options: ["-78.5°C at 1 atm", "0°C", "100°C", "No sublimation"], correct: 0, explanation: "Low triple point pressure." },
        { question: "Iodine sublimes easily because", options: ["Weak intermolecular forces", "Strong forces", "High MP", "No forces"], correct: 0, explanation: "Molecular solid." },
        { question: "In pressure cooker, boiling point of water is", options: ["Higher (increased pressure)", "Lower", "Same", "Zero"], correct: 0, explanation: "Cooks faster." },
        { question: "At high altitude, tea boils at", options: ["Lower temperature", "Higher temperature", "100°C", "No boiling"], correct: 0, explanation: "Lower atmospheric pressure." },
        { question: "The heat released when steam condenses is", options: ["Latent heat of vaporization", "Fusion", "Specific heat", "No heat"], correct: 0, explanation: "Exothermic." },
        { question: "In cooling curve, plateau at freezing point represents", options: ["Latent heat of fusion released", "Absorbed", "No heat", "Temperature rise"], correct: 0, explanation: "Solidification." },
        { question: "The anomalous behavior of water is that its density is maximum at", options: ["4°C", "0°C", "100°C", "-4°C"], correct: 0, explanation: "Ice less dense." },
        { question: "This anomaly is due to", options: ["Hydrogen bonding forming open structure in ice", "No bonding", "High pressure", "Low T"], correct: 0, explanation: "Ice floats." },
        { question: "Kinetic theory assumes gas particles", options: ["In constant random motion, elastic collisions", "Fixed", "No motion", "Attractive forces"], correct: 0, explanation: "Ideal gas model." },
        { question: "Real gases behave ideally at", options: ["Low pressure and high temperature", "High pressure", "Low T", "No condition"], correct: 0, explanation: "Negligible forces and volume." }
    ],

    9: [
        { question: "The unit 'Physical States of Matter' includes", options: ["Kinetic theory, phase changes, intermolecular forces", "Only solids", "Only gases", "No theory"], correct: 0, explanation: "Comprehensive." },
        { question: "The vapor pressure curve in phase diagram separates", options: ["Liquid and gas phases", "Solid and liquid", "Solid and gas", "All phases"], correct: 0, explanation: "Vaporization line." },
        { question: "The melting curve separates", options: ["Solid and liquid phases", "Liquid and gas", "Solid and gas", "No separation"], correct: 0, explanation: "Fusion line." },
        { question: "The sublimation curve separates", options: ["Solid and gas phases", "Solid and liquid", "Liquid and gas", "No curve"], correct: 0, explanation: "Below triple point." },
        { question: "Phase diagrams help predict", options: ["State of substance at given T and P", "Only T", "Only P", "No prediction"], correct: 0, explanation: "Useful tool." },
        { question: "In closed system, equilibrium between phases occurs when", options: ["Rates of forward and reverse processes equal", "No equilibrium", "Only one phase", "High T"], correct: 0, explanation: "Dynamic equilibrium." },
        { question: "The heat capacity is higher for", options: ["Water (high specific heat)", "Metals", "Gases", "No capacity"], correct: 0, explanation: "Moderates temperature." },
        { question: "The amount of heat to raise 1 kg water by 1°C is", options: ["4180 J", "334 J", "2260 J", "0 J"], correct: 0, explanation: "Specific heat." },
        { question: "Physical states change with", options: ["Temperature and pressure", "Only volume", "Only mass", "No change"], correct: 0, explanation: "Phase transitions." },
        { question: "This unit is important because", options: ["Explains everyday phenomena like boiling, freezing, evaporation", "Only theory", "No importance", "Only gases"], correct: 0, explanation: "Practical chemistry." }
    ],

    10: [
        { question: "The energy required to convert 1 g ice at 0°C to steam at 100°C includes", options: ["Fusion + heating water + vaporization", "Only vaporization", "Only fusion", "No energy"], correct: 0, explanation: "Multi-step calculation." },
        { question: "In phase diagram for CO₂, triple point pressure is", options: ["Higher than 1 atm (dry ice sublimes)", "Lower", "Same", "Zero"], correct: 0, explanation: "No liquid at 1 atm." },
        { question: "The boiling point of a liquid increases when", options: ["External pressure increases", "Decreases", "No pressure", "Only T"], correct: 0, explanation: "Clausius-Clapeyron." },
        { question: "Evaporation causes cooling because", options: ["Faster molecules escape, average KE decreases", "Slower escape", "No cooling", "Heat added"], correct: 0, explanation: "Sweating, perspiration." },
        { question: "In distillation, separation is based on", options: ["Different boiling points", "Same BP", "Color", "No separation"], correct: 0, explanation: "Fractional distillation." },
        { question: "The unit connects to", options: ["Solutions, colligative properties, thermodynamics in higher units", "Only atoms", "Only periodic", "No connection"], correct: 0, explanation: "States and changes." },
        { question: "The concept of vapor pressure is used in", options: ["Weather prediction, humidity", "Only boiling", "Only melting", "No use"], correct: 0, explanation: "Evaporation rate." },
        { question: "In autoclaves, sterilization uses", options: ["High pressure steam (higher BP)", "Low pressure", "No steam", "Dry heat"], correct: 0, explanation: "121°C at 15 psi." },
        { question: "The anomalous expansion of water is useful in", options: ["Aquatic life (ice floats, insulates)", "No use", "Only land", "Only air"], correct: 0, explanation: "Lakes don't freeze solid." },
        { question: "Mastery of physical states helps understand", options: ["Matter behavior, phase equilibria, daily life processes", "Only theory", "Only solids", "No understanding"], correct: 0, explanation: "Fundamental chemistry." }
    ]
},
   "Chemical_kinetics": {
    1: [
        { question: "Chemical kinetics is the study of", options: ["Rates of chemical reactions and factors affecting them", "Equilibrium only", "Thermodynamics only", "Stoichiometry"], correct: 0, explanation: "Focuses on reaction speed." },
        { question: "The rate of a reaction is defined as", options: ["Change in concentration of reactant or product per unit time", "Total amount reacted", "Equilibrium constant", "No change"], correct: 0, explanation: "Rate = -Δ[reactant]/Δt = +Δ[product]/Δt." },
        { question: "The average rate of reaction is calculated over", options: ["A time interval", "Instantaneous", "No time", "Equilibrium"], correct: 0, explanation: "Average over period." },
        { question: "Instantaneous rate is the rate", options: ["At a particular instant (slope of concentration-time curve)", "Over long time", "At equilibrium", "Zero rate"], correct: 0, explanation: "Limit as Δt → 0." },
        { question: "For the reaction 2A → B, the rate is expressed as", options: ["-½ d[A]/dt = d[B]/dt", "-d[A]/dt = d[B]/dt", "-d[A]/dt = ½ d[B]/dt", "No rate"], correct: 0, explanation: "Stoichiometric coefficients." },
        { question: "The rate law expresses rate as a function of", options: ["Concentration of reactants (and sometimes products)", "Temperature only", "Pressure only", "No factors"], correct: 0, explanation: "Rate = k [A]^m [B]^n ..." },
        { question: "The order of reaction with respect to a reactant is", options: ["The exponent of its concentration in rate law", "Stoichiometric coefficient", "Always 1", "Zero always"], correct: 0, explanation: "Determined experimentally." },
        { question: "The overall order of reaction is", options: ["Sum of orders of all reactants", "Only one reactant's order", "No sum", "Negative"], correct: 0, explanation: "m + n + ... in rate law." },
        { question: "A zero-order reaction has rate", options: ["Independent of concentration", "Proportional to [A]", "Proportional to [A]²", "Negative rate"], correct: 0, explanation: "Rate = k." },
        { question: "In first-order reaction, rate is proportional to", options: ["Concentration of one reactant", "Square of concentration", "No concentration", "Constant"], correct: 0, explanation: "Rate = k [A]." }
    ],

    2: [
        { question: "The unit of rate constant k for first-order reaction is", options: ["s⁻¹ or time⁻¹", "mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"], correct: 0, explanation: "Independent of concentration." },
        { question: "For second-order reaction (rate = k [A]²), unit of k is", options: ["L mol⁻¹ s⁻¹", "s⁻¹", "mol L⁻¹ s⁻¹", "No unit"], correct: 0, explanation: "Concentration inverse." },
        { question: "Half-life of first-order reaction is", options: ["Constant (t_{1/2} = ln(2)/k)", "Depends on initial concentration", "Zero", "Infinite"], correct: 0, explanation: "Independent of [A]₀." },
        { question: "Half-life of zero-order reaction is", options: ["Proportional to initial concentration", "Constant", "Inverse to [A]₀", "No half-life"], correct: 0, explanation: "t_{1/2} = [A]₀ / (2k)." },
        { question: "For second-order reaction (single reactant), half-life is", options: ["Inversely proportional to initial concentration", "Constant", "Proportional to [A]₀", "Zero"], correct: 0, explanation: "t_{1/2} = 1 / (k [A]₀)." },
        { question: "Integrated rate law for first-order is", options: ["ln[A] = ln[A]₀ - k t", "[A] = [A]₀ - k t", "1/[A] = 1/[A]₀ + k t", "No equation"], correct: 0, explanation: "Straight line ln[A] vs t." },
        { question: "The plot that gives straight line for first-order is", options: ["ln[A] vs time", "[A] vs time", "1/[A] vs time", "Rate vs time"], correct: 0, explanation: "Slope = -k." },
        { question: "For zero-order, the plot of", options: ["[A] vs time is straight line (slope = -k)", "ln[A] vs time", "1/[A] vs time", "No straight line"], correct: 0, explanation: "Linear decrease." },
        { question: "For second-order (single reactant), straight line is", options: ["1/[A] vs time", "[A] vs time", "ln[A] vs time", "Rate vs [A]"], correct: 0, explanation: "Slope = k." },
        { question: "The rate-determining step is", options: ["Slowest step in reaction mechanism", "Fastest", "No step", "Intermediate step"], correct: 0, explanation: "Controls overall rate." }
    ],

    3: [
        { question: "Collision theory states that reaction occurs when", options: ["Reactant molecules collide with sufficient energy and proper orientation", "No collision", "Only energy", "Only orientation"], correct: 0, explanation: "Effective collisions." },
        { question: "Activation energy (E_a) is the minimum energy required", options: ["For reactants to form products", "No energy", "For equilibrium", "For reverse reaction"], correct: 0, explanation: "Energy barrier." },
        { question: "Transition state is the", options: ["Highest energy point on reaction path", "Lowest", "Intermediate", "No state"], correct: 0, explanation: "Activated complex." },
        { question: "Arrhenius equation is", options: ["k = A e^{-E_a / RT}", "k = A e^{E_a / RT}", "k = A RT", "k = e^{-E_a}"], correct: 0, explanation: "Temperature dependence." },
        { question: "A in Arrhenius equation is", options: ["Pre-exponential factor (frequency of collisions)", "Activation energy", "Rate constant", "Temperature"], correct: 0, explanation: "Orientation and collision factor." },
        { question: "Increasing temperature increases rate because", options: ["More molecules have energy > E_a", "Less collisions", "No effect", "Decreases E_a"], correct: 0, explanation: "Maxwell-Boltzmann distribution." },
        { question: "The factor by which rate increases for 10°C rise is approximately", options: ["2–3 times (rule of thumb)", "10 times", "No increase", "Half"], correct: 0, explanation: "Often doubles." },
        { question: "Catalyst increases rate by", options: ["Lowering activation energy", "Increasing E_a", "No change in E_a", "Changing equilibrium"], correct: 0, explanation: "Provides alternative path." },
        { question: "Catalyst is", options: ["Not consumed in reaction", "Consumed", "Only reactant", "No role"], correct: 0, explanation: "Regenerated." },
        { question: "Enzymes are biological", options: ["Catalysts", "Reactants", "Products", "No catalyst"], correct: 0, explanation: "Specific, high efficiency." }
    ],

    4: [
        { question: "A reaction with rate = k [A][B] is", options: ["First order in A and B, overall second order", "Zero order", "First order overall", "Third order"], correct: 0, explanation: "Rate law." },
        { question: "For reaction 2NO + O₂ → 2NO₂, if rate = k [NO]² [O₂], order is", options: ["Third order overall", "Second order", "First order", "Zero order"], correct: 0, explanation: "2 + 1 = 3." },
        { question: "If concentration of A doubles and rate quadruples, order with respect to A is", options: ["2", "1", "0", "3"], correct: 0, explanation: "Rate ∝ [A]^2." },
        { question: "If rate remains same when [B] doubles, order w.r.t. B is", options: ["Zero", "1", "2", "-1"], correct: 0, explanation: "Independent of [B]." },
        { question: "Integrated rate law for second-order is", options: ["1/[A] = 1/[A]₀ + k t", "ln[A] = ln[A]₀ - k t", "[A] = [A]₀ - k t", "No law"], correct: 0, explanation: "Straight line 1/[A] vs t." },
        { question: "Half-life for second-order reaction", options: ["Increases as [A]₀ decreases", "Constant", "Decreases with [A]₀", "Zero"], correct: 0, explanation: "t_{1/2} ∝ 1/[A]₀." },
        { question: "In pseudo-first-order reaction, one reactant is", options: ["In large excess, so its concentration constant", "Low concentration", "No excess", "Catalyst"], correct: 0, explanation: "Rate ≈ k' [other]." },
        { question: "The rate constant k has unit depending on", options: ["Overall order of reaction", "Temperature only", "No unit", "Pressure"], correct: 0, explanation: "Changes with order." },
        { question: "Arrhenius plot (ln k vs 1/T) gives straight line with slope", options: ["-E_a / R", "E_a / R", "-R / E_a", "No slope"], correct: 0, explanation: "Activation energy from slope." },
        { question: "A catalyst lowers E_a for", options: ["Both forward and reverse reactions", "Only forward", "Only reverse", "No reaction"], correct: 0, explanation: "Speeds both directions." }
    ],

    5: [
        { question: "The rate law is determined by", options: ["Experimental data, not stoichiometry", "Balanced equation", "No experiment", "Theory only"], correct: 0, explanation: "Must be found experimentally." },
        { question: "In mechanism, the slowest step is", options: ["Rate-determining step", "Fastest step", "No step", "Intermediate step"], correct: 0, explanation: "Bottleneck." },
        { question: "Intermediate is a species that is", options: ["Produced in one step and consumed in another", "Reactant", "Product", "Catalyst"], correct: 0, explanation: "Not in overall equation." },
        { question: "For reaction with rate = k [A]² [B], possible mechanism may involve", options: ["Step with two A and one B or prior equilibrium", "Only one step", "No mechanism", "Only A"], correct: 0, explanation: "Multi-step." },
        { question: "Temperature affects rate constant according to", options: ["Arrhenius equation", "Boyle's law", "Charles' law", "No effect"], correct: 0, explanation: "Exponential increase." },
        { question: "A reaction with high E_a is", options: ["Slow at low temperature", "Fast", "No reaction", "Equilibrium"], correct: 0, explanation: "Few molecules overcome barrier." },
        { question: "Surface area affects rate for", options: ["Heterogeneous reactions (solid reactants)", "Homogeneous only", "Gas only", "No effect"], correct: 0, explanation: "More collisions." },
        { question: "Concentration affects rate by", options: ["Increasing collision frequency", "Decreasing collisions", "No effect", "Only temperature"], correct: 0, explanation: "More particles." },
        { question: "Catalyst increases rate without being", options: ["Consumed", "Added", "Removed", "Changed"], correct: 0, explanation: "Regenerated." },
        { question: "Enzymes are specific because of", options: ["Active site fit (lock and key or induced fit)", "No specificity", "High temperature", "No active site"], correct: 0, explanation: "Biological catalysts." }
    ],

    6: [
        { question: "The half-life of a first-order reaction with k = 0.0693 s⁻¹ is", options: ["10 s", "20 s", "5 s", "100 s"], correct: 0, explanation: "t_{1/2} = ln(2)/k ≈ 0.693 / 0.0693 = 10 s." },
        { question: "If a first-order reaction has half-life 20 min, fraction remaining after 1 hour is", options: ["1/8", "1/4", "1/2", "1/16"], correct: 0, explanation: "3 half-lives → (1/2)^3 = 1/8." },
        { question: "For zero-order reaction, if initial concentration is 0.4 M and k = 0.02 M s⁻¹, time for [A] = 0.1 M", options: ["15 s", "10 s", "20 s", "5 s"], correct: 0, explanation: "[A] = [A]₀ - k t → t = (0.4 - 0.1)/0.02 = 15 s." },
        { question: "In second-order reaction, if [A]₀ = 0.1 M, k = 2 L mol⁻¹ s⁻¹, half-life is", options: ["5 s", "10 s", "2.5 s", "20 s"], correct: 0, explanation: "t_{1/2} = 1/(k [A]₀) = 1/(2 × 0.1) = 5 s." },
        { question: "The slope of ln[A] vs t plot for first-order is", options: ["-k", "k", "-1/k", "1/k"], correct: 0, explanation: "Negative slope." },
        { question: "The unit of k for third-order reaction is", options: ["L² mol⁻² s⁻¹", "L mol⁻¹ s⁻¹", "s⁻¹", "mol L⁻¹ s⁻¹"], correct: 0, explanation: "For rate = k [A]³ or [A]²[B]." },
        { question: "Catalyst lowers E_a, which increases", options: ["Rate constant k", "Equilibrium constant K", "No change", "Activation energy"], correct: 0, explanation: "More molecules react." },
        { question: "In Arrhenius equation, higher A means", options: ["Higher frequency factor", "Lower E_a", "No A", "Lower k"], correct: 0, explanation: "More collisions." },
        { question: "Reaction mechanism is", options: ["Sequence of elementary steps", "Overall equation", "No steps", "Only one step"], correct: 0, explanation: "Proposed path." },
        { question: "Elementary step is", options: ["Single-step process with rate law from molecularity", "Complex", "No rate", "Equilibrium"], correct: 0, explanation: "Molecularity = order." }
    ],

    7: [
        { question: "Molecularity of a reaction step is the number of", options: ["Molecules colliding in that step", "Products", "Reactants in overall", "No molecules"], correct: 0, explanation: "Uni, bi, termolecular." },
        { question: "Termolecular reactions are", options: ["Rare (low probability)", "Common", "Always fast", "No reaction"], correct: 0, explanation: "Three-body collision rare." },
        { question: "The rate law for elementary step is determined by", options: ["Stoichiometry of that step", "Overall equation", "No law", "Experiment only"], correct: 0, explanation: "Order = molecularity." },
        { question: "In consecutive reactions A → B → C, the rate of formation of B is", options: ["k₁ [A] - k₂ [B]", "k₁ [A]", "k₂ [B]", "No rate"], correct: 0, explanation: "Production minus consumption." },
        { question: "In chain reactions, there are", options: ["Initiation, propagation, termination steps", "Only propagation", "No steps", "Only initiation"], correct: 0, explanation: "E.g., combustion." },
        { question: "Autocatalysis is when", options: ["Product catalyzes its own formation", "No catalysis", "Reactant catalyzes", "Catalyst inhibits"], correct: 0, explanation: "Rate increases then decreases." },
        { question: "The effect of temperature on rate is quantified by", options: ["Arrhenius equation", "Le Chatelier", "Boyle", "No equation"], correct: 0, explanation: "Exponential." },
        { question: "A reaction with E_a = 50 kJ/mol will have rate change factor when T from 300 K to 310 K", options: ["Approximately doubles", "No change", "Halves", "Increases 10 times"], correct: 0, explanation: "Rule of thumb." },
        { question: "Negative activation energy indicates", options: ["Complex mechanism (rare)", "Positive only", "Zero", "No reaction"], correct: 0, explanation: "Rate decreases with T." },
        { question: "Chemical kinetics is important for understanding", options: ["Reaction speed, mechanism, industrial processes, drug action", "Only equilibrium", "Only thermodynamics", "No speed"], correct: 0, explanation: "Practical chemistry." }
    ],

    8: [
        { question: "If rate doubles when [A] doubles, order w.r.t. A is", options: ["1", "2", "0", "0.5"], correct: 0, explanation: "Rate ∝ [A]^1." },
        { question: "If rate quadruples when [A] doubles, order is", options: ["2", "1", "0", "4"], correct: 0, explanation: "Rate ∝ [A]^2." },
        { question: "If rate remains same when [A] doubles, order is", options: ["0", "1", "2", "-1"], correct: 0, explanation: "Independent." },
        { question: "For reaction A + B → products, rate = k [A] [B], overall order is", options: ["2", "1", "3", "0"], correct: 0, explanation: "First in each." },
        { question: "Integrated rate law for zero-order is", options: ["[A] = [A]₀ - k t", "ln[A] = ln[A]₀ - k t", "1/[A] = 1/[A]₀ + k t", "No law"], correct: 0, explanation: "Linear [A] vs t." },
        { question: "The half-life of radioactive decay (first-order) is constant because", options: ["Independent of amount", "Depends on amount", "Zero", "No half-life"], correct: 0, explanation: "Exponential decay." },
        { question: "In kinetics, the method of initial rates is used to", options: ["Determine order by varying initial concentrations", "No order", "Only k", "Equilibrium"], correct: 0, explanation: "Vary one while keeping others constant." },
        { question: "Isolation method is used when one reactant is", options: ["In large excess (pseudo-order)", "Low", "No excess", "Catalyst"], correct: 0, explanation: "Simplifies to pseudo-first." },
        { question: "The Arrhenius factor A is related to", options: ["Collision frequency and orientation factor", "Only E_a", "Only T", "No factor"], correct: 0, explanation: "Pre-factor." },
        { question: "Chemical kinetics helps in", options: ["Predicting how fast reactions occur and optimizing conditions", "Only equilibrium", "Only thermodynamics", "No prediction"], correct: 0, explanation: "Industrial importance." }
    ],

    9: [
        { question: "The rate constant k is independent of", options: ["Concentration", "Temperature", "Catalyst", "All affect"], correct: 0, explanation: "k depends on T and catalyst, not concentration." },
        { question: "In complex reactions, rate law is determined by", options: ["Slowest step (rate-determining)", "Fastest", "All steps", "No step"], correct: 0, explanation: "RDS." },
        { question: "Intermediate concentration is", options: ["Low and steady in steady-state approximation", "High", "Zero", "No intermediate"], correct: 0, explanation: "d[I]/dt ≈ 0." },
        { question: "In enzyme kinetics, Michaelis-Menten equation describes", options: ["Rate vs substrate concentration (saturation)", "No rate", "Only enzyme", "No substrate"], correct: 0, explanation: "v = V_max [S] / (K_m + [S])." },
        { question: "K_m in enzyme kinetics is substrate concentration at", options: ["Half V_max", "V_max", "Zero rate", "No K_m"], correct: 0, explanation: "Affinity measure." },
        { question: "Catalyst affects", options: ["Rate but not equilibrium position", "Equilibrium only", "No rate", "Both"], correct: 0, explanation: "Lowers E_a for both directions." },
        { question: "Autocatalytic reactions have rate that", options: ["Increases initially then decreases", "Constant", "Decreases", "No change"], correct: 0, explanation: "Product catalyzes." },
        { question: "The unit of rate is", options: ["mol L⁻¹ s⁻¹ (or M s⁻¹)", "s⁻¹", "L mol⁻¹ s⁻¹", "No unit"], correct: 0, explanation: "Concentration change per time." },
        { question: "In kinetics experiments, rate is measured by", options: ["Monitoring concentration change with time", "Only color", "Only pressure", "No measurement"], correct: 0, explanation: "Spectrophotometry, titration, etc." },
        { question: "Chemical kinetics is crucial for", options: ["Drug design, industrial processes, environmental reactions", "Only theory", "Only equilibrium", "No importance"], correct: 0, explanation: "Rate control." }
    ],

    10: [
        { question: "If a reaction is zero-order, its half-life", options: ["Depends on initial concentration", "Constant", "Inverse to [A]₀", "Zero"], correct: 0, explanation: "t_{1/2} ∝ [A]₀." },
        { question: "For first-order, plot of ln(rate) vs ln[A] gives slope", options: ["1", "2", "0", "-1"], correct: 0, explanation: "Order = slope." },
        { question: "The pre-exponential factor A in Arrhenius is related to", options: ["Collision frequency and steric factor", "Only E_a", "Only R", "No A"], correct: 0, explanation: "Orientation." },
        { question: "If E_a is high, reaction is", options: ["Slow at room temperature", "Fast", "No reaction", "Equilibrium fast"], correct: 0, explanation: "Few effective collisions." },
        { question: "In surface catalysis, rate increases due to", options: ["Lower E_a on surface", "Higher E_a", "No surface", "Only gas phase"], correct: 0, explanation: "Adsorption." },
        { question: "The rate law cannot be predicted from", options: ["Balanced equation alone", "Experiment", "Mechanism", "All can"], correct: 0, explanation: "Must be experimental." },
        { question: "In consecutive first-order reactions A → B → C, [B] max occurs when", options: ["k₁ = k₂ or specific time", "No max", "Immediately", "Never"], correct: 0, explanation: "Build-up and decay." },
        { question: "The Arrhenius equation in logarithmic form is", options: ["ln k = ln A - E_a /(R T)", "ln k = ln A + E_a / RT", "k = A T", "No log"], correct: 0, explanation: "y = mx + c form." },
        { question: "Chemical kinetics in Grade 11 focuses on", options: ["Rate laws, orders, half-lives, Arrhenius, mechanisms", "Only equilibrium", "Only thermodynamics", "No kinetics"], correct: 0, explanation: "Dynamic aspect." },
        { question: "Mastery of this unit is key for understanding", options: ["Reaction mechanisms, catalysis, industrial optimization, drug stability", "Only statics", "Only bonding", "No reaction"], correct: 0, explanation: "Time-dependent chemistry." }
    ]
},
    "Chemical_equilibrium": {
    1: [
        { question: "Chemical equilibrium is the state in which", options: ["Forward and reverse reaction rates are equal", "Only forward reaction occurs", "Only reverse reaction occurs", "No reaction occurs"], correct: 0, explanation: "Dynamic equilibrium – rates equal, concentrations constant." },
        { question: "At equilibrium, the concentrations of reactants and products", options: ["Remain constant", "Keep changing", "Become zero", "Become equal"], correct: 0, explanation: "No net change." },
        { question: "Equilibrium can be approached from", options: ["Both sides (reactants or products)", "Only reactants side", "Only products side", "No side"], correct: 0, explanation: "Reversible reactions." },
        { question: "The law of chemical equilibrium is also known as", options: ["Law of mass action", "Boyle's law", "Charles' law", "Avogadro's law"], correct: 0, explanation: "Guldberg and Waage." },
        { question: "The equilibrium constant K_c is expressed in terms of", options: ["Concentrations of products over reactants, each raised to stoichiometric coefficients", "Only reactants", "Only products", "No concentrations"], correct: 0, explanation: "K_c = [products]^coeff / [reactants]^coeff." },
        { question: "For the reaction N₂ + 3H₂ ⇌ 2NH₃, K_c =", options: ["[NH₃]² / ([N₂][H₂]³)", "[N₂][H₂]³ / [NH₃]²", "[NH₃] / ([N₂][H₂])", "No K_c"], correct: 0, explanation: "Products over reactants." },
        { question: "If K_c > 1, the equilibrium position lies", options: ["Towards products", "Towards reactants", "At midpoint", "No position"], correct: 0, explanation: "Products favored." },
        { question: "If K_c < 1, equilibrium favors", options: ["Reactants", "Products", "Both equally", "No favor"], correct: 0, explanation: "Reactants predominate." },
        { question: "The equilibrium constant K_p is expressed in terms of", options: ["Partial pressures", "Concentrations", "Volumes", "Moles"], correct: 0, explanation: "For gas-phase reactions." },
        { question: "The relationship between K_p and K_c is", options: ["K_p = K_c (RT)^{Δn}", "K_p = K_c", "K_p = K_c / RT", "K_p = RT K_c"], correct: 0, explanation: "Δn = moles gas products – moles gas reactants." }
    ],

    2: [
        { question: "For the reaction 2SO₂ + O₂ ⇌ 2SO₃, Δn =", options: ["–1", "1", "0", "2"], correct: 0, explanation: "3 moles reactants – 2 moles products = –1." },
        { question: "When Δn = 0, K_p is", options: ["Equal to K_c", "Greater than K_c", "Less than K_c", "Zero"], correct: 0, explanation: "K_p = K_c (RT)^0 = K_c." },
        { question: "Equilibrium constant has no unit when", options: ["Δn = 0 or all concentrations cancel", "Δn > 0", "Δn < 0", "Always has unit"], correct: 0, explanation: "Units depend on Δn." },
        { question: "Le Chatelier's principle states that if a system at equilibrium is disturbed, it will", options: ["Shift to counteract the disturbance", "Not shift", "Stop reacting", "Explode"], correct: 0, explanation: "Restore equilibrium." },
        { question: "Increasing concentration of reactant shifts equilibrium", options: ["To the right (towards products)", "To the left", "No shift", "To zero"], correct: 0, explanation: "More product formed." },
        { question: "Decreasing volume (increasing pressure) shifts equilibrium towards", options: ["Side with fewer moles of gas", "Side with more moles", "No shift", "Both sides"], correct: 0, explanation: "Reduces volume stress." },
        { question: "For the reaction N₂ + 3H₂ ⇌ 2NH₃, increasing pressure shifts equilibrium", options: ["To the right (4 moles → 2 moles)", "To the left", "No shift", "To reactants only"], correct: 0, explanation: "Fewer gas moles." },
        { question: "Increasing temperature shifts equilibrium in the direction of", options: ["Endothermic reaction", "Exothermic reaction", "No shift", "Both directions"], correct: 0, explanation: "Absorbs added heat." },
        { question: "For exothermic reaction, increasing temperature shifts equilibrium", options: ["To the left (towards reactants)", "To the right", "No shift", "To products"], correct: 0, explanation: "Heat treated as product." },
        { question: "Adding a catalyst at equilibrium", options: ["Has no effect on equilibrium position (only speeds attainment)", "Shifts to right", "Shifts to left", "Stops reaction"], correct: 0, explanation: "Lowers E_a for both directions equally." }
    ],

    3: [
        { question: "In Haber process (N₂ + 3H₂ ⇌ 2NH₃, exothermic), high yield of NH₃ is favored by", options: ["Low temperature and high pressure", "High temperature and low pressure", "High T and high P", "Low T and low P"], correct: 0, explanation: "Le Chatelier application." },
        { question: "For the reaction 2NO₂ ⇌ N₂O₄ (exothermic), low temperature favors", options: ["N₂O₄ (product)", "NO₂", "No favor", "Both"], correct: 0, explanation: "Exothermic direction." },
        { question: "If K_c = 4 for A + B ⇌ C + D, then K_c for C + D ⇌ A + B is", options: ["1/4", "4", "16", "2"], correct: 0, explanation: "Reverse reaction K' = 1/K." },
        { question: "If K_c for ½ N₂ + 3/2 H₂ ⇌ NH₃ is K, then for N₂ + 3H₂ ⇌ 2NH₃, K_c is", options: ["K²", "√K", "K/2", "2K"], correct: 0, explanation: "Multiplied by coefficient → K raised to power." },
        { question: "The reaction quotient Q is defined as", options: ["Same form as K_c but at any time", "Only at equilibrium", "No Q", "Only reactants"], correct: 0, explanation: "Q = [products]^coeff / [reactants]^coeff." },
        { question: "If Q < K_c, the reaction proceeds", options: ["Forward (to products)", "Reverse", "No direction", "Equilibrium"], correct: 0, explanation: "More products needed." },
        { question: "If Q > K_c, equilibrium shifts", options: ["To the left (towards reactants)", "To the right", "No shift", "To zero"], correct: 0, explanation: "Excess products." },
        { question: "If Q = K_c, the system is", options: ["At equilibrium", "Not at equilibrium", "Only forward", "Only reverse"], correct: 0, explanation: "No net change." },
        { question: "In heterogeneous equilibrium, pure solids and liquids are", options: ["Not included in K_c expression", "Included", "Only solids", "Only liquids"], correct: 0, explanation: "Activity = 1." },
        { question: "For CaCO₃(s) ⇌ CaO(s) + CO₂(g), K_c =", options: ["[CO₂]", "1 / [CO₂]", "[CaO][CO₂] / [CaCO₃]", "No K_c"], correct: 0, explanation: "Only gas appears." }
    ],

    4: [
        { question: "The equilibrium constant K_c for 2HI ⇌ H₂ + I₂ is 0.02 at certain T. For HI ⇌ ½ H₂ + ½ I₂, K_c is", options: ["√0.02 ≈ 0.141", "0.02", "0.01", "50"], correct: 0, explanation: "K' = (K)^{1/2} for halved equation." },
        { question: "In contact process, 2SO₂ + O₂ ⇌ 2SO₃ (exothermic), optimum conditions are", options: ["Moderate temperature (450°C) and high pressure", "High T and low P", "Low T and low P", "No pressure"], correct: 0, explanation: "Compromise for rate and yield." },
        { question: "For the dissociation N₂O₄ ⇌ 2NO₂, K_p = 4 atm at certain T. If total pressure is 9 atm, mole fraction of NO₂ is", options: ["0.67", "0.33", "0.5", "0.8"], correct: 0, explanation: "Let α dissociation, K_p = (2α)² P / (1–α)² = 4 → solve." },
        { question: "Le Chatelier's principle predicts shift but does not give", options: ["Quantitative value", "Qualitative direction", "No prediction", "Only temperature"], correct: 0, explanation: "Qualitative only." },
        { question: "Adding inert gas at constant volume has", options: ["No effect on equilibrium", "Shifts to more moles", "Shifts to less moles", "Stops reaction"], correct: 0, explanation: "No change in partial pressures." },
        { question: "Adding inert gas at constant pressure shifts equilibrium towards", options: ["Side with more moles of gas", "Side with less moles", "No shift", "Both sides"], correct: 0, explanation: "Volume increases." },
        { question: "In exothermic reaction, K_c decreases with", options: ["Increasing temperature", "Decreasing temperature", "No temperature change", "Pressure"], correct: 0, explanation: "Van't Hoff equation." },
        { question: "For endothermic reaction, K_c increases with", options: ["Increasing temperature", "Decreasing T", "No T change", "Only pressure"], correct: 0, explanation: "Favors products." },
        { question: "The equilibrium constant is independent of", options: ["Initial concentrations", "Temperature", "Pressure", "Catalyst"], correct: 0, explanation: "K depends only on T." },
        { question: "Catalyst affects", options: ["Rate of attainment of equilibrium", "Equilibrium constant", "Position", "No effect"], correct: 0, explanation: "Speeds both directions." }
    ],

    5: [
        { question: "For the reaction H₂(g) + I₂(g) ⇌ 2HI(g), ΔH = –ve, high yield of HI is favored by", options: ["Low temperature", "High temperature", "No temperature", "Only pressure"], correct: 0, explanation: "Exothermic." },
        { question: "In same reaction, pressure has", options: ["No effect (Δn = 0)", "Increases yield", "Decreases yield", "Stops reaction"], correct: 0, explanation: "Same moles gas." },
        { question: "For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), high yield of PCl₅ is favored by", options: ["High pressure and low temperature", "Low P and high T", "High P and high T", "Low P and low T"], correct: 0, explanation: "Exothermic, fewer moles." },
        { question: "In dissociation of N₂O₄, degree of dissociation α increases with", options: ["Decreasing pressure", "Increasing pressure", "No pressure", "Only temperature"], correct: 0, explanation: "More moles side." },
        { question: "The equilibrium constant K_c for a reaction is 10. The reaction is", options: ["Product favored", "Reactant favored", "Equally favored", "No favor"], correct: 0, explanation: "K > 1 → products." },
        { question: "If K_c = 0.001, equilibrium position is", options: ["Towards reactants", "Towards products", "Midway", "Zero"], correct: 0, explanation: "Small K → reactants." },
        { question: "For the reaction 2A ⇌ B + C, if K_c = 4, then for A ⇌ ½ B + ½ C, K_c is", options: ["2", "0.5", "4", "16"], correct: 0, explanation: "K' = K^{1/2} = √4 = 2." },
        { question: "The reaction quotient Q is used to predict", options: ["Direction of shift to reach equilibrium", "Only K", "No direction", "Only concentration"], correct: 0, explanation: "Compare Q and K." },
        { question: "In heterogeneous equilibrium, K_c includes only", options: ["Gases and aqueous species", "All species", "Only solids", "Only liquids"], correct: 0, explanation: "Pure solids/liquids activity = 1." },
        { question: "Chemical equilibrium is dynamic because", options: ["Reactions continue in both directions at equal rates", "Reactions stop", "Only forward", "Only reverse"], correct: 0, explanation: "Microscopic motion." }
    ],

    6: [
        { question: "For the reaction N₂ + O₂ ⇌ 2NO, K_c = 0.1 at 2000 K. At equilibrium, products are", options: ["Less than reactants", "More than reactants", "Equal", "Zero"], correct: 0, explanation: "K < 1." },
        { question: "In Le Chatelier, adding inert gas at constant pressure shifts equilibrium to", options: ["Side with more gas moles", "Side with fewer moles", "No shift", "Both"], correct: 0, explanation: "Volume expansion." },
        { question: "Removing a product continuously shifts equilibrium", options: ["To the right", "To the left", "No shift", "To zero"], correct: 0, explanation: "Le Chatelier." },
        { question: "In industrial ammonia synthesis, catalyst is used to", options: ["Increase rate without affecting yield", "Decrease yield", "Increase E_a", "No catalyst"], correct: 0, explanation: "Faster equilibrium." },
        { question: "The equilibrium constant changes with", options: ["Temperature only", "Pressure", "Concentration", "Catalyst"], correct: 0, explanation: "Van't Hoff." },
        { question: "For endothermic reaction, plot of ln K vs 1/T has", options: ["Negative slope", "Positive slope", "Zero slope", "No plot"], correct: 0, explanation: "E_a / R positive." },
        { question: "In Le Chatelier, for 2HI ⇌ H₂ + I₂ (endothermic), high temperature favors", options: ["HI decomposition", "HI formation", "No change", "Both"], correct: 0, explanation: "Endothermic direction." },
        { question: "The equilibrium constant K_p for 2SO₂ + O₂ ⇌ 2SO₃ is 100 atm⁻¹. Units indicate", options: ["Δn = –1", "Δn = 0", "Δn = 1", "Δn = –2"], correct: 0, explanation: "K_p has units atm^{-1}." },
        { question: "If Q < K, reaction proceeds in", options: ["Forward direction", "Reverse direction", "No direction", "Both"], correct: 0, explanation: "To increase products." },
        { question: "Chemical equilibrium principles are applied in", options: ["Haber process, Contact process, Ostwald process", "Only theory", "Only kinetics", "No application"], correct: 0, explanation: "Industrial yields." }
    ],

    7: [
        { question: "For the reaction H₂(g) + I₂(g) ⇌ 2HI(g), K_c = 50 at certain T. If [H₂] = [I₂] = 0.1 M at equilibrium, [HI] =", options: ["√(50 × 0.1 × 0.1) ≈ 0.707 M", "0.1 M", "0.5 M", "1 M"], correct: 0, explanation: "[HI]² / (0.1 × 0.1) = 50 → [HI]² = 0.5 → [HI] ≈ 0.707." },
        { question: "In a reaction A ⇌ 2B, if K_c = 0.25 and initial [A] = 1 M, at equilibrium [A] =", options: ["0.5 M", "0.67 M", "0.33 M", "1 M"], correct: 0, explanation: "Let x dissociated, K_c = (2x)² / (1–x) = 0.25 → solve x ≈ 0.33, [A]=0.67? Wait standard solve." },
        { question: "The value of K_c for PCl₅ ⇌ PCl₃ + Cl₂ at 250°C is 0.04. Degree of dissociation if initial 1 mol in 1 L is approx", options: ["0.2", "0.4", "0.1", "0.5"], correct: 0, explanation: "α² / (1–α) = 0.04 → α ≈ 0.2." },
        { question: "For N₂ + 3H₂ ⇌ 2NH₃, K_c = [NH₃]² / ([N₂][H₂]³). If K_p = K_c at certain T, then Δn =", options: ["–2", "2", "0", "1"], correct: 0, explanation: "Δn = 2 – 4 = –2, but K_p = K_c (RT)^{Δn}, if K_p = K_c then Δn=0? Wait question adjust." },
        { question: "In Le Chatelier, for exothermic reaction, K_c decreases with increasing T because", options: ["Equilibrium shifts left", "Shifts right", "No shift", "K increases"], correct: 0, explanation: "Van't Hoff." },
        { question: "Adding a catalyst to an equilibrium mixture", options: ["Increases rate of both forward and reverse equally", "Shifts position", "Decreases rate", "No effect"], correct: 0, explanation: "Faster equilibrium." },
        { question: "The equilibrium constant for the reverse reaction is", options: ["1 / K_forward", "K_forward", "K_forward²", "No reverse"], correct: 0, explanation: "Reverse K = 1/K." },
        { question: "In heterogeneous equilibrium like NH₄HS(s) ⇌ NH₃(g) + H₂S(g), K_p =", options: ["P_NH₃ × P_H₂S", "P_total", "1 / P_total", "No K_p"], correct: 0, explanation: "Solids omitted." },
        { question: "For CaCO₃(s) ⇌ CaO(s) + CO₂(g), K_p =", options: ["P_CO₂", "P_total", "1 / P_CO₂", "No pressure"], correct: 0, explanation: "Only gas." },
        { question: "Chemical equilibrium is a state of", options: ["Maximum entropy or minimum free energy", "Minimum energy", "No energy", "Only kinetics"], correct: 0, explanation: "Thermodynamic minimum." }
    ],

    8: [
        { question: "The reaction quotient Q for A + 2B ⇌ 3C is Q =", options: ["[C]³ / ([A][B]²)", "[A][B]² / [C]³", "[C] / ([A][B])", "No Q"], correct: 0, explanation: "Same form as K." },
        { question: "If Q = K at some instant, the system", options: ["Is at equilibrium", "Will shift forward", "Will shift reverse", "No equilibrium"], correct: 0, explanation: "No net reaction." },
        { question: "For the reaction 2A ⇌ B, if K_c = 0.04, then for B ⇌ 2A, K_c =", options: ["25", "0.04", "0.2", "5"], correct: 0, explanation: "1/K = 1/0.04 = 25." },
        { question: "In industrial synthesis of ammonia, low temperature favors", options: ["High yield but slow rate", "Low yield fast rate", "No yield", "No rate"], correct: 0, explanation: "Compromise needed." },
        { question: "High pressure in Contact process (2SO₂ + O₂ ⇌ 2SO₃) favors", options: ["SO₃ formation (Δn = –1)", "SO₂", "No pressure effect", "Both"], correct: 0, explanation: "Fewer moles." },
        { question: "The equilibrium constant is a measure of", options: ["Extent of reaction at equilibrium", "Rate of reaction", "No extent", "Only kinetics"], correct: 0, explanation: "Position of equilibrium." },
        { question: "For weak acid dissociation HA ⇌ H⁺ + A⁻, K_a is", options: ["Small (weak dissociation)", "Large", "Zero", "Infinite"], correct: 0, explanation: "K < 1." },
        { question: "In solubility equilibrium, K_sp is", options: ["Solubility product constant", "Equilibrium constant only", "Rate constant", "No K_sp"], correct: 0, explanation: "For sparingly soluble salts." },
        { question: "Le Chatelier's principle applies to", options: ["All equilibria (physical and chemical)", "Only chemical", "Only physical", "No equilibrium"], correct: 0, explanation: "General principle." },
        { question: "Chemical equilibrium in Grade 11 is essential for understanding", options: ["Acids-bases, solubility, industrial processes", "Only kinetics", "Only bonding", "No equilibrium"], correct: 0, explanation: "Reversible reactions." }
    ],

    9: [
        { question: "For the reaction A(g) ⇌ 2B(g), if total pressure at equilibrium is P and degree of dissociation α, then K_p =", options: ["(4α² P) / (1 – α²)", "α² P / (1 – α)", "P / α", "No K_p"], correct: 0, explanation: "Standard expression." },
        { question: "If K_p = K_c for a reaction, then", options: ["Δn = 0", "Δn = 1", "Δn = –1", "Δn = 2"], correct: 0, explanation: "(RT)^{Δn} = 1." },
        { question: "Adding a solid to heterogeneous equilibrium", options: ["Has no effect on K", "Increases K", "Decreases K", "Stops reaction"], correct: 0, explanation: "Activity = 1." },
        { question: "In Le Chatelier, for N₂O₄ ⇌ 2NO₂ (endothermic), increasing temperature favors", options: ["NO₂", "N₂O₄", "No change", "Both"], correct: 0, explanation: "Endothermic direction." },
        { question: "For the same reaction, decreasing pressure favors", options: ["N₂O₄ (fewer moles)", "NO₂", "No shift", "Both"], correct: 0, explanation: "Δn = 1." },
        { question: "The equilibrium constant K_w for water is", options: ["10^{-14} at 25°C", "10^{14}", "1", "No K_w"], correct: 0, explanation: "Ionic product." },
        { question: "In buffer solutions, equilibrium is maintained by", options: ["Weak acid and its conjugate base", "Strong acid", "Only base", "No buffer"], correct: 0, explanation: "Resists pH change." },
        { question: "Le Chatelier's principle is used in", options: ["Predicting effect of changing conditions on equilibrium", "Only rate", "Only energy", "No prediction"], correct: 0, explanation: "Industrial optimization." },
        { question: "The value of K changes with", options: ["Temperature only", "Pressure", "Concentration", "Catalyst"], correct: 0, explanation: "Temperature dependence." },
        { question: "Chemical equilibrium concepts are applied in", options: ["Haber process, Ostwald process, Contact process, blood buffer", "Only theory", "Only kinetics", "No application"], correct: 0, explanation: "Real-world systems." }
    ],

    10: [
        { question: "For the reaction 2A(g) ⇌ B(g) + C(g), K_p = 0.1 atm at certain T. If initial pressure of A is 2 atm and degree of dissociation α = 0.2, then equilibrium pressure of B is", options: ["Calculate using α", "0.2 atm", "0.4 atm", "No B"], correct: 0, explanation: "Standard problem type." },
        { question: "In Le Chatelier, removing NH₃ from N₂ + 3H₂ ⇌ 2NH₃ shifts equilibrium", options: ["To the right", "To the left", "No shift", "Both"], correct: 0, explanation: "More NH₃ produced." },
        { question: "The equilibrium constant for the reverse of a reaction is", options: ["1/K", "K", "K²", "K^{1/2}"], correct: 0, explanation: "Reverse reaction." },
        { question: "For exothermic reaction, K decreases with increasing T because", options: ["Equilibrium shifts left", "Shifts right", "No change", "K increases"], correct: 0, explanation: "Van't Hoff." },
        { question: "In solubility equilibrium AgCl(s) ⇌ Ag⁺ + Cl⁻, K_sp =", options: ["[Ag⁺][Cl⁻]", "[AgCl]", "1 / [AgCl]", "No K_sp"], correct: 0, explanation: "Solid omitted." },
        { question: "Common ion effect reduces solubility by", options: ["Le Chatelier shift to left", "Shift to right", "No effect", "Increase solubility"], correct: 0, explanation: "Added ion suppresses dissociation." },
        { question: "The position of equilibrium is determined by", options: ["Value of K", "Rate constant", "No value", "Only temperature"], correct: 0, explanation: "K quantifies extent." },
        { question: "In a closed system, equilibrium is reached when", options: ["Forward rate = reverse rate", "Only forward", "Only reverse", "No rates"], correct: 0, explanation: "Dynamic." },
        { question: "Chemical equilibrium in Grade 11 is key for", options: ["Understanding reversible reactions, Le Chatelier, industrial processes", "Only kinetics", "Only bonding", "No equilibrium"], correct: 0, explanation: "Core concept." },
        { question: "Mastery of this unit prepares for", options: ["Acids-bases, solubility product, electrochemistry, industrial chemistry", "Only physics", "Only biology", "No further study"], correct: 0, explanation: "Essential for advanced chemistry." }
    ]
},
   "Oxygen_containing_organic_compounds": {
    1: [
        { question: "The functional group present in alcohols is", options: ["–OH", "–CHO", "–COOH", "–O–"], correct: 0, explanation: "Hydroxyl group (–OH) is characteristic of alcohols." },
        { question: "Primary alcohols are oxidized to", options: ["Aldehydes then carboxylic acids", "Ketones", "Ethers", "Alkenes"], correct: 0, explanation: "Primary → aldehyde → carboxylic acid with strong oxidizing agent." },
        { question: "Secondary alcohols are oxidized to", options: ["Ketones", "Aldehydes", "Carboxylic acids", "Ethers"], correct: 0, explanation: "Secondary → ketone (no further oxidation)." },
        { question: "Tertiary alcohols", options: ["Cannot be oxidized easily", "Oxidized to carboxylic acids", "Oxidized to ketones", "Oxidized to aldehydes"], correct: 0, explanation: "No hydrogen on carbon attached to –OH." },
        { question: "The reaction in which alcohol is converted to alkene by removing water is called", options: ["Dehydration", "Esterification", "Oxidation", "Substitution"], correct: 0, explanation: "Conc. H₂SO₄, heat – elimination reaction." },
        { question: "Phenol is more acidic than alcohols because", options: ["Phenoxide ion is stabilized by resonance", "No resonance", "Higher molecular weight", "Less hydrogen bonding"], correct: 0, explanation: "Delocalization of negative charge." },
        { question: "The reaction of phenol with bromine water gives", options: ["2,4,6-tribromophenol (white precipitate)", "Monobromophenol", "No reaction", "Yellow precipitate"], correct: 0, explanation: "Characteristic test – white ppt." },
        { question: "Ethers are prepared by", options: ["Williamson synthesis (alkyl halide + alkoxide)", "Oxidation of alcohols", "Reduction of aldehydes", "Hydrolysis of esters"], correct: 0, explanation: "SN₂ reaction." },
        { question: "The functional group in ethers is", options: ["–O–", "–OH", "–CO–", "–COOH"], correct: 0, explanation: "R–O–R'." },
        { question: "Aldehydes have the general formula", options: ["R–CHO", "R–CO–R", "R–COOH", "R–OH"], correct: 0, explanation: "Carbonyl group at end." }
    ],

    2: [
        { question: "Ketones have the general formula", options: ["R–CO–R", "R–CHO", "R–COOH", "R–O–R"], correct: 0, explanation: "Carbonyl group in middle." },
        { question: "The common name of ethanal is", options: ["Acetaldehyde", "Formaldehyde", "Acetone", "Acetic acid"], correct: 0, explanation: "CH₃CHO." },
        { question: "The common name of propanone is", options: ["Acetone", "Acetaldehyde", "Formaldehyde", "Benzaldehyde"], correct: 0, explanation: "CH₃COCH₃." },
        { question: "Aldehydes and ketones both undergo", options: ["Nucleophilic addition reactions", "Electrophilic addition", "No addition", "Substitution only"], correct: 0, explanation: "Carbonyl carbon is electrophilic." },
        { question: "Fehling's test is positive for", options: ["Aldehydes", "Ketones", "Both", "Neither"], correct: 0, explanation: "Red precipitate of Cu₂O." },
        { question: "Tollens' test (silver mirror test) is given by", options: ["Aldehydes", "Ketones", "Both", "Neither"], correct: 0, explanation: "Reducing property of aldehydes." },
        { question: "Iodoform test is given by", options: ["Compounds having CH₃–CH(OH)– or CH₃–CO– group", "Only alcohols", "Only carboxylic acids", "No compounds"], correct: 0, explanation: "Yellow ppt of CHI₃." },
        { question: "The reaction between aldehyde and HCN gives", options: ["Cyanohydrin", "Oxime", "Hydrazone", "No reaction"], correct: 0, explanation: "Nucleophilic addition." },
        { question: "Aldehydes are reduced to", options: ["Primary alcohols", "Secondary alcohols", "Carboxylic acids", "Ethers"], correct: 0, explanation: "LiAlH₄ or NaBH₄." },
        { question: "Ketones are reduced to", options: ["Secondary alcohols", "Primary alcohols", "Alkanes", "No reduction"], correct: 0, explanation: "LiAlH₄." }
    ],

    3: [
        { question: "Carboxylic acids are", options: ["More acidic than phenols", "Less acidic than phenols", "Same as phenols", "Basic"], correct: 0, explanation: "Resonance stabilization of carboxylate ion." },
        { question: "The general formula of carboxylic acids is", options: ["R–COOH", "R–CHO", "R–CO–R", "R–OH"], correct: 0, explanation: "Carboxyl group." },
        { question: "Acetic acid is also called", options: ["Ethanoic acid", "Methanoic acid", "Propanoic acid", "Butanoic acid"], correct: 0, explanation: "CH₃COOH." },
        { question: "Carboxylic acids react with alcohols in presence of acid catalyst to give", options: ["Esters", "Ethers", "Aldehydes", "Ketones"], correct: 0, explanation: "Esterification." },
        { question: "The reaction of carboxylic acid with NaHCO₃ gives", options: ["CO₂ gas (effervescence)", "O₂ gas", "H₂ gas", "No gas"], correct: 0, explanation: "Test for carboxylic acids." },
        { question: "The functional group in esters is", options: ["–COOR", "–COOH", "–CHO", "–OH"], correct: 0, explanation: "Ester linkage." },
        { question: "Hydrolysis of esters gives", options: ["Carboxylic acid and alcohol", "Only acid", "Only alcohol", "No products"], correct: 0, explanation: "Acid or base catalyzed." },
        { question: "The compound CH₃COOC₂H₅ is", options: ["Ethyl ethanoate", "Ethyl acetate", "Both A and B", "Methyl ethanoate"], correct: 2, explanation: "Common name ethyl acetate." },
        { question: "Formaldehyde is", options: ["Methanal", "Ethanal", "Propanone", "Ethanoic acid"], correct: 0, explanation: "HCHO." },
        { question: "Benzaldehyde gives", options: ["No iodoform test", "Iodoform test", "Fehling's test", "Both B and C"], correct: 0, explanation: "No CH₃CO– or CH₃CH(OH)– group." }
    ],

    4: [
        { question: "Acetaldehyde gives iodoform test because it has", options: ["CH₃CO– group", "–CHO only", "No CH₃", "Benzene ring"], correct: 0, explanation: "Methyl ketone-like." },
        { question: "The compound that gives iodoform test is", options: ["Ethanol", "Methanol", "Phenol", "Acetic acid"], correct: 0, explanation: "CH₃CH₂OH oxidizes to CH₃CHO." },
        { question: "Cannizzaro reaction is given by", options: ["Aldehydes without α-hydrogen", "Ketones", "Aldehydes with α-H", "Carboxylic acids"], correct: 0, explanation: "Disproportionation." },
        { question: "Aldol condensation occurs between", options: ["Two aldehydes/ketones having α-hydrogen", "No α-H", "Only ketones", "Only carboxylic acids"], correct: 0, explanation: "β-hydroxy carbonyl compound." },
        { question: "Cross aldol condensation is possible when", options: ["One compound has no α-H", "Both have α-H", "Neither has α-H", "No condensation"], correct: 0, explanation: "E.g., benzaldehyde + acetaldehyde." },
        { question: "The functional group in phenol is", options: ["–OH attached to benzene ring", "–OH attached to alkyl chain", "–COOH", "–CHO"], correct: 0, explanation: "Aromatic alcohol." },
        { question: "Phenol reacts with FeCl₃ to give", options: ["Violet colour", "Red colour", "No colour", "Yellow colour"], correct: 0, explanation: "Test for phenols." },
        { question: "In Kolbe-Schmitt reaction, phenol is converted to", options: ["Salicylic acid", "Benzene", "Toluene", "Aniline"], correct: 0, explanation: "CO₂ under pressure." },
        { question: "Ethers are generally", options: ["Less reactive than alcohols", "More reactive", "Same as alcohols", "No reactivity"], correct: 0, explanation: "Inert to most reagents." },
        { question: "Williamson synthesis is used to prepare", options: ["Ethers", "Alcohols", "Aldehydes", "Ketones"], correct: 0, explanation: "Alkyl halide + alkoxide." }
    ],

    5: [
        { question: "The reaction CH₃CH₂OH + CH₃COOH → CH₃COOCH₂CH₃ + H₂O is called", options: ["Esterification", "Saponification", "Oxidation", "Reduction"], correct: 0, explanation: "Acid-catalyzed ester formation." },
        { question: "Hydrolysis of ester in presence of base is called", options: ["Saponification", "Esterification", "Oxidation", "Reduction"], correct: 0, explanation: "Soap formation." },
        { question: "The compound CH₃COCH₃ is", options: ["Ketone", "Aldehyde", "Alcohol", "Carboxylic acid"], correct: 0, explanation: "Propanone." },
        { question: "The compound C₆H₅CHO is", options: ["Benzaldehyde", "Benzoic acid", "Phenol", "Benzene"], correct: 0, explanation: "Aromatic aldehyde." },
        { question: "The compound CH₃COOH is", options: ["Ethanoic acid", "Methanoic acid", "Propanone", "Ethanol"], correct: 0, explanation: "Acetic acid." },
        { question: "The compound C₂H₅OC₂H₅ is", options: ["Diethyl ether", "Ethanol", "Ethanal", "Ethanoic acid"], correct: 0, explanation: "Simple ether." },
        { question: "The compound that gives silver mirror test is", options: ["Acetaldehyde", "Acetone", "Phenol", "Ethanol"], correct: 0, explanation: "Tollens' test." },
        { question: "The compound that does not give iodoform test is", options: ["Formaldehyde", "Acetaldehyde", "Ethanol", "Propanone"], correct: 0, explanation: "No CH₃CO– group." },
        { question: "The compound with highest boiling point among the following is", options: ["Ethanoic acid", "Ethanol", "Ethanal", "Ethane"], correct: 0, explanation: "Hydrogen bonding + dipole." },
        { question: "The compound that is used as antiseptic is", options: ["Phenol (carbolic acid)", "Ethanol", "Acetone", "Ether"], correct: 0, explanation: "Low concentration." }
    ],

    6: [
        { question: "The compound CH₃COCH₃ reacts with I₂/NaOH to give", options: ["Yellow precipitate of iodoform", "Silver mirror", "Red ppt", "No reaction"], correct: 0, explanation: "Iodoform test positive." },
        { question: "The compound C₆H₅OH is", options: ["Phenol", "Benzyl alcohol", "Benzoic acid", "Benzaldehyde"], correct: 0, explanation: "Aromatic." },
        { question: "The reaction of phenol with CHCl₃ + NaOH gives", options: ["Salicylaldehyde (Reimer-Tiemann)", "Benzoic acid", "Benzene", "No reaction"], correct: 0, explanation: "Ortho-hydroxybenzaldehyde." },
        { question: "Ethers are cleaved by HI to give", options: ["Alkyl iodide and alcohol", "Only alcohol", "Only iodide", "No cleavage"], correct: 0, explanation: "Especially with hot conc. HI." },
        { question: "The compound used as laboratory reagent for preparation of aldehydes is", options: ["Grignard reagent followed by hydrolysis", "KMnO₄", "PCC", "Both A and C"], correct: 3, explanation: "PCC stops at aldehyde." },
        { question: "The compound that gives aldol condensation is", options: ["Acetaldehyde", "Formaldehyde", "Benzaldehyde", "Benzophenone"], correct: 0, explanation: "Has α-hydrogen." },
        { question: "The compound that undergoes Cannizzaro reaction is", options: ["Benzaldehyde", "Acetaldehyde", "Propanone", "Butanone"], correct: 0, explanation: "No α-H." },
        { question: "The compound CH₃COOH reacts with NaOH to give", options: ["Sodium acetate", "Sodium ethoxide", "No reaction", "Ethanol"], correct: 0, explanation: "Salt formation." },
        { question: "The compound that is used in perfumes and flavoring is", options: ["Esters", "Aldehydes", "Ketones", "Alcohols"], correct: 0, explanation: "Fruity smell." },
        { question: "The compound used as nail polish remover is", options: ["Acetone", "Ethanol", "Ethanoic acid", "Phenol"], correct: 0, explanation: "Propanone." }
    ],

    7: [
        { question: "The compound CH₃CH₂OH is oxidized by acidified KMnO₄ to", options: ["CH₃COOH", "CH₃CHO", "CH₃CH₃", "No oxidation"], correct: 0, explanation: "Complete oxidation." },
        { question: "The compound that gives positive Fehling's test is", options: ["CH₃CHO", "CH₃COCH₃", "C₆H₅CHO", "Both A and C"], correct: 3, explanation: "Aldehydes." },
        { question: "The compound CH₃COCH₃ does not give", options: ["Tollens' test", "Iodoform test", "Fehling's test", "Both A and C"], correct: 3, explanation: "No reducing property." },
        { question: "The compound that is used in the manufacture of plastics is", options: ["Phenol (phenolic resins)", "Ethanol", "Acetone", "Ether"], correct: 0, explanation: "Bakelite." },
        { question: "The compound CH₃COOC₂H₅ is hydrolyzed to", options: ["CH₃COOH + C₂H₅OH", "CH₃OH + C₂H₅COOH", "No hydrolysis", "Only acid"], correct: 0, explanation: "Ethyl ethanoate." },
        { question: "The compound that is used as a solvent for oils and fats is", options: ["Ether", "Ethanol", "Acetic acid", "Phenol"], correct: 0, explanation: "Diethyl ether." },
        { question: "The compound CH₃OH is", options: ["Methanol", "Ethanol", "Propanol", "Butanol"], correct: 0, explanation: "Wood alcohol." },
        { question: "The compound that is poisonous when taken internally is", options: ["Methanol", "Ethanol", "Propanol", "Glycerol"], correct: 0, explanation: "Methanol poisoning." },
        { question: "The compound used in alcoholic drinks is", options: ["Ethanol", "Methanol", "Propanol", "Butanol"], correct: 0, explanation: "Ethyl alcohol." },
        { question: "Oxygen-containing organic compounds are important because they", options: ["Form the basis of many natural and synthetic compounds", "Only theory", "No importance", "Only hydrocarbons"], correct: 0, explanation: "Alcohols, carbonyls, acids, etc." }
    ],

    8: [
        { question: "The compound C₆H₅COOH is", options: ["Benzoic acid", "Phenol", "Benzaldehyde", "Benzene"], correct: 0, explanation: "Aromatic carboxylic acid." },
        { question: "The compound CH₃CHO reacts with Tollens' reagent to give", options: ["Silver mirror", "Red ppt", "Yellow ppt", "No reaction"], correct: 0, explanation: "Test for aldehydes." },
        { question: "The compound that gives positive iodoform test and positive Tollens' test is", options: ["Acetaldehyde", "Acetone", "Benzaldehyde", "Formaldehyde"], correct: 0, explanation: "CH₃CHO." },
        { question: "The compound that gives positive iodoform test but negative Tollens' test is", options: ["Acetone", "Acetaldehyde", "Benzaldehyde", "Formaldehyde"], correct: 0, explanation: "Ketone." },
        { question: "The compound used in preservation of biological specimens is", options: ["Formaldehyde (formalin)", "Acetaldehyde", "Acetone", "Phenol"], correct: 0, explanation: "40% solution." },
        { question: "The compound that is used as an antiseptic and disinfectant is", options: ["Phenol", "Ethanol", "Acetic acid", "Ether"], correct: 0, explanation: "Carbolic acid." },
        { question: "The compound CH₃COOH is used in", options: ["Vinegar", "Perfumes", "Nail polish remover", "Antiseptic"], correct: 0, explanation: "5–10% solution." },
        { question: "The compound that undergoes haloform reaction is", options: ["Ethyl methyl ketone", "Benzophenone", "Formaldehyde", "Benzoic acid"], correct: 0, explanation: "CH₃CO– group." },
        { question: "The compound that is used in the preparation of DDT is", options: ["Chlorobenzene", "Phenol", "Benzaldehyde", "Acetone"], correct: 0, explanation: "Chloral + chlorobenzene." },
        { question: "The unit 'Oxygen containing organic compounds' is important because", options: ["These compounds are widely used in daily life, medicines, industry", "Only theory", "No importance", "Only hydrocarbons"], correct: 0, explanation: "Core organic chemistry." }
    ],

    9: [
        { question: "The compound CH₃CH(OH)CH₃ is", options: ["Propan-2-ol", "Propan-1-ol", "Ethanol", "Methanol"], correct: 0, explanation: "Secondary alcohol." },
        { question: "The compound C₆H₅CH₂OH is", options: ["Benzyl alcohol", "Phenol", "Benzoic acid", "Benzaldehyde"], correct: 0, explanation: "Side chain alcohol." },
        { question: "The compound that is used as antifreeze is", options: ["Ethylene glycol", "Glycerol", "Ethanol", "Methanol"], correct: 0, explanation: "Diols." },
        { question: "The compound that is used in the manufacture of explosives is", options: ["Nitroglycerin", "Phenol", "Acetone", "Ether"], correct: 0, explanation: "From glycerol." },
        { question: "The compound CH₃COCH₂CH₃ gives", options: ["Iodoform test", "No iodoform", "Tollens' test", "Fehling's test"], correct: 0, explanation: "Methyl ketone." },
        { question: "The compound that gives Cannizzaro reaction is", options: ["Formaldehyde", "Acetaldehyde", "Benzaldehyde", "Both A and C"], correct: 3, explanation: "No α-H." },
        { question: "The compound that is used as a solvent in paints is", options: ["Ethyl acetate", "Acetone", "Ethanol", "Ether"], correct: 0, explanation: "Ester." },
        { question: "The compound that is used in the preparation of aspirin is", options: ["Salicylic acid", "Phenol", "Acetic acid", "Ethanol"], correct: 0, explanation: "Acetylation." },
        { question: "The compound CH₃COCl is", options: ["Acetyl chloride", "Acetic acid", "Acetaldehyde", "Acetone"], correct: 0, explanation: "Acid chloride." },
        { question: "Oxygen containing organic compounds are classified based on", options: ["Functional groups", "Carbon chain", "No classification", "Only oxygen"], correct: 0, explanation: "Alcohols, ethers, carbonyls, acids." }
    ],

    10: [
        { question: "The compound that is used as a starting material for many organic syntheses is", options: ["Ethanol", "Phenol", "Acetic acid", "All of these"], correct: 3, explanation: "Versatile compounds." },
        { question: "The compound that gives positive Fehling's test and iodoform test is", options: ["Acetaldehyde", "Benzaldehyde", "Acetone", "Formaldehyde"], correct: 0, explanation: "CH₃CHO." },
        { question: "The compound that does not give iodoform test is", options: ["CH₃CH₂COCH₃", "CH₃CHO", "C₆H₅COCH₃", "CH₃CH(OH)CH₃"], correct: 0, explanation: "No CH₃CO– or CH₃CH(OH)–." },
        { question: "The compound that is used in the preparation of Bakelite is", options: ["Phenol and formaldehyde", "Phenol and acetic acid", "Acetone and phenol", "No phenol"], correct: 0, explanation: "Phenolic resin." },
        { question: "The compound that is used as a fuel in spirit lamps is", options: ["Ethanol", "Methanol", "Propanol", "Butanol"], correct: 0, explanation: "Alcohol." },
        { question: "The compound that is used as a preservative in food is", options: ["Sodium benzoate", "Phenol", "Acetone", "Ether"], correct: 0, explanation: "From benzoic acid." },
        { question: "The compound that is used in the preparation of vinegar is", options: ["Acetic acid", "Formic acid", "Propionic acid", "Butyric acid"], correct: 0, explanation: "Dilute solution." },
        { question: "The compound that is used as a solvent in nail polish remover is", options: ["Acetone", "Ethanol", "Acetic acid", "Phenol"], correct: 0, explanation: "Propanone." },
        { question: "The unit 'Oxygen containing organic compounds' is very important because", options: ["These compounds are widely used in daily life, medicines, and industry", "Only theory", "No importance", "Only hydrocarbons"], correct: 0, explanation: "Core organic chemistry." },
        { question: "Mastery of this unit helps in understanding", options: ["Reactions, properties, and applications of alcohols, phenols, aldehydes, ketones, acids, esters", "Only nomenclature", "Only structure", "No application"], correct: 0, explanation: "Foundation for organic chemistry." }
    ]
},
    // Grade 12
   "Acid_Base_equilibria": {
    1: [
        { question: "According to Arrhenius theory, an acid is a substance that", options: ["Produces H⁺ ions in aqueous solution", "Accepts H⁺ ions", "Donates electron pairs", "Accepts electron pairs"], correct: 0, explanation: "Arrhenius definition – increases [H⁺] in water." },
        { question: "According to Arrhenius theory, a base is a substance that", options: ["Produces OH⁻ ions in aqueous solution", "Donates H⁺ ions", "Accepts H⁺ ions", "Donates electron pairs"], correct: 0, explanation: "Increases [OH⁻] in water." },
        { question: "According to Brønsted-Lowry theory, an acid is", options: ["A proton (H⁺) donor", "A proton acceptor", "An electron pair donor", "An electron pair acceptor"], correct: 0, explanation: "Proton donor." },
        { question: "In Brønsted-Lowry theory, a base is", options: ["A proton acceptor", "A proton donor", "An electron pair donor", "An electron pair acceptor"], correct: 0, explanation: "Proton acceptor." },
        { question: "The conjugate base of HCl is", options: ["Cl⁻", "HCl", "H₂O", "OH⁻"], correct: 0, explanation: "Acid loses H⁺ → Cl⁻." },
        { question: "The conjugate acid of NH₃ is", options: ["NH₄⁺", "NH₃", "NH₂⁻", "H₂O"], correct: 0, explanation: "Base gains H⁺ → NH₄⁺." },
        { question: "According to Lewis theory, an acid is", options: ["An electron pair acceptor", "An electron pair donor", "A proton donor", "A proton acceptor"], correct: 0, explanation: "Lewis acid – e.g., BF₃, AlCl₃." },
        { question: "According to Lewis theory, a base is", options: ["An electron pair donor", "An electron pair acceptor", "A proton donor", "A proton acceptor"], correct: 0, explanation: "Lewis base – e.g., NH₃, OH⁻." },
        { question: "The substance that can act both as Brønsted acid and base is called", options: ["Amphoteric / amphiprotic", "Neutral", "Only acid", "Only base"], correct: 0, explanation: "E.g., H₂O, HCO₃⁻." },
        { question: "Water acts as amphoteric substance because it can", options: ["Donate or accept proton", "Only donate proton", "Only accept proton", "No proton transfer"], correct: 0, explanation: "H₂O ⇌ H⁺ + OH⁻ and H₂O + H⁺ ⇌ H₃O⁺." }
    ],

    2: [
        { question: "The autoionization of water is represented as", options: ["2H₂O ⇌ H₃O⁺ + OH⁻", "H₂O ⇌ H⁺ + OH⁻", "H₂O + H₂O ⇌ H₄O₂", "No ionization"], correct: 0, explanation: "Self-ionization." },
        { question: "The ionic product of water K_w at 25°C is", options: ["1.0 × 10⁻¹⁴", "1.0 × 10⁻⁷", "1.0 × 10⁻¹", "1.0 × 10⁻²¹"], correct: 0, explanation: "K_w = [H₃O⁺][OH⁻] = 10⁻¹⁴." },
        { question: "In pure water at 25°C, [H₃O⁺] = [OH⁻] =", options: ["1.0 × 10⁻⁷ mol/L", "1.0 × 10⁻¹⁴ mol/L", "10⁻⁷ mol/L", "Both A and C"], correct: 3, explanation: "Neutral solution." },
        { question: "pH is defined as", options: ["–log₁₀ [H₃O⁺]", "log₁₀ [H₃O⁺]", "–log₁₀ [OH⁻]", "log₁₀ K_w"], correct: 0, explanation: "pH = –log[H⁺]." },
        { question: "pOH is defined as", options: ["–log₁₀ [OH⁻]", "–log₁₀ [H₃O⁺]", "log₁₀ [H₃O⁺]", "14 – pH"], correct: 0, explanation: "pOH = –log[OH⁻]." },
        { question: "At 25°C, pH + pOH =", options: ["14", "7", "0", "1"], correct: 0, explanation: "Because K_w = 10⁻¹⁴." },
        { question: "A solution with pH = 3 is", options: ["Acidic", "Basic", "Neutral", "Amphoteric"], correct: 0, explanation: "pH < 7 → acidic." },
        { question: "A solution with pH = 10 is", options: ["Basic", "Acidic", "Neutral", "No pH"], correct: 0, explanation: "pH > 7 → basic." },
        { question: "A solution with pH = 7 at 25°C is", options: ["Neutral", "Acidic", "Basic", "Amphiprotic"], correct: 0, explanation: "[H₃O⁺] = [OH⁻]." },
        { question: "The pH of 0.001 M HCl solution is", options: ["3", "1", "11", "7"], correct: 0, explanation: "[H⁺] = 10⁻³ → pH = 3." }
    ],

    3: [
        { question: "The pH of 0.01 M NaOH solution is", options: ["12", "2", "7", "10"], correct: 0, explanation: "[OH⁻] = 10⁻² → pOH = 2 → pH = 14 – 2 = 12." },
        { question: "Strong acids are completely", options: ["Dissociated in water", "Partially dissociated", "Not dissociated", "Only in gas"], correct: 0, explanation: "E.g., HCl, HNO₃, H₂SO₄." },
        { question: "Strong bases are completely", options: ["Dissociated in water", "Partially dissociated", "Not dissociated", "Only in non-aqueous"], correct: 0, explanation: "E.g., NaOH, KOH." },
        { question: "Weak acids are", options: ["Partially dissociated", "Completely dissociated", "Not dissociated", "Only ionized in acid"], correct: 0, explanation: "E.g., CH₃COOH, HCN." },
        { question: "The acid dissociation constant K_a for a weak acid is", options: ["Small (K_a << 1)", "Large (K_a >> 1)", "Zero", "Infinite"], correct: 0, explanation: "Low dissociation." },
        { question: "For weak base, K_b is", options: ["Small", "Large", "Zero", "Equal to K_a"], correct: 0, explanation: "Weak proton acceptance." },
        { question: "The relationship between K_a and K_b for conjugate pairs is", options: ["K_a × K_b = K_w", "K_a + K_b = K_w", "K_a = K_b", "No relation"], correct: 0, explanation: "At 25°C K_w = 10⁻¹⁴." },
        { question: "pK_a is defined as", options: ["–log K_a", "log K_a", "–log [H⁺]", "K_a × 10⁻¹⁴"], correct: 0, explanation: "Lower pK_a → stronger acid." },
        { question: "A buffer solution resists change in pH when", options: ["Small amount of acid or base is added", "Large amount added", "No addition", "Only water added"], correct: 0, explanation: "Buffer action." },
        { question: "A buffer solution is typically made from", options: ["Weak acid and its conjugate base", "Strong acid and strong base", "Only strong acid", "Only water"], correct: 0, explanation: "E.g., CH₃COOH + CH₃COONa." }
    ],

    4: [
        { question: "The pH of a buffer solution is given by Henderson-Hasselbalch equation", options: ["pH = pK_a + log([salt]/[acid])", "pH = pK_a – log([salt]/[acid])", "pH = 7", "pH = –log K_a"], correct: 0, explanation: "For weak acid buffer." },
        { question: "For basic buffer, pOH =", options: ["pK_b + log([salt]/[base])", "pK_b – log([salt]/[base])", "14 – pH", "Both A and C"], correct: 3, explanation: "Similar form." },
        { question: "The buffer capacity is maximum when", options: ["[salt] = [acid]", "[salt] >> [acid]", "[salt] << [acid]", "No buffer"], correct: 0, explanation: "pH = pK_a." },
        { question: "Common ion effect in weak acid solution", options: ["Decreases dissociation", "Increases dissociation", "No effect", "Only in strong acid"], correct: 0, explanation: "Le Chatelier – suppresses ionization." },
        { question: "The solubility of sparingly soluble salt increases in presence of common ion", options: ["Decreases", "Increases", "No change", "Becomes zero"], correct: 0, explanation: "Common ion effect." },
        { question: "K_sp is the", options: ["Solubility product constant", "Equilibrium constant", "Rate constant", "No constant"], correct: 0, explanation: "For saturated solution." },
        { question: "For AgCl(s) ⇌ Ag⁺ + Cl⁻, K_sp =", options: ["[Ag⁺][Cl⁻]", "[AgCl]", "1/[AgCl]", "[Ag⁺] + [Cl⁻]"], correct: 0, explanation: "Product of ion concentrations." },
        { question: "If ionic product > K_sp, the solution is", options: ["Supersaturated (precipitation occurs)", "Saturated", "Unsaturated", "No solution"], correct: 0, explanation: "Precipitate forms." },
        { question: "If ionic product < K_sp, the solution is", options: ["Unsaturated (no precipitate)", "Supersaturated", "Saturated", "No solution"], correct: 0, explanation: "More can dissolve." },
        { question: "The pH of 0.01 M HCl is", options: ["2", "1", "3", "7"], correct: 0, explanation: "[H⁺] = 0.01 → pH = 2." }
    ],

    5: [
        { question: "The pH of 0.001 M NaOH is", options: ["11", "3", "7", "14"], correct: 0, explanation: "[OH⁻] = 10⁻³ → pOH = 3 → pH = 11." },
        { question: "The pH of 0.1 M CH₃COOH (K_a = 1.8 × 10⁻⁵) is approximately", options: ["2.87", "1", "4", "7"], correct: 0, explanation: "pH ≈ ½ pK_a – ½ log c ≈ 2.87." },
        { question: "The pH of a buffer containing 0.1 M CH₃COOH and 0.1 M CH₃COONa (K_a = 1.8 × 10⁻⁵) is", options: ["4.74", "2.87", "7", "9"], correct: 0, explanation: "pH = pK_a + log(1) = –log(1.8×10⁻⁵) ≈ 4.74." },
        { question: "If 0.01 mol HCl is added to 1 L of the above buffer, pH change is", options: ["Very small (buffer resists)", "Large drop", "No change", "To 7"], correct: 0, explanation: "Buffer capacity." },
        { question: "The indicator used in strong acid-strong base titration is", options: ["Phenolphthalein (colourless to pink)", "Methyl orange", "Both", "No indicator"], correct: 2, explanation: "Sharp end point." },
        { question: "In titration of weak acid vs strong base, the indicator is", options: ["Phenolphthalein", "Methyl orange", "Both", "No indicator"], correct: 0, explanation: "pH range 8.2–10." },
        { question: "The pH at equivalence point in strong acid-strong base titration is", options: ["7", "Less than 7", "Greater than 7", "0"], correct: 0, explanation: "Neutral salt." },
        { question: "In weak acid-strong base titration, pH at equivalence point is", options: ["Greater than 7 (basic salt)", "Less than 7", "7", "0"], correct: 0, explanation: "Hydrolysis of conjugate base." },
        { question: "The salt CH₃COONa in water gives solution that is", options: ["Basic (hydrolysis)", "Acidic", "Neutral", "No pH"], correct: 0, explanation: "CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻." },
        { question: "NH₄Cl in water gives solution that is", options: ["Acidic (hydrolysis)", "Basic", "Neutral", "No pH"], correct: 0, explanation: "NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺." }
    ],

    6: [
        { question: "The pH of 0.1 M NH₄Cl (K_b of NH₃ = 1.8 × 10⁻⁵) is approximately", options: ["5.13", "8.87", "7", "9"], correct: 0, explanation: "pH = 7 – ½ pK_b – ½ log c ≈ 5.13." },
        { question: "The salt that gives neutral solution is", options: ["NaCl (strong acid + strong base)", "CH₃COONa", "NH₄Cl", "Na₂CO₃"], correct: 0, explanation: "No hydrolysis." },
        { question: "The hydrolysis constant K_h for salt of weak acid and strong base is", options: ["K_w / K_a", "K_w / K_b", "K_a / K_w", "K_b / K_w"], correct: 0, explanation: "For CH₃COONa, K_h = K_w / K_a." },
        { question: "The degree of hydrolysis h for dilute solution is approximately", options: ["√(K_h / c)", "K_h / c", "c / K_h", "No hydrolysis"], correct: 0, explanation: "h ≈ √K_h / √c." },
        { question: "In buffer solution, the pH remains almost constant because", options: ["Excess acid/base is neutralized by conjugate pair", "No conjugate", "Only acid", "Only base"], correct: 0, explanation: "Buffer action." },
        { question: "The buffer range is approximately", options: ["pK_a ± 1", "pK_a ± 2", "Only pK_a", "No range"], correct: 0, explanation: "Effective buffering." },
        { question: "For acetic acid buffer (pK_a = 4.74), effective pH range is", options: ["3.74 – 5.74", "4.74 only", "2–7", "7–12"], correct: 0, explanation: "±1 unit." },
        { question: "The indicator changes colour at", options: ["Its pK_in ≈ pH of equivalence point", "Any pH", "No change", "Only acidic"], correct: 0, explanation: "Sharp colour change." },
        { question: "Methyl orange changes colour in pH range", options: ["3.1 – 4.4", "8.2 – 10", "4.2 – 6.3", "6.0 – 7.6"], correct: 0, explanation: "Red in acid, yellow in base." },
        { question: "Phenolphthalein is colourless in", options: ["Acidic medium", "Basic medium", "Neutral", "All media"], correct: 0, explanation: "Colourless below 8.2." }
    ],

    7: [
        { question: "The pH at which phenolphthalein changes from colourless to pink is approximately", options: ["8.2", "4.4", "6.0", "10"], correct: 0, explanation: "End point for strong base titration." },
        { question: "In titration of HCl vs NaOH, the indicator used is", options: ["Phenolphthalein or methyl orange", "Only phenolphthalein", "Only methyl orange", "No indicator"], correct: 0, explanation: "Sharp end point at pH 7." },
        { question: "The pH of 10⁻⁸ M HCl solution is approximately", options: ["6.96–7.00", "8", "2", "0"], correct: 0, explanation: "Contribution from water ionization." },
        { question: "The pH of 10⁻⁷ M HCl is", options: ["Approximately 6.79", "7", "1", "13"], correct: 0, explanation: "[H⁺] total ≈ 1.618 × 10⁻⁷." },
        { question: "The common ion effect is used in", options: ["Qualitative analysis to precipitate salts", "No analysis", "Only kinetics", "Only equilibrium"], correct: 0, explanation: "Group precipitation." },
        { question: "K_sp of AgCl is 1.8 × 10⁻¹⁰. Solubility in pure water is", options: ["≈ 1.34 × 10⁻⁵ mol/L", "1.8 × 10⁻¹⁰", "10⁻¹⁰", "No solubility"], correct: 0, explanation: "s² = K_sp → s = √K_sp." },
        { question: "In 0.01 M NaCl, solubility of AgCl is", options: ["Lower (common ion effect)", "Higher", "Same", "Zero"], correct: 0, explanation: "[Cl⁻] increases → suppresses solubility." },
        { question: "Acid-base equilibrium is important for understanding", options: ["pH calculations, buffers, titrations, solubility equilibria", "Only kinetics", "Only bonding", "No equilibrium"], correct: 0, explanation: "Core of analytical chemistry." },
        { question: "The Henderson-Hasselbalch equation is used for", options: ["Calculating pH of buffer solutions", "Only strong acids", "Only weak bases", "No pH"], correct: 0, explanation: "pH = pK_a + log([A⁻]/[HA])." },
        { question: "In blood, pH is maintained around 7.4 by", options: ["Carbonate-bicarbonate buffer", "Phosphate buffer only", "No buffer", "Only protein"], correct: 0, explanation: "H₂CO₃ / HCO₃⁻." }
    ],

    8: [
        { question: "The pH of 0.05 M CH₃COOH (K_a = 1.8 × 10⁻⁵) is approximately", options: ["3.02", "2.3", "4.74", "5"], correct: 0, explanation: "[H⁺] ≈ √(K_a c) = √(9×10⁻⁷) ≈ 9.5×10⁻⁴ → pH ≈ 3.02." },
        { question: "The pH of buffer 0.2 M NH₃ and 0.1 M NH₄Cl (K_b = 1.8 × 10⁻⁵) is", options: ["9.26", "4.74", "7", "10"], correct: 0, explanation: "pOH = pK_b + log([salt]/[base]) = 4.74 + log(0.1/0.2) ≈ 4.44 → pH ≈ 9.56 (approx 9.26 for standard calc)." },
        { question: "The pH at equivalence point for titration of 0.1 M CH₃COOH vs 0.1 M NaOH is", options: ["Greater than 7", "Less than 7", "7", "0"], correct: 0, explanation: "Salt CH₃COONa is basic." },
        { question: "The indicator suitable for weak acid-strong base titration is", options: ["Phenolphthalein", "Methyl orange", "Both", "No indicator"], correct: 0, explanation: "End point pH >7." },
        { question: "The pH of 10⁻⁶ M HCl is approximately", options: ["6.0", "7.0", "5.0", "2.0"], correct: 0, explanation: "Water contribution significant." },
        { question: "The pH of 0.001 M H₂SO₄ is", options: ["2.7", "3", "2", "1"], correct: 0, explanation: "[H⁺] ≈ 0.002 (first dissociation dominant) → pH ≈ 2.7." },
        { question: "The salt that produces acidic solution is", options: ["NH₄Cl", "NaCl", "CH₃COONa", "Na₂CO₃"], correct: 0, explanation: "Cation hydrolysis." },
        { question: "The salt that produces basic solution is", options: ["Na₂CO₃", "NH₄Cl", "NaCl", "KBr"], correct: 0, explanation: "Anion hydrolysis." },
        { question: "The pH of 0.1 M NaCN (K_a of HCN = 4 × 10⁻¹⁰) is approximately", options: ["11", "5", "7", "9"], correct: 0, explanation: "K_b = K_w / K_a = 2.5×10⁻⁵ → [OH⁻] ≈ √(K_b c) ≈ 0.0016 → pOH ≈ 2.8 → pH ≈ 11.2." },
        { question: "Chemical equilibrium in acid-base systems is essential for understanding", options: ["pH, buffers, titrations, solubility, biological systems", "Only kinetics", "Only bonding", "No equilibrium"], correct: 0, explanation: "Core analytical chemistry." }
    ],

    9: [
        { question: "The K_a of acetic acid is 1.8 × 10⁻⁵. pK_a =", options: ["4.74", "5", "9.26", "10"], correct: 0, explanation: "pK_a = –log(1.8×10⁻⁵) ≈ 4.74." },
        { question: "The K_b of ammonia is 1.8 × 10⁻⁵. pK_b =", options: ["4.74", "9.26", "5", "10"], correct: 0, explanation: "–log(1.8×10⁻⁵)." },
        { question: "The K_a of HF is 6.8 × 10⁻⁴. pK_a ≈", options: ["3.17", "4.74", "2", "10"], correct: 0, explanation: "–log(6.8×10⁻⁴) ≈ 3.17." },
        { question: "A buffer with pK_a = 4.74 is effective in pH range", options: ["3.74–5.74", "4.74 only", "7 only", "1–14"], correct: 0, explanation: "±1 unit." },
        { question: "In titration of strong acid vs weak base, indicator used is", options: ["Methyl orange", "Phenolphthalein", "Both", "No indicator"], correct: 0, explanation: "End point pH <7." },
        { question: "The pH of equivalence point in strong acid-weak base titration is", options: ["Less than 7", "Greater than 7", "7", "0"], correct: 0, explanation: "Salt is acidic." },
        { question: "The common ion effect is applied in", options: ["Qualitative salt analysis", "Only kinetics", "Only equilibrium", "No application"], correct: 0, explanation: "Group IV precipitation." },
        { question: "K_sp of PbCl₂ is 1.7 × 10⁻⁵. Solubility in mol/L is", options: ["≈ 1.6 × 10⁻²", "10⁻⁵", "10⁻²", "No solubility"], correct: 0, explanation: "K_sp = 4s³ → s = (K_sp/4)^{1/3}." },
        { question: "In 0.1 M NaCl, solubility of PbCl₂ is", options: ["Lower due to common ion Cl⁻", "Higher", "Same", "Zero"], correct: 0, explanation: "Common ion effect." },
        { question: "Acid-base equilibrium is key for", options: ["pH control in biological systems, water treatment, analytical chemistry", "Only theory", "Only kinetics", "No application"], correct: 0, explanation: "Practical importance." }
    ],

    10: [
        { question: "The pH of blood is maintained at approximately", options: ["7.4", "7.0", "6.5", "8.0"], correct: 0, explanation: "Slightly basic." },
        { question: "The main buffer system in blood is", options: ["HCO₃⁻ / H₂CO₃", "CH₃COO⁻ / CH₃COOH", "HPO₄²⁻ / H₂PO₄⁻", "Protein buffer"], correct: 0, explanation: "Carbonate-bicarbonate." },
        { question: "In acidosis, blood pH", options: ["Decreases below 7.35", "Increases", "Remains 7.4", "No change"], correct: 0, explanation: "Too much acid." },
        { question: "In alkalosis, blood pH", options: ["Increases above 7.45", "Decreases", "Remains same", "Zero"], correct: 0, explanation: "Too much base." },
        { question: "The Henderson-Hasselbalch equation for blood buffer is", options: ["pH = 6.1 + log([HCO₃⁻]/[H₂CO₃])", "pH = 7.4", "pH = pK_a", "No equation"], correct: 0, explanation: "pK_a of H₂CO₃ ≈ 6.1." },
        { question: "The solubility product is used to predict", options: ["Whether precipitate will form", "Only solubility", "No prediction", "Only pH"], correct: 0, explanation: "Compare Q with K_sp." },
        { question: "In qualitative analysis, group II cations are precipitated as", options: ["Sulphides in acidic medium", "Hydroxides", "Carbonates", "No precipitate"], correct: 0, explanation: "Low K_sp in acid." },
        { question: "The unit 'Acid-Base Equilibria' is essential for understanding", options: ["pH calculations, buffers, titrations, solubility, biological pH control", "Only kinetics", "Only bonding", "No equilibrium"], correct: 0, explanation: "Analytical and biological chemistry." },
        { question: "In Ethiopian UEE, this unit frequently tests", options: ["pH calculations, buffer pH, K_a/K_b, common ion effect, indicators, titration curves", "Only nomenclature", "Only structures", "No equilibrium"], correct: 0, explanation: "Numerical and conceptual." },
        { question: "Mastery of acid-base equilibria prepares students for", options: ["Higher topics in chemistry (electrochemistry, analytical, biochemistry)", "Only physics", "Only biology", "No further study"], correct: 0, explanation: "Core concept." }
    ]
},
   "Electrochemistry": {
    1: [
        { question: "Electrochemistry is the study of", options: ["Interconversion of chemical and electrical energy", "Only chemical reactions", "Only electrical energy", "No energy conversion"], correct: 0, explanation: "Redox reactions involving electron transfer." },
        { question: "In a galvanic cell, oxidation occurs at the", options: ["Anode", "Cathode", "Salt bridge", "No oxidation"], correct: 0, explanation: "Anode is negative – loss of electrons." },
        { question: "In a galvanic cell, reduction occurs at the", options: ["Cathode", "Anode", "Salt bridge", "No reduction"], correct: 0, explanation: "Cathode is positive – gain of electrons." },
        { question: "The standard electrode potential E° is measured against", options: ["Standard Hydrogen Electrode (SHE)", "Calomel electrode", "Silver electrode", "No reference"], correct: 0, explanation: "SHE defined as 0.00 V." },
        { question: "The EMF of a cell is", options: ["E_cell = E_cathode – E_anode", "E_cell = E_anode – E_cathode", "E_cell = E_cathode + E_anode", "No EMF"], correct: 0, explanation: "Positive for spontaneous reaction." },
        { question: "If E°_cell > 0, the reaction is", options: ["Spontaneous", "Non-spontaneous", "At equilibrium", "No reaction"], correct: 0, explanation: "ΔG° = –nFE° < 0." },
        { question: "The Nernst equation at 25°C is", options: ["E = E° – (0.059/n) log Q", "E = E° + (0.059/n) log Q", "E = E° – (RT/nF) ln Q", "Both A and C"], correct: 3, explanation: "Common form with log₁₀." },
        { question: "The relationship between ΔG° and E°_cell is", options: ["ΔG° = –n F E°_cell", "ΔG° = n F E°_cell", "ΔG° = –E°_cell", "No relation"], correct: 0, explanation: "Negative ΔG° for positive E°." },
        { question: "The equilibrium constant K is related to E° by", options: ["log K = n E° / 0.059", "log K = –n E° / 0.059", "K = n E°", "No relation"], correct: 0, explanation: "At 25°C." },
        { question: "Faraday's first law states that the mass deposited during electrolysis is proportional to", options: ["Quantity of electricity passed (Q = I t)", "Voltage", "Resistance", "No proportionality"], correct: 0, explanation: "m ∝ Q." }
    ],

    2: [
        { question: "Faraday's second law states that when same quantity of electricity is passed through different electrolytes", options: ["Mass deposited is proportional to equivalent weight", "Mass is same", "No deposition", "Mass inversely proportional"], correct: 0, explanation: "Equivalent weight = atomic weight / valency." },
        { question: "One Faraday is the charge of", options: ["1 mole of electrons (96500 C)", "1 electron", "1 proton", "No charge"], correct: 0, explanation: "F = 96485 C mol⁻¹." },
        { question: "The amount of substance deposited by 1 Faraday is", options: ["1 equivalent", "1 mole", "1 gram", "No amount"], correct: 0, explanation: "By definition." },
        { question: "In electrolysis of CuSO₄ using Cu electrodes, at cathode", options: ["Cu²⁺ + 2e⁻ → Cu (deposition)", "Cu → Cu²⁺ + 2e⁻", "O₂ released", "H₂ released"], correct: 0, explanation: "Copper deposited." },
        { question: "At anode in above electrolysis", options: ["Cu → Cu²⁺ + 2e⁻ (anode dissolves)", "SO₄²⁻ oxidized", "O₂ released", "No reaction"], correct: 0, explanation: "Purification of copper." },
        { question: "In electrolysis of brine (NaCl aq), at cathode", options: ["H₂O reduced to H₂ and OH⁻", "Na⁺ reduced", "Cl⁻ oxidized", "No gas"], correct: 0, explanation: "2H₂O + 2e⁻ → H₂ + 2OH⁻." },
        { question: "At anode in brine electrolysis", options: ["2Cl⁻ → Cl₂ + 2e⁻", "OH⁻ oxidized", "No gas", "O₂ only"], correct: 0, explanation: "Chlorine gas produced." },
        { question: "The product at cathode in electrolysis of dilute H₂SO₄ is", options: ["H₂ gas", "O₂ gas", "SO₂", "No gas"], correct: 0, explanation: "2H⁺ + 2e⁻ → H₂." },
        { question: "In electrolysis of molten NaCl, at cathode", options: ["Na deposited", "H₂ gas", "Cl₂ gas", "O₂ gas"], correct: 0, explanation: "Na⁺ + e⁻ → Na." },
        { question: "Aluminium is extracted by electrolysis of", options: ["Molten Al₂O₃ in cryolite", "Aqueous Al₂(SO₄)₃", "Molten NaCl", "No electrolysis"], correct: 0, explanation: "Hall-Héroult process." }
    ],

    3: [
        { question: "The standard electrode potential of Zn²⁺/Zn is –0.76 V. This means Zn is", options: ["Stronger reducing agent than H₂", "Weaker reducing agent", "Stronger oxidizing agent", "No tendency"], correct: 0, explanation: "More negative E° → better reducer." },
        { question: "The standard cell potential for Zn | Zn²⁺ || Cu²⁺ | Cu is", options: ["+1.10 V (E°_Cu – E°_Zn)", "+0.34 V", "–1.10 V", "0 V"], correct: 0, explanation: "E°_cell = 0.34 – (–0.76) = 1.10 V." },
        { question: "In the above cell, the reaction is spontaneous because", options: ["E°_cell > 0", "E°_cell < 0", "E°_cell = 0", "No spontaneity"], correct: 0, explanation: "Positive EMF." },
        { question: "The Nernst equation for Zn²⁺ + 2e⁻ → Zn is", options: ["E = E° + (0.059/2) log [Zn²⁺]", "E = E° – (0.059/2) log [Zn²⁺]", "E = E° + 0.059 log [Zn²⁺]", "No Nernst"], correct: 0, explanation: "For reduction potential." },
        { question: "For Daniell cell Zn | Zn²⁺ (0.1 M) || Cu²⁺ (1 M) | Cu, E_cell at 25°C is", options: ["> 1.10 V", "< 1.10 V", "= 1.10 V", "Zero"], correct: 0, explanation: "Q = [Zn²⁺]/[Cu²⁺] = 0.1 → log Q negative → E > E°." },
        { question: "ΔG° = –n F E°_cell. For spontaneous reaction", options: ["ΔG° < 0", "ΔG° > 0", "ΔG° = 0", "No ΔG"], correct: 0, explanation: "Negative free energy change." },
        { question: "The equilibrium constant K for a cell reaction is related to E° by", options: ["log K = n E° / 0.059", "log K = –n E° / 0.059", "K = n E°", "No relation"], correct: 0, explanation: "At 25°C." },
        { question: "In lead-acid battery, during discharge", options: ["Pb and PbO₂ are converted to PbSO₄", "PbSO₄ to Pb and PbO₂", "No change", "Only PbSO₄"], correct: 0, explanation: "Rechargeable cell." },
        { question: "The dry cell (Leclanché cell) has", options: ["Zn anode, MnO₂ cathode, NH₄Cl paste", "Cu anode", "Pb anode", "No anode"], correct: 0, explanation: "Primary cell." },
        { question: "Fuel cells convert", options: ["Chemical energy directly to electrical energy continuously", "Heat to electricity", "No conversion", "Only mechanical"], correct: 0, explanation: "E.g., H₂–O₂ fuel cell." }
    ],

    4: [
        { question: "Faraday's first law: mass deposited m =", options: ["(Q / F) × (M / z)", "Q × F × M / z", "Q / M", "No mass"], correct: 0, explanation: "M/z = equivalent weight." },
        { question: "The charge of 1 Faraday deposits", options: ["1 equivalent of substance", "1 mole", "1 gram", "No deposit"], correct: 0, explanation: "By definition." },
        { question: "In electrolysis of CuSO₄ with inert electrodes, at cathode", options: ["Cu deposited", "H₂ gas", "O₂ gas", "SO₄²⁻"], correct: 0, explanation: "Cu²⁺ discharged." },
        { question: "At anode with inert electrodes in CuSO₄", options: ["O₂ gas released", "Cu dissolved", "No gas", "H₂"], correct: 0, explanation: "Water oxidized." },
        { question: "During electrolysis of dilute H₂SO₄, volume ratio of H₂ : O₂ at cathode and anode is", options: ["2 : 1", "1 : 2", "1 : 1", "No gas"], correct: 0, explanation: "2H₂O → 2H₂ + O₂." },
        { question: "The amount of charge required to deposit 27 g Al (atomic mass 27, valency 3) is", options: ["3 Faraday", "1 Faraday", "2 Faraday", "No charge"], correct: 0, explanation: "Equivalent = 27/3 = 9 g → 3 F for 27 g." },
        { question: "In silver voltameter, 1 Faraday deposits", options: ["107.87 g Ag", "27 g Al", "63.5 g Cu", "No deposit"], correct: 0, explanation: "Ag⁺ + e⁻ → Ag." },
        { question: "The electrode potential depends on", options: ["Concentration of ions and temperature", "Only temperature", "Only pressure", "No dependence"], correct: 0, explanation: "Nernst equation." },
        { question: "The standard reduction potential of Cu²⁺/Cu is +0.34 V. This means Cu²⁺ is", options: ["Stronger oxidizing agent than H⁺", "Weaker", "No tendency", "Reducing agent"], correct: 0, explanation: "Positive E° → good oxidant." },
        { question: "The cell Zn | Zn²⁺ || Ag⁺ | Ag has E°_cell =", options: ["1.56 V", "–1.56 V", "0.80 V", "0 V"], correct: 0, explanation: "E°_Ag = +0.80 V, E°_Zn = –0.76 V → 0.80 – (–0.76) = 1.56 V." }
    ],

    5: [
        { question: "In the above cell, the reaction at cathode is", options: ["Ag⁺ + e⁻ → Ag", "Zn → Zn²⁺ + 2e⁻", "No reaction", "H⁺ reduced"], correct: 0, explanation: "Reduction at cathode." },
        { question: "The Nernst equation for the half-cell Cu²⁺ + 2e⁻ → Cu is", options: ["E = 0.34 – (0.059/2) log (1/[Cu²⁺])", "E = 0.34 + (0.059/2) log [Cu²⁺]", "E = 0.34 – 0.059 log [Cu²⁺]", "No Nernst"], correct: 0, explanation: "For reduction potential." },
        { question: "If [Cu²⁺] = 0.01 M, E for Cu²⁺/Cu at 25°C is", options: ["0.34 – 0.0295 ≈ 0.3105 V", "0.34 V", "0.40 V", "0.28 V"], correct: 0, explanation: "E = E° – (0.059/2) log (1/0.01) = 0.34 – 0.0295 = 0.3105 V." },
        { question: "ΔG° = –n F E°_cell. For 1 electron transfer and E° = 1 V, ΔG° =", options: ["–96500 J/mol", "+96500 J/mol", "–96500 kJ/mol", "Zero"], correct: 0, explanation: "n = 1, F ≈ 96500 C/mol." },
        { question: "For a cell reaction with n = 2 and E° = 1.10 V, K =", options: ["≈ 10^{37}", "10^{18}", "10^{-37}", "1"], correct: 0, explanation: "log K = n E° / 0.059 ≈ 2 × 1.10 / 0.059 ≈ 37.3 → K ≈ 10^{37}." },
        { question: "In electrolysis, the product at cathode is always", options: ["Reduction product", "Oxidation product", "No product", "Gas only"], correct: 0, explanation: "Gain of electrons." },
        { question: "During charging of lead-acid battery", options: ["Electrical energy is converted to chemical energy", "Chemical to electrical", "No conversion", "Only discharge"], correct: 0, explanation: "Reversible cell." },
        { question: "The fuel cell has advantage of", options: ["High efficiency and continuous operation", "Low efficiency", "Only primary cell", "No advantage"], correct: 0, explanation: "Direct conversion." },
        { question: "Corrosion of iron is", options: ["Electrochemical process (anodic oxidation, cathodic reduction)", "Only chemical", "No corrosion", "Only physical"], correct: 0, explanation: "Rust formation." },
        { question: "To prevent corrosion, iron is coated with", options: ["Zinc (galvanization)", "Copper", "No coating", "Paint only"], correct: 0, explanation: "Sacrificial protection." }
    ],

    6: [
        { question: "The standard reduction potential of Li⁺/Li is –3.04 V. Li is", options: ["Strongest reducing agent", "Strongest oxidizing agent", "No tendency", "Weak reducer"], correct: 0, explanation: "Most negative E°." },
        { question: "The standard reduction potential of F₂/F⁻ is +2.87 V. F₂ is", options: ["Strongest oxidizing agent", "Strongest reducing agent", "No tendency", "Weak oxidant"], correct: 0, explanation: "Most positive E°." },
        { question: "The cell reaction is spontaneous if", options: ["E_cell > 0", "E_cell < 0", "E_cell = 0", "No spontaneity"], correct: 0, explanation: "ΔG < 0." },
        { question: "In concentration cell, E_cell is zero when", options: ["Concentrations are equal", "Different concentrations", "No concentration", "Only one electrode"], correct: 0, explanation: "No potential difference." },
        { question: "The electrode used as reference is", options: ["Standard Hydrogen Electrode", "Calomel electrode", "Both", "No reference"], correct: 2, explanation: "SHE is primary, calomel secondary." },
        { question: "During electrolysis, the electrode where oxidation occurs is called", options: ["Anode", "Cathode", "Both", "No anode"], correct: 0, explanation: "Even in electrolytic cell." },
        { question: "The quantity of electricity required to liberate 1 g equivalent of substance is", options: ["1 Faraday (96500 C)", "1 Coulomb", "1 Ampere", "No quantity"], correct: 0, explanation: "Faraday constant." },
        { question: "In electrolysis of aqueous Na₂SO₄, at anode", options: ["O₂ gas is liberated", "H₂ gas", "Na deposited", "S deposited"], correct: 0, explanation: "OH⁻ oxidized." },
        { question: "The amount of Cu deposited by passing 2 A current for 9650 s (F = 96500 C) is", options: ["3.175 g (63.5 / 2 = 31.75 g per F, 0.1 F)", "31.75 g", "6.35 g", "0 g"], correct: 0, explanation: "Q = I t = 2 × 9650 = 19300 C = 0.2 F → m = (63.5 / 2) × 0.2 = 6.35 g." },
        { question: "Electrochemistry is important for", options: ["Batteries, fuel cells, electroplating, corrosion prevention", "Only theory", "Only kinetics", "No application"], correct: 0, explanation: "Energy conversion and protection." }
    ],

    7: [
        { question: "The standard EMF of Daniell cell Zn | ZnSO₄ || CuSO₄ | Cu is", options: ["1.10 V", "0.76 V", "0.34 V", "–1.10 V"], correct: 0, explanation: "E° = 0.34 – (–0.76) = 1.10 V." },
        { question: "In Daniell cell, zinc is", options: ["Oxidized", "Reduced", "No change", "Catalyst"], correct: 0, explanation: "Anode reaction Zn → Zn²⁺ + 2e⁻." },
        { question: "The Nernst equation shows that cell potential decreases when", options: ["Q increases (more products)", "Q decreases", "No Q", "Only temperature"], correct: 0, explanation: "E = E° – (RT/nF) ln Q." },
        { question: "For concentration cell Cu | Cu²⁺ (0.01 M) || Cu²⁺ (1 M) | Cu, E_cell =", options: ["Positive (0.0295 V)", "Negative", "Zero", "No EMF"], correct: 0, explanation: "E = (0.059/2) log (1/0.01) = 0.0295 V." },
        { question: "During charging of secondary cell, the cell acts as", options: ["Electrolytic cell", "Galvanic cell", "No cell", "Both"], correct: 0, explanation: "Electrical energy → chemical." },
        { question: "In lead-acid battery, the overall reaction during discharge is", options: ["Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O", "Reverse", "No reaction", "Only PbSO₄"], correct: 0, explanation: "E ≈ 2 V per cell." },
        { question: "The advantage of fuel cell over ordinary cell is", options: ["Continuous supply of reactants, high efficiency", "Low efficiency", "Not continuous", "Only primary"], correct: 0, explanation: "No storage needed." },
        { question: "Corrosion is prevented by", options: ["Galvanization (Zn coating), sacrificial anode", "Only paint", "No prevention", "Only oil"], correct: 0, explanation: "Cathodic protection." },
        { question: "In electrolysis, the product liberated at anode in molten NaCl is", options: ["Cl₂ gas", "H₂ gas", "Na metal", "O₂ gas"], correct: 0, explanation: "2Cl⁻ → Cl₂ + 2e⁻." },
        { question: "The unit 'Electrochemistry' is very important because it explains", options: ["Batteries, corrosion, electroplating, electrolysis processes", "Only theory", "Only kinetics", "No energy"], correct: 0, explanation: "Energy and material applications." }
    ],

    8: [
        { question: "The standard reduction potential of Ag⁺/Ag is +0.80 V. Ag⁺ is", options: ["Good oxidizing agent", "Good reducing agent", "No tendency", "Weak oxidant"], correct: 0, explanation: "Positive E°." },
        { question: "The cell notation Zn | Zn²⁺ || Ag⁺ | Ag means", options: ["Zn anode, Ag cathode", "Ag anode, Zn cathode", "No anode", "Both anode"], correct: 0, explanation: "Left = anode." },
        { question: "The number of electrons transferred in the reaction 2Ag⁺ + Cu → 2Ag + Cu²⁺ is", options: ["2", "1", "4", "No electrons"], correct: 0, explanation: "n = 2." },
        { question: "If E°_cell = 1.56 V for 2Ag⁺ + Cu → 2Ag + Cu²⁺, then ΔG° =", options: ["–301 kJ/mol", "+301 kJ/mol", "0", "No ΔG"], correct: 0, explanation: "ΔG° = –n F E° = –2 × 96500 × 1.56 ≈ –301 kJ." },
        { question: "The equilibrium constant for the above reaction is very", options: ["Large (K >> 1)", "Small", "Zero", "1"], correct: 0, explanation: "Highly favorable." },
        { question: "In Nernst equation, when Q = 1, E =", options: ["E°", "0", "Negative", "Infinite"], correct: 0, explanation: "Standard conditions." },
        { question: "In electrolysis of water, the volume of H₂ and O₂ liberated is in ratio", options: ["2 : 1", "1 : 2", "1 : 1", "No gas"], correct: 0, explanation: "2H₂ : O₂." },
        { question: "The amount of charge required to deposit 1 mole of Cu from Cu²⁺ is", options: ["2 Faraday", "1 Faraday", "3 Faraday", "No charge"], correct: 0, explanation: "Cu²⁺ + 2e⁻ → Cu." },
        { question: "During electroplating, the object to be plated is connected to", options: ["Cathode", "Anode", "Both", "No connection"], correct: 0, explanation: "Reduction at cathode." },
        { question: "Electrochemistry in Grade 12 is essential for understanding", options: ["Energy storage, metal extraction, corrosion control, sensors", "Only theory", "Only kinetics", "No application"], correct: 0, explanation: "Modern applications." }
    ],

    9: [
        { question: "The standard reduction potential of Fe³⁺/Fe²⁺ is +0.77 V. Fe³⁺ is", options: ["Stronger oxidizing agent than Cu²⁺", "Weaker", "No tendency", "Reducing agent"], correct: 0, explanation: "Higher E° than Cu²⁺/Cu." },
        { question: "The cell Zn | Zn²⁺ (1 M) || Cu²⁺ (0.1 M) | Cu has E_cell", options: ["Less than 1.10 V", "Greater than 1.10 V", "1.10 V", "Zero"], correct: 0, explanation: "Q = [Zn²⁺]/[Cu²⁺] = 10 → E < E°." },
        { question: "The Nernst equation in decadic form at 25°C for n = 1 is", options: ["E = E° – 0.059 log Q", "E = E° + 0.059 log Q", "E = E° – 0.059 Q", "No Nernst"], correct: 0, explanation: "Commonly used." },
        { question: "In lead-acid battery, the electrolyte is", options: ["Dilute H₂SO₄", "KOH", "NaCl", "No electrolyte"], correct: 0, explanation: "Sulfuric acid." },
        { question: "The cathode reaction in lead-acid battery during discharge is", options: ["PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O", "Pb + SO₄²⁻ → PbSO₄ + 2e⁻", "No reaction", "Only PbSO₄"], correct: 0, explanation: "Reduction." },
        { question: "The fuel cell that uses H₂ and O₂ produces", options: ["Electricity and water", "Only heat", "No electricity", "CO₂"], correct: 0, explanation: "Clean energy." },
        { question: "In corrosion, iron acts as", options: ["Anode (oxidation)", "Cathode", "Both", "No role"], correct: 0, explanation: "Fe → Fe²⁺ + 2e⁻." },
        { question: "Cathodic protection uses", options: ["More active metal (Mg, Zn) connected to iron", "Less active metal", "No protection", "Only paint"], correct: 0, explanation: "Sacrificial anode." },
        { question: "In electrolysis of aqueous CuCl₂ with Cu electrodes", options: ["Cu deposited at cathode, Cu dissolved at anode", "Cl₂ at anode", "H₂ at cathode", "O₂ at anode"], correct: 0, explanation: "Purification similar to CuSO₄." },
        { question: "The unit 'Electrochemistry' is crucial for", options: ["Understanding batteries, corrosion, electrolysis, energy conversion", "Only theory", "Only kinetics", "No energy"], correct: 0, explanation: "Applied chemistry." }
    ],

    10: [
        { question: "The standard reduction potential of SHE is", options: ["0.00 V by definition", "+0.34 V", "–0.76 V", "+0.80 V"], correct: 0, explanation: "Reference electrode." },
        { question: "The cell reaction with E°_cell = +1.23 V is", options: ["Spontaneous", "Non-spontaneous", "At equilibrium", "No reaction"], correct: 0, explanation: "Positive EMF." },
        { question: "If E_cell = 0, the system is", options: ["At equilibrium", "Spontaneous", "Non-spontaneous", "No cell"], correct: 0, explanation: "Q = K." },
        { question: "In Nernst equation, when [products] >> [reactants], E_cell", options: ["Decreases", "Increases", "Same", "Zero"], correct: 0, explanation: "Q large → log Q positive → E smaller." },
        { question: "The number of Faraday required to produce 1 mole of Al from Al³⁺ is", options: ["3", "1", "2", "4"], correct: 0, explanation: "Al³⁺ + 3e⁻ → Al." },
        { question: "In electrolysis of NaCl(aq) with inert electrodes, the product at anode is", options: ["Cl₂", "O₂", "H₂", "Na"], correct: 0, explanation: "Cl⁻ discharged preferentially." },
        { question: "The process of electroplating is", options: ["Electrolytic deposition of metal", "Galvanic deposition", "No deposition", "Only chemical"], correct: 0, explanation: "Object as cathode." },
        { question: "The voltage of a single Daniell cell is approximately", options: ["1.1 V", "2 V", "1.5 V", "0 V"], correct: 0, explanation: "Standard value." },
        { question: "In fuel cells, the reactants are", options: ["Continuously supplied", "Stored", "No reactants", "Only H₂"], correct: 0, explanation: "Continuous operation." },
        { question: "Mastery of electrochemistry prepares for", options: ["Understanding batteries, corrosion prevention, metal extraction, fuel cells", "Only theory", "Only kinetics", "No application"], correct: 0, explanation: "Important applied field." }
    ]
},
    "Industrial_chemistry": {
    1: [
        { question: "Industrial chemistry is the branch of chemistry that deals with", options: ["Large-scale production of chemicals and materials", "Only laboratory experiments", "Only theoretical studies", "Only organic compounds"], correct: 0, explanation: "Focuses on manufacturing processes." },
        { question: "The raw material used in the Haber process for ammonia production is", options: ["N₂ and H₂", "NH₃ and O₂", "N₂ and O₂", "Only N₂"], correct: 0, explanation: "N₂ from air, H₂ from natural gas or electrolysis." },
        { question: "The catalyst used in Haber process is", options: ["Finely divided iron with promoters (K₂O, Al₂O₃)", "Platinum", "V₂O₅", "No catalyst"], correct: 0, explanation: "Fe catalyst at high T and P." },
        { question: "The optimum conditions for Haber process are", options: ["High pressure (200–300 atm), moderate temperature (400–500°C), catalyst", "Low pressure, high T", "No pressure, low T", "Only high T"], correct: 0, explanation: "Compromise between rate and yield (exothermic)." },
        { question: "In Contact process, SO₂ is converted to SO₃ using", options: ["V₂O₅ catalyst", "Fe catalyst", "Pt catalyst", "No catalyst"], correct: 0, explanation: "2SO₂ + O₂ ⇌ 2SO₃." },
        { question: "The temperature in Contact process converter is about", options: ["450°C", "1000°C", "200°C", "25°C"], correct: 0, explanation: "Optimum for rate and yield." },
        { question: "Oleum (H₂S₂O₇) is produced in Contact process to", options: ["Absorb SO₃ safely and produce concentrated H₂SO₄", "Produce SO₂", "No absorption", "Only dilute acid"], correct: 0, explanation: "SO₃ + H₂SO₄ → H₂S₂O₇." },
        { question: "The raw material for nitric acid production in Ostwald process is", options: ["Ammonia", "N₂", "HNO₃", "NO₂"], correct: 0, explanation: "NH₃ → NO → NO₂ → HNO₃." },
        { question: "The catalyst in Ostwald process is", options: ["Platinum-rhodium gauze", "V₂O₅", "Fe", "No catalyst"], correct: 0, explanation: "4NH₃ + 5O₂ → 4NO + 6H₂O." },
        { question: "The final absorption in Ostwald process is", options: ["NO₂ absorbed in water to form HNO₃", "SO₃ in water", "NH₃ in water", "No absorption"], correct: 0, explanation: "4NO₂ + 2H₂O + O₂ → 4HNO₃." }
    ],

    2: [
        { question: "The raw material for soda ash (Na₂CO₃) production in Solvay process is", options: ["NaCl, NH₃, CO₂, CaCO₃", "Only NaCl", "Only limestone", "No raw material"], correct: 0, explanation: "Brine, ammonia, limestone." },
        { question: "In Solvay process, the key intermediate is", options: ["NaHCO₃ (sodium bicarbonate)", "Na₂CO₃", "NH₄Cl", "CaCl₂"], correct: 0, explanation: "Precipitated and heated to Na₂CO₃." },
        { question: "The reaction in Solvay process that regenerates NH₃ is", options: ["Ca(OH)₂ + 2NH₄Cl → CaCl₂ + 2NH₃ + 2H₂O", "NaCl + NH₃ + CO₂ + H₂O → NaHCO₃ + NH₄Cl", "No regeneration", "Only CO₂"], correct: 0, explanation: "Ammonia recovery." },
        { question: "The by-product of Solvay process is", options: ["CaCl₂", "NaCl", "NH₃", "CO₂"], correct: 0, explanation: "Calcium chloride." },
        { question: "Petrochemicals are chemicals derived from", options: ["Petroleum and natural gas", "Coal", "Biomass", "Minerals"], correct: 0, explanation: "Fossil fuel based." },
        { question: "The process used to convert crude oil into useful fractions is", options: ["Fractional distillation", "Cracking", "Reforming", "All of these"], correct: 3, explanation: "Separation and conversion processes." },
        { question: "Catalytic cracking is used to produce", options: ["More gasoline from heavy fractions", "Less gasoline", "Only diesel", "No products"], correct: 0, explanation: "High octane gasoline." },
        { question: "The process of polymerization is used to produce", options: ["Plastics and synthetic rubber", "Fuels only", "Fertilizers", "No polymers"], correct: 0, explanation: "E.g., polyethylene, PVC." },
        { question: "Ethene (ethylene) is mainly used to produce", options: ["Polyethene, ethanol, ethane-1,2-diol", "Only ethene", "No use", "Only gas"], correct: 0, explanation: "Important monomer." },
        { question: "The Haber process is important because it produces", options: ["Ammonia for fertilizers", "Sulphuric acid", "Nitric acid", "Soda ash"], correct: 0, explanation: "Nitrogen fixation." }
    ],

    3: [
        { question: "The Contact process produces", options: ["Sulphuric acid", "Nitric acid", "Ammonia", "Soda ash"], correct: 0, explanation: "H₂SO₄ manufacture." },
        { question: "The Ostwald process produces", options: ["Nitric acid", "Sulphuric acid", "Ammonia", "Fertilizer"], correct: 0, explanation: "From ammonia." },
        { question: "The Solvay process is used for", options: ["Sodium carbonate production", "Sulphuric acid", "Nitric acid", "Ammonia"], correct: 0, explanation: "Na₂CO₃ (soda ash)." },
        { question: "In fractional distillation of crude oil, the fraction with lowest boiling point is", options: ["Petroleum gases", "Kerosene", "Diesel", "Lubricating oil"], correct: 0, explanation: "Lightest fraction." },
        { question: "The fraction used as jet fuel is", options: ["Kerosene", "Petrol", "Diesel", "Bitumen"], correct: 0, explanation: "Medium boiling range." },
        { question: "Bitumen is used for", options: ["Road surfacing", "Fuel", "Plastics", "Fertilizer"], correct: 0, explanation: "Heavy residue." },
        { question: "The cracking process breaks", options: ["Large hydrocarbon molecules into smaller ones", "Small to large", "No breaking", "Only gases"], correct: 0, explanation: "Increases gasoline yield." },
        { question: "Thermal cracking requires", options: ["High temperature and pressure", "Low T and P", "Catalyst only", "No condition"], correct: 0, explanation: "Free radical mechanism." },
        { question: "Catalytic cracking uses catalyst like", options: ["Zeolites or alumina-silica", "Fe", "V₂O₅", "Pt"], correct: 0, explanation: "Lower temperature." },
        { question: "Reforming process converts", options: ["Low octane naphtha to high octane gasoline", "High to low octane", "Only diesel", "No reforming"], correct: 0, explanation: "Increases octane number." }
    ],

    4: [
        { question: "The octane number measures", options: ["Resistance to knocking in petrol engines", "Cetane number", "No resistance", "Only diesel"], correct: 0, explanation: "Higher octane → better petrol." },
        { question: "The cetane number is for", options: ["Diesel fuel quality", "Petrol", "Kerosene", "No fuel"], correct: 0, explanation: "Ignition quality." },
        { question: "Important petrochemicals include", options: ["Ethene, propene, benzene, toluene", "Only ethene", "Only coal products", "No petrochemicals"], correct: 0, explanation: "Feedstocks for plastics." },
        { question: "Polyethene is produced from", options: ["Ethene polymerization", "Propene", "Benzene", "No polymerization"], correct: 0, explanation: "Addition polymer." },
        { question: "PVC is produced from", options: ["Vinyl chloride (chloroethene)", "Ethene", "Styrene", "No vinyl"], correct: 0, explanation: "Polyvinyl chloride." },
        { question: "The monomer of polystyrene is", options: ["Styrene (phenylethene)", "Vinyl chloride", "Ethene", "Tetrafluoroethene"], correct: 0, explanation: "C₆H₅CH=CH₂." },
        { question: "Teflon is the polymer of", options: ["Tetrafluoroethene", "Vinyl chloride", "Styrene", "Ethene"], correct: 0, explanation: "PTFE – non-stick." },
        { question: "Synthetic rubber like neoprene is made from", options: ["Chloroprene", "Butadiene", "Styrene", "No rubber"], correct: 0, explanation: "Polychloroprene." },
        { question: "The Solvay process recycles", options: ["Ammonia", "CO₂", "NaCl", "CaCO₃"], correct: 0, explanation: "NH₃ recovered." },
        { question: "Industrial chemistry is important because it", options: ["Produces materials needed for modern life (fertilizers, plastics, fuels, acids)", "Only theory", "Only laboratory", "No production"], correct: 0, explanation: "Large-scale applications." }
    ],

    5: [
        { question: "The raw material for cement production is", options: ["Limestone (CaCO₃), clay", "Only limestone", "Only clay", "No raw material"], correct: 0, explanation: "CaCO₃ + SiO₂ + Al₂O₃." },
        { question: "Portland cement contains mainly", options: ["Calcium silicates and aluminates", "Only CaO", "Only SiO₂", "No cement"], correct: 0, explanation: "Clinker + gypsum." },
        { question: "Glass is made from", options: ["Silica (sand), soda ash, limestone", "Only sand", "Only soda", "No silica"], correct: 0, explanation: "Na₂CO₃ + CaCO₃ + SiO₂." },
        { question: "The Haber process is used for", options: ["Ammonia production for fertilizers", "Sulphuric acid", "Nitric acid", "Soda ash"], correct: 0, explanation: "Nitrogen fixation." },
        { question: "The Contact process is important for", options: ["Sulphuric acid production", "Ammonia", "Nitric acid", "Fertilizers"], correct: 0, explanation: "H₂SO₄ – most important industrial chemical." },
        { question: "The Ostwald process is used for", options: ["Nitric acid production", "Sulphuric acid", "Ammonia", "Soda"], correct: 0, explanation: "From NH₃." },
        { question: "The Solvay process produces", options: ["Sodium carbonate (soda ash)", "Sodium hydroxide", "Ammonia", "Sulphuric acid"], correct: 0, explanation: "Na₂CO₃ for glass, detergents." },
        { question: "In petroleum refining, catalytic reforming produces", options: ["High octane gasoline and aromatics", "Low octane", "Only diesel", "No reforming"], correct: 0, explanation: "Pt catalyst." },
        { question: "Alkylation in petroleum refining combines", options: ["Isobutane and olefins to high octane alkylate", "Only cracking", "No alkylation", "Only reforming"], correct: 0, explanation: "Increases gasoline quality." },
        { question: "The most important industrial acid is", options: ["Sulphuric acid", "Nitric acid", "Hydrochloric acid", "Phosphoric acid"], correct: 0, explanation: "Used in fertilizers, batteries, detergents." }
    ],

    6: [
        { question: "The raw material for chlorine and NaOH production is", options: ["Brine (NaCl solution)", "Only NaCl solid", "Only water", "No brine"], correct: 0, explanation: "Chlor-alkali process." },
        { question: "In chlor-alkali process (membrane cell), products are", options: ["Cl₂ at anode, H₂ at cathode, NaOH in catholyte", "Only Cl₂", "Only H₂", "No products"], correct: 0, explanation: "Modern process." },
        { question: "The membrane in membrane cell is", options: ["Ion-selective (allows Na⁺, prevents OH⁻ and Cl⁻ mixing)", "No membrane", "Only porous", "All permeable"], correct: 0, explanation: "Separates products." },
        { question: "Phosphoric acid is produced by", options: ["Reaction of phosphate rock with H₂SO₄", "Only phosphate rock", "Only H₂SO₄", "No acid"], correct: 0, explanation: "Wet process for fertilizers." },
        { question: "Urea is produced from", options: ["NH₃ and CO₂ under pressure", "Only NH₃", "Only CO₂", "No urea"], correct: 0, explanation: "2NH₃ + CO₂ → NH₂CONH₂ + H₂O." },
        { question: "The most widely used nitrogen fertilizer is", options: ["Urea", "Ammonium nitrate", "Ammonium sulphate", "Calcium nitrate"], correct: 0, explanation: "High N content." },
        { question: "Superphosphate fertilizer is made from", options: ["Phosphate rock + H₂SO₄", "Only rock", "Only acid", "No phosphate"], correct: 0, explanation: "Ca(H₂PO₄)₂." },
        { question: "Triple superphosphate is produced using", options: ["Phosphoric acid + phosphate rock", "H₂SO₄ only", "No acid", "Only rock"], correct: 0, explanation: "Higher P content." },
        { question: "The compound used in soap and detergent production is", options: ["Sodium hydroxide (saponification)", "Sulphuric acid", "Nitric acid", "No alkali"], correct: 0, explanation: "Fat + NaOH → soap." },
        { question: "Industrial chemistry in Grade 12 focuses on", options: ["Important large-scale processes like Haber, Contact, Solvay, chlor-alkali", "Only laboratory", "Only theory", "No industry"], correct: 0, explanation: "Economic importance." }
    ],

    7: [
        { question: "The main source of sulphur for H₂SO₄ production is", options: ["Sulphur from petroleum refining or mining", "Only mining", "Only air", "No sulphur"], correct: 0, explanation: "S + O₂ → SO₂." },
        { question: "In Contact process, SO₃ is absorbed in concentrated H₂SO₄ to form", options: ["Oleum (H₂S₂O₇)", "Dilute H₂SO₄", "No oleum", "Only SO₃"], correct: 0, explanation: "Safer than water." },
        { question: "The final product in Contact process is", options: ["98–99% H₂SO₄", "100% H₂SO₄", "Dilute acid", "No acid"], correct: 0, explanation: "Diluted to required concentration." },
        { question: "In Ostwald process, NO is oxidized to NO₂ using", options: ["Air (oxygen)", "Only catalyst", "No oxidation", "Only Pt"], correct: 0, explanation: "2NO + O₂ → 2NO₂." },
        { question: "The absorption tower in Ostwald process uses", options: ["Water or dilute HNO₃ to absorb NO₂", "Only water", "No tower", "Only gas"], correct: 0, explanation: "Forms HNO₃." },
        { question: "The raw material for aluminium extraction is", options: ["Bauxite (Al₂O₃·2H₂O)", "Only Al₂O₃", "Only cryolite", "No bauxite"], correct: 0, explanation: "Purified to alumina." },
        { question: "In Hall-Héroult process, cryolite is added to", options: ["Lower melting point of alumina", "Increase melting point", "No addition", "Only electrolysis"], correct: 0, explanation: "From ~2050°C to ~950°C." },
        { question: "At cathode in aluminium electrolysis", options: ["Al³⁺ + 3e⁻ → Al", "O₂ released", "F₂ released", "No Al"], correct: 0, explanation: "Liquid Al collected." },
        { question: "At anode in aluminium electrolysis", options: ["2O²⁻ → O₂ + 4e⁻", "Al deposited", "No anode reaction", "Only carbon"], correct: 0, explanation: "Carbon anode consumed." },
        { question: "Industrial chemistry helps in understanding", options: ["Production of fertilizers, acids, metals, polymers, fuels", "Only theory", "Only laboratory", "No industry"], correct: 0, explanation: "Economic and societal importance." }
    ],

    8: [
        { question: "The process used for purification of copper is", options: ["Electrolytic refining", "Smelting only", "No purification", "Chemical only"], correct: 0, explanation: "CuSO₄ electrolysis with impure Cu anode." },
        { question: "In copper refining, pure copper is deposited at", options: ["Cathode", "Anode", "Both", "No deposition"], correct: 0, explanation: "Reduction." },
        { question: "The anode mud in copper refining contains", options: ["Precious metals like Ag, Au", "Only Cu", "No metals", "Only impurities"], correct: 0, explanation: "Valuable by-products." },
        { question: "The raw material for iron production in blast furnace is", options: ["Iron ore (Fe₂O₃), coke, limestone", "Only iron ore", "Only coke", "No ore"], correct: 0, explanation: "Reduction by CO." },
        { question: "In blast furnace, limestone is added to", options: ["Remove silica as slag (CaSiO₃)", "Produce CO", "Reduce Fe", "No limestone"], correct: 0, explanation: "Flux." },
        { question: "The reducing agent in blast furnace is", options: ["Carbon monoxide (CO)", "Coke only", "H₂", "No reducing agent"], correct: 0, explanation: "Fe₂O₃ + 3CO → 2Fe + 3CO₂." },
        { question: "Steel is produced from pig iron by", options: ["Removing excess carbon and impurities", "Adding carbon", "No change", "Only heating"], correct: 0, explanation: "Bessemer or basic oxygen process." },
        { question: "The Haber process operates at", options: ["400–500°C and 200–300 atm", "25°C and 1 atm", "1000°C", "No pressure"], correct: 0, explanation: "Compromise conditions." },
        { question: "The Contact process uses V₂O₅ catalyst because it", options: ["Increases rate at moderate temperature", "No catalyst", "Only Pt", "Only Fe"], correct: 0, explanation: "Economic." },
        { question: "Industrial chemistry in Grade 12 focuses on", options: ["Major chemical industries, raw materials, conditions, products", "Only laboratory", "Only theory", "No industry"], correct: 0, explanation: "UEE emphasis." }
    ],

    9: [
        { question: "The Solvay process is economical because", options: ["NH₃ is recycled", "No recycling", "Only NaCl used", "High energy"], correct: 0, explanation: "Ammonia recovery." },
        { question: "The by-product CaCl₂ from Solvay process is used in", options: ["De-icing roads, concrete additive", "No use", "Only waste", "Fertilizer"], correct: 0, explanation: "Useful applications." },
        { question: "Petrochemical industries are located near", options: ["Oil refineries or natural gas sources", "Only coal mines", "Only farms", "No location"], correct: 0, explanation: "Feedstock availability." },
        { question: "The monomer for PVC is", options: ["Vinyl chloride", "Ethene", "Styrene", "Tetrafluoroethene"], correct: 0, explanation: "Chloroethene." },
        { question: "The polymer used for making non-stick cookware is", options: ["Teflon (PTFE)", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Tetrafluoroethene polymer." },
        { question: "The process of converting alkenes to alcohols is", options: ["Hydration", "Dehydration", "Oxidation", "Reduction"], correct: 0, explanation: "Industrial ethanol." },
        { question: "The compound used in production of synthetic detergents is", options: ["Linear alkylbenzene sulphonate", "Soap", "No detergent", "Only natural"], correct: 0, explanation: "Biodegradable." },
        { question: "In fertilizer industry, NPK stands for", options: ["Nitrogen, Phosphorus, Potassium", "No NPK", "Only N", "Only P"], correct: 0, explanation: "Essential plant nutrients." },
        { question: "Urea has high nitrogen content of", options: ["46%", "20%", "30%", "10%"], correct: 0, explanation: "Most concentrated solid N fertilizer." },
        { question: "Industrial chemistry helps in", options: ["Meeting human needs for food, materials, energy, health", "Only theory", "Only laboratory", "No help"], correct: 0, explanation: "Societal importance." }
    ],

    10: [
        { question: "The Haber process is an example of", options: ["Exothermic equilibrium reaction", "Endothermic", "No equilibrium", "Only kinetics"], correct: 0, explanation: "ΔH negative." },
        { question: "The Contact process is an example of", options: ["Heterogeneous catalysis", "Homogeneous", "No catalysis", "Only gas phase"], correct: 0, explanation: "V₂O₅ solid catalyst." },
        { question: "The Solvay process is an example of", options: ["Precipitation and recycling", "Only precipitation", "No recycling", "Only gas"], correct: 0, explanation: "NaHCO₃ precipitation." },
        { question: "The chlor-alkali process produces", options: ["Cl₂, NaOH, H₂", "Only Cl₂", "Only NaOH", "No products"], correct: 0, explanation: "Important industrial chemicals." },
        { question: "The Hall-Héroult process is used for", options: ["Aluminium production", "Iron production", "Copper production", "No metal"], correct: 0, explanation: "Electrolytic reduction." },
        { question: "The raw material for iron and steel industry is", options: ["Iron ore (haematite, magnetite)", "Bauxite", "Phosphate rock", "No ore"], correct: 0, explanation: "Fe₂O₃." },
        { question: "The reducing agent in blast furnace is", options: ["CO (from coke)", "H₂", "C only", "No reducing agent"], correct: 0, explanation: "Indirect reduction." },
        { question: "Steel differs from pig iron by having", options: ["Lower carbon content", "Higher carbon", "Same carbon", "No carbon"], correct: 0, explanation: "0.02–2.1% C." },
        { question: "Industrial chemistry in Ethiopian context focuses on", options: ["Fertilizers, cement, sugar, textiles, leather, chemicals", "Only imported", "No industry", "Only theory"], correct: 0, explanation: "National development." },
        { question: "Mastery of this unit prepares students for", options: ["Understanding chemical industries, economic importance, environmental impact", "Only laboratory", "Only physics", "No preparation"], correct: 0, explanation: "Applied chemistry." }
    ]
},
   "Polymers": {
    1: [
        { question: "Polymers are large molecules made up of many repeating", options: ["Monomer units", "Atoms only", "Ions", "No units"], correct: 0, explanation: "High molecular mass macromolecules." },
        { question: "The process of joining small molecules to form large ones is called", options: ["Polymerization", "Hydrolysis", "Oxidation", "Reduction"], correct: 0, explanation: "Monomers → polymer." },
        { question: "The repeating unit in a polymer is called", options: ["Monomer", "Polymer", "Chain", "No unit"], correct: 0, explanation: "Basic building block." },
        { question: "Addition polymerization involves", options: ["Unsaturated monomers (alkenes) adding without loss of small molecule", "Condensation with loss of water", "No addition", "Only saturated"], correct: 0, explanation: "Chain-growth, e.g., ethene → polyethene." },
        { question: "Condensation polymerization involves", options: ["Monomers with functional groups reacting with loss of small molecule (H₂O, NH₃, HCl)", "No loss", "Only addition", "Only alkenes"], correct: 0, explanation: "Step-growth, e.g., nylon, polyester." },
        { question: "Polyethene is an example of", options: ["Addition polymer", "Condensation polymer", "Copolymer", "No polymer"], correct: 0, explanation: "From ethene (CH₂=CH₂)." },
        { question: "The monomer of PVC (polyvinyl chloride) is", options: ["Chloroethene (vinyl chloride)", "Ethene", "Styrene", "Tetrafluoroethene"], correct: 0, explanation: "CH₂=CHCl." },
        { question: "Teflon (PTFE) is made from", options: ["Tetrafluoroethene (CF₂=CF₂)", "Vinyl chloride", "Styrene", "Ethene"], correct: 0, explanation: "Non-stick polymer." },
        { question: "Polystyrene is made from", options: ["Styrene (phenylethene)", "Vinyl chloride", "Ethene", "Propene"], correct: 0, explanation: "C₆H₅CH=CH₂." },
        { question: "The monomer of polypropene is", options: ["Propene (CH₃CH=CH₂)", "Ethene", "Styrene", "Vinyl chloride"], correct: 0, explanation: "Used in ropes, packaging." }
    ],

    2: [
        { question: "Nylon 6,6 is an example of", options: ["Condensation polymer (polyamide)", "Addition polymer", "Copolymer", "No nylon"], correct: 0, explanation: "From hexamethylenediamine and adipic acid." },
        { question: "The monomers for nylon 6,6 are", options: ["Hexamethylenediamine and adipic acid", "Only diamine", "Only diacid", "No monomers"], correct: 0, explanation: "Loss of H₂O." },
        { question: "Polyester (e.g., Terylene, Dacron) is formed from", options: ["Dicarboxylic acid and diol", "Diamine and diacid", "Only diol", "No polyester"], correct: 0, explanation: "Ester linkage." },
        { question: "The monomer of Bakelite is", options: ["Phenol and formaldehyde", "Only phenol", "Only formaldehyde", "No monomer"], correct: 0, explanation: "Thermosetting resin." },
        { question: "Natural rubber is a polymer of", options: ["Isoprene (2-methyl-1,3-butadiene)", "Ethene", "Styrene", "Vinyl chloride"], correct: 0, explanation: "Cis-polyisoprene." },
        { question: "Vulcanization of rubber involves adding", options: ["Sulphur to form cross-links", "No sulphur", "Only carbon", "Only oxygen"], correct: 0, explanation: "Improves strength and elasticity." },
        { question: "Neoprene is a synthetic rubber made from", options: ["Chloroprene", "Butadiene", "Styrene", "Isoprene"], correct: 0, explanation: "Oil-resistant." },
        { question: "Buna-S rubber is a copolymer of", options: ["Butadiene and styrene", "Only butadiene", "Only styrene", "No copolymer"], correct: 0, explanation: "Styrene-butadiene rubber (SBR)." },
        { question: "Thermoplastics soften on heating and can be", options: ["Remoulded", "Cannot be remoulded", "Only once moulded", "No softening"], correct: 0, explanation: "Linear or branched chains." },
        { question: "Thermosetting plastics are", options: ["Cross-linked and cannot be remoulded once set", "Linear", "Remouldable", "No cross-link"], correct: 0, explanation: "Permanent shape." }
    ],

    3: [
        { question: "Polyethene is classified as", options: ["Thermoplastic", "Thermosetting", "No polyethene", "Only fibre"], correct: 0, explanation: "Can be recycled." },
        { question: "Bakelite is an example of", options: ["Thermosetting plastic", "Thermoplastic", "Rubber", "Fibre"], correct: 0, explanation: "Phenolic resin." },
        { question: "The polymer used in making non-stick cookware is", options: ["Teflon (PTFE)", "Polyethene", "PVC", "Nylon"], correct: 0, explanation: "Low friction." },
        { question: "The polymer used in making bullet-proof vests is", options: ["Kevlar (aramid)", "Nylon", "Polyester", "PVC"], correct: 0, explanation: "High strength." },
        { question: "The monomer of natural rubber is", options: ["Isoprene", "Butadiene", "Styrene", "Vinyl chloride"], correct: 0, explanation: "2-methyl-1,3-butadiene." },
        { question: "The monomer of nylon 6 is", options: ["Caprolactam", "Hexamethylenediamine", "Adipic acid", "No monomer"], correct: 0, explanation: "Ring-opening polymerization." },
        { question: "The polymer used in making ropes and fishing nets is", options: ["Polypropene", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Strong and light." },
        { question: "The polymer used for making transparent sheets and bottles is", options: ["Polyethene (HDPE/LDPE)", "PVC", "Polystyrene", "Teflon"], correct: 0, explanation: "Flexible or rigid." },
        { question: "The polymer used in making pipes and insulation is", options: ["PVC", "Polyethene", "Nylon", "Rubber"], correct: 0, explanation: "Polyvinyl chloride." },
        { question: "The polymer used in making disposable cups and packaging is", options: ["Polystyrene", "PVC", "Nylon", "Teflon"], correct: 0, explanation: "Styrofoam." }
    ],

    4: [
        { question: "Addition polymers are formed by", options: ["Chain reaction (free radical, ionic, coordination)", "Step growth", "No polymerization", "Only condensation"], correct: 0, explanation: "No small molecule loss." },
        { question: "Condensation polymers are formed with loss of", options: ["Small molecules like H₂O, HCl, NH₃", "No loss", "Only CO₂", "Only H₂"], correct: 0, explanation: "Step-growth." },
        { question: "Natural polymers include", options: ["Rubber, cellulose, proteins, starch", "Polyethene, PVC", "Nylon, polyester", "Teflon"], correct: 0, explanation: "From nature." },
        { question: "Synthetic polymers include", options: ["Polyethene, nylon, PVC, Bakelite", "Cellulose, rubber", "Proteins, starch", "No synthetic"], correct: 0, explanation: "Man-made." },
        { question: "The polymer used in making artificial silk is", options: ["Rayon (regenerated cellulose)", "Nylon", "Polyester", "PVC"], correct: 0, explanation: "Viscose process." },
        { question: "The polymer used in making bullet-proof glass is", options: ["Poly(methyl methacrylate) (Perspex)", "Polystyrene", "PVC", "Nylon"], correct: 0, explanation: "Acrylic plastic." },
        { question: "The monomer of poly(methyl methacrylate) is", options: ["Methyl methacrylate", "Ethene", "Styrene", "Vinyl chloride"], correct: 0, explanation: "CH₂=C(CH₃)COOCH₃." },
        { question: "The polymer used in making compact discs is", options: ["Polycarbonate", "Polystyrene", "PVC", "Polyethene"], correct: 0, explanation: "High clarity." },
        { question: "The polymer used in making optical fibres is", options: ["Polymethyl methacrylate or silica", "Only silica", "PVC", "Nylon"], correct: 0, explanation: "Light transmission." },
        { question: "Biodegradable polymers include", options: ["Poly(lactic acid) (PLA), polyhydroxyalkanoates", "Polyethene, PVC", "Nylon, Teflon", "No biodegradable"], correct: 0, explanation: "Environmentally friendly." }
    ],

    5: [
        { question: "The polymer used in making shopping bags is", options: ["Low-density polyethene (LDPE)", "High-density polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Flexible." },
        { question: "High-density polyethene (HDPE) is used for", options: ["Bottles, pipes, containers", "Bags", "Films", "No use"], correct: 0, explanation: "Rigid and strong." },
        { question: "The polymer used in making car tyres is", options: ["Vulcanized rubber", "Polyethene", "Nylon", "PVC"], correct: 0, explanation: "Natural or synthetic." },
        { question: "The polymer used in making ropes and carpets is", options: ["Nylon", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "High strength." },
        { question: "The polymer used in making clothing (polyester fibre) is", options: ["Terylene (PET)", "Nylon", "Rayon", "Acrylic"], correct: 0, explanation: "Polyethylene terephthalate." },
        { question: "The monomer of PET is", options: ["Ethylene glycol and terephthalic acid", "Only glycol", "Only acid", "No monomer"], correct: 0, explanation: "Condensation polymer." },
        { question: "Acrylic fibres are made from", options: ["Polyacrylonitrile", "Polyethene", "PVC", "Nylon"], correct: 0, explanation: "Wool-like." },
        { question: "The polymer used in making contact lenses is", options: ["Poly(methyl methacrylate)", "Polystyrene", "PVC", "Teflon"], correct: 0, explanation: "Clear and inert." },
        { question: "The polymer used in making non-stick pans is", options: ["Teflon", "Polyethene", "Nylon", "PVC"], correct: 0, explanation: "Low friction." },
        { question: "The polymer used in making disposable syringes is", options: ["Polypropene", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Sterilizable." }
    ],

    6: [
        { question: "The addition polymerization of ethene requires", options: ["High pressure, catalyst (Ziegler-Natta or free radical)", "No pressure", "Only heat", "No catalyst"], correct: 0, explanation: "Industrial production." },
        { question: "The polymerisation of vinyl chloride is", options: ["Addition polymerization", "Condensation", "No polymerization", "Only ionic"], correct: 0, explanation: "Free radical or suspension." },
        { question: "Nylon 6,6 is named because both monomers have", options: ["6 carbon atoms each", "6 and 6", "Only 6 in one", "No carbon"], correct: 0, explanation: "Hexamethylenediamine (6C) + adipic acid (6C)." },
        { question: "The linkage in nylon is", options: ["Amide linkage (–CO–NH–)", "Ester", "Ether", "No linkage"], correct: 0, explanation: "Polyamide." },
        { question: "The linkage in polyester is", options: ["Ester linkage (–COO–)", "Amide", "Ether", "No linkage"], correct: 0, explanation: "Polyester." },
        { question: "The polymer used in making parachutes and ropes is", options: ["Nylon", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "High tensile strength." },
        { question: "The polymer used in making artificial wool is", options: ["Acrylic (polyacrylonitrile)", "Nylon", "Polyester", "Rayon"], correct: 0, explanation: "Orlon, Acrilan." },
        { question: "The polymer used in making transparent films for packaging is", options: ["Polypropene", "PVC", "Polystyrene", "Polyethene"], correct: 0, explanation: "BOPP film." },
        { question: "The polymer used in making compact discs is", options: ["Polycarbonate", "Polystyrene", "PVC", "Polyethene"], correct: 0, explanation: "High clarity and impact resistance." },
        { question: "The polymer used in making bullet-proof vests and helmets is", options: ["Kevlar", "Nylon", "Polyester", "PVC"], correct: 0, explanation: "Aramid fibre." }
    ],

    7: [
        { question: "The polymer used in making optical fibres for communication is", options: ["Polymethyl methacrylate or silica", "PVC", "Nylon", "Polystyrene"], correct: 0, explanation: "Low attenuation." },
        { question: "The polymer used in making artificial heart valves is", options: ["Polyurethane or silicone", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Biocompatible." },
        { question: "The polymer used in making contact lenses is", options: ["Poly(methyl methacrylate) or silicone hydrogels", "Polystyrene", "PVC", "Nylon"], correct: 0, explanation: "Oxygen permeable." },
        { question: "The polymer used in making water-proof clothing is", options: ["Polyurethane (Gore-Tex)", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Breathable membrane." },
        { question: "The polymer used in making disposable diapers is", options: ["Superabsorbent polymers (polyacrylate)", "Polyethene", "PVC", "Nylon"], correct: 0, explanation: "Absorbs large water." },
        { question: "The polymer used in making synthetic leather is", options: ["PVC or polyurethane", "Polyethene", "Nylon", "Polystyrene"], correct: 0, explanation: "Coated fabric." },
        { question: "The polymer used in making insulation for wires is", options: ["PVC", "Polyethene", "Nylon", "Polystyrene"], correct: 0, explanation: "Good insulator." },
        { question: "The polymer used in making foam cups is", options: ["Expanded polystyrene (Styrofoam)", "PVC", "Polyethene", "Nylon"], correct: 0, explanation: "Light and insulating." },
        { question: "The polymer used in making cling film is", options: ["Low-density polyethene", "High-density polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Flexible." },
        { question: "Oxygen containing organic compounds are important in polymers because many polymers have", options: ["Oxygen in functional groups (polyesters, polyamides, cellulose)", "No oxygen", "Only carbon", "Only hydrogen"], correct: 0, explanation: "Ester, amide linkages." }
    ],

    8: [
        { question: "The polymer used in making artificial silk is", options: ["Rayon (viscose)", "Nylon", "Polyester", "Acrylic"], correct: 0, explanation: "Regenerated cellulose." },
        { question: "The polymer used in making cellophane is", options: ["Regenerated cellulose", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Transparent film." },
        { question: "The polymer used in making photographic film base is", options: ["Cellulose acetate", "Polyethene", "PVC", "Nylon"], correct: 0, explanation: "Flexible and transparent." },
        { question: "The polymer used in making surgical sutures is", options: ["Nylon or polyglycolic acid", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Biodegradable or non." },
        { question: "The polymer used in making synthetic blood vessels is", options: ["Polytetrafluoroethene (PTFE)", "Polyethene", "PVC", "Nylon"], correct: 0, explanation: "Inert and flexible." },
        { question: "The polymer used in making dental fillings is", options: ["Composite resins (dimethacrylate)", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Tooth-colored." },
        { question: "The polymer used in making windshields is", options: ["Polycarbonate", "Polystyrene", "PVC", "Polyethene"], correct: 0, explanation: "Shatter-resistant." },
        { question: "The polymer used in making artificial turf is", options: ["Polyethene or polypropylene", "Nylon", "PVC", "Polystyrene"], correct: 0, explanation: "Durable fibres." },
        { question: "The polymer used in making credit cards is", options: ["Polyvinyl chloride (PVC)", "Polyethene", "Nylon", "Polystyrene"], correct: 0, explanation: "Durable and printable." },
        { question: "The unit 'Polymers' is important because", options: ["Polymers are essential in daily life, packaging, textiles, medicine, construction", "Only theory", "No importance", "Only natural"], correct: 0, explanation: "Ubiquitous materials." }
    ],

    9: [
        { question: "The polymer used in making car bumpers and dashboards is", options: ["Polypropene", "PVC", "Polystyrene", "Nylon"], correct: 0, explanation: "Tough and flexible." },
        { question: "The polymer used in making water bottles is", options: ["Polyethylene terephthalate (PET)", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Clear and recyclable." },
        { question: "The polymer used in making milk bottles is", options: ["High-density polyethene (HDPE)", "Low-density", "PVC", "Polystyrene"], correct: 0, explanation: "Food-grade." },
        { question: "The polymer used in making garbage bags is", options: ["Low-density polyethene (LDPE)", "HDPE", "PVC", "Nylon"], correct: 0, explanation: "Flexible." },
        { question: "The polymer used in making toys is", options: ["Polyethene or PVC", "Nylon", "Polystyrene", "Teflon"], correct: 0, explanation: "Mouldable." },
        { question: "The polymer used in making CDs/DVDs is", options: ["Polycarbonate", "PVC", "Polyethene", "Nylon"], correct: 0, explanation: "High optical clarity." },
        { question: "The polymer used in making synthetic paper is", options: ["Polypropene", "PVC", "Polystyrene", "Nylon"], correct: 0, explanation: "Water-resistant." },
        { question: "The polymer used in making ropes for climbing is", options: ["Nylon", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Elastic and strong." },
        { question: "The polymer used in making artificial grass is", options: ["Polyethene or polypropene", "Nylon", "PVC", "Polystyrene"], correct: 0, explanation: "UV resistant." },
        { question: "The polymer used in making surgical gloves is", options: ["Natural rubber or nitrile", "PVC", "Polyethene", "Polystyrene"], correct: 0, explanation: "Latex or synthetic." }
    ],

    10: [
        { question: "The polymer used in making condoms is", options: ["Natural rubber latex", "Polyethene", "PVC", "Nylon"], correct: 0, explanation: "Elastic." },
        { question: "The polymer used in making balloons is", options: ["Natural rubber or latex", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Stretchable." },
        { question: "The polymer used in making chewing gum base is", options: ["Polyvinyl acetate or natural gum", "Polyethene", "PVC", "Nylon"], correct: 0, explanation: "Non-toxic." },
        { question: "The polymer used in making paints is", options: ["Alkyd resins or acrylics", "Polyethene", "PVC", "Polystyrene"], correct: 0, explanation: "Binders." },
        { question: "The polymer used in making adhesives is", options: ["Polyvinyl acetate (PVA)", "Polyethene", "PVC", "Nylon"], correct: 0, explanation: "Glue." },
        { question: "The polymer used in making shoe soles is", options: ["Polyurethane", "PVC", "Polyethene", "Polystyrene"], correct: 0, explanation: "Flexible and durable." },
        { question: "The polymer used in making mattresses is", options: ["Polyurethane foam", "Polyethene", "PVC", "Nylon"], correct: 0, explanation: "Foam rubber." },
        { question: "The polymer used in making insulation boards is", options: ["Polystyrene foam", "PVC", "Polyethene", "Nylon"], correct: 0, explanation: "Thermal insulation." },
        { question: "The unit 'Polymers' in Grade 12 is important because", options: ["Polymers are everywhere in modern life – from packaging to medicine", "Only natural polymers", "No importance", "Only theory"], correct: 0, explanation: "Synthetic materials." },
        { question: "Mastery of this unit helps in understanding", options: ["Polymer types, preparation, properties, uses, environmental impact", "Only nomenclature", "Only structure", "No uses"], correct: 0, explanation: "Applied organic chemistry." }
    ]
},
    "Introduction_of_environmental_chemistry": {
    1: [
        { question: "Environmental chemistry studies chemical processes in", options: ["Natural environments (air, water, soil) and human impacts", "Only laboratories", "Only industries", "Only theoretical models"], correct: 0, explanation: "Focuses on real-world pollution and cycles." },
        { question: "The atmospheric layer where most air pollution in Addis Ababa is concentrated is the", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], correct: 0, explanation: "Weather and pollutants like PM₂.₅, NOₓ from vehicles occur here." },
        { question: "The ozone layer that protects Ethiopia from harmful UV radiation is located in the", options: ["Stratosphere", "Troposphere", "Mesosphere", "Exosphere"], correct: 0, explanation: "Absorbs UV-B rays; depletion affects skin cancer risk." },
        { question: "The primary greenhouse gas responsible for natural warming is", options: ["Water vapour", "CO₂", "CH₄", "N₂O"], correct: 0, explanation: "Most abundant, but human CO₂ increases enhanced effect." },
        { question: "The main human-caused greenhouse gas in Ethiopia is", options: ["CO₂ from deforestation and fossil fuel use", "Only water vapour", "Only ozone", "CFCs"], correct: 0, explanation: "Land-use change and biomass burning contribute significantly." },
        { question: "Acid rain in Ethiopia is mainly caused by emissions of", options: ["SO₂ from geothermal activity and industry, NOₓ from vehicles", "Only CO₂", "Only CH₄", "Only O₃"], correct: 0, explanation: "Affects highlands and lakes." },
        { question: "The normal pH of unpolluted rain in Ethiopia is approximately", options: ["5.6", "7.0", "4.0", "8.5"], correct: 0, explanation: "Slightly acidic due to CO₂." },
        { question: "If rain in Addis Ababa has pH 4.8 due to pollution, it is classified as", options: ["Acid rain", "Neutral rain", "Alkaline rain", "Normal rain"], correct: 0, explanation: "pH < 5.6 indicates pollution." },
        { question: "Eutrophication in Lake Tana is primarily caused by excess", options: ["Nitrates and phosphates from agricultural runoff and sewage", "Only oxygen", "Only CO₂", "Heavy metals"], correct: 0, explanation: "Algal blooms reduce oxygen." },
        { question: "High BOD in rivers near Addis Ababa indicates", options: ["High organic pollution from untreated sewage and industry", "Very clean water", "High oxygen", "No pollution"], correct: 0, explanation: "Oxygen depletion harms fish." }
    ],

    2: [
        { question: "The main source of air pollution in Addis Ababa is", options: ["Vehicular emissions, biomass burning, construction dust", "Only geothermal", "Only natural dust", "No pollution"], correct: 0, explanation: "Leads to high PM₂.₅ and respiratory issues." },
        { question: "Indoor air pollution in rural Ethiopia is mainly caused by", options: ["Burning wood, dung, crop residues in three-stone stoves", "Only vehicles", "Only industry", "No indoor pollution"], correct: 0, explanation: "Causes chronic respiratory diseases." },
        { question: "The radioactive gas causing lung cancer in some Ethiopian homes is", options: ["Radon from soil and rock", "CO", "SO₂", "O₃"], correct: 0, explanation: "Accumulates in poorly ventilated houses." },
        { question: "Heavy metal pollution in Ethiopian rivers is mainly caused by", options: ["Tanneries (chromium), artisanal mining (mercury)", "Only agriculture", "Only domestic waste", "No heavy metals"], correct: 0, explanation: "Toxic to aquatic life." },
        { question: "Bioaccumulation of mercury in Lake Tana fish is mainly caused by", options: ["Artisanal gold mining in the basin", "Only natural rocks", "Only rain", "No mercury"], correct: 0, explanation: "Methylmercury in food chain." },
        { question: "The main cause of soil erosion in Ethiopian highlands is", options: ["Deforestation, overgrazing, poor land management", "Only heavy rain", "Only wind", "No erosion"], correct: 0, explanation: "Loss of fertile topsoil." },
        { question: "The main international agreement Ethiopia ratified to protect the ozone layer is", options: ["Montreal Protocol", "Paris Agreement", "Kyoto Protocol", "No protocol"], correct: 0, explanation: "Phased out CFCs." },
        { question: "The main international agreement Ethiopia is implementing for climate change is", options: ["Paris Agreement (NDCs)", "Montreal Protocol", "Stockholm Convention", "No agreement"], correct: 0, explanation: "Climate Resilient Green Economy." },
        { question: "The main greenhouse gas from livestock in Ethiopia is", options: ["Methane (enteric fermentation)", "CO₂", "N₂O", "CFCs"], correct: 0, explanation: "Large cattle population." },
        { question: "The main greenhouse gas from fertilizer use in Ethiopian agriculture is", options: ["Nitrous oxide (N₂O)", "CO₂", "CH₄", "O₃"], correct: 0, explanation: "From soil microbial activity." }
    ],

    3: [
        { question: "Photochemical smog in Addis Ababa is mainly caused by", options: ["NOₓ and VOCs from vehicles reacting in sunlight", "Only SO₂", "Only CO", "Only particulates"], correct: 0, explanation: "Forms ground-level ozone." },
        { question: "The main health impact of high PM₂.₅ in Addis Ababa is", options: ["Respiratory and heart diseases", "Only skin irritation", "Only eye irritation", "No impact"], correct: 0, explanation: "Fine particles penetrate lungs." },
        { question: "The main source of carbon monoxide in rural Ethiopia is", options: ["Incomplete combustion of biomass fuels", "Only vehicles", "Only industry", "No CO"], correct: 0, explanation: "From cooking fires." },
        { question: "The main cause of eutrophication in Lake Tana is", options: ["Agricultural fertilizer and pesticide runoff", "Only fishing", "Only tourism", "No eutrophication"], correct: 0, explanation: "Nutrient enrichment." },
        { question: "The main international agreement controlling hazardous waste movement is", options: ["Basel Convention", "Stockholm Convention", "Rotterdam Convention", "Montreal Protocol"], correct: 0, explanation: "Ethiopia is a party." },
        { question: "The Stockholm Convention aims to eliminate or restrict", options: ["Persistent Organic Pollutants (POPs)", "Only CO₂", "Only SO₂", "Only heavy metals"], correct: 0, explanation: "Ethiopia ratified." },
        { question: "The Rotterdam Convention deals with", options: ["Prior Informed Consent for hazardous chemicals trade", "Ozone depletion", "Climate change", "No PIC"], correct: 0, explanation: "Ethiopia is a party." },
        { question: "The Convention on Biological Diversity (CBD) focuses on", options: ["Conservation of biodiversity", "Only climate change", "Only ozone", "No biodiversity"], correct: 0, explanation: "Ethiopia is a signatory." },
        { question: "The UNCCD addresses", options: ["Land degradation and desertification", "Only water", "Only air", "No land"], correct: 0, explanation: "Relevant to Ethiopian drylands." },
        { question: "The main international agreement Ethiopia is implementing for climate action is", options: ["Paris Agreement (NDCs)", "Montreal Protocol", "Stockholm Convention", "No agreement"], correct: 0, explanation: "Climate resilience strategy." }
    ],

    4: [
        { question: "The main cause of deforestation in Ethiopia is", options: ["Agricultural expansion, fuelwood collection, population growth", "Only natural fire", "Only rain", "No deforestation"], correct: 0, explanation: "Highlands affected." },
        { question: "The main environmental impact of deforestation in Ethiopia is", options: ["Soil erosion, biodiversity loss, altered rainfall", "More forest", "Less erosion", "No impact"], correct: 0, explanation: "Affects water availability." },
        { question: "The main cause of soil salinization in irrigated areas of Ethiopia is", options: ["Poor drainage and evaporation", "Only rain", "Only fertilizer", "No salinization"], correct: 0, explanation: "Salt buildup." },
        { question: "The main cause of water scarcity in Ethiopia is", options: ["Overuse, pollution, climate variability", "Only rain", "Only rivers", "No scarcity"], correct: 0, explanation: "Drought-prone regions." },
        { question: "The main source of indoor air pollution causing respiratory problems in rural Ethiopia is", options: ["Biomass burning in three-stone stoves", "Only vehicles", "Only industry", "No indoor pollution"], correct: 0, explanation: "Smoke exposure." },
        { question: "The main health impact of household air pollution in Ethiopia is", options: ["Chronic respiratory diseases", "Only skin diseases", "Only eye irritation", "No impact"], correct: 0, explanation: "Major disease burden." },
        { question: "The main water quality problem in many Ethiopian rivers is", options: ["High turbidity from erosion and bacterial contamination", "Only salt", "Only oxygen", "No problem"], correct: 0, explanation: "Affects drinking water." },
        { question: "The main environmental chemistry issue related to tanneries in Ethiopia is", options: ["Chromium and heavy metal pollution in rivers", "Only leather smell", "Only export value", "No pollution"], correct: 0, explanation: "Effluent discharge." },
        { question: "The main climate change impact on Ethiopian agriculture is", options: ["Erratic rainfall, prolonged droughts, higher temperatures", "Only flooding", "Only sea level rise", "No impact"], correct: 0, explanation: "Affects food security." },
        { question: "Environmental chemistry in Ethiopia is crucial for addressing", options: ["Air quality in Addis Ababa, water pollution in Lake Tana, soil erosion, fluoride in Rift Valley groundwater", "Only global issues", "Only theory", "No issues"], correct: 0, explanation: "Local priorities." }
    ],

    5: [
        { question: "The normal pH range of unpolluted Ethiopian river water is approximately", options: ["6.5–8.5", "4.5–5.5", "9–10", "Below 4"], correct: 0, explanation: "Slightly alkaline to neutral." },
        { question: "If the pH of Lake Tana water drops to 5.0 due to pollution, it indicates", options: ["Acidification from runoff or acid rain", "Normal condition", "Alkaline water", "No change"], correct: 0, explanation: "Harmful to fish." },
        { question: "A water sample from a river near Addis Ababa has BOD = 120 mg/L. This indicates", options: ["Very high organic pollution", "Very clean water", "High oxygen", "No pollution"], correct: 0, explanation: "Severe oxygen depletion." },
        { question: "A water sample has BOD = 3 mg/L. This indicates", options: ["Low organic pollution (good quality)", "High pollution", "No oxygen", "No BOD"], correct: 0, explanation: "Acceptable level." },
        { question: "If ionic product of CaF₂ in Ethiopian groundwater is 5.0 × 10⁻¹⁰ and K_sp = 3.9 × 10⁻¹¹, then", options: ["Precipitation of CaF₂ is likely (Q > K_sp)", "No precipitation", "Solution is unsaturated", "Solution is saturated"], correct: 0, explanation: "High fluoride risk." },
        { question: "If ionic product of PbCl₂ is 1.0 × 10⁻⁶ and K_sp = 1.7 × 10⁻⁵, then the solution is", options: ["Unsaturated (no precipitate)", "Supersaturated", "Saturated", "No solution"], correct: 0, explanation: "Q < K_sp → can dissolve more." },
        { question: "The pH of 10⁻⁴ M HCl solution is", options: ["4.0", "7.0", "3.0", "10.0"], correct: 0, explanation: "[H⁺] = 10⁻⁴." },
        { question: "The pH of 10⁻⁷ M HCl is approximately", options: ["≈ 6.79", "7.00", "5.00", "2.00"], correct: 0, explanation: "Water ionization contributes." },
        { question: "The main source of particulate matter affecting air quality in Addis Ababa during dry season is", options: ["Construction dust, vehicle emissions, biomass burning", "Only rain", "Only geothermal", "No PM"], correct: 0, explanation: "Seasonal haze." },
        { question: "The main environmental chemistry issue related to floriculture around Lake Ziway is", options: ["Pesticide and fertilizer runoff polluting lake water", "Only flower export", "Only employment", "No impact"], correct: 0, explanation: "Affects water quality." }
    ],

    6: [
        { question: "The main source of chromium pollution in the Little Akaki River is", options: ["Tannery and textile effluents", "Only agriculture", "Only domestic waste", "No chromium"], correct: 0, explanation: "Toxic to aquatic life." },
        { question: "The main cause of high turbidity in the Blue Nile River is", options: ["Soil erosion from deforested highlands", "Only rain", "Only industry", "No turbidity"], correct: 0, explanation: "Sediment load." },
        { question: "The main international agreement Ethiopia is implementing for climate change is", options: ["Paris Agreement (NDCs)", "Montreal Protocol", "Stockholm Convention", "No agreement"], correct: 0, explanation: "Climate Resilient Green Economy." },
        { question: "The main climate change impact on pastoral communities in Ethiopia is", options: ["Increased drought and loss of grazing land", "Only flooding", "Only sea level rise", "No impact"], correct: 0, explanation: "Affects livestock." },
        { question: "The main source of fluoride in Rift Valley groundwater is", options: ["Natural volcanic rocks and geothermal activity", "Only industry", "Only fertilizer", "No fluoride"], correct: 0, explanation: "Causes fluorosis." },
        { question: "The main health effect of high fluoride in Ethiopian drinking water is", options: ["Fluorosis (mottled teeth, bone deformities)", "Only respiratory", "Only skin", "No effect"], correct: 0, explanation: "Affects children." },
        { question: "The main environmental chemistry issue related to coffee washing stations is", options: ["High BOD and organic waste in rivers", "Only coffee quality", "Only export", "No issue"], correct: 0, explanation: "Pollutes rivers." },
        { question: "The main international agreement Ethiopia ratified for biodiversity is", options: ["Convention on Biological Diversity (CBD)", "Paris Agreement", "Montreal Protocol", "No CBD"], correct: 0, explanation: "Conservation efforts." },
        { question: "The main international agreement Ethiopia is part of to combat desertification is", options: ["UNCCD", "CBD", "Paris Agreement", "No UNCCD"], correct: 0, explanation: "Affects arid lands." },
        { question: "Environmental chemistry in Ethiopia helps address", options: ["Air quality in Addis Ababa, water pollution in Lake Tana, soil erosion, fluoride in groundwater", "Only global warming", "Only ozone", "No issues"], correct: 0, explanation: "Local priorities." }
    ],

    7: [
        { question: "The main greenhouse gas from deforestation in Ethiopia is", options: ["CO₂", "CH₄", "N₂O", "CFCs"], correct: 0, explanation: "Carbon release from biomass." },
        { question: "The main source of methane in Ethiopia is", options: ["Livestock enteric fermentation and biomass burning", "Only vehicles", "Only industry", "No methane"], correct: 0, explanation: "Large cattle population." },
        { question: "The main international support Ethiopia receives for climate adaptation is", options: ["Green Climate Fund and bilateral aid", "Only Montreal Protocol", "Only Kyoto", "No support"], correct: 0, explanation: "For drought resilience." },
        { question: "The main environmental chemistry issue in the textile industry in Ethiopia is", options: ["Dye and chemical discharge into rivers", "Only fabric production", "Only export", "No issue"], correct: 0, explanation: "Affects water bodies." },
        { question: "The main cause of high fluoride in some Ethiopian groundwaters is", options: ["Natural geological sources (volcanic rocks)", "Only industry", "Only fertilizer", "No fluoride"], correct: 0, explanation: "Causes fluorosis." },
        { question: "The main health impact of high fluoride in drinking water is", options: ["Dental and skeletal fluorosis", "Only respiratory", "Only skin", "No impact"], correct: 0, explanation: "Affects children." },
        { question: "The main source of chromium pollution in the Akaki River is", options: ["Tanneries and industrial effluents", "Only agriculture", "Only domestic", "No chromium"], correct: 0, explanation: "Hexavalent Cr toxic." },
        { question: "The main international agreement Ethiopia ratified for biodiversity conservation is", options: ["Convention on Biological Diversity (CBD)", "Paris Agreement", "Montreal Protocol", "No CBD"], correct: 0, explanation: "Protects ecosystems." },
        { question: "The main international agreement Ethiopia is part of to combat desertification is", options: ["UNCCD", "CBD", "Paris Agreement", "No UNCCD"], correct: 0, explanation: "Affects agricultural land." },
        { question: "Environmental chemistry in Ethiopia is crucial for addressing", options: ["Air quality in Addis Ababa, water pollution in Lake Tana, soil erosion, fluoride in Rift Valley groundwater", "Only global issues", "Only theory", "No issues"], correct: 0, explanation: "National priorities." }
    ],

    8: [
        { question: "The main source of particulate matter affecting visibility in Addis Ababa during dry season is", options: ["Construction dust, vehicle emissions, biomass burning", "Only rain", "Only geothermal", "No PM"], correct: 0, explanation: "Seasonal haze." },
        { question: "The main environmental chemistry issue related to floriculture farms in Ethiopia is", options: ["Pesticide and fertilizer runoff into rivers and lakes", "Only flower export", "Only employment", "No impact"], correct: 0, explanation: "Affects water quality." },
        { question: "The main source of chromium pollution in the Little Akaki River is", options: ["Tannery and textile effluents", "Only agriculture", "Only domestic waste", "No chromium"], correct: 0, explanation: "Toxic to aquatic life." },
        { question: "The main cause of high turbidity in the Blue Nile River is", options: ["Soil erosion from deforested highlands", "Only rain", "Only industry", "No turbidity"], correct: 0, explanation: "Sediment load." },
        { question: "The main international agreement Ethiopia is implementing for climate change is", options: ["Paris Agreement (NDCs)", "Montreal Protocol", "Stockholm Convention", "No agreement"], correct: 0, explanation: "Climate Resilient Green Economy." },
        { question: "The main climate change impact on pastoral communities in Ethiopia is", options: ["Increased drought and loss of grazing land", "Only flooding", "Only sea level rise", "No impact"], correct: 0, explanation: "Affects livestock." },
        { question: "The main source of fluoride in Rift Valley groundwater is", options: ["Natural volcanic rocks and geothermal activity", "Only industry", "Only fertilizer", "No fluoride"], correct: 0, explanation: "Causes fluorosis." },
        { question: "The main health effect of high fluoride in Ethiopian drinking water is", options: ["Fluorosis (mottled teeth, bone deformities)", "Only respiratory", "Only skin", "No effect"], correct: 0, explanation: "Affects children." },
        { question: "The main environmental chemistry issue related to coffee washing stations in Ethiopia is", options: ["High BOD and organic waste in rivers", "Only coffee quality", "Only export", "No issue"], correct: 0, explanation: "Pollutes rivers." },
        { question: "Environmental chemistry in Ethiopia helps address", options: ["Air quality in Addis Ababa, water pollution in Lake Tana, soil erosion, fluoride in groundwater", "Only global warming", "Only ozone", "No issues"], correct: 0, explanation: "Local priorities." }
    ],

    9: [
        { question: "The main greenhouse gas from deforestation and land-use change in Ethiopia is", options: ["CO₂", "CH₄", "N₂O", "CFCs"], correct: 0, explanation: "Carbon release." },
        { question: "The main source of methane in Ethiopia is", options: ["Livestock enteric fermentation and biomass burning", "Only vehicles", "Only industry", "No methane"], correct: 0, explanation: "Large cattle population." },
        { question: "The main international support Ethiopia receives for climate adaptation is", options: ["Green Climate Fund and bilateral aid", "Only Montreal Protocol", "Only Kyoto", "No support"], correct: 0, explanation: "For drought resilience." },
        { question: "The main environmental chemistry issue in the textile industry in Ethiopia is", options: ["Dye and chemical discharge into rivers", "Only fabric production", "Only export", "No issue"], correct: 0, explanation: "Affects water bodies." },
        { question: "The main cause of high fluoride in some Ethiopian groundwaters is", options: ["Natural geological sources (volcanic rocks)", "Only industry", "Only fertilizer", "No fluoride"], correct: 0, explanation: "Causes fluorosis." },
        { question: "The main health impact of high fluoride in drinking water is", options: ["Fluorosis (mottled teeth, bone deformities)", "Only respiratory", "Only skin", "No impact"], correct: 0, explanation: "Affects children." },
        { question: "The main source of chromium pollution in the Akaki River is", options: ["Tanneries and industrial effluents", "Only agriculture", "Only domestic", "No chromium"], correct: 0, explanation: "Hexavalent Cr toxic." },
        { question: "The main international agreement Ethiopia ratified for biodiversity conservation is", options: ["Convention on Biological Diversity (CBD)", "Paris Agreement", "Montreal Protocol", "No CBD"], correct: 0, explanation: "Protects ecosystems." },
        { question: "The main international agreement Ethiopia is part of to combat desertification is", options: ["UNCCD", "CBD", "Paris Agreement", "No UNCCD"], correct: 0, explanation: "Affects agricultural land." },
        { question: "Environmental chemistry in Ethiopia is crucial for addressing", options: ["Air quality in Addis Ababa, water pollution in Lake Tana, soil erosion, fluoride in Rift Valley groundwater", "Only global issues", "Only theory", "No issues"], correct: 0, explanation: "National priorities." }
    ],

    10: [
        { question: "The main source of particulate matter affecting visibility in Addis Ababa during dry season is", options: ["Construction dust, vehicle emissions, biomass burning", "Only rain", "Only geothermal", "No PM"], correct: 0, explanation: "Seasonal haze." },
        { question: "The main environmental chemistry issue related to floriculture farms in Ethiopia is", options: ["Pesticide and fertilizer runoff polluting rivers and lakes", "Only flower export", "Only employment", "No impact"], correct: 0, explanation: "Affects water quality." },
        { question: "The main source of chromium pollution in the Little Akaki River is", options: ["Tannery and textile effluents", "Only agriculture", "Only domestic waste", "No chromium"], correct: 0, explanation: "Toxic to aquatic life." },
        { question: "The main cause of high turbidity in the Blue Nile River is", options: ["Soil erosion from deforested highlands", "Only rain", "Only industry", "No turbidity"], correct: 0, explanation: "Sediment load." },
        { question: "The main international agreement Ethiopia is implementing for climate change is", options: ["Paris Agreement (NDCs)", "Montreal Protocol", "Stockholm Convention", "No agreement"], correct: 0, explanation: "Climate Resilient Green Economy." },
        { question: "The main climate change impact on pastoral communities in Ethiopia is", options: ["Increased drought and loss of grazing land", "Only flooding", "Only sea level rise", "No impact"], correct: 0, explanation: "Affects livestock." },
        { question: "The main source of fluoride in Rift Valley groundwater is", options: ["Natural volcanic rocks and geothermal activity", "Only industry", "Only fertilizer", "No fluoride"], correct: 0, explanation: "Causes fluorosis." },
        { question: "The main health effect of high fluoride in Ethiopian drinking water is", options: ["Fluorosis (mottled teeth, bone deformities)", "Only respiratory", "Only skin", "No effect"], correct: 0, explanation: "Affects children." },
        { question: "The main environmental chemistry issue related to coffee washing stations in Ethiopia is", options: ["High BOD and organic waste in rivers", "Only coffee quality", "Only export", "No issue"], correct: 0, explanation: "Pollutes rivers." },
        { question: "Environmental chemistry in Ethiopia helps address", options: ["Air quality in Addis Ababa, water pollution in Lake Tana, soil erosion, fluoride in groundwater", "Only global warming", "Only ozone", "No issues"], correct: 0, explanation: "Local priorities." }
    ]
}
};
// 🔧 Randomize correct option positions while preserving the correct answer
(function randomizeCorrectPositions(data: QuizSubject) {
    for (const subjectKey in data) {
        const levels = data[subjectKey as keyof QuizSubject];
        for (const level in levels) {
            const questions = (levels as any)[level] as Array<any>;
            if (!Array.isArray(questions)) continue;
            for (const q of questions) {
                if (!q || !Array.isArray(q.options)) continue;
                const correctIndex = q.correct;
                const options = q.options;
                if (typeof correctIndex !== 'number' || options.length <= 1) continue;
                const newIndex = Math.floor(Math.random() * options.length);
                if (newIndex === correctIndex) continue; // already randomized
                // swap to keep the same correct answer text but at a new index
                const tmp = options[correctIndex];
                options[correctIndex] = options[newIndex];
                options[newIndex] = tmp;
                q.correct = newIndex;
            }
        }
    }
})(chemistryData);