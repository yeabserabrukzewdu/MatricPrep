
import React, { useState } from 'react';
import Container from './common/Container';
import Button from './common/Button';
import { User } from '../types';

interface OnboardingScreenProps {
    user: User;
    onComplete: (updatedUser: User) => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ user, onComplete }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState(user.phone || '');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        if (!name.trim()) {
            alert("Please enter your name.");
            return;
        }
        setIsLoading(true);
        
        // Create updated user object
        const updatedUser: User = {
            ...user,
            name: name,
            phone: phone
        };

        // Call parent handler to sync to DB and navigate
        await onComplete(updatedUser);
        setIsLoading(false);
    };

    return (
        <Container title="Welcome!">
            <div className="flex flex-col items-center min-h-[60vh] justify-center animate-fadeIn">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg w-full max-w-md border-2 border-slate-100 dark:border-slate-700">
                    <div className="text-center mb-6">
                        <span className="text-6xl">👋</span>
                        <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white mt-4">Let's get to know you</h2>
                        <p className="text-slate-500 dark:text-slate-400">We need a few details to personalize your profile.</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. Abebe Bikila"
                                className="w-full p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-600 focus:outline-none focus:border-blue-500 font-bold text-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Phone Number (Optional)</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="09..."
                                className="w-full p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-600 focus:outline-none focus:border-blue-500 font-bold text-lg"
                            />
                        </div>

                        <div className="pt-4">
                            <Button onClick={handleSubmit} disabled={isLoading}>
                                {isLoading ? 'Saving...' : 'Start Learning'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default OnboardingScreen;
