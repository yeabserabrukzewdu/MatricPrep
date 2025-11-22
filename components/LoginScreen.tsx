
import React, { useState } from 'react';
import { User } from '../types';
import Button from './common/Button';
import { isSupabaseConfigured } from '../lib/supabase';

interface LoginScreenProps {
    onLoginAttempt: (email: string, password: string) => Promise<User | null>;
    onSignupAttempt: (username: string, email: string, password: string) => Promise<User | null>;
    onLoginSuccess: (user: User) => void;
    onSignupSuccess: (user: User) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginAttempt, onSignupAttempt, onLoginSuccess, onSignupSuccess }) => {
    // State
    const [mode, setMode] = useState<'login' | 'signup'>('login');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Form Fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async () => {
        setError('');

        if (!isSupabaseConfigured) {
            setError("Supabase is not configured. Please check lib/supabase.ts");
            return;
        }

        if (mode === 'login') {
            if (!email || !password) {
                setError("Please enter email and password.");
                return;
            }
            setIsLoading(true);
            try {
                const user = await onLoginAttempt(email, password);
                if (user) {
                    onLoginSuccess(user);
                } else {
                    setError("Invalid email or password.");
                }
            } catch (e) {
                setError("An error occurred during login.");
            } finally {
                setIsLoading(false);
            }
        } else {
            // Signup Mode
            if (!username || !email || !password || !confirmPassword) {
                setError("All fields are required.");
                return;
            }
            if (password !== confirmPassword) {
                setError("Passwords do not match.");
                return;
            }
            
            setIsLoading(true);
            try {
                const user = await onSignupAttempt(username, email, password);
                if (user) {
                    onSignupSuccess(user);
                } else {
                    setError("Username or Email already exists.");
                }
            } catch (e) {
                setError("Signup failed. Try again.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-8rem)] animate-fadeIn w-full">
             <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-2 text-center">
                {mode === 'login' ? 'Welcome Back' : 'Create Account'}
             </h1>
             <p className="text-slate-500 mb-8">{mode === 'login' ? 'Login with your email' : 'Join us to ace your exams'}</p>

            <div className="w-full max-w-sm space-y-4">
                {/* Configuration Warning */}
                {!isSupabaseConfigured && (
                    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded mb-4 text-sm" role="alert">
                        <p className="font-bold">Setup Required ⚠️</p>
                        <p>Please open <code>lib/supabase.ts</code> and paste your Supabase Project URL and Key.</p>
                    </div>
                )}

                 {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">{error}</div>}
                
                {mode === 'signup' && (
                    <div className="animate-scaleIn">
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Choose a username"
                            className="w-full p-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 transition-all text-lg font-bold"
                        />
                    </div>
                )}

                <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase">Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full p-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 transition-all text-lg font-bold"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full p-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 transition-all text-lg font-bold"
                    />
                </div>

                {mode === 'signup' && (
                    <div className="animate-scaleIn">
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full p-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 transition-all text-lg font-bold"
                        />
                    </div>
                )}

                <div className="pt-4">
                     <Button onClick={handleSubmit} disabled={isLoading || !isSupabaseConfigured}>
                        {isLoading ? 'Processing...' : (mode === 'login' ? 'Log In' : 'Sign Up')}
                     </Button>
                </div>

                <div className="text-center mt-6">
                    <button 
                        onClick={() => { 
                            setError(''); 
                            setMode(mode === 'login' ? 'signup' : 'login');
                            // Reset fields
                            setUsername('');
                            setEmail('');
                            setPassword('');
                            setConfirmPassword('');
                        }}
                        className="text-slate-500 dark:text-slate-400 font-bold hover:text-blue-500 transition-colors"
                    >
                        {mode === 'login' ? "Don't have an account? Sign up" : "Already have an account? Log in"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
