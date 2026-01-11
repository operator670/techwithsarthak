"use client";

import dynamic from 'next/dynamic';

const PortfolioContent = dynamic(() => import("@/components/PortfolioContent"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="pt-12">
      <PortfolioContent />
    </main>
  );
}
