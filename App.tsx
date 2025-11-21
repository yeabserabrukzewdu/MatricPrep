import React, { useState, useCallback } from 'react';
import { User, View, QuizDetails, PastPaperDetails, BookDetails } from './types';
import { supabase } from './lib/supabase';

import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import SubjectSelectionScreen from './components/SubjectSelectionScreen';
import UnitSelectionScreen from './components/UnitSelectionScreen';
import LevelSelectionScreen from './components/LevelSelectionScreen';
import QuizScreen from './components/QuizScreen';
import ProgressScreen from './components/ProgressScreen';
import PersonalInfoScreen from './components/PersonalInfoScreen';
import BooksScreen from './components/PastPapersScreen';
import BookGradeScreen from './components/BookGradeScreen';
import BookChaptersScreen from './components/BookChaptersScreen';
import BookReaderScreen from './components/BookReaderScreen';
import NavBar from './components/NavBar';

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [view, setView] = useState<View>('home');
    
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

    const [quizDetails, setQuizDetails] = useState<QuizDetails | null>(null);
    const [pastPaperDetails, setPastPaperDetails] = useState<PastPaperDetails | null>(null);
    
    // Book State
    const [bookDetails, setBookDetails] = useState<BookDetails | null>(null);
    
    const [viewHistory, setViewHistory] = useState<View[]>(['home']);

    const navigate = useCallback((newView: View) => {
        setView(prevView => {
            setViewHistory(history => [...history, prevView]);
            return newView;
        });
    }, []);

    const goBack = useCallback(() => {
        setViewHistory(history => {
            const lastView = history[history.length - 1];
            if(lastView) {
                setView(lastView);
                return history.slice(0, -1);
            }
            return history;
        });
    }, []);

    const handleLoginSuccess = (user: User) => {
        setCurrentUser(user);
        navigate('subjects');
    };

    const handleLogout = () => {
        setCurrentUser(null);
        setView('home');
        setViewHistory(['home']);
    };

    // --- Supabase Actions ---

    const handleUpdateUser = async (updatedUser: User) => {
        // 1. Optimistic Update
        setCurrentUser(updatedUser);

        // 2. Persist to Supabase
        try {
            const { error } = await supabase
                .from('users')
                .update({
                    progress: updatedUser.progress,
                    streak: updatedUser.streak,
                    last_quiz_date: updatedUser.lastQuizDate,
                    phone: updatedUser.phone
                })
                .eq('id', updatedUser.id);
            
            if (error) throw error;
        } catch (err) {
            console.error("Failed to sync user data:", err);
            // Ideally, revert optimistic update or show notification here
        }
    };

    const handleLoginAttempt = async (username: string, password: string): Promise<User | null> => {
        try {
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('id', username)
                .single();
            
            if (error || !data) return null;

            // Check password (in a real app, use auth.signInWithPassword instead of a users table)
            if (data.password === password) {
                // Map DB snake_case to App camelCase
                return {
                    id: data.id,
                    password: data.password,
                    email: data.email,
                    phone: data.phone,
                    progress: data.progress || [],
                    streak: data.streak || 0,
                    lastQuizDate: data.last_quiz_date
                };
            }
            return null;
        } catch (err) {
            console.error("Login error:", err);
            return null;
        }
    };

    const handleSignupAttempt = async (username: string, password: string, phone: string): Promise<User | null> => {
        try {
            // Check if user exists
            const { data: existing } = await supabase
                .from('users')
                .select('id')
                .eq('id', username)
                .single();
            
            if (existing) return null;

            // Insert new user
            const newUser = {
                id: username,
                password: password,
                email: username,
                phone: phone || null,
                progress: [],
                streak: 0,
                last_quiz_date: null
            };

            const { error } = await supabase
                .from('users')
                .insert(newUser);
            
            if (error) {
                console.error("Signup insert error:", error);
                return null;
            }

            // Map to App Type
            return {
                id: newUser.id,
                password: newUser.password,
                email: newUser.email,
                phone: newUser.phone,
                progress: [],
                streak: 0,
                lastQuizDate: null
            };

        } catch (err) {
            console.error("Signup error:", err);
            return null;
        }
    };
    
    const renderView = () => {
        switch (view) {
            case 'home':
                return <HomeScreen onGetStarted={() => navigate('login')} />;
            case 'login':
                return (
                    <LoginScreen 
                        onLoginAttempt={handleLoginAttempt}
                        onSignupAttempt={handleSignupAttempt}
                        onLoginSuccess={handleLoginSuccess} 
                    />
                );
            case 'subjects':
                return <SubjectSelectionScreen onSelectSubject={(subject) => { setSelectedSubject(subject); navigate('units'); }} goBack={goBack} />;
            case 'units':
                return <UnitSelectionScreen subjectKey={selectedSubject!} onSelectUnit={(unit) => { setSelectedUnit(unit); navigate('levels'); }} goBack={goBack} />;
            case 'levels':
                return <LevelSelectionScreen currentUser={currentUser!} subjectKey={selectedSubject!} unitKey={selectedUnit!} onSelectLevel={(level) => { setQuizDetails({ subject: selectedSubject!, unit: selectedUnit!, level }); setPastPaperDetails(null); navigate('quiz'); }} goBack={goBack} />;
            case 'quiz':
                return <QuizScreen currentUser={currentUser!} onUpdateUser={handleUpdateUser} quizDetails={quizDetails} pastPaperDetails={pastPaperDetails} onQuizEnd={() => navigate('subjects')} goBack={goBack} />;
            case 'progress':
                return <ProgressScreen user={currentUser!} />;
            case 'profile':
                return <PersonalInfoScreen user={currentUser!} onUpdateUser={handleUpdateUser} onLogout={handleLogout} goBack={goBack} />;
            
            // New Book Routes
            case 'books':
                return <BooksScreen onSelectSubject={(subject) => { setSelectedSubject(subject); navigate('book-grade'); }} goBack={goBack} />;
            case 'book-grade':
                 return <BookGradeScreen subjectKey={selectedSubject!} onSelectGrade={(grade) => { setBookDetails({ subject: selectedSubject!, grade }); navigate('book-chapters'); }} goBack={goBack} />;
            case 'book-chapters':
                 return <BookChaptersScreen subjectKey={bookDetails!.subject} grade={bookDetails!.grade} onSelectChapter={(idx) => { setBookDetails(prev => ({ ...prev!, chapterIndex: idx })); navigate('book-reader'); }} goBack={goBack} />;
            case 'book-reader':
                 return <BookReaderScreen subjectKey={bookDetails!.subject} grade={bookDetails!.grade} chapterIndex={bookDetails!.chapterIndex!} goBack={goBack} />;
            
            default:
                return <HomeScreen onGetStarted={() => navigate('login')} />;
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen pt-4 sm:pt-6 md:pt-8 px-4">
            <main className="w-full max-w-2xl mx-auto flex-grow pb-24">
                {renderView()}
            </main>
            {currentUser && view !== 'quiz' && <NavBar setView={navigate} activeView={view} />}
        </div>
    );
};

export default App;