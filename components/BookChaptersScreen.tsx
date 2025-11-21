
import React from 'react';
import Container from './common/Container';
import Button from './common/Button';
import { books } from '../data/booksData';

interface BookChaptersScreenProps {
    subjectKey: string;
    grade: 11 | 12;
    onSelectChapter: (index: number) => void;
    goBack: () => void;
}

const BookChaptersScreen: React.FC<BookChaptersScreenProps> = ({ subjectKey, grade, onSelectChapter, goBack }) => {
    const subject = books[subjectKey];
    const gradeData = subject?.grades[grade];

    if (!gradeData) {
        return (
            <Container title="Error" goBack={goBack}>
                <p>No data found for this grade.</p>
            </Container>
        );
    }

    return (
        <Container title={`Grade ${grade} ${subject.name}`} goBack={goBack}>
            <p className="mb-6 text-slate-600 dark:text-slate-300 font-bold">Table of Contents</p>
            
            <div className="space-y-3">
                {gradeData.chapters.map((chapter, index) => (
                    <Button 
                        key={index}
                        onClick={() => onSelectChapter(index)}
                        variant="list"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                            </div>
                            <span className="text-lg">{chapter.title}</span>
                        </div>
                    </Button>
                ))}
            </div>
            
            {gradeData.chapters.length === 0 && (
                <div className="text-center p-8 text-slate-500">
                    No chapters available yet.
                </div>
            )}
        </Container>
    );
};

export default BookChaptersScreen;
