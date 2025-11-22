import React, { useState } from 'react';
import { User } from '../types';
import Container from './common/Container';
import Button from './common/Button';
import { useTheme } from '../contexts/ThemeContext';

interface PersonalInfoScreenProps {
    user: User;
    onUpdateUser: (user: User) => void;
    onLogout: () => void;
    goBack: () => void;
}

const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: string; onEdit?: () => void }> = ({ icon, label, value, onEdit }) => (
    <div className="flex items-center py-4">
        <div className="flex-shrink-0 w-10 text-slate-400 dark:text-slate-500">{icon}</div>
        <div className="flex-grow">
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{label}</p>
            <p className="text-lg text-slate-800 dark:text-white font-bold break-all">{value}</p>
        </div>
        {onEdit && (
             <button onClick={onEdit} className="text-sm font-bold text-blue-500 hover:text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-lg">
                Edit
            </button>
        )}
    </div>
);

const PersonalInfoScreen: React.FC<PersonalInfoScreenProps> = ({ user, onUpdateUser, onLogout, goBack }) => {
    const [editMode, setEditMode] = useState<'name' | 'phone' | null>(null);
    const [tempValue, setTempValue] = useState('');
    const { theme, toggleTheme } = useTheme();

    const startEdit = (field: 'name' | 'phone') => {
        setEditMode(field);
        setTempValue(field === 'name' ? (user.name || '') : (user.phone || ''));
    };

    const handleSave = () => {
        if (editMode === 'name') {
            onUpdateUser({ ...user, name: tempValue });
        } else if (editMode === 'phone') {
            onUpdateUser({ ...user, phone: tempValue });
        }
        setEditMode(null);
    };

    const UserAvatar: React.FC<{ name?: string, email: string }> = ({ name, email }) => {
        const displayChar = name ? name[0] : email[0];
        return (
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-4xl font-bold shadow-lg border-4 border-white dark:border-slate-800">
                {displayChar?.toUpperCase() || 'U'}
            </div>
        );
    };

    return (
        <Container title="Profile" goBack={goBack}>
            <div className="text-center mb-8 relative">
                <UserAvatar name={user.name} email={user.email} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-4 break-words">{user.name || 'Student'}</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">@{user.id}</p>
                
                <div className="flex items-center justify-center mt-4 gap-2">
                    <div className="bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full flex items-center gap-2 border border-orange-200 dark:border-orange-800">
                        <span className="text-xl">🔥</span>
                        <p className="font-bold text-orange-600 dark:text-orange-400">
                            {user.streak || 0} Day Streak
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {editMode && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl w-full max-w-sm shadow-xl">
                            <h3 className="font-bold text-lg mb-4 text-slate-800 dark:text-white">Update {editMode === 'name' ? 'Full Name' : 'Phone Number'}</h3>
                            <input 
                                type="text" 
                                value={tempValue}
                                onChange={e => setTempValue(e.target.value)}
                                className="w-full p-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl mb-4 bg-transparent text-slate-800 dark:text-white font-bold"
                                autoFocus
                            />
                            <div className="flex gap-2">
                                <Button onClick={handleSave}>Save</Button>
                                <Button onClick={() => setEditMode(null)} variant="secondary">Cancel</Button>
                            </div>
                        </div>
                    </div>
                )}

                <div>
                    <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-2">Personal Details</h3>
                    <div className="bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-200 dark:border-slate-700 divide-y divide-slate-100 dark:divide-slate-700 px-6 shadow-sm">
                        <InfoRow 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>}
                            label="Full Name"
                            value={user.name || 'Not set'}
                            onEdit={() => startEdit('name')}
                        />
                        <InfoRow 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>}
                            label="Email / Username"
                            value={user.email}
                        />
                        <InfoRow 
                             icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" /></svg>}
                            label="Phone"
                            value={user.phone || 'Not set'}
                            onEdit={() => startEdit('phone')}
                        />
                    </div>
                </div>
                
                {/* Theme Toggle */}
                 <div>
                    <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-2">Appearance</h3>
                    <div className="bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-200 dark:border-slate-700 px-6 py-4 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-3">
                             <div className="text-slate-400 dark:text-slate-500">
                                {theme === 'dark' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" /></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" /></svg>
                                )}
                             </div>
                             <div>
                                <p className="text-sm font-bold text-slate-800 dark:text-white">Dark Mode</p>
                             </div>
                        </div>
                        <button 
                            onClick={toggleTheme}
                            className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${theme === 'dark' ? 'bg-green-500' : 'bg-slate-200'}`}
                        >
                            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}></div>
                        </button>
                    </div>
                 </div>

                <div className="px-2">
                    <Button onClick={onLogout} variant='danger'>
                        Log Out
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default PersonalInfoScreen;