
import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    title: string;
    goBack?: () => void;
}

const Container: React.FC<ContainerProps> = ({ children, title, goBack }) => {
    return (
        <div className="w-full animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
                {goBack && (
                    <button
                        onClick={goBack}
                        className="text-2xl text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors h-10 w-10 flex items-center justify-center rounded-full border-2 border-slate-200 dark:border-slate-600 flex-shrink-0"
                        aria-label="Go back"
                    >
                        &times;
                    </button>
                )}
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white text-left">{title}</h1>
            </div>

            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
};

export default Container;