
import React, { useState } from 'react';
import Container from './common/Container';
import Button from './common/Button';

interface VerifyEmailScreenProps {
    email: string;
    onVerified: () => void;
}

const VerifyEmailScreen: React.FC<VerifyEmailScreenProps> = ({ email, onVerified }) => {
    const [code, setCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleVerify = () => {
        if (code.length < 4) {
            alert("Please enter the verification code sent to your email.");
            return;
        }
        setIsLoading(true);
        
        // Simulate network request
        setTimeout(() => {
            setIsLoading(false);
            onVerified();
        }, 1500);
    };

    return (
        <Container title="Verify Email">
            <div className="flex flex-col items-center min-h-[60vh] justify-center animate-fadeIn">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg w-full max-w-md border-2 border-slate-100 dark:border-slate-700 text-center">
                    <div className="mb-6">
                        <span className="text-6xl">📧</span>
                        <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white mt-4">Check your Inbox</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">
                            We've sent a verification code to <br/>
                            <span className="font-bold text-slate-800 dark:text-slate-200">{email}</span>
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <input
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="Enter Code (e.g. 123456)"
                                className="w-full p-4 text-center tracking-widest bg-slate-50 dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-600 focus:outline-none focus:border-blue-500 font-bold text-2xl"
                                maxLength={6}
                            />
                        </div>

                        <div className="pt-4">
                            <Button onClick={handleVerify} disabled={isLoading}>
                                {isLoading ? 'Verifying...' : 'Verify Email'}
                            </Button>
                        </div>
                        
                        <button className="text-sm text-blue-500 font-bold hover:underline mt-4">
                            Resend Code
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default VerifyEmailScreen;
