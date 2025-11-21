
import React, { useState, useEffect } from 'react';
import Container from './common/Container';
import { books } from '../data/booksData';
import { GoogleGenAI } from "@google/genai";
import Button from './common/Button';

interface BookReaderScreenProps {
    subjectKey: string;
    grade: 11 | 12;
    chapterIndex: number;
    goBack: () => void;
}

const BookReaderScreen: React.FC<BookReaderScreenProps> = ({ subjectKey, grade, chapterIndex, goBack }) => {
    const subject = books[subjectKey];
    const chapter = subject?.grades[grade]?.chapters[chapterIndex];

    const [aiResponse, setAiResponse] = useState<string | null>(null);
    const [isLoadingAi, setIsLoadingAi] = useState(false);
    const [aiMode, setAiMode] = useState<'summary' | 'quiz' | null>(null);

    const handleAiAction = async (mode: 'summary' | 'quiz') => {
        setAiMode(mode);
        setIsLoadingAi(true);
        setAiResponse(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            let prompt = "";
            if (mode === 'summary') {
                prompt = `Summarize the following educational text for a Grade ${grade} student. Make it concise, use bullet points for key takeaways, and highlight important terms. \n\nText: ${chapter.content}`;
            } else {
                prompt = `Generate 3 multiple-choice quiz questions based on the following text. Provide the question, options, and the correct answer. \n\nText: ${chapter.content}`;
            }

            const response = await ai.models.generateContent({
                model: 'gemini-3-pro-preview',
                contents: prompt,
            });
            
            setAiResponse(response.text || "I couldn't generate a response right now.");
        } catch (error) {
            console.error(error);
            setAiResponse("Sorry, I'm having trouble connecting to the AI Study Partner.");
        } finally {
            setIsLoadingAi(false);
        }
    };

    if (!chapter) return null;

    // Simple Markdown-ish parser for display
    const formatContent = (text: string) => {
        return text.split('\n').map((line, i) => {
            if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-slate-800 dark:text-white mt-6 mb-3">{line.replace('## ', '')}</h2>;
            if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-slate-700 dark:text-slate-200 mt-4 mb-2">{line.replace('### ', '')}</h3>;
            if (line.startsWith('- ')) return <li key={i} className="ml-4 list-disc text-slate-600 dark:text-slate-300 mb-1">{line.replace('- ', '')}</li>;
            if (line.trim() === '') return <br key={i} />;
            return <p key={i} className="text-slate-600 dark:text-slate-300 mb-2 leading-relaxed">{line}</p>;
        });
    };

    return (
        <Container title={subject.name} goBack={goBack}>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="border-b border-slate-200 dark:border-slate-700 pb-4 mb-4">
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">Grade {grade} • Unit {chapterIndex + 1}</span>
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{chapter.title}</h1>
                </div>

                <div className="prose dark:prose-invert max-w-none mb-8">
                    {formatContent(chapter.content)}
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800">
                    <h3 className="font-bold text-indigo-600 dark:text-indigo-300 flex items-center gap-2 mb-3">
                        <span className="text-xl">🤖</span> Gemini 3 Study Partner
                    </h3>
                    
                    {!aiResponse && !isLoadingAi ? (
                        <div className="flex gap-3">
                            <button 
                                onClick={() => handleAiAction('summary')}
                                className="flex-1 bg-white dark:bg-slate-800 py-3 px-4 rounded-lg font-bold text-indigo-600 dark:text-indigo-400 shadow-sm border border-indigo-100 dark:border-indigo-900 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-colors"
                            >
                                Summarize This
                            </button>
                            <button 
                                onClick={() => handleAiAction('quiz')}
                                className="flex-1 bg-indigo-600 py-3 px-4 rounded-lg font-bold text-white shadow-sm hover:bg-indigo-700 transition-colors"
                            >
                                Quiz Me
                            </button>
                        </div>
                    ) : (
                        <div className="animate-fadeIn">
                            {isLoadingAi ? (
                                <div className="flex items-center gap-2 text-indigo-500 font-semibold">
                                    <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                                    Processing with Gemini 3...
                                </div>
                            ) : (
                                <div>
                                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-slate-700 dark:text-slate-200 text-sm mb-4 whitespace-pre-wrap border border-indigo-100 dark:border-indigo-900">
                                        {aiResponse}
                                    </div>
                                    <button 
                                        onClick={() => setAiResponse(null)}
                                        className="text-sm font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline"
                                    >
                                        Close AI Response
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default BookReaderScreen;
