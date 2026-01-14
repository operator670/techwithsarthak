"use client";

import { Star, Target, Mic, Trophy, Medal } from 'lucide-react';

export default function Achievements() {
    const achievements = [
        {
            title: "Google Cloud Partner All Star - Solution Engineering",
            year: "2025",
            icon: <Star className="icon text-yellow-500" />
        },
        {
            title: "Google Cloud Pre Sales Technical Expert - Infrastructure Modernization, Networking, Security",
            year: "2025",
            icon: <Target className="icon text-red-500" />
        },
        {
            title: "Speaker at FDP Program NMIT (AI)",
            year: "2026",
            icon: <Mic className="icon text-blue-500" />
        },
        {
            title: "3× On-Time Delivery Champion - Team Computers",
            year: "2023-25",
            icon: <Trophy className="icon text-orange-500" />
        }
    ];

    return (
        <section id="achievements" className="bento-card rounded-[3rem]!">
            <h2 className="text-[rgb(var(--foreground))] flex items-center gap-2 mb-8">
                <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                Key Achievements
            </h2>
            <div className="space-y-8">
                {achievements.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-[rgb(var(--secondary))] rounded-xl transition-colors group">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="p-2 bg-[rgb(var(--secondary))] rounded-full border border-[rgb(var(--border))] group-hover:border-indigo-400/50 transition-colors flex-shrink-0">
                                {item.icon}
                            </div>
                            <span className="font-medium text-[rgb(var(--foreground))] text-sm sm:text-base">{item.title}</span>
                        </div>
                        <span
                            className="inline-flex items-center justify-center h-10 text-[11px] font-bold uppercase tracking-widest rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 shadow-sm transition-all flex-shrink-0"
                            style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', margin: '0.25rem' }}
                        >
                            {item.year}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
