"use client";

import { Clock, TrendingUp, Award, Star } from 'lucide-react';

export default function About() {
    // Highlights Card
    const highlights = [
        {
            icon: <Clock className="icon" />,
            text: "3 years experience",
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
        <section id="about" className="flex flex-col gap-6 scroll-mt-32">
            <div className="bento-card rounded-[3rem]! bg-linear-to-br from-white/60 to-white/30 dark:from-zinc-900/60 dark:to-zinc-900/30 backdrop-blur-md border-white/20 shadow-xl shadow-black/5">
                <h2 className="text-[rgb(var(--foreground))] flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    About Me
                </h2>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((item, index) => (
                    <div key={index} className="bento-card rounded-4xl! flex flex-col items-center text-center gap-3 p-6 group hover:scale-[1.02] transition-all duration-300">
                        <div className="p-3 bg-[rgb(var(--secondary))] rounded-2xl text-[rgb(var(--foreground))] group-hover:rotate-6 transition-transform">
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
