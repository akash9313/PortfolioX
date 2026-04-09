'use client';

import { useStore } from '@/lib/store';
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

export function PreviewPanel() {
  const portfolio = useStore((state) => state.portfolio);

  return (
    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden bg-background" id="preview-container">
      {/* 3D Scene Background wrapper (fixed behind content) */}
      <Scene />
      
      {/* Overlay Navigation */}
      <Navigation data={portfolio} />
      
      {/* Scrollable Content */}
      <div className="relative z-10 w-full">
        <Hero data={portfolio} />
        <About data={portfolio} />
        <Skills data={portfolio} />
        <Projects data={portfolio} />
        <Timeline data={portfolio} />
        <Highlights data={portfolio} />
        <Contact data={portfolio} />
        <Footer data={portfolio} />
      </div>
    </div>
  );
}
