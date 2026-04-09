import { Scene } from '@/components/canvas/Scene';
import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Timeline } from '@/components/sections/Timeline';
import { Highlights } from '@/components/sections/Highlights';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative w-full overflow-hidden">
      {/* 3D Scene Background wrapper (fixed behind content) */}
      <Scene />
      
      {/* Overlay Navigation */}
      <Navigation />
      
      {/* Scrollable Content */}
      <div className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Highlights />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
