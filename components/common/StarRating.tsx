import React from 'react';

interface StarRatingProps {
    rating: number; // 0 to 3
}

const Star: React.FC<{ filled: boolean }> = ({ filled }) => {
    const starColor = filled ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-500';
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 ${starColor}`}>
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
        </svg>
    );
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    return (
        <div className="flex justify-center items-center gap-1">
            {[1, 2, 3].map((star) => (
                <Star key={star} filled={star <= rating} />
            ))}
        </div>
    );
};

export default StarRating;