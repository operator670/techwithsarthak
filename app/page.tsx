"use client";

import dynamic from 'next/dynamic';

const PortfolioContent = dynamic(() => import("@/components/PortfolioContent"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <PortfolioContent />
    </main>
  );
}
