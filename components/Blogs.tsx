"use client";

import { ArrowUpRight, BookOpen, Star } from 'lucide-react';

interface BlogPost {
    title: string;
    date: string;
    link: string;
}

export default function Blogs() {
    const blogs: BlogPost[] = [
        {
            title: "Agent Development Kit (ADK) Made Easy — Part 2",
            date: "Aug 12, 2025",
            link: "https://medium.com/google-cloud/agent-development-kit-adk-made-easy-part-2-0c3b8ef32399"
        },
        {
            title: "Agent Development Kit (ADK) Made Easy — Part 1",
            date: "Apr 20, 2025",
            link: "https://medium.com/google-cloud/agent-development-kit-adk-made-easy-part-1-021052fddde3"
        },
        {
            title: "Revolutionizing Gameplay: How Gemini 2.0 Flash Experimental is Redefining Real Time Commentary",
            date: "Dec 19, 2024",
            link: "https://medium.com/google-cloud/revolutionizing-gameplay-how-gemini-2-0-flash-experimental-is-redefining-real-time-commentary-b714c94af5dc"
        },
        {
            title: "Google Cloud Hybrid Connectivity Network Endpoint Group (NEG): Bridging Hybrid and Multi-Cloud…",
            date: "Nov 29, 2024",
            link: "https://medium.com/google-cloud/google-cloud-hybrid-connectivity-network-endpoint-group-neg-bridging-hybrid-and-multi-cloud-804c698a5762"
        },
        {
            title: "Mastering Resource Management in GCP Using Asset Inventory",
            date: "Aug 20, 2024",
            link: "https://medium.com/google-cloud/mastering-resource-management-in-gcp-using-asset-inventory-895f54d58473"
        }
    ];

    return (
        <section id="blogs" className="bento-card rounded-[3rem]!">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-[rgb(var(--foreground))] mb-0 flex items-center gap-2">
                    <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
                    Writing & Insights
                </h2>
                <a
                    href="https://medium.com/@Sarthak_Kesarwani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] transition-colors flex items-center gap-1"
                >
                    View all <ArrowUpRight className="w-3 h-3" />
                </a>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {blogs.map((blog, index) => (
                    <a
                        key={index}
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-2xl border border-[rgb(var(--border))] hover:border-[rgb(var(--muted-foreground),0.3)] hover:bg-[rgb(var(--secondary))] transition-all duration-300 overflow-hidden"
                        style={{ padding: '0.2rem 2.25rem' }}
                    >
                        <div className="flex items-start justify-between gap-4 px-2">
                            <div className="flex-1 pl-8">
                                <h3 className="text-[rgb(var(--foreground))] group-hover:text-[rgb(var(--muted-foreground))] transition-colors leading-tight mb-1">
                                    {blog.title}
                                </h3>
                                <p className="text-xs text-[rgb(var(--muted-foreground))] font-medium">
                                    {blog.date}
                                </p>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[rgb(var(--secondary))] group-hover:bg-[rgb(var(--card))] transition-colors border border-transparent group-hover:border-[rgb(var(--border))] mr-2">
                                <ArrowUpRight className="w-4 h-4 text-[rgb(var(--muted-foreground))] group-hover:text-[rgb(var(--foreground))]" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
