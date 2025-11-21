import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'list' | 'danger';
    icon?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon, className, ...props }) => {
    const baseClasses = "w-full p-3 font-bold text-lg rounded-2xl border-b-4 uppercase tracking-wider transition-all transform active:translate-y-0.5 active:border-b-2 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed";
    
    const variantClasses = {
        primary: 'bg-green-500 border-green-700 text-white hover:bg-green-600 disabled:bg-slate-300 disabled:border-slate-400 disabled:text-slate-500',
        secondary: 'bg-blue-500 border-blue-700 text-white hover:bg-blue-600',
        danger: 'bg-red-500 border-red-700 text-white hover:bg-red-600',
        list: 'bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-white normal-case tracking-normal !justify-between !font-bold !p-4 hover:bg-slate-50 dark:hover:bg-slate-600 active:transform-none active:border-2'
    };

    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
            {icon && <span className="text-3xl">{icon}</span>}
            <span className="flex-grow text-left">{children}</span>
        </button>
    );
};

export default Button;