import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Flame, Calendar, TrendingUp } from 'lucide-react';

interface ContributionDay {
    date: string;
    count: number;
    level: number; // 0-4 intensity
}

interface GitHubContributionsProps {
    username: string;
}

// Generate mock contribution data for visualization
const generateMockContributions = (): ContributionDay[] => {
    const days: ContributionDay[] = [];
    const now = new Date();

    for (let i = 364; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);

        // Random contribution pattern with higher activity on weekdays
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const baseChance = isWeekend ? 0.3 : 0.7;
        const hasContribution = Math.random() < baseChance;

        const count = hasContribution ? Math.floor(Math.random() * 12) + 1 : 0;
        const level = count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 8 ? 3 : 4;

        days.push({
            date: date.toISOString().split('T')[0],
            count,
            level,
        });
    }

    return days;
};

const levelColors = [
    'bg-neutral-800', // 0: no contributions
    'bg-emerald-900', // 1: 1-2 contributions
    'bg-emerald-700', // 2: 3-5 contributions
    'bg-emerald-500', // 3: 6-8 contributions
    'bg-emerald-400', // 4: 9+ contributions
];

export const GitHubContributions: React.FC<GitHubContributionsProps> = ({ username }) => {
    const [contributions, setContributions] = useState<ContributionDay[]>([]);
    const [stats, setStats] = useState({
        totalContributions: 0,
        currentStreak: 0,
        longestStreak: 0,
        avgPerDay: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            const data = generateMockContributions();
            setContributions(data);

            // Calculate stats
            const total = data.reduce((sum, day) => sum + day.count, 0);
            let currentStreak = 0;
            let longestStreak = 0;
            let streak = 0;

            for (let i = data.length - 1; i >= 0; i--) {
                if (data[i].count > 0) {
                    streak++;
                    if (i === data.length - 1 || currentStreak > 0 || data[i + 1]?.count > 0) {
                        currentStreak = streak;
                    }
                    longestStreak = Math.max(longestStreak, streak);
                } else {
                    if (currentStreak === 0 && i === data.length - 1) {
                        // Allow one day gap for current streak
                    } else {
                        streak = 0;
                    }
                }
            }

            setStats({
                totalContributions: total,
                currentStreak: currentStreak,
                longestStreak: longestStreak,
                avgPerDay: Math.round(total / 365 * 10) / 10,
            });

            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, [username]);

    // Group contributions into weeks (7 days each)
    const weeks: ContributionDay[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
        weeks.push(contributions.slice(i, i + 7));
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-12">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full"
                />
                <p className="mt-4 text-white/60">Loading contributions for @{username}...</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/10 rounded-xl p-4 border border-white/10"
                >
                    <div className="flex items-center gap-2 text-white/60 mb-1">
                        <GitCommit className="w-4 h-4" />
                        <span className="text-xs font-medium uppercase tracking-wide">Total</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stats.totalContributions.toLocaleString()}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/10 rounded-xl p-4 border border-white/10"
                >
                    <div className="flex items-center gap-2 text-white/60 mb-1">
                        <Flame className="w-4 h-4" />
                        <span className="text-xs font-medium uppercase tracking-wide">Streak</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stats.currentStreak} days</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/10 rounded-xl p-4 border border-white/10"
                >
                    <div className="flex items-center gap-2 text-white/60 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs font-medium uppercase tracking-wide">Longest</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stats.longestStreak} days</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/10 rounded-xl p-4 border border-white/10"
                >
                    <div className="flex items-center gap-2 text-white/60 mb-1">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs font-medium uppercase tracking-wide">Avg/Day</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stats.avgPerDay}</p>
                </motion.div>
            </div>

            {/* Contribution Graph */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 rounded-xl p-4 border border-white/10 overflow-x-auto"
            >
                <div className="flex gap-[3px] min-w-max">
                    {weeks.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-[3px]">
                            {week.map((day, dayIndex) => (
                                <motion.div
                                    key={day.date}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + (weekIndex * 0.01) + (dayIndex * 0.002) }}
                                    className={`w-3 h-3 rounded-sm ${levelColors[day.level]} hover:ring-2 hover:ring-white/30 transition-all cursor-pointer`}
                                    title={`${day.date}: ${day.count} contributions`}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-end gap-2 mt-4 text-xs text-white/50">
                    <span>Less</span>
                    {levelColors.map((color, i) => (
                        <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
                    ))}
                    <span>More</span>
                </div>
            </motion.div>

            {/* GitHub Profile Link */}
            <motion.a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-4 border border-white/10 text-white font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                View @{username} on GitHub
            </motion.a>
        </div>
    );
};
