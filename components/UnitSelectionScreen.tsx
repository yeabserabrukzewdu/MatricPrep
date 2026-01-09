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
    "relations_and_functions": '📉',
    "rational_expressions_and_rational_functions": '➗',
    "matrices": '🔳',
    "determinants_and_their_properties": '🔲',
    "vectors": '➡️',
    "transformations_of_the_plane": '🔄',
    "statistics": '📊',
    "probability": '🎲',
    "sequences_and_series": '♾️',
    "introductions_to_calculus": '📉',
    "statistics_g12": '📈',
    "introduction_to_linear_programming": '🎯',
    "mathematical_applications_in_business": '💸',

    // Physics
    "physics_and_human_society": '🌍',
    "vectors_g11": '🏹',
    "motion_in_one_and_two_dimensions": '🏎️',
    "dynamics": '💥',
    "heat_conduction_and_calorimetry": '🌡️',
    "electrostatics_and_electric_circuit": '🔌',
    "nuclear_physics": '⚛️',
    "application_of_physics_in_other_fields": '🛠️',
    "two_dimensional_motion": '🛸',
    "fluid_mechanics": '💧',
    "electromagnetism": '🧲',
    "basics_of_electronics": '📟',

    // Chemistry
    "atomic_structure_and_periodic_properties": '⚛️',
    "chemical_bonding": '🔗',
    "physical_states_of_matter": '☁️',
    "chemical_kinetics": '⏱️',
    "chemical_equilibrium": '⚖️',
    "oxygen_containing_organic_compounds": '🧪',
    "acid_base_equilibria": '🍋',
    "electrochemistry": '🔋',
    "industrial_chemistry": '🏭',
    "polymers": '🧬',
    "introduction_of_environmental_chemistry": '🌱',

    // Biology
    "biology_and_technology": '🧬',
    "animals": '🦁',
    "enzymes": '⚡',
    "genetics": '🧬',
    "the_human_body_systems": '🩺',
    "population_and_natural_resources": '🌳',
    "application_of_biology": '💊',
    "microorganisms": '🦠',
    "energy_transformation": '☀️',
    "evolution": '🐒',
    "human_body_system": '🫁',
    "climate_change": '🌡️',
    "introduction_of_environmental_chemistry_bio": '🌎',

    // Existing Icons... (Keep History, Geography, Economics, English)
    "environmental_hazards": '☣️',
    "civilization": '🏺',
    "history_historiography_and_human_evolution": '📜',
    "major_spots_of_ancient_world_civilizations": '🏺',
    "formation_of_the_continents": '🌋',
    "theory_of_consumer_behavior_and_demand": '🛍️',
};

const unitDescriptions: Record<string, Record<string, string>> = {
    math: {
        "Relations_and_functions": "Grade 11 • Unit 1",
        "Rational_expressions_and_rational_functions": "Grade 11 • Unit 2",
        "Matrices": "Grade 11 • Unit 3",
        "Determinants_and_their_properties": "Grade 11 • Unit 4",
        "Vectors": "Grade 11 • Unit 5",
        "Transformations_of_the_plane": "Grade 11 • Unit 6",
        "Statistics": "Grade 11 • Unit 7",
        "Probability": "Grade 11 • Unit 8",
        "Sequences_and_series": "Grade 12 • Unit 1",
        "Introductions_to_Calculus": "Grade 12 • Unit 2",
        "Statistics_G12": "Grade 12 • Unit 3",
        "Introduction_to_linear_programming": "Grade 12 • Unit 4",
        "Mathematical_applications_in_business": "Grade 12 • Unit 5"
    },
    physics: {
        "Physics_and_human_society": "Grade 11 • Unit 1",
        "Vectors_G11": "Grade 11 • Unit 2",
        "Motion_in_one_and_two_dimensions": "Grade 11 • Unit 3",
        "Dynamics": "Grade 11 • Unit 4",
        "Heat_conduction_and_calorimetry": "Grade 11 • Unit 5",
        "Electrostatics_and_electric_circuit": "Grade 11 • Unit 6",
        "Nuclear_physics": "Grade 11 • Unit 7",
        "Application_of_physics_in_other_fields": "Grade 12 • Unit 1",
        "Two_dimensional_motion": "Grade 12 • Unit 2",
        "Fluid_mechanics": "Grade 12 • Unit 3",
        "Electromagnetism": "Grade 12 • Unit 4",
        "Basics_of_electronics": "Grade 12 • Unit 5"
    },
    chemistry: {
        "Atomic_structure_and_periodic_properties": "Grade 11 • Unit 1",
        "Chemical_bonding": "Grade 11 • Unit 2",
        "Physical_States_of_matter": "Grade 11 • Unit 3",
        "Chemical_kinetics": "Grade 11 • Unit 4",
        "Chemical_equilibrium": "Grade 11 • Unit 5",
        "Oxygen_containing_organic_compounds": "Grade 11 • Unit 6",
        "Acid_Base_equilibria": "Grade 12 • Unit 1",
        "Electrochemistry": "Grade 12 • Unit 2",
        "Industrial_chemistry": "Grade 12 • Unit 3",
        "Polymers": "Grade 12 • Unit 4",
        "Introduction_of_environmental_chemistry": "Grade 12 • Unit 5"
    },
    biology: {
        "Biology_and_technology": "Grade 11 • Unit 1",
        "Animals": "Grade 11 • Unit 2",
        "Enzymes": "Grade 11 • Unit 3",
        "Genetics": "Grade 11 • Unit 4",
        "The_human_body_systems": "Grade 11 • Unit 5",
        "Population_and_natural_resources": "Grade 11 • Unit 6",
        "Application_of_Biology": "Grade 12 • Unit 1",
        "Microorganisms": "Grade 12 • Unit 2",
        "Energy_transformation": "Grade 12 • Unit 3",
        "Evolution": "Grade 12 • Unit 4",
        "Human_body_System": "Grade 12 • Unit 5",
        "Climate_change": "Grade 12 • Unit 6",
        "Introduction_of_environmental_chemistry_Bio": "Grade 12 • Unit 7"
    },
    history: {
        "History_Historiography_and_Human_Evolution": "Grade 11 • Unit 1",
        "Major_Spots_of_Ancient_World_Civilizations": "Grade 11 • Unit 2",
        "Ethiopia_and_the_Horn_to_the_13th_Century": "Grade 11 • Unit 3",
        "The_Middle_Ages_and_Early_Modern_World": "Grade 11 • Unit 4",
        "Peoples_and_States_of_Africa_to_1500": "Grade 11 • Unit 5",
        "Africa_and_the_Outside_World_1500_1880s": "Grade 11 • Unit 6",
        "States_and_Interactions_in_Ethiopia": "Grade 11 • Unit 7",
        "Political_Social_and_Economic_Processes_in_Ethiopia": "Grade 11 • Unit 8",
        "The_Age_of_Revolutions_1789_to_1815": "Grade 11 • Unit 9",
        "Capitalism_and_Nationalism_1815_to_1914": "Grade 12 • Unit 1",
        "Africa_and_the_Colonial_Experience": "Grade 12 • Unit 2",
        "Social_Economic_and_Political_Developments_in_Ethiopia": "Grade 12 • Unit 3",
        "Society_and_Politics_in_the_Age_of_World_Wars": "Grade 12 • Unit 4",
        "Global_and_Regional_Developments_since_1945": "Grade 12 • Unit 5",
        "Ethiopia_Internal_Developments_and_External_Influences": "Grade 12 • Unit 6",
        "Africa_since_the_1960s": "Grade 12 • Unit 7",
        "Post_1991_Developments_in_Ethiopia": "Grade 12 • Unit 8",
        "Indigenous_Knowledge_Systems_and_Heritages": "Grade 12 • Unit 9"
    },
    geography: {
        "Formation_of_the_Continents": "Grade 11 • Unit 1",
        "Climate_Classification_and_Regions": "Grade 11 • Unit 2",
        "Natural_Resources_and_Conflicts": "Grade 11 • Unit 3",
        "Global_Population_Dynamics": "Grade 11 • Unit 4",
        "Geography_and_Economic_Development": "Grade 11 • Unit 5",
        "Major_Global_Environmental_Changes": "Grade 11 • Unit 6",
        "Geographic_Issues_and_Public_Concerns": "Grade 11 • Unit 7",
        "Geo_spatial_Information_Processing": "Grade 11 • Unit 8",
        "Major_Geological_Processes_Plate_Tectonics": "Grade 12 • Unit 1",
        "Climate_Change": "Grade 12 • Unit 2",
        "Management_of_Conflict_over_Resources": "Grade 12 • Unit 3",
        "Population_Policies_Programs_and_Environment": "Grade 12 • Unit 4",
        "Challenges_of_Economic_Development": "Grade 12 • Unit 5",
        "Solutions_to_Environmental_Problems": "Grade 12 • Unit 6",
        "Contemporary_Global_Geographic_Issues": "Grade 12 • Unit 7",
        "Geographical_Enquiry_and_Map_Making": "Grade 12 • Unit 8"
    },
    economics: {
        "Theory_of_Consumer_Behavior_and_Demand": "Grade 11 • Unit 1",
        "Market_Structure_and_Decision_of_Firms": "Grade 11 • Unit 2",
        "National_Income_Accounting": "Grade 11 • Unit 3",
        "Consumption_Saving_and_Investment": "Grade 11 • Unit 4",
        "Trade_and_Finance": "Grade 11 • Unit 5",
        "Economic_Development": "Grade 11 • Unit 6",
        "Main_Sectors_Policies_and_Strategies_of_Ethiopia": "Grade 11 • Unit 7",
        "Fundamental_Concepts_of_Macroeconomics": "Grade 12 • Unit 1",
        "Aggregate_Demand_and_Supply_Analysis": "Grade 12 • Unit 2",
        "Market_Failure_and_Consumer_Protection": "Grade 12 • Unit 3",
        "Macroeconomic_Policy_Instruments": "Grade 12 • Unit 4",
        "Tax_Theory_and_Practice": "Grade 12 • Unit 5",
        "Poverty_and_Inequality": "Grade 12 • Unit 6",
        "Macroeconomic_Reforms_in_Ethiopia": "Grade 12 • Unit 7",
        "Economy_Environment_and_Climate_Change": "Grade 12 • Unit 8"
    },
    english: {
        "Environmental_Hazards": "Grade 11 • Unit 1",
        "Civilization": "Grade 11 • Unit 2",
        "Causes_of_Road_Traffic_Accidents": "Grade 11 • Unit 3",
        "People_and_Natural_Resources": "Grade 11 • Unit 4",
        "Irrigation": "Grade 11 • Unit 5",
        "Global_Warming": "Grade 11 • Unit 6",
        "Patriotism": "Grade 11 • Unit 7",
        "Efficiency_of_Health_Services": "Grade 11 • Unit 8",
        "Indigenous_Conflict_Resolution": "Grade 11 • Unit 9",
        "Artificial_Intelligence": "Grade 11 • Unit 10",
        "Sustainable_Development": "Grade 12 • Unit 1",
        "Time_Management": "Grade 12 • Unit 2",
        "Evidence_on_Traffic_Accident": "Grade 12 • Unit 3",
        "Natural_Resource_Management": "Grade 12 • Unit 4",
        "Mechanized_Agriculture": "Grade 12 • Unit 5",
        "Green_Economies": "Grade 12 • Unit 6",
        "National_Pride": "Grade 12 • Unit 7",
        "Telemedicine": "Grade 12 • Unit 8",
        "Conflict_Management": "Grade 12 • Unit 9",
        "Robotics": "Grade 12 • Unit 10"
    }
};

const UnitSelectionScreen: React.FC<UnitSelectionScreenProps> = ({ subjectKey, onSelectUnit, goBack }) => {
    const units = subjects[subjectKey] ? Object.keys(subjects[subjectKey]) : [];
    const subjectName = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);

    const getDescription = (unitKey: string) => {
        if (unitDescriptions[subjectKey] && unitDescriptions[subjectKey][unitKey]) {
            return unitDescriptions[subjectKey][unitKey];
        }
        return "General Topic";
    };

    return (
        <Container title={subjectName} goBack={goBack}>
            {units.length > 0 ? (
                units.map(unitKey => {
                    const iconKey = unitKey.toLowerCase().replace(/ /g, '_').replace(/-/g, '_').replace(/,/g, '').replace(/:/g, '');
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