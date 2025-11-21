
import React from 'react';
import Button from './Button';

interface ScoreModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    score: number;
    total: number;
}

const ScoreModal: React.FC<ScoreModalProps> = ({ isOpen, onClose, title, score, total }) => {
    if (!isOpen) return null;

    const percentage = total > 0 ? parseFloat(((score / total) * 100).toFixed(1)) : 0;
    
    let performanceMessage = '';
    if (percentage >= 80) performanceMessage = 'Excellent work! 🥳';
    else if (percentage >= 60) performanceMessage = 'Great job! 👍';
    else if (percentage >= 40) performanceMessage = 'Good effort! 📚';
    else performanceMessage = 'Keep practicing! 💪';

    return (
        <div className="fixed inset-0 bg-slate-100 dark:bg-slate-900 flex flex-col justify-between z-50 p-6 animate-fadeIn">
            <div className="flex-grow flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-4">{performanceMessage}</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-bold mb-8">{title}</p>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md w-full max-w-sm">
                    <p className="text-slate-500 dark:text-slate-400 font-bold">SCORE</p>
                    <p className="text-6xl font-extrabold text-green-500 my-2">
                        {score}/{total}
                    </p>
                     <p className="text-slate-500 dark:text-slate-400 font-bold">({percentage}%)</p>
                </div>

            </div>
            <div className="w-full max-w-2xl mx-auto">
                 <Button onClick={onClose} variant="primary">Continue</Button>
            </div>
        </div>
    );
};

export default ScoreModal;