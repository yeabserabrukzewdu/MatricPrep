import React, { useState } from 'react';
import { User } from '../types';
import Container from './common/Container';
import Button from './common/Button';

interface PersonalInfoScreenProps {
    user: User;
    onUpdateUser: (user: User) => void;
    onLogout: () => void;
    goBack: () => void;
}

const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="flex items-center py-3">
        <div className="flex-shrink-0 w-8 text-slate-400">{icon}</div>
        <div className="flex-grow">
            <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
            <p className="text-slate-800 dark:text-white font-semibold break-all">{value}</p>
        </div>
    </div>
);

const PersonalInfoScreen: React.FC<PersonalInfoScreenProps> = ({ user, onUpdateUser, onLogout, goBack }) => {
    const [isEditingPhone, setIsEditingPhone] = useState(false);
    const [newPhone, setNewPhone] = useState(user.phone || '');

    const handleUpdatePhone = () => {
        if (newPhone.trim() === '') return;
        const updatedUser = { ...user, phone: newPhone };
        onUpdateUser(updatedUser);
        setIsEditingPhone(false);
    };

    const UserAvatar: React.FC<{ email: string }> = ({ email }) => (
        <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto text-white text-4xl font-bold">
            {email?.[0]?.toUpperCase() || 'U'}
        </div>
    );

    return (
        <Container title="Profile" goBack={goBack}>
            <div className="text-center mb-8">
                <UserAvatar email={user.email} />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-4 break-all">{user.email}</h2>
                <div className="flex items-center justify-center mt-2">
                    <span className="text-2xl">🔥</span>
                    <p className="text-lg font-bold text-orange-500 ml-1">
                        {user.streak || 0} Day Streak
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Account Details</h3>
                    <div className="bg-white dark:bg-slate-700 rounded-2xl border-2 border-slate-200 dark:border-slate-600 divide-y divide-slate-200 dark:divide-slate-600 px-4">
                        <InfoRow 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>}
                            label="Email"
                            value={user.email}
                        />
                         <div className="py-3">
                            {isEditingPhone ? (
                                <div className="space-y-3 animate-fadeIn">
                                    <div>
                                        <label className="text-sm text-slate-500 dark:text-slate-400">Phone Number</label>
                                        <input
                                            type="tel"
                                            value={newPhone}
                                            onChange={(e) => setNewPhone(e.target.value)}
                                            placeholder="Enter phone number"
                                            className="w-full p-2 mt-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <Button onClick={handleUpdatePhone} className="!text-sm !py-2">Save</Button>
                                        <Button onClick={() => setIsEditingPhone(false)} variant="secondary" className="!text-sm !py-2">Cancel</Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-8 text-slate-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" /></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                                        <p className="text-slate-800 dark:text-white font-semibold">{user.phone || 'Not set'}</p>
                                    </div>
                                    <button onClick={() => setIsEditingPhone(true)} className="text-sm font-bold text-blue-500 hover:text-blue-600">Edit</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Danger Zone</h3>
                    <Button onClick={onLogout} variant='danger'>
                        Log Out
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default PersonalInfoScreen;