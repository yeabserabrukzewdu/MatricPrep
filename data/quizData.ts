import { QuizSubject } from '../types';
import { mathData } from './mathData';
import { physicsData } from './physicsData';
import { chemistryData } from './chemistryData';
import { biologyData } from './biologyData';
import { historyData } from './historyData';
import { geographyData } from './geographyData';
import { economicsData } from './economicsData';
import { englishData } from './englishData';

export const subjects: Record<string, QuizSubject> = {
    math: mathData,
    physics: physicsData,
    chemistry: chemistryData,
    biology: biologyData,
    history: historyData,
    geography: geographyData,
    economics: economicsData,
    english: englishData,
    sat: {
        "Vocabulary": { 1: [] }
    },
    aptitude: {
        "Logical_Reasoning": { 1: [] }
    }
};