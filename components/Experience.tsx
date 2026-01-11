"use client";

import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';

interface Job {
    title: string;
    company: string;
    location: string;
    period: string;
    current?: boolean;
}

export default function Experience() {
    const jobs: Job[] = [
        {
            title: "Senior Cloud Engineer",
            company: "Team Computers",
            location: "Gurugram, India",
            period: "2026 - Present",
            current: true
        },
        {
            title: "Pre-Sales Engineer",
            company: "Team Computers",
            location: "New Delhi, India",
            period: "2024 - 2026"
        },
        {
            title: "Cloud Engineer",
            company: "Team Computers",
            location: "Bengaluru, India",
            period: "2023 - 2024"
        },
        {
            title: "Cloud Engineer - Intern",
            company: "Webscoot.io",
            location: "Remote",
            period: "Nov 2022 - Dec 2022"
        }
    ];

    return (
        <section id="experience" className="bento-card">
            <h2 className="text-[rgb(var(--foreground))]">Experience</h2>
            <div className="relative border-l border-[rgb(var(--border))] ml-3 space-y-8">
                {jobs.map((job, index) => (
                    <div key={index} className="pl-8 relative group" style={{ paddingLeft: '2rem' }}>
                        {/* Timeline Dot */}
                        <span className={`absolute -left-2 top-1.5 h-4 w-4 rounded-full border-2 border-[rgb(var(--background))] ${job.current ? 'bg-[#1DA1F2]' : 'bg-[rgb(var(--muted-foreground))]'}`}></span>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                            <h3 className={`font-bold text-lg transition-colors ${job.current ? 'text-[#1DA1F2]' : 'text-[rgb(var(--foreground))] group-hover:text-[rgb(var(--muted-foreground))]'}`}>
                                {job.title}
                            </h3>
                            <span className="text-sm font-medium px-2 py-0.5 rounded bg-[rgb(var(--secondary))] text-[rgb(var(--secondary-foreground))] w-fit">
                                {job.period}
                            </span>
                        </div>

                        <div className="text-[rgb(var(--muted-foreground))] font-medium mb-1">
                            {job.company}
                        </div>

                        <div className="flex items-center gap-1 text-sm text-[rgb(var(--muted-foreground))]">
                            <MapPin className="icon-sm" />
                            {job.location}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
