"use client";

import { Github, ExternalLink, Code2, Cloud, Brain, Terminal, Star, Zap, Database } from 'lucide-react';

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
            title: "Project Calypso",
            description: "Agentic AI System for ED Tech industry powered by ADK (Agent Development Kit). Implements a microservices architecture with intelligent agents for personalized learning experiences, scalable data management, and seamless integration across educational platforms.",
            tags: ["ADK", "Next.js", "FastAPI", "Cloud SQL", "Microservices", "Cloud Run", "Secret Manager", "Cloud Build"],
            icon: <Zap className="w-5 h-5 text-yellow-500" />
        },
        {
            title: "App Deployment on GKE with Cloud SQL Sidecar Proxy",
            description: "Comprehensive guide on containerizing and deploying Flask applications to Google Kubernetes Engine with secure Cloud SQL connectivity using sidecar proxy pattern. Covers Docker containerization, private Cloud SQL instances, GKE cluster setup, and Kubernetes configurations including Deployments, Services, and ConfigMaps.",
            tags: ["Flask", "GKE", "Cloud SQL", "Docker", "Kubernetes", "Sidecar Proxy", "Python"],
            link: "https://medium.com/google-cloud/streamlining-flask-app-deployment-on-gke-with-cloud-sql-and-a-secure-sidecar-proxy-aecca4d67683",
            icon: <Database className="w-5 h-5 text-emerald-500" />
        },
        {
            title: "Enterprise Google Cloud Landing Zone",
            description: "Automated deployment of secure, scalable landing zones across GCP using Terraform.",
            tags: ["Terraform", "GCP", "Infrastructure as Code", "Security", "GitHub Actions"],
            github: "https://github.com/operator670/google-cloud-terraform",
            icon: <Cloud className="w-5 h-5 text-blue-500" />
        }
    ];

    return (
        <section id="projects" className="bento-card rounded-[3rem]! p-8!">
            <div className="mb-6">
                <h2 className="text-[rgb(var(--foreground))] mb-0 flex items-center gap-2 text-2xl">
                    <Star className="w-6 h-6 text-indigo-500 fill-indigo-500" />
                    Featured Projects
                </h2>
            </div>

            <div className="flex flex-col gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col p-8! rounded-[2.5rem] border border-[rgb(var(--border))] hover:border-indigo-500/30 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900/50 dark:to-zinc-900/10 hover:shadow-2xl hover:shadow-black/5 transition-all duration-300"
                    >
                        <div className="flex gap-6">
                            {/* Left Column: Technology Icon */}
                            <div className="shrink-0 pt-1">
                                <div className="p-3 rounded-2xl bg-white dark:bg-zinc-900/50 border border-[rgb(var(--border))] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm backdrop-blur-sm">
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        {project.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: All Content grouped together */}
                            <div className="flex-1 flex flex-col min-w-0">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-[rgb(var(--foreground))] font-bold text-xl leading-tight">
                                        {project.title}
                                    </h3>

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mr-2 p-2 text-[rgb(var(--foreground))] bg-transparent hover:border-[rgb(var(--foreground))] rounded-2xl border border-zinc-200 dark:border-white/20 transition-all shadow-sm group/git"
                                            aria-label="GitHub Repository"
                                        >
                                            <Github className="w-5 h-5 group-hover/git:scale-110 transition-transform" />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mr-2 p-2 text-[rgb(var(--foreground))] bg-transparent hover:border-[rgb(var(--foreground))] rounded-2xl border border-zinc-200 dark:border-white/20 transition-all shadow-sm group/link"
                                            aria-label="View Project"
                                        >
                                            <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                                        </a>
                                    )}
                                </div>

                                <p className="text-[rgb(var(--muted-foreground))] text-sm sm:text-base leading-relaxed max-w-2xl">
                                    {project.description}
                                </p>

                                <div className="h-4" />

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="inline-flex items-center justify-center h-8 text-[10px] font-bold uppercase tracking-widest rounded-xl bg-zinc-200 dark:bg-white/5 text-zinc-800 dark:text-zinc-300 border border-zinc-300 dark:border-white/10 shadow-sm hover:border-indigo-500/50 transition-all"
                                            style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
