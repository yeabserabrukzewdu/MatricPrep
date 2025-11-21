
import React from 'react';
import Button from './common/Button';

interface HomeScreenProps {
    onGetStarted: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onGetStarted }) => {
    return (
        <div className="flex flex-col justify-center items-center h-full min-h-[calc(100vh-8rem)] text-center animate-fadeIn">
            
            <img src="./assets/studying_mascot.svg" alt="Studying Mascot" className="w-48 h-48 md:w-56 md:h-56 mb-8"/>

            <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white mb-4">
                    Ace your matric exams!
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-2 px-4">
                    The fun, free, and effective way to prepare for your exams.
                </p>
                 <p className="text-indigo-500 dark:text-indigo-400 font-bold text-sm mb-10 flex justify-center items-center gap-1">
                    <span>✨</span> Now powered by Gemini 3 AI
                </p>
                <div className="max-w-xs mx-auto">
                    <Button onClick={onGetStarted} className="!text-xl !py-4">
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
