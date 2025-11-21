
import React from 'react';
import { View } from '../types';

interface NavBarProps {
    setView: (view: View) => void;
    activeView: View;
}

interface NavItemProps {
    icon: string;
    label: string;
    onClick: () => void;
    isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, onClick, isActive }) => {
    const activeClasses = isActive ? 'text-green-500' : 'text-slate-400 hover:text-green-400';
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center font-bold p-2 h-full transition-colors w-full ${activeClasses}`}
        >
            <span className="text-3xl mb-1">{icon}</span>
            <span className="text-xs sm:text-sm tracking-wide uppercase">{label}</span>
        </button>
    );
};

const NavBar: React.FC<NavBarProps> = ({ setView, activeView }) => {
    // Updated learningViews to include new book routes
    const learningViews: View[] = ['subjects', 'units', 'levels', 'books', 'book-grade', 'book-chapters', 'book-reader', 'quiz'];

    return (
        <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white dark:bg-slate-800 border-t-2 border-slate-200 dark:border-slate-700 z-50">
            <div className="mx-auto h-full grid grid-cols-4 max-w-2xl">
                <NavItem icon="📝" label="Learn" onClick={() => setView('subjects')} isActive={learningViews.includes(activeView) && !['books', 'book-grade', 'book-chapters', 'book-reader'].includes(activeView)} />
                <NavItem icon="📖" label="Books" onClick={() => setView('books')} isActive={['books', 'book-grade', 'book-chapters', 'book-reader'].includes(activeView)} />
                <NavItem icon="📊" label="Scores" onClick={() => setView('progress')} isActive={activeView === 'progress'} />
                <NavItem icon="👤" label="Profile" onClick={() => setView('profile')} isActive={activeView === 'profile'} />
            </div>
        </nav>
    );
};

export default NavBar;
