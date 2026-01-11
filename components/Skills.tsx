"use client";

import {
    Code2,
    Cloud,
    FileCode,
    Container,
    GitBranch,
    Activity,
    Sparkles,
    Database,
    Shield,
    Wrench,
    Star
} from 'lucide-react';

interface SkillCategory {
    name: string;
    icon: React.ReactNode;
    skills: string[];
    color: string;
}

export default function Skills() {
    const skillCategories: SkillCategory[] = [
        {
            name: "Cloud Platforms",
            icon: <Cloud className="icon" />,
            skills: ["Google Cloud", "AWS", "Compute Engine", "Cloud Run", "GKE"],
            color: "text-[#4285F4]" // Google Blue
        },
        {
            name: "Networking",
            icon: <Activity className="icon" />,
            skills: ["VPC", "Cloud Interconnect", "Network Connectivity Center", "Cloud NAT", "Load Balancing"],
            color: "text-[#34A853]" // Google Green
        },
        {
            name: "Security",
            icon: <Shield className="icon" />,
            skills: ["IAM", "VPC Service Controls", "Cloud Armor", "Secret Manager", "Security Command Center"],
            color: "text-[#EA4335]" // Google Red
        },
        {
            name: "IaC & Automation",
            icon: <FileCode className="icon" />,
            skills: ["Terraform", "Ansible", "Python", "Bash"],
            color: "text-[#8B5CF6]" // Purple
        },
        {
            name: "Containerization",
            icon: <Container className="icon" />,
            skills: ["Docker", "Kubernetes", "GKE", "Cloud Build"],
            color: "text-[#0284C7]" // Sky Blue
        },
        {
            name: "Generative AI",
            icon: <Sparkles className="icon" />,
            skills: ["Vertex AI", "Gemini", "LangChain", "Agent Development Kit"],
            color: "text-[#D946EF]" // Fuchsia
        },
        {
            name: "CI/CD & DevOps",
            icon: <GitBranch className="icon" />,
            skills: ["GitHub Actions", "Cloud Build", "Artifact Registry", "GitOps"],
            color: "text-[#F97316]" // Orange
        },
        {
            name: "Data & Messaging",
            icon: <Database className="icon" />,
            skills: ["BigQuery", "Dataflow", "Pub/Sub", "Cloud SQL", "Spanner"],
            color: "text-[#FBBC04]" // Google Yellow
        },
        {
            name: "Observability",
            icon: <Wrench className="icon" />,
            skills: ["Cloud Monitoring", "Cloud Logging", "Prometheus", "Grafana"],
            color: "text-[#FBBF24]" // Amber
        }
    ];

    return (
        <section id="skills" className="bento-card rounded-[3rem]! flex flex-col gap-6">
            <h2 className="text-[rgb(var(--foreground))] flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-emerald-500 fill-emerald-500" />
                Skills & Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillCategories.map((category, index) => (
                    <div key={index} className="bento-card hover:bg-[rgb(var(--secondary))] transition-colors group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 bg-[rgb(var(--background))] rounded-lg border border-[rgb(var(--border))] ${category.color} group-hover:border-[rgb(var(--foreground))] transition-colors`}>
                                {category.icon}
                            </div>
                            <h3 className="text-[rgb(var(--foreground))] font-bold">{category.name}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span key={i} className="text-sm text-[rgb(var(--muted-foreground))]">
                                    {skill}{i < category.skills.length - 1 ? ' • ' : ''}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
