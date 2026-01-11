"use client";

import { Clock, TrendingUp, Award, Star } from 'lucide-react';

export default function About() {
    // Highlights Card
    const highlights = [
        {
            icon: <Clock className="icon" />,
            text: "4 years experience",
            sub: "Cloud Engineering"
        },
        {
            icon: <TrendingUp className="icon" />,
            text: "10+ Migrations",
            sub: "To Google Cloud"
        },
        {
            icon: <Award className="icon" />,
            text: "4x Certified",
            sub: "Google Cloud"
        }
    ];

    return (
        <section id="about" className="flex flex-col gap-6 mt-8 ">
            <div className="bento-card">
                <h2 className="text-[rgb(var(--foreground))]">About Me</h2>
                <p className="text-lg leading-relaxed text-[rgb(var(--foreground))]">
                    As a <strong className="font-semibold text-[rgb(var(--foreground))]">Senior Cloud Engineer</strong> with
                    a deep focus on <strong className="font-semibold text-[rgb(var(--foreground))]">Google Cloud Platform</strong>,
                    I specialize in architecting enterprise-grade solutions across <strong className="font-semibold text-[rgb(var(--foreground))]">Cloud Infrastructure Modernization</strong>,
                    <strong className="font-semibold text-[rgb(var(--foreground))]"> Networking</strong>,
                    <strong className="font-semibold text-[rgb(var(--foreground))]"> Security</strong>, and
                    <strong className="font-semibold text-[rgb(var(--foreground))]"> Generative AI</strong>.
                </p>
                <p className="text-lg leading-relaxed text-[rgb(var(--foreground))] mt-4">
                    I have led complex <strong className="font-semibold text-[rgb(var(--foreground))]">cloud migration initiatives</strong> from
                    on-premises and multi-cloud environments to <strong className="font-semibold text-[rgb(var(--foreground))]">Google Cloud</strong>,
                    delivering scalable, secure, and cost-optimized infrastructure.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                    <div key={index} className="bento-card flex flex-col items-center text-center gap-3 p-6">
                        <div className="p-3 bg-[rgb(var(--secondary))] rounded-full text-[rgb(var(--foreground))]">
                            {item.icon}
                        </div>
                        <div>
                            <p className="font-bold text-[rgb(var(--foreground))]">{item.text}</p>
                            <p className="text-[rgb(var(--muted-foreground))] text-sm">{item.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
