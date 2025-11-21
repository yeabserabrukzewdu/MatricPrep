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
};

const UnitSelectionScreen: React.FC<UnitSelectionScreenProps> = ({ subjectKey, onSelectUnit, goBack }) => {
    const units = subjects[subjectKey] ? Object.keys(subjects[subjectKey]) : [];
    const subjectName = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);

    return (
        <Container title={subjectName} goBack={goBack}>
            {units.length > 0 ? (
                units.map(unitKey => (
                    <Button 
                        key={unitKey} 
                        icon={unitIcons[unitKey.toLowerCase().replace(/ /g, '_')] || '📚'}
                        onClick={() => onSelectUnit(unitKey)}
                        variant="list"
                    >
                        <span className="text-xl capitalize">{unitKey.replace(/_/g, ' ')}</span>
                    </Button>
                ))
            ) : (
                <p className="text-center text-slate-500">No units available for this subject.</p>
            )}
        </Container>
    );
};

export default UnitSelectionScreen;