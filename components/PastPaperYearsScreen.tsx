
import React from 'react';
import Container from './common/Container';
import Button from './common/Button';
import { pastPapers } from '../data/pastPapersData';

interface PastPaperYearsScreenProps {
    subjectKey: string;
    onSelectYear: (year: string) => void;
    goBack: () => void;
}

const PastPaperYearsScreen: React.FC<PastPaperYearsScreenProps> = ({ subjectKey, onSelectYear, goBack }) => {
    const subject = pastPapers[subjectKey];
    if (!subject) {
        return (
            <Container title="Error" goBack={goBack}>
                <p>Subject not found.</p>
            </Container>
        );
    }

    const availableYears = Object.keys(subject.papers).sort((a, b) => parseInt(b, 10) - parseInt(a, 10));

    return (
        <Container title={`${subject.icon} ${subject.name}`} goBack={goBack}>
            <p className="text-slate-600 dark:text-slate-300 mb-6">{subject.description}</p>

            <div className="space-y-4">
                {availableYears.map(year => {
                    const paper = subject.papers[year];
                    return (
                        <Button
                            key={year}
                            icon="📅"
                            onClick={() => onSelectYear(year)}
                            variant='list'
                        >
                            <div className="flex flex-col text-left">
                                <span className="text-xl font-bold text-slate-800 dark:text-white">{year} Matric Exam</span>
                                <small className="font-normal text-slate-500 dark:text-slate-400 normal-case">{paper.totalQuestions} questions • {paper.duration}</small>
                            </div>
                        </Button>
                    );
                })}
            </div>
        </Container>
    );
};

export default PastPaperYearsScreen;