'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Portfolio } from '@/lib/store';
import { FileDown, ChevronDown, ArrowRight } from 'lucide-react';

export function Hero({ data }: { data: Portfolio }) {
  const { name, tagline, description } = data.header;

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <motion.div
           key={`badge-${name}`} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ borderColor: `${data.theme.primaryColor}50`, backgroundColor: `${data.theme.primaryColor}15`, color: data.theme.primaryColor }}
          className="mb-8 inline-flex items-center rounded-full border px-3 py-1 text-sm backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full mr-2 animate-pulse transition-all" style={{ backgroundColor: data.theme.primaryColor }}></span>
          Available for Internships & Projects
        </motion.div>

        {/* Main Title */}
        <motion.h1
           key={`name-${name}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter font-space mb-4"
        >
          Hi, I&apos;m <span className="text-transparent bg-clip-text glow-text" style={{ backgroundImage: `linear-gradient(to right, ${data.theme.accentGlow}, ${data.theme.primaryColor})` }}>{name}</span>
        </motion.h1>

        {/* Subtitle / Tagline */}
        <motion.p
           key={`tagline-${tagline}`}
          initial={{ opacity: 0, textShadow: "0px 0px 0px rgba(0,0,0,0)" }}
          animate={{ opacity: 1, textShadow: `0px 0px 20px ${data.theme.accentGlow}60` }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl font-medium text-foreground/90 max-w-2xl mb-2"
        >
          {tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          key={`desc-${description}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mb-10"
        >
          {description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
           key="buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="gap-2 text-base h-12 px-8" style={{ backgroundColor: data.theme.accentGlow }}>
            View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="lg" className="gap-2 text-base h-12 px-8">
            <FileDown className="w-4 h-4" /> Download Resume
          </Button>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground opacity-70">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
