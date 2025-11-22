
import React, { useState, useCallback } from 'react';
import { User, View, QuizDetails, PastPaperDetails, BookDetails } from './types';
import { supabase } from './lib/supabase';

import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import VerifyEmailScreen from './components/VerifyEmailScreen';
import WelcomeScreen from './components/WelcomeScreen';
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

    // Called after successful LOGIN
    const handleLoginSuccess = (user: User) => {
        setCurrentUser(user);
        navigate('subjects');
    };

    // Called after successful SIGNUP (Initial DB creation)
    const handleSignupSuccess = (user: User) => {
        setCurrentUser(user);
        // Go to email verification
        navigate('verify-email');
    }
    
    // Called after Verify Email
    const handleEmailVerified = () => {
        navigate('welcome');
    }

    // Called after Welcome Screen
    const handleWelcomeContinue = () => {
         // Directly go to subjects, skipping onboarding
         navigate('subjects');
    }

    const handleLogout = () => {
        setCurrentUser(null);
        setView('home');
        setViewHistory(['home']);
    };

    // --- Supabase Actions ---

    // 1. General Profile Update (Phone, Streak, Name)
    const handleUpdateProfile = async (updatedUser: User) => {
        setCurrentUser(updatedUser);
        try {
            const { error } = await supabase
                .from('users')
                .update({
                    full_name: updatedUser.name,
                    phone: updatedUser.phone,
                    streak: updatedUser.streak,
                    last_quiz_date: updatedUser.lastQuizDate,
                    progress: updatedUser.progress 
                })
                .eq('id', updatedUser.id);
            
            if (error) throw error;
        } catch (err) {
            console.error("Failed to sync profile:", err);
        }
    };

    // 2. Save Quiz Result
    const handleSaveQuizResult = async (updatedUser: User, subject: string, score: number, total: number, unit?: string, level?: number, year?: string, type: 'quiz' | 'past_paper' = 'quiz') => {
        setCurrentUser(updatedUser);

        try {
            let totalScore = 0;
            let totalPossible = 0;
            updatedUser.progress.forEach(p => {
                totalScore += p.score;
                totalPossible += p.total;
            });
            const globalPercentage = totalPossible > 0 ? totalScore / totalPossible : 0;
            const estimatedScore = Math.round(globalPercentage * 700);

            const { error: historyError } = await supabase
                .from('quiz_history')
                .insert({
                    user_id: updatedUser.id,
                    subject: subject,
                    unit: unit || null,
                    level: level || null,
                    year: year || null,
                    type: type,
                    score: score,
                    total: total,
                    percentage: (score/total) * 100
                });
            
            if (historyError) console.error("History insert error:", historyError);

            const { error: userError } = await supabase
                .from('users')
                .update({
                    streak: updatedUser.streak,
                    last_quiz_date: updatedUser.lastQuizDate,
                    estimated_score: estimatedScore,
                    progress: updatedUser.progress
                })
                .eq('id', updatedUser.id);

            if (userError) throw userError;

        } catch (err) {
            console.error("Failed to save quiz result:", err);
        }
    };

    // Login: Now uses EMAIL
    const handleLoginAttempt = async (email: string, password: string): Promise<User | null> => {
        try {
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('email', email)
                .single();
            
            if (error || !data) return null;

            if (data.password === password) {
                const { data: historyData } = await supabase
                    .from('quiz_history')
                    .select('*')
                    .eq('user_id', data.id);

                const progressMapped = (historyData || []).map((h: any) => ({
                    subject: h.subject,
                    unit: h.unit,
                    level: h.level,
                    year: h.year,
                    type: h.type,
                    score: h.score,
                    total: h.total
                }));

                return {
                    id: data.id,
                    name: data.full_name,
                    password: data.password,
                    email: data.email,
                    phone: data.phone,
                    progress: progressMapped,
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

    // Signup: Uses Username, Email, Password
    const handleSignupAttempt = async (username: string, email: string, password: string): Promise<User | null> => {
        try {
            // Check if username OR email exists
            const { data: existing } = await supabase
                .from('users')
                .select('id, email')
                .or(`id.eq.${username},email.eq.${email}`)
                .single();
            
            if (existing) return null; // User/Email exists

            const newUser = {
                id: username,
                email: email,
                password: password,
                full_name: username, // Default full_name to username
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

            return {
                id: newUser.id,
                name: newUser.full_name,
                password: newUser.password,
                email: newUser.email,
                phone: null,
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
                        onSignupSuccess={handleSignupSuccess}
                    />
                );
            case 'verify-email':
                return <VerifyEmailScreen email={currentUser?.email || ''} onVerified={handleEmailVerified} />;
            case 'welcome':
                return <WelcomeScreen name={currentUser?.name || currentUser?.id || 'Student'} onContinue={handleWelcomeContinue} />;
            case 'subjects':
                return <SubjectSelectionScreen onSelectSubject={(subject) => { setSelectedSubject(subject); navigate('units'); }} goBack={goBack} />;
            case 'units':
                return <UnitSelectionScreen subjectKey={selectedSubject!} onSelectUnit={(unit) => { setSelectedUnit(unit); navigate('levels'); }} goBack={goBack} />;
            case 'levels':
                return <LevelSelectionScreen currentUser={currentUser!} subjectKey={selectedSubject!} unitKey={selectedUnit!} onSelectLevel={(level) => { setQuizDetails({ subject: selectedSubject!, unit: selectedUnit!, level }); setPastPaperDetails(null); navigate('quiz'); }} goBack={goBack} />;
            case 'quiz':
                return <QuizScreen currentUser={currentUser!} onSaveQuizResult={handleSaveQuizResult} quizDetails={quizDetails} pastPaperDetails={pastPaperDetails} onQuizEnd={() => navigate('subjects')} goBack={goBack} />;
            case 'progress':
                return <ProgressScreen user={currentUser!} />;
            case 'profile':
                return <PersonalInfoScreen user={currentUser!} onUpdateUser={handleUpdateProfile} onLogout={handleLogout} goBack={goBack} />;
            
            // Book Routes
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
            {currentUser && !['quiz', 'login', 'home', 'verify-email', 'welcome'].includes(view) && <NavBar setView={navigate} activeView={view} />}
        </div>
    );
};

export default App;
