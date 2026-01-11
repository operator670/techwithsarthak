"use client";

import { Award, Star } from 'lucide-react';

export default function Education() {
    const certifications = [
        {
            name: "Google Cloud Certified Generative AI Leader",
            year: "2025",
            icon: <Award className="icon text-[#4285F4]" />
        },
        {
            name: "Professional Cloud Architect",
            year: "2025",
            icon: <Award className="icon text-[#EA4335]" />
        },
        {
            name: "Professional Network Engineer",
            year: "2024",
            icon: <Award className="icon text-[#FBBC04]" />
        },
        {
            name: "Associate Cloud Engineer",
            year: "2021",
            icon: <Award className="icon text-[#34A853]" />
        }
    ];

    return (
        <div className="grid grid-cols-1 gap-4">
            <section className="bento-card rounded-[3rem]! p-8 flex flex-col gap-6">
                <div>
                    <h2 className="text-[rgb(var(--foreground))] mb-1 flex items-center gap-2">
                        <Star className="w-5 h-5 text-purple-500 fill-purple-500" />
                        Education
                    </h2>
                    <h3 className="font-bold text-[rgb(var(--foreground))] text-lg">Bachelor of Engineering</h3>
                    <p className="text-[rgb(var(--muted-foreground))] text-sm sm:text-base">Information Science • Nitte Meenakshi Institute of Technology</p>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700 w-fit">
                            2019 - 2023
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700 w-fit">
                            8.3 CGPA
                        </span>
                    </div>
                </div>
            </section>

            <section className="bento-card rounded-[3rem]! p-8 flex flex-col gap-6">
                <h2 className="text-[rgb(var(--foreground))] flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-indigo-500 fill-indigo-500" />
                    Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bento-card bg-transparent hover:bg-[rgb(var(--secondary))] transition-all duration-300 group flex items-center gap-5 p-6! border border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-400 dark:hover:border-zinc-600 shadow-none hover:shadow-md"
                        >
                            <div className="p-3 bg-[rgb(var(--background))] rounded-xl border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 shadow-sm transition-all duration-300 group-hover:scale-105">
                                <div className="w-6 h-6 flex items-center justify-center">
                                    {cert.icon}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-bold text-[rgb(var(--foreground))] leading-tight group-hover:text-indigo-500 transition-colors">{cert.name}</p>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700 w-fit">
                                    {cert.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
