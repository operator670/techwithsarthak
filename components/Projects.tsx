"use client";

import { Github, ExternalLink, Code2, Cloud, Brain, Terminal } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    icon: React.ReactNode;
}

export default function Projects() {
    const projects: Project[] = [
        {
            title: "Enterprise Google Cloud Landing Zone",
            description: "Automated deployment of secure, scalable landing zones across GCP using Terraform.",
            tags: ["Terraform", "GCP", "Infrastructure as Code", "Security"],
            github: "https://github.com/operator670/google-cloud-terraform",
            icon: <Cloud className="w-5 h-5 text-blue-500" />
        }
    ];

    return (
        <section id="projects" className="bento-card">
            <h2 className="text-[rgb(var(--foreground))]">Featured Projects</h2>
            <div className="flex flex-col gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group flex flex-col rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--secondary))] hover:bg-[rgb(var(--card))] hover:shadow-2xl hover:shadow-[rgb(var(--foreground),0.05)] transition-all duration-300 overflow-hidden"
                        style={{ padding: '0.4rem 2.5rem' }}
                    >
                        <div className="flex items-start justify-between mb-4 px-4">
                            <div className="p-3 rounded-xl bg-[rgb(var(--background))] border border-[rgb(var(--border))] group-hover:scale-110 transition-transform shadow-sm">
                                {project.icon}
                            </div>
                            <div className="flex gap-2 pr-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] hover:bg-[rgb(var(--secondary))] rounded-lg transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                    </a>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] hover:bg-[rgb(var(--secondary))] rounded-lg transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="text-[rgb(var(--foreground))] font-bold text-xl mb-2 leading-tight pl-10">
                            {project.title}
                        </h3>

                        <p className="text-sm text-[rgb(var(--muted-foreground))] mb-4 line-clamp-2 pl-10">
                            {project.description}
                        </p>

                        <div className="mt-auto flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-[rgb(var(--card))] text-[rgb(var(--foreground))] border border-[rgb(var(--border))]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
