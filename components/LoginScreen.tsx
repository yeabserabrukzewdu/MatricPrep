import React, { useState } from 'react';
import { User } from '../types';
import Button from './common/Button';

interface LoginScreenProps {
    onLoginAttempt: (username: string, password: string) => Promise<User | null>;
    onSignupAttempt: (username: string, password: string, phone: string) => Promise<User | null>;
    onLoginSuccess: (user: User) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginAttempt, onSignupAttempt, onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (!username || !password) {
            setError("Please enter username and password!");
            return;
        }
        setIsLoading(true);
        setError('');
        
        try {
            const user = await onLoginAttempt(username, password);
            if (user) {
                onLoginSuccess(user);
            } else {
                setError("Invalid username or password!");
            }
        } catch (err) {
            setError("An error occurred during login.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignup = async () => {
        if (!username || !password) {
            setError("Please enter username and password!");
            return;
        }
        setIsLoading(true);
        setError('');

        try {
            const user = await onSignupAttempt(username, password, phone);
            if (user) {
                onLoginSuccess(user);
            } else {
                setError("Username already exists or error creating account.");
            }
        } catch (err) {
            setError("An error occurred during signup.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-8rem)] animate-fadeIn">
             <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-8 text-center">Create a profile</h1>
            <div className="w-full max-w-sm space-y-6">
                 {error && <p className="text-red-500 text-center font-bold">{error}</p>}
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full p-3 bg-transparent text-slate-700 dark:text-white dark:placeholder-slate-400 border-b-2 border-slate-300 dark:border-slate-600 focus:outline-none focus:border-blue-500 transition-all text-lg"
                    disabled={isLoading}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-3 bg-transparent text-slate-700 dark:text-white dark:placeholder-slate-400 border-b-2 border-slate-300 dark:border-slate-600 focus:outline-none focus:border-blue-500 transition-all text-lg"
                    disabled={isLoading}
                />
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number (optional)"
                    className="w-full p-3 bg-transparent text-slate-700 dark:text-white dark:placeholder-slate-400 border-b-2 border-slate-300 dark:border-slate-600 focus:outline-none focus:border-blue-500 transition-all text-lg"
                    disabled={isLoading}
                />
                <div className="space-y-4 pt-4">
                     <Button onClick={handleSignup} disabled={isLoading}>
                        {isLoading ? 'Creating...' : 'Create Account'}
                     </Button>
                     <Button onClick={handleLogin} variant="secondary" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                     </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;