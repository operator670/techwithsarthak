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
        <section id="achievements" className="bento-card">
            <h2 className="text-[rgb(var(--foreground))]">Key Achievements</h2>
            <div className="space-y-4">
                {achievements.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-[rgb(var(--secondary))] rounded-xl transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-[rgb(var(--secondary))] rounded-full border border-[rgb(var(--border))]">
                                {item.icon}
                            </div>
                            <span className="font-medium text-[rgb(var(--foreground))]">{item.title}</span>
                        </div>
                        <span className="text-sm font-semibold px-2 py-1 rounded bg-[rgb(var(--secondary))] text-[rgb(var(--muted-foreground))] border border-[rgb(var(--border))]">
                            {item.year}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
