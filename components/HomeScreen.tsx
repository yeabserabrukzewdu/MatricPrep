
import React from 'react';
import Button from './common/Button';

interface HomeScreenProps {
    onGetStarted: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onGetStarted }) => {
    return (
        <div className="flex flex-col justify-center items-center h-full min-h-[calc(100vh-8rem)] text-center animate-fadeIn">
            
            {/* Embedded SVG Mascot to prevent 404 errors */}
            <div className="w-48 h-48 md:w-56 md:h-56 mb-8 relative">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                    <circle cx="100" cy="100" r="90" fill="#e2e8f0" className="dark:fill-slate-700" />
                    <path fill="#58CC02" d="M49.3,-46.6C64.6,-32.9,78.2,-16.4,79.8,1.4C81.4,19.2,71,38.5,55.9,52.3C40.8,66.1,20.4,74.5,-1.9,76C-24.2,77.5,-48.4,72,-61.7,57.5C-75,43,-77.4,19.5,-73.2,0.3C-69,-18.9,-58.3,-33.8,-45.1,-46.8C-31.9,-59.8,-16,-70.8,-0.3,-70.6C15.3,-70.4,34,-59.3,49.3,-46.6Z" transform="translate(100 100) scale(1.1)" />
                    {/* Face */}
                    <circle cx="75" cy="90" r="8" fill="white" />
                    <circle cx="125" cy="90" r="8" fill="white" />
                    <circle cx="77" cy="90" r="3" fill="black" />
                    <circle cx="123" cy="90" r="3" fill="black" />
                    <path d="M 85 110 Q 100 125 115 110" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
                    {/* Book */}
                    <rect x="60" y="140" width="80" height="40" rx="4" fill="white" />
                    <path d="M60 140 L100 150 L140 140" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                    <text x="100" y="165" fontSize="10" textAnchor="middle" fill="#94a3b8" fontWeight="bold">STUDY</text>
                    {/* Graduation Cap */}
                    <path d="M 60 50 L 100 30 L 140 50 L 100 70 Z" fill="#334155" />
                    <path d="M 140 50 L 140 65" stroke="#334155" strokeWidth="2" />
                    <circle cx="140" cy="65" r="3" fill="#fbbf24" />
                </svg>
            </div>

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
