
import React, { useState } from 'react';
import Container from './common/Container';
import Button from './common/Button';
import { books } from '../data/booksData';

interface BooksScreenProps {
    onSelectSubject: (subject: string) => void;
    goBack: () => void;
}

const BooksScreen: React.FC<BooksScreenProps> = ({ onSelectSubject, goBack }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSubjects = Object.keys(books).filter(subjectKey =>
        books[subjectKey].name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container title="Books Library" goBack={goBack}>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-2xl mb-6 border border-blue-100 dark:border-blue-800">
                <p className="text-center text-slate-600 dark:text-blue-100 font-medium">
                   Select a subject to access comprehensive textbooks for Grade 11 and Grade 12.
                </p>
            </div>
            
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search subjects..."
                className="w-full p-3 bg-transparent text-slate-700 dark:text-white dark:placeholder-slate-400 border-b-2 border-slate-300 dark:border-slate-600 focus:outline-none focus:border-blue-500 transition-all text-lg mb-6"
            />
            <div className="grid grid-cols-1 gap-4">
                {filteredSubjects.map(subjectKey => {
                    const subject = books[subjectKey];
                    return (
                        <Button
                            key={subjectKey}
                            icon={subject.icon}
                            onClick={() => onSelectSubject(subjectKey)}
                            variant="list"
                        >
                            <div className="flex flex-col items-start">
                                <span className="text-xl font-bold">{subject.name}</span>
                                <span className="text-sm font-normal text-slate-500 dark:text-slate-400">{subject.description}</span>
                            </div>
                        </Button>
                    );
                })}
            </div>
        </Container>
    );
};

export default BooksScreen;
