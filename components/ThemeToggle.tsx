"use client";

import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="btn-zinc opacity-0">
                <Sun className="icon text-[#F59E0B]" />
                <span>Light</span>
            </button>
        ); // Placeholder to avoid layout shift
    }

    return (
        <button
            onClick={toggleTheme}
            className="btn-zinc group/theme"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <>
                    <div className="p-1 rounded bg-amber-100 dark:bg-amber-900/30 group-hover/theme:bg-amber-200 transition-colors">
                        <Sun className="icon text-[#F59E0B]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">Light</span>
                </>
            ) : (
                <>
                    <div className="p-1 rounded bg-indigo-100 dark:bg-indigo-900/30 group-hover/theme:bg-indigo-200 transition-colors">
                        <Moon className="icon text-[#818CF8]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">Dark</span>
                </>
            )}
        </button>
    );
}
