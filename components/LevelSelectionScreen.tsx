import React from 'react';
import Container from './common/Container';
import Button from './common/Button';
import StarRating from './common/StarRating';
import { subjects } from '../data/quizData';
import { User } from '../types';

interface LevelSelectionScreenProps {
    currentUser: User;
    subjectKey: string;
    unitKey: string;
    onSelectLevel: (level: number) => void;
    goBack: () => void;
}

const LevelSelectionScreen: React.FC<LevelSelectionScreenProps> = ({ currentUser, subjectKey, unitKey, onSelectLevel, goBack }) => {
    const levels = subjects[subjectKey]?.[unitKey] ? Object.keys(subjects[subjectKey][unitKey]) : [];
    const unitTitle = unitKey.replace(/_/g, ' ');

    const getStarRating = (level: number): number => {
        const levelAttempts = currentUser.progress.filter(
            p => p.subject === subjectKey && p.unit === unitKey && p.level === level
        );

        if (levelAttempts.length === 0) {
            return 0;
        }

        const maxScore = Math.max(...levelAttempts.map(p => (p.score / p.total) * 100));

        if (maxScore >= 80) return 3;
        if (maxScore >= 50) return 2;
        if (maxScore > 0) return 1;
        return 0;
    };
    
    const getMaxScore = (level: number): { score: number, total: number } | null => {
        const levelAttempts = currentUser.progress.filter(
            p => p.subject === subjectKey && p.unit === unitKey && p.level === level
        );

        if (levelAttempts.length === 0) {
            return null;
        }

        const bestAttempt = levelAttempts.reduce((best, current) => {
            return (current.score / current.total) > (best.score / best.total) ? current : best;
        });
        
        return { score: bestAttempt.score, total: bestAttempt.total };
    };

    return (
        <Container title={unitTitle} goBack={goBack}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {levels.length > 0 ? (
                    levels.map(levelStr => {
                        const level = parseInt(levelStr, 10);
                        const questions = subjects[subjectKey][unitKey][level];
                        if (questions && questions.length > 0) {
                            const rating = getStarRating(level);
                            const maxScore = getMaxScore(level);
                            return (
                                <Button 
                                    key={level} 
                                    onClick={() => onSelectLevel(level)} 
                                    variant="secondary" 
                                    className="!py-4 flex-col !h-40 !justify-between"
                                >
                                    <div>
                                        <span className="text-sm">Level</span>
                                        <span className="text-3xl font-extrabold">{level}</span>
                                    </div>
                                    <div>
                                        <StarRating rating={rating} />
                                         {maxScore ? (
                                            <p className="text-xs text-white/80 mt-1 font-semibold">{maxScore.score}/{maxScore.total}</p>
                                        ) : (
                                            <p className="text-xs text-white/50 mt-1 font-semibold">&nbsp;</p>
                                        )}
                                    </div>
                                </Button>
                            );
                        }
                        return null;
                    })
                ) : (
                    <p className="text-center text-slate-500 col-span-full">No levels available for this unit.</p>
                )}
            </div>
        </Container>
    );
};

export default LevelSelectionScreen;