
import React, { useMemo } from 'react';
import { User } from '../types';
import Container from './common/Container';

interface ProgressScreenProps {
    user: User;
}

const subjectIcons: Record<string, string> = {
    math: '➕',
    biology: '🧬',
    chemistry: '🧪',
    english: '📖',
    physics: '⚡️',
    civics: '🏛️',
    history: '🗿',
    geography: '🌍',
    economics: '💰',
    sat: '📝',
    aptitude: '🧠',
};

const ProgressScreen: React.FC<ProgressScreenProps> = ({ user }) => {
    // Calculate Statistics
    const stats = useMemo(() => {
        if (!user.progress.length) return null;

        // Subject-wise breakdown
        const subjectMap: Record<string, { totalScore: number; totalPossible: number; count: number }> = {};
        
        // Trend data (last 10 quizzes)
        const recentQuizzes = user.progress.slice(-10);
        const trendData = recentQuizzes.map(p => Math.round((p.score / p.total) * 100));

        // Overall aggregates
        let globalScore = 0;
        let globalTotal = 0;

        user.progress.forEach(p => {
            const subjectKey = p.subject.toLowerCase();
            if (!subjectMap[subjectKey]) {
                subjectMap[subjectKey] = { totalScore: 0, totalPossible: 0, count: 0 };
            }
            subjectMap[subjectKey].totalScore += p.score;
            subjectMap[subjectKey].totalPossible += p.total;
            subjectMap[subjectKey].count += 1;

            globalScore += p.score;
            globalTotal += p.total;
        });

        const subjectStats = Object.keys(subjectMap).map(key => ({
            name: key,
            percentage: Math.round((subjectMap[key].totalScore / subjectMap[key].totalPossible) * 100),
            count: subjectMap[key].count,
            icon: subjectIcons[key] || '📚'
        })).sort((a, b) => b.percentage - a.percentage);

        const overallPercentage = globalTotal > 0 ? (globalScore / globalTotal) * 100 : 0;
        
        // Estimate EUEE Score (Out of 700 for Natural Science approx)
        // We perform a simple projection based on current accuracy
        const estimatedScore = Math.round((overallPercentage / 100) * 700);

        return {
            subjectStats,
            trendData,
            overallPercentage: Math.round(overallPercentage),
            estimatedScore,
            totalQuizzes: user.progress.length
        };
    }, [user.progress]);

    // Render a simple SVG Line Chart for the trend
    const renderTrendChart = (data: number[]) => {
        if (data.length < 2) return (
            <div className="h-24 flex items-center justify-center text-slate-400 text-sm italic border-2 border-dashed border-slate-200 dark:border-slate-600 rounded-xl">
                Take more quizzes to see your trend line
            </div>
        );
        
        const width = 100;
        const height = 40;
        const max = 100;
        
        const points = data.map((val, i) => {
            const x = (i / (data.length - 1)) * width;
            const y = height - (val / max) * height; // Invert Y because SVG 0 is top
            return `${x},${y}`;
        }).join(' ');

        return (
            <div className="relative h-32 w-full mt-4">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {/* Fill Area */}
                    <path d={`M0,${height} ${points} L${width},${height} Z`} fill="url(#chartGradient)" />
                    {/* Line */}
                    <polyline fill="none" stroke="#3b82f6" strokeWidth="2" points={points} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                    {/* Data Points */}
                    {data.map((val, i) => {
                        const x = (i / (data.length - 1)) * width;
                        const y = height - (val / max) * height;
                        return <circle key={i} cx={x} cy={y} r="1.5" className="fill-blue-500 stroke-white dark:stroke-slate-800 stroke-[0.5]" />
                    })}
                </svg>
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>Oldest</span>
                    <span>Recent</span>
                </div>
            </div>
        );
    };

    if (!stats) {
         return (
            <Container title="Performance Analytics">
                <div className="text-center p-10 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 border-dashed">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-bold">No data available yet.</p>
                    <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">Complete a quiz to see your professional analysis!</p>
                </div>
            </Container>
        );
    }

    return (
        <Container title="Analytics">
            {/* Hero Section: Estimated Score */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-indigo-900 dark:to-slate-900 rounded-3xl p-6 text-white shadow-lg mb-6 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-slate-300 text-sm uppercase tracking-widest font-semibold mb-1">Estimated Entrance Score</h2>
                    <div className="flex items-baseline gap-2">
                        <span className="text-6xl font-extrabold tracking-tight">{stats.estimatedScore}</span>
                        <span className="text-2xl text-slate-400 font-medium">/ 700</span>
                    </div>
                    <p className="mt-2 text-slate-400 text-sm">
                        Based on your {stats.overallPercentage}% average across {stats.totalQuizzes} quizzes.
                        <br/>Keep practicing to increase your confidence!
                    </p>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M45.7,-51.3C57.2,-36.7,63.3,-18.4,61.7,-1.6C60.1,15.2,50.8,30.5,39.3,43.4C27.8,56.3,13.9,66.8,-1.8,68.6C-17.5,70.4,-35,63.5,-48.7,50.6C-62.4,37.7,-72.3,18.8,-70.5,1.8C-68.7,-15.2,-55.2,-30.4,-41.5,-45C-27.8,-59.6,-13.9,-73.6,2.2,-75.8C18.4,-78,34.2,-65.9,45.7,-51.3Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Trend Chart */}
                <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="text-slate-800 dark:text-white font-bold flex items-center gap-2">
                        <span className="text-blue-500">📈</span> Recent Performance Trend
                    </h3>
                    {renderTrendChart(stats.trendData)}
                </div>

                {/* Quick Stats */}
                <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 className="text-slate-800 dark:text-white font-bold mb-4 flex items-center gap-2">
                            <span className="text-orange-500">🔥</span> Quick Stats
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Quizzes Taken</p>
                                <p className="text-2xl font-bold text-slate-800 dark:text-white">{stats.totalQuizzes}</p>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Avg Accuracy</p>
                                <p className="text-2xl font-bold text-slate-800 dark:text-white">{stats.overallPercentage}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 text-xs text-slate-400">
                        Consistency is key. Try to maintain your streak!
                    </div>
                </div>
            </div>
            
            {/* Subject Breakdown */}
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-3 px-1">Subject Proficiency</h3>
            <div className="space-y-3 mb-8">
                {stats.subjectStats.map((stat, index) => {
                    let barColor = "bg-green-500";
                    if (stat.percentage < 50) barColor = "bg-red-500";
                    else if (stat.percentage < 75) barColor = "bg-yellow-500";

                    return (
                        <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{stat.icon}</span>
                                    <div>
                                        <p className="font-bold text-slate-800 dark:text-white capitalize">{stat.name}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{stat.count} Quizzes</p>
                                    </div>
                                </div>
                                <span className="text-xl font-bold text-slate-700 dark:text-slate-200">{stat.percentage}%</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5">
                                <div className={`${barColor} h-2.5 rounded-full transition-all duration-1000`} style={{ width: `${stat.percentage}%` }}></div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recent History */}
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-3 px-1">Recent History</h3>
            <div className="space-y-2">
                 {user.progress.slice().reverse().slice(0, 5).map((p, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                         <div className="flex items-center gap-3">
                            <div className={`w-2 h-12 rounded-full ${p.score/p.total >= 0.5 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <div>
                                <p className="font-bold text-sm text-slate-700 dark:text-slate-200 capitalize">{p.subject}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    {p.unit ? p.unit.replace(/_/g, ' ') : `Paper ${p.year}`}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="font-bold text-slate-800 dark:text-white">{p.score}/{p.total}</span>
                        </div>
                    </div>
                ))}
            </div>

        </Container>
    );
};

export default ProgressScreen;
