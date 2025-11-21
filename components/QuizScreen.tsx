
import React, { useState, useEffect, useMemo } from 'react';
import { User, Question, QuizDetails, PastPaperDetails } from '../types';
import { subjects as quizData } from '../data/quizData';
import { pastPapers } from '../data/pastPapersData';
import Button from './common/Button';
import ScoreModal from './common/ScoreModal';
import { useAudioContext } from '../contexts/AudioContext';
import { GoogleGenAI } from "@google/genai";

interface QuizScreenProps {
    currentUser: User;
    onUpdateUser: (user: User) => void;
    quizDetails: QuizDetails | null;
    pastPaperDetails: PastPaperDetails | null;
    onQuizEnd: () => void;
    goBack: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ currentUser, onUpdateUser, quizDetails, pastPaperDetails, onQuizEnd, goBack }) => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    
    // AI Tutor State
    const [aiExplanation, setAiExplanation] = useState<string | null>(null);
    const [isAiLoading, setIsAiLoading] = useState(false);

    const { playSound } = useAudioContext();

    useEffect(() => {
        const shuffleArray = <T,>(array: T[]): T[] => {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        };

        let fetchedQuestions: Question[] = [];
        if (quizDetails) {
            fetchedQuestions = quizData[quizDetails.subject]?.[quizDetails.unit]?.[quizDetails.level] || [];
        } else if (pastPaperDetails) {
            fetchedQuestions = pastPapers[pastPaperDetails.subject]?.papers?.[pastPaperDetails.year]?.questions || [];
        }
        
        setQuestions(shuffleArray(fetchedQuestions).slice(0, 10));
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsAnswerSubmitted(false);
        setShowScoreModal(false);
        setAiExplanation(null);
    }, [quizDetails, pastPaperDetails]);

    // Reset AI explanation when question changes
    useEffect(() => {
        setAiExplanation(null);
    }, [currentQuestionIndex]);

    useEffect(() => {
        if (showScoreModal) {
            playSound('complete');
        }
    }, [showScoreModal, playSound]);
    
    const currentQuestion = questions[currentQuestionIndex];
    
    const handleQuizFinish = () => {
        const today = new Date().toISOString().split('T')[0];
        const updatedUser = { ...currentUser };
        if (updatedUser.lastQuizDate !== today) {
            updatedUser.streak = (updatedUser.streak || 0) + 1;
            updatedUser.lastQuizDate = today;
        }

        const progressEntry = pastPaperDetails 
            ? { subject: pastPaperDetails.subject, year: pastPaperDetails.year, type: 'past_paper' as const, score: score, total: questions.length }
            : { subject: quizDetails!.subject, unit: quizDetails!.unit, level: quizDetails!.level, score: score, total: questions.length };
        
        updatedUser.progress.push(progressEntry);
        onUpdateUser(updatedUser);
        setShowScoreModal(true);
    }

    const handleSubmit = () => {
        if (selectedAnswer === null) return;
        setIsAnswerSubmitted(true);
        if (selectedAnswer === currentQuestion.correct) {
            playSound('correct');
            setScore(prev => prev + 1);
        } else {
            playSound('incorrect');
        }
    };

    const handleNext = () => {
        setIsAnswerSubmitted(false);
        setSelectedAnswer(null);
        setCurrentQuestionIndex(prev => prev + 1);
    };

    const handleMainButtonClick = () => {
        playSound('click');
        if (!isAnswerSubmitted) {
            handleSubmit();
        } else if (isLastQuestion) {
            handleQuizFinish();
        } else {
            handleNext();
        }
    }

    const handleAskAi = async () => {
        setIsAiLoading(true);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const subjectName = quizDetails?.subject || pastPaperDetails?.subject || 'General';
            
            const prompt = `
                Context: You are a friendly and encouraging high school tutor helping a student with their Matric ${subjectName} exam prep.
                
                Task: Explain the following multiple-choice question.
                Question: "${currentQuestion.question}"
                Options: ${currentQuestion.options.map((o, i) => `(${i+1}) ${o}`).join(', ')}
                Correct Answer: "${currentQuestion.options[currentQuestion.correct]}"
                
                Guidelines:
                1. Explain WHY the correct answer is right.
                2. Briefly explain why the distractors are wrong (if relevant).
                3. Keep it concise (under 100 words) but clear.
                4. Use simple formatting.
                5. If it's a math/science problem, describe the step-by-step solution.
            `;

            const response = await ai.models.generateContent({
                model: 'gemini-3-pro-preview',
                contents: prompt,
            });
            setAiExplanation(response.text || "I couldn't generate an explanation right now.");
        } catch (error) {
            console.error("AI Error:", error);
            setAiExplanation("Sorry, I'm having trouble connecting to the AI tutor right now. Please check your connection or API key.");
        } finally {
            setIsAiLoading(false);
        }
    };

    if (questions.length === 0) {
        return (
            <div className="text-center p-6 text-slate-500 dark:text-slate-400">
                <p>No questions found for this selection.</p>
                <Button onClick={goBack} className="mt-4">Go Back</Button>
            </div>
        );
    }
    
    const quizTitle = pastPaperDetails ? `${pastPapers[pastPaperDetails.subject].name} - ${pastPaperDetails.year}` : `${quizDetails?.subject} - Level ${quizDetails?.level}`;
    const isCorrect = selectedAnswer === currentQuestion?.correct;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    return (
        <>
            <div className="flex flex-col h-full min-h-[calc(100vh-8rem)]">
                <div className="flex items-center gap-4 mb-4">
                    <button onClick={goBack} className="text-2xl text-slate-400 hover:text-slate-600">&times;</button>
                    <div className="flex-grow bg-slate-200 dark:bg-slate-700 rounded-full h-4 shadow-inner">
                        <div className="bg-green-500 h-4 rounded-full transition-all duration-500" style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}></div>
                    </div>
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400 w-16 text-right">
                        {currentQuestionIndex + 1}/{questions.length}
                    </span>
                </div>

                <div className="flex-grow">
                    <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white my-6">{currentQuestion?.question}</h2>
                    
                    <div className="space-y-3">
                        {currentQuestion?.options.map((option, index) => {
                             const isSelected = index === selectedAnswer;
                             const isCorrectAnswer = index === currentQuestion.correct;
                             
                             let optionClass = 'bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-white normal-case !font-bold !p-4 hover:bg-slate-50 dark:hover:bg-slate-600';

                             if(isAnswerSubmitted) {
                                if(isCorrectAnswer) {
                                    optionClass = 'bg-green-100 dark:bg-green-900/50 border-2 border-green-500 text-green-700 dark:text-green-300 normal-case !font-bold !p-4';
                                } else if (isSelected && !isCorrectAnswer) {
                                    optionClass = 'bg-red-100 dark:bg-red-900/50 border-2 border-red-500 text-red-700 dark:text-red-300 normal-case !font-bold !p-4';
                                } else {
                                     optionClass = 'bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 normal-case !font-bold !p-4 opacity-70';
                                }
                             } else if (isSelected) {
                                optionClass = 'bg-blue-100 dark:bg-blue-900/50 border-2 border-blue-500 text-blue-700 dark:text-blue-300 normal-case !font-bold !p-4';
                             }

                            return (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (!isAnswerSubmitted) {
                                            playSound('click');
                                            setSelectedAnswer(index)
                                        }
                                    }}
                                    className={`w-full text-left rounded-2xl transition-all duration-300 flex items-center justify-between ${optionClass}`}
                                    disabled={isAnswerSubmitted}
                                >
                                   <span className="text-lg">{option}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className={`fixed bottom-0 left-0 right-0 p-4 transition-colors duration-300 ${isAnswerSubmitted ? (isCorrect ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50') : 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-t-2 border-slate-200 dark:border-slate-700'}`}>
                <div className="max-w-2xl mx-auto">
                    {isAnswerSubmitted && (
                        <div className="text-center mb-4 font-bold animate-fadeIn">
                             <p className={`text-xl ${isCorrect ? 'text-green-600 dark:text-green-300' : 'text-red-600 dark:text-red-400'}`}>
                                {isCorrect ? 'Correct!' : `Correct Answer: "${currentQuestion.options[currentQuestion.correct]}"`}
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 font-normal mt-1">{currentQuestion.explanation}</p>
                            
                            {!aiExplanation && !isAiLoading && (
                                <button 
                                    onClick={handleAskAi} 
                                    className="mx-auto text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 mt-3 hover:scale-105 transition-transform px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-indigo-100 dark:border-indigo-900"
                                >
                                    <span>✨</span> Ask AI Tutor
                                </button>
                            )}
                            
                            {isAiLoading && (
                                <div className="mt-3 flex justify-center items-center gap-2 text-indigo-500 font-semibold animate-pulse">
                                    <span>✨</span> Thinking...
                                </div>
                            )}

                            {aiExplanation && (
                                <div className="mt-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl border-2 border-indigo-200 dark:border-indigo-700 text-left shadow-sm animate-scaleIn">
                                    <p className="font-bold text-indigo-600 dark:text-indigo-300 mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                                        <span className="text-xl">🤖</span> Gemini AI Tutor
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-200 text-sm whitespace-pre-wrap leading-relaxed">
                                        {aiExplanation}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                     <Button 
                        onClick={handleMainButtonClick} 
                        disabled={selectedAnswer === null && !isAnswerSubmitted}
                        variant={isAnswerSubmitted ? (isCorrect ? 'primary' : 'danger') : 'primary'}
                     >
                        {!isAnswerSubmitted ? 'Check' : (isLastQuestion ? 'Finish' : 'Continue')}
                    </Button>
                </div>
            </div>

            <ScoreModal
                isOpen={showScoreModal}
                onClose={() => onQuizEnd()}
                title={quizTitle || ''}
                score={score}
                total={questions.length}
            />
        </>
    );
};

export default QuizScreen;
