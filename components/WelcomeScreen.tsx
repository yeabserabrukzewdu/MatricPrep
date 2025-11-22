
import React from 'react';
import Container from './common/Container';
import Button from './common/Button';

interface WelcomeScreenProps {
    name: string;
    onContinue: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ name, onContinue }) => {
    return (
        <Container title="Success!">
            <div className="flex flex-col items-center min-h-[60vh] justify-center animate-fadeIn">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg w-full max-w-md border-2 border-slate-100 dark:border-slate-700 text-center">
                    <div className="mb-8">
                        <span className="text-6xl block mb-4">🎉</span>
                        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white">
                            Welcome, <br/>
                            <span className="text-green-500">{name}</span>!
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg">
                            Your account has been successfully created. You are now ready to ace your matric exams!
                        </p>
                    </div>

                    <Button onClick={onContinue} className="!py-4 !text-xl">
                        Continue to App
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default WelcomeScreen;
