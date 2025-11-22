
export interface Question {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
}

export interface Paper {
    questions: Question[];
    totalQuestions: number;
    duration: string;
}

export interface PastPaperSubject {
    name: string;
    icon: string;
    description: string;
    papers: Record<string, Paper>;
}

export interface QuizSubject {
    [unit: string]: {
        [level: number]: Question[];
    };
}

export interface ProgressEntry {
    subject: string;
    unit?: string;
    level?: number;
    year?: string;
    chapter?: string; // Added for book progress
    type?: 'quiz' | 'past_paper' | 'book_reading';
    score: number;
    total: number;
    percentage?: string;
}

export interface User {
    id: string; // username
    name?: string; // Full Name
    password?: string;
    phone?: string | null;
    email: string;
    progress: ProgressEntry[];
    streak: number;
    lastQuizDate: string | null;
}

// New Book Types
export interface Chapter {
    title: string;
    content: string; // Summary or text content
}

export interface BookGrade {
    chapters: Chapter[];
    pdfUrl?: string; // Added for PDF textbook link
}

export interface BookSubject {
    name: string;
    icon: string;
    description: string;
    grades: {
        11: BookGrade;
        12: BookGrade;
    };
}

export type View = 'home' | 'login' | 'verify-email' | 'welcome' | 'subjects' | 'units' | 'levels' | 'quiz' | 'progress' | 'profile' | 'books' | 'book-grade' | 'book-chapters' | 'book-reader';


export interface QuizDetails {
    subject: string;
    unit: string;
    level: number;
}

export interface PastPaperDetails {
    subject: string;
    year: string;
}

export interface BookDetails {
    subject: string;
    grade: 11 | 12;
    chapterIndex?: number;
}
