
import React from 'react';
import Container from './common/Container';
import Button from './common/Button';
import { subjects } from '../data/quizData';

interface UnitSelectionScreenProps {
    subjectKey: string;
    onSelectUnit: (unit: string) => void;
    goBack: () => void;
}

const unitIcons: Record<string, string> = {
    // Math
    "relations_and_functions": '📈',
    "rational_expressions": '➗',
    "coordinate_geometry": '📏',
    "trigonometry": '📐',
    "statistics": '📊',
    "probability": '🎲',
    "limits_and_continuity": '♾️',
    "matrices_and_determinants": '🔲',
    "sequences_and_series": '🔢',
    "vectors": '🚀', // Changed to Rocket for direction/magnitude
    "linear_programming": '🎯', // Changed to Target for optimization
    "financial_mathematics": '💰',
    "transformations_of_the_plane": '🔄',
    "mathematical_applications_in_business": '💰', // Money bag
    "matrices": '🧮', // Abacus/Grid
    "determinants": '📐',
    "calculus": '📉',
    "introduction_to_calculus": '📉',
    "introduction_to_linear_programming": '🎯',

    // Physics
    "physics_and_human_society": '🌍',
    "motion_in_one_and_two_dimensions": '🏎️',
    "dynamics": '🚀',
    "heat_conduction_and_calorimetry": '🔥',
    "electrostatics_and_electric_circuit": '⚡',
    "nuclear_physics": '☢️',
    "application_of_physics_in_other_fields": '🔭',
    "two_dimensional_motion": '🥎',
    "fluid_mechanics": '🌊',
    "electromagnetism": '🧲',
    "basics_of_electronics": '🔌',

    // Biology
    "cell_biology": '🧬',
    "genetics": '🔬',

    // Chemistry
    "basics": '🧪',
    "atomic_theory": '⚛️',
    "chemical_bonding": '🔗',
    "acid_base": '🍋',
    "electrochemistry": '🔋',

    // Others
    "grammar": '📖',
    "mechanics": '⚙️',
    "government_basics": '🏛️',
    "world_war_1": '⚔️',
    "world_capitals": '🌍',
    "supply_and_demand": '📈',
    "vocabulary": '📚',
    "logical_reasoning": '🧠',
};

// Mapping for Grade and Unit descriptions
const unitDescriptions: Record<string, Record<string, string>> = {
    math: {
        // Grade 11
        "Relations_and_Functions": "Grade 11 • Unit 1",
        "Rational_Expressions": "Grade 11 • Unit 2",
        "Matrices": "Grade 11 • Unit 3",
        "Matrices and Determinants": "Grade 11 • Unit 3 & 4",
        "Determinants": "Grade 11 • Unit 4",
        "Vectors": "Grade 11 • Unit 5",
        "Transformations_of_the_plane": "Grade 11 • Unit 6",
        "Coordinate_Geometry": "Grade 11 • Unit 6 (Transformations)",
        "Statistics": "Grade 11 • Unit 7 / Grade 12 • Unit 3",
        "Probability": "Grade 11 • Unit 8",
        
        // Grade 12
        "Sequences and Series": "Grade 12 • Unit 1",
        "Limits and Continuity": "Grade 12 • Unit 2 (Calculus)",
        "Calculus": "Grade 12 • Unit 2",
        "Introduction to Calculus": "Grade 12 • Unit 2",
        "Linear_Programming": "Grade 12 • Unit 4",
        "Introduction to linear programming": "Grade 12 • Unit 4",
        "Financial_Mathematics": "Grade 12 • Unit 5",
        "Mathematical applications in business": "Grade 12 • Unit 5",
        
        // Others
        "Trigonometry": "Grade 11 & 12 • Supplementary" 
    },
    physics: {
        // Grade 11
        "Physics_and_human_society": "Grade 11 • Unit 1",
        "Vectors": "Grade 11 • Unit 2",
        "Motion_in_one_and_two_dimensions": "Grade 11 • Unit 3",
        "Dynamics": "Grade 11 • Unit 4",
        "Heat_conduction_and_calorimetry": "Grade 11 • Unit 5",
        "Electrostatics_and_electric_circuit": "Grade 11 • Unit 6",
        "Nuclear_physics": "Grade 11 • Unit 7",

        // Grade 12
        "Application_of_physics_in_other_fields": "Grade 12 • Unit 1",
        "Two_dimensional_motion": "Grade 12 • Unit 2",
        "Fluid_mechanics": "Grade 12 • Unit 3",
        "Electromagnetism": "Grade 12 • Unit 4",
        "Basics_of_electronics": "Grade 12 • Unit 5"
    },
    chemistry: {
        "basics": "Grade 11 • Unit 1",
        "atomic_theory": "Grade 11 • Unit 2",
        "chemical_bonding": "Grade 11 • Unit 3",
        "acid_base": "Grade 12 • Unit 1",
        "electrochemistry": "Grade 12 • Unit 2"
    },
    biology: {
        "cell_biology": "Grade 11 • Unit 2",
        "genetics": "Grade 12 • Unit 1"
    },
    english: {
        "grammar": "Grade 11 & 12 • General",
        "vocabulary": "Grade 11 & 12 • General"
    },
    civics: {
        "government_basics": "Grade 11 • Unit 1",
        "international_relations": "Grade 12 • Unit 1"
    },
    history: {
        "ancient_civilizations": "Grade 11 • Unit 1",
        "world_war_1": "Grade 12 • Unit 3"
    },
    geography: {
        "world_capitals": "General Knowledge",
        "physical_geography": "Grade 11 • Unit 1",
        "population_studies": "Grade 12 • Unit 1"
    },
    economics: {
        "supply_and_demand": "Grade 11 • Unit 4",
        "macroeconomics": "Grade 12 • Unit 1"
    },
    sat: {
        "vocabulary": "Standardized Test Prep",
        "advanced_math": "Standardized Test Prep"
    },
    aptitude: {
        "logical_reasoning": "General Aptitude"
    }
};

const UnitSelectionScreen: React.FC<UnitSelectionScreenProps> = ({ subjectKey, onSelectUnit, goBack }) => {
    const units = subjects[subjectKey] ? Object.keys(subjects[subjectKey]) : [];
    const subjectName = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);

    const getDescription = (unitKey: string) => {
        // Try exact match
        if (unitDescriptions[subjectKey] && unitDescriptions[subjectKey][unitKey]) {
            return unitDescriptions[subjectKey][unitKey];
        }
        // Try normalized key match (lowercase)
        const normalizedUnitKey = unitKey.toLowerCase().replace(/ /g, '_');
        const normalizedMap = unitDescriptions[subjectKey] 
            ? Object.fromEntries(Object.entries(unitDescriptions[subjectKey]).map(([k, v]) => [k.toLowerCase().replace(/ /g, '_'), v]))
            : {};
            
        return normalizedMap[normalizedUnitKey] || "General Topic";
    };

    return (
        <Container title={subjectName} goBack={goBack}>
            {units.length > 0 ? (
                units.map(unitKey => {
                    const iconKey = unitKey.toLowerCase().replace(/ /g, '_');
                    const description = getDescription(unitKey);
                    
                    return (
                        <Button 
                            key={unitKey} 
                            icon={unitIcons[iconKey] || '📚'}
                            onClick={() => onSelectUnit(unitKey)}
                            variant="list"
                        >
                            <div className="flex flex-col items-start text-left w-full">
                                <span className="text-xl capitalize font-bold text-slate-800 dark:text-white">
                                    {unitKey.replace(/_/g, ' ')}
                                </span>
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                                    {description}
                                </span>
                            </div>
                        </Button>
                    );
                })
            ) : (
                <div className="text-center p-10 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-100 dark:border-slate-700">
                     <p className="text-slate-500 font-bold">No units available for this subject yet.</p>
                </div>
            )}
        </Container>
    );
};

export default UnitSelectionScreen;
