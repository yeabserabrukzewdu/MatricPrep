
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
    "relations_and_functions": '📈',
    "rational_expressions": '➗',
    "coordinate_geometry": '📏',
    "trigonometry": '📐',
    "statistics": '📊',
    "probability": '🎲',
    "cell_biology": '🧬',
    "basics": '🧪',
    "grammar": '📖',
    "mechanics": '⚙️',
    "government_basics": '🏛️',
    "world_war_1": '⚔️',
    "world_capitals": '🌍',
    "supply_and_demand": '📈',
    "vocabulary": '📚',
    "logical_reasoning": '🧠',
    "limits_and_continuity": '♾️',
    "matrices_and_determinants": '🔲',
    "sequences_and_series": '🔢',
    "vectors": '↗️',
    "linear_programming": '📉',
    "financial_mathematics": '💹',
};

// Mapping for Grade and Unit descriptions
const unitDescriptions: Record<string, Record<string, string>> = {
    math: {
        "Relations_and_Functions": "Grade 11 • Unit 1",
        "Rational_Expressions": "Grade 11 • Unit 2",
        "Coordinate_Geometry": "Grade 11 • Unit 3",
        "Trigonometry": "Grade 11 • Unit 4", // Also covers G12
        "Statistics": "Grade 11 • Unit 5",
        "Probability": "Grade 11 • Unit 6",
        "Matrices and Determinants": "Grade 11 • Unit 7",
        "Vectors": "Grade 11 • Unit 8",
        "Linear_Programming": "Grade 11 • Unit 9",
        "Sequences and Series": "Grade 12 • Unit 1",
        "Limits and Continuity": "Grade 12 • Unit 2",
        "Financial_Mathematics": "Grade 12 • Unit 3",
        "Calculus": "Grade 12 • Unit 4"
    },
    physics: {
        "mechanics": "Grade 11 • Unit 2",
        "vectors": "Grade 11 • Unit 1",
        "thermodynamics": "Grade 12 • Unit 1",
        "electromagnetism": "Grade 12 • Unit 2"
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
