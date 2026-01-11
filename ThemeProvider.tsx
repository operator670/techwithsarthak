"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  backgroundColor?: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Multiple background colors for light mode
const LIGHT_BACKGROUNDS = [
  '210 200 185', // warm-tan
  '220 210 200', // light-tan
  '215 205 195', // soft-beige
  '225 215 205', // pale-cream
  '205 200 190', // muted-sand
  '218 208 198', // warm-cream
  '212 202 192', // sand-warm
  '222 212 202', // cream-light
];

function getRandomBackgroundColor() {
  return LIGHT_BACKGROUNDS[Math.floor(Math.random() * LIGHT_BACKGROUNDS.length)];
}

// Set background color immediately in a script before hydration
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isLightMode = savedTheme === 'light' || (!savedTheme && !prefersDark);
  
  if (isLightMode) {
    const randomColor = getRandomBackgroundColor();
    document.body.style.backgroundColor = `rgb(${randomColor})`;
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState<string>('210 200 185');

  useEffect(() => {
    // Generate a new random color on mount
    const newBgColor = getRandomBackgroundColor();
    setBackgroundColor(newBgColor);
    
    // Check localStorage for theme
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const body = document.body;
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      body.style.backgroundColor = 'rgb(9, 9, 11)';
    } else {
      root.removeAttribute('data-theme');
      body.style.backgroundColor = `rgb(${backgroundColor})`;
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, backgroundColor, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, backgroundColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
