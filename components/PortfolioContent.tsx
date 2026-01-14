"use client";

import Sidebar from './Sidebar';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Blogs from './Blogs';
import Skills from './Skills';
import Education from './Education';
import Achievements from './Achievements';

export default function PortfolioContent() {
    return (
        <div className="container-custom" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sticky Sidebar */}
                <Sidebar />

                {/* Main Scrollable Content */}
                <main className="flex-1 flex flex-col gap-8 min-w-0">
                    <About />
                    <Experience />
                    <Projects />
                    <Blogs />
                    <Skills />
                    <Education />
                    <Achievements />

                    <div className="mt-8 pt-8 border-t border-[rgb(var(--border))] text-center text-sm text-[rgb(var(--muted-foreground))]">
                        <p>© {new Date().getFullYear()} Sarthak Kesarwani • Built with Next.js</p>
                    </div>
                </main>
            </div>
        </div>
    );
}
