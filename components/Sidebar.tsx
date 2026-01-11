"use client";

import {
    Github,
    Linkedin,
    Mail,
    MapPin,
    Code2,
    Cloud,
    Terminal,
    FileText,
    Award
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Sidebar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <aside className="lg:w-[320px] shrink-0 flex flex-col gap-6 lg:sticky lg:top-8 h-fit">

            {/* Profile Card */}
            <div className="bento-card flex flex-col items-center text-center p-8">
                <div className="w-32 h-32 rounded-full mb-6 relative group overflow-hidden border-2 border-[rgb(var(--border))]">
                    <img
                        src="/images/Sarthak.jpeg"
                        alt="Sarthak Kesarwani"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                </div>

                <h1 className="text-2xl font-bold text-[rgb(var(--foreground))] mb-2">
                    Sarthak Kesarwani
                </h1>
                <p className="text-[rgb(var(--muted-foreground))] font-medium mb-4">
                    Senior Cloud Engineer
                </p>

                <div className="flex items-center gap-2 text-sm text-[rgb(var(--muted-foreground))] bg-[rgb(var(--secondary))] px-3 py-1.5 rounded-full mb-6">
                    <MapPin className="icon-sm" />
                    <span>New Delhi, India</span>
                </div>

                <div className="flex gap-3" style={{ marginTop: '2rem' }}>
                    <ThemeToggle />
                    <a
                        href="mailto:official.sarthak905@gmail.com"
                        className="btn-zinc group/email"
                        aria-label="Email Me"
                    >
                        <div className="p-1.5 rounded bg-red-100 dark:bg-red-900/30 group-hover/email:bg-red-200 transition-colors">
                            <Mail className="icon text-[#EA4335]" />
                        </div>
                        <span>Email Me</span>
                    </a>
                </div>
            </div>

            {/* Connect Card */}
            <div className="bento-card">
                <h3 className="mb-4 text-[rgb(var(--foreground))]">Connect</h3>
                <div className="flex flex-col gap-2">
                    <a
                        href="https://www.linkedin.com/in/sarthak-kesarwani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[rgb(var(--secondary))] transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[rgb(var(--secondary))] rounded-lg group-hover:bg-white dark:group-hover:bg-black transition-colors">
                                <Linkedin className="icon text-[#0A66C2]" />
                            </div>
                            <span className="font-medium text-[rgb(var(--foreground))]">LinkedIn</span>
                        </div>
                        <span className="text-[rgb(var(--muted-foreground))] text-sm">Connect</span>
                    </a>

                    <a
                        href="https://github.com/operator670"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[rgb(var(--secondary))] transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[rgb(var(--secondary))] rounded-lg group-hover:bg-white dark:group-hover:bg-black transition-colors">
                                <Github className="icon text-[#8250DF]" />
                            </div>
                            <span className="font-medium text-[rgb(var(--foreground))]">GitHub</span>
                        </div>
                        <span className="text-[rgb(var(--muted-foreground))] text-sm">Follow</span>
                    </a>

                    <a
                        href="https://medium.com/@Sarthak_Kesarwani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[rgb(var(--secondary))] transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[rgb(var(--secondary))] rounded-lg group-hover:bg-white dark:group-hover:bg-black transition-colors">
                                <FileText className="icon text-[#00AB6C]" />
                            </div>
                            <span className="font-medium text-[rgb(var(--foreground))]">Medium</span>
                        </div>
                        <span className="text-[rgb(var(--muted-foreground))] text-sm">Read</span>
                    </a>

                    <a
                        href="https://x.com/acloudtomato"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[rgb(var(--secondary))] transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[rgb(var(--secondary))] rounded-lg group-hover:bg-white dark:group-hover:bg-black transition-colors">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="icon"
                                    fill="#1DA1F2"
                                    aria-hidden="true"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </div>
                            <span className="font-medium text-[rgb(var(--foreground))]">X (Twitter)</span>
                        </div>
                        <span className="text-[rgb(var(--muted-foreground))] text-sm">Follow</span>
                    </a>

                    <a
                        href="https://leetcode.com/u/user6223e/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[rgb(var(--secondary))] transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[rgb(var(--secondary))] rounded-lg group-hover:bg-white dark:group-hover:bg-black transition-colors">
                                <Code2 className="icon text-[#FFA116]" />
                            </div>
                            <span className="font-medium text-[rgb(var(--foreground))]">LeetCode</span>
                        </div>
                        <span className="text-[rgb(var(--muted-foreground))] text-sm">Solve</span>
                    </a>

                    <a
                        href="https://www.credly.com/users/sarthak-kesarwani.cb11b866/skills"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[rgb(var(--secondary))] transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[rgb(var(--secondary))] rounded-lg group-hover:bg-white dark:group-hover:bg-black transition-colors">
                                <Award className="icon text-[#FF6B00]" />
                            </div>
                            <span className="font-medium text-[rgb(var(--foreground))]">Credly</span>
                        </div>
                        <span className="text-[rgb(var(--muted-foreground))] text-sm">Badges</span>
                    </a>
                </div>
            </div>

            {/* Skills Summary */}
            <div className="bento-card">
                <h3 className="mb-4 text-[rgb(var(--foreground))]">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[rgb(var(--secondary))] text-xs font-medium border border-[rgb(var(--border))]">Google Cloud</span>
                    <span className="px-3 py-1 rounded-full bg-[rgb(var(--secondary))] text-xs font-medium border border-[rgb(var(--border))]">AWS</span>
                    <span className="px-3 py-1 rounded-full bg-[rgb(var(--secondary))] text-xs font-medium border border-[rgb(var(--border))]">Terraform</span>
                    <span className="px-3 py-1 rounded-full bg-[rgb(var(--secondary))] text-xs font-medium border border-[rgb(var(--border))]">Kubernetes</span>
                    <span className="px-3 py-1 rounded-full bg-[rgb(var(--secondary))] text-xs font-medium border border-[rgb(var(--border))]">Docker</span>
                    <span className="px-3 py-1 rounded-full bg-[rgb(var(--secondary))] text-xs font-medium border border-[rgb(var(--border))]">Prometheus</span>
                    <span className="px-3 py-1 rounded-full bg-[rgb(var(--secondary))] text-xs font-medium border border-[rgb(var(--border))]">Python</span>
                    <span className="px-3 py-1 rounded-full bg-[rgb(var(--secondary))] text-xs font-medium border border-[rgb(var(--border))]">C/C++</span>
                    <span className="px-3 py-1 rounded-full bg-[rgb(var(--secondary))] text-xs font-medium border border-[rgb(var(--border))]">Generative AI</span>
                    <span className="px-3 py-1 rounded-full bg-[rgb(var(--secondary))] text-xs font-medium border border-[rgb(var(--border))]">Linux</span>
                    <span className="px-3 py-1 rounded-full bg-[rgb(var(--secondary))] text-xs font-medium border border-[rgb(var(--border))]">Agentic AI</span>
                </div>
            </div>

        </aside>
    );
}
