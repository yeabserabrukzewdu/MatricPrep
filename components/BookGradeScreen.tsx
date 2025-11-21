
import React from 'react';
import Container from './common/Container';
import Button from './common/Button';
import { books } from '../data/booksData';

interface BookGradeScreenProps {
    subjectKey: string;
    onSelectGrade: (grade: 11 | 12) => void;
    goBack: () => void;
}

const BookGradeScreen: React.FC<BookGradeScreenProps> = ({ subjectKey, onSelectGrade, goBack }) => {
    const subject = books[subjectKey];

    if (!subject) return null;

    const handleGradeClick = (grade: 11 | 12) => {
        const gradeData = subject.grades[grade];
        if (gradeData?.pdfUrl) {
            // Open the PDF in a new tab
            window.open(gradeData.pdfUrl, '_blank');
        } else {
            // Fallback if no URL is set yet
            alert(`The Grade ${grade} textbook PDF is coming soon! Please check back later.`);
        }
    };

    return (
        <Container title={subject.name} goBack={goBack}>
            <div className="text-center mb-8">
                <span className="text-6xl mb-4 block">{subject.icon}</span>
                <p className="text-slate-600 dark:text-slate-300 text-lg">Select your grade to view the textbook PDF.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <Button 
                    onClick={() => handleGradeClick(11)} 
                    variant="secondary"
                    className="!h-32 flex-col !items-center !justify-center text-center"
                >
                    <span className="text-sm font-normal uppercase tracking-wider opacity-80">Grade</span>
                    <span className="text-5xl font-extrabold">11</span>
                    <span className="text-xs font-normal mt-2 opacity-80">View Textbook PDF</span>
                </Button>

                <Button 
                    onClick={() => handleGradeClick(12)} 
                    variant="primary"
                    className="!h-32 flex-col !items-center !justify-center text-center"
                >
                    <span className="text-sm font-normal uppercase tracking-wider opacity-80">Grade</span>
                    <span className="text-5xl font-extrabold">12</span>
                    <span className="text-xs font-normal mt-2 opacity-80">View Textbook PDF</span>
                </Button>
            </div>
        </Container>
    );
};

export default BookGradeScreen;
