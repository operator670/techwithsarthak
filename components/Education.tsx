"use client";

import { GraduationCap, Award, Brain, Network, Cloud } from 'lucide-react';

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
        <div className="grid grid-cols-1 gap-6">
            <section className="bento-card">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-[rgb(var(--secondary))] rounded-xl">
                        <GraduationCap className="icon-md" />
                    </div>
                    <div>
                        <h2 className="text-[rgb(var(--foreground))] mb-1">Education</h2>
                        <h3 className="font-bold text-[rgb(var(--foreground))] text-lg">Bachelor of Engineering</h3>
                        <p className="text-[rgb(var(--muted-foreground))]">Information Science • Nitte Meenakshi Institute of Technology</p>
                        <p className="text-sm text-[rgb(var(--muted-foreground))] mt-1">2019 - 2023 • 8.3 CGPA</p>
                    </div>
                </div>
            </section>

            <section className="bento-card">
                <h2 className="text-[rgb(var(--foreground))]">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--secondary))]">
                            <div className="shrink-0">{cert.icon}</div>
                            <div>
                                <p className="font-semibold text-sm text-[rgb(var(--foreground))] leading-tight">{cert.name}</p>
                                <p className="text-xs text-[rgb(var(--muted-foreground))]">{cert.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
