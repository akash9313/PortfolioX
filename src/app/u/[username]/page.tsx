'use client';

import { useEffect, useState } from 'react';
import { useStore, Portfolio } from '@/lib/store';
import { Scene } from '@/components/canvas/Scene';
import { Navigation } from '@/components/portfolio/Navigation';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Timeline } from '@/components/portfolio/Timeline';
import { Highlights } from '@/components/portfolio/Highlights';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';
import { Sparkles } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function PublicPortfolioPage() {
  const params = useParams();
  const username = params.username as string;
  const storePortfolio = useStore((state) => state.portfolio);
  
  const [data, setData] = useState<Portfolio | null>(null);

  useEffect(() => {
    // In a real backend, we would fetch the user's data from Supabase/Firebase here.
    // Since we are using mock localStorage for the SaaS platform preview:
    // If the username matches the saved store, show their custom changes.
    // Otherwise show the default data as a fallback.
    if (storePortfolio.username === username.toLowerCase()) {
      setData(storePortfolio);
    } else {
      // Show their actual live store data anyway for the sake of the demo,
      // or you could fallback to a 'Not Found' / 'Default' data shape.
      setData(storePortfolio);
    }
  }, [username, storePortfolio]);

  if (!data) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-background">
         <div className="flex flex-col items-center gap-4">
            <Sparkles className="w-10 h-10 text-primary animate-pulse" />
            <p className="text-muted-foreground animate-pulse">Loading amazing 3D portfolio...</p>
         </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col relative w-full overflow-hidden bg-background">
      {/* 3D Scene Background wrapper (fixed behind content) */}
      <Scene />
      
      {/* Overlay Navigation */}
      <Navigation data={data} />
      
      {/* Scrollable Content */}
      <div className="relative z-10 w-full">
        <Hero data={data} />
        <About data={data} />
        <Skills data={data} />
        <Projects data={data} />
        <Timeline data={data} />
        <Highlights data={data} />
        <Contact data={data} />
        <Footer data={data} />
      </div>
    </main>
  );
}
