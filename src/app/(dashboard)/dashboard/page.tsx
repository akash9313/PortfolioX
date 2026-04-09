'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';
import { EditorPanels } from '@/components/dashboard/EditorPanels';
import { PreviewPanel } from '@/components/dashboard/PreviewPanel';
import { Sparkles } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  if (!isClient || !isLoggedIn) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-background">
         <Sparkles className="w-10 h-10 text-primary animate-pulse" />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden bg-background">
      {/* Split Screen Dashboard Layout */}
      
      {/* Left: Editor UI (hidden on extra small screens without a toggle, but keeping simple for now) */}
      <div className="w-full md:w-[450px] lg:w-[500px] h-1/2 md:h-full flex-shrink-0 z-20 shadow-2xl shadow-black/50">
        <EditorPanels />
      </div>

      {/* Right: Live Preview */}
      <div className="flex-1 h-1/2 md:h-full relative overflow-hidden bg-black perspective-1000">
        {/* Browser Frame visual effect */}
        <div className="absolute top-4 left-4 right-4 bottom-4 rounded-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="bg-black/80 h-8 flex items-center px-4 gap-2 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="mx-auto bg-white/5 rounded px-24 py-1 text-[10px] text-muted-foreground/50 tracking-widest">LIVE PREVIEW</div>
          </div>
          <div className="w-full h-[calc(100%-2rem)] relative">
            <PreviewPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
