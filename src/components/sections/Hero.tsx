'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { siteData } from '@/lib/data';
import { FileDown, ChevronDown, ArrowRight } from 'lucide-react';

export function Hero() {
  const { name, tagline, description } = siteData.header;

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse transition-all"></span>
          Available for Internships & Projects
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter font-space mb-4"
        >
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow-text">{name}</span>
        </motion.h1>

        {/* Subtitle / Tagline */}
        <motion.p
          initial={{ opacity: 0, textShadow: "0px 0px 0px rgba(0,0,0,0)" }}
          animate={{ opacity: 1, textShadow: "0px 0px 20px rgba(138,43,226,0.3)" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl font-medium text-foreground/90 max-w-2xl mb-2"
        >
          {tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mb-10"
        >
          {description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="gap-2 text-base h-12 px-8">
            View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="lg" className="gap-2 text-base h-12 px-8">
            <FileDown className="w-4 h-4" /> Download Resume
          </Button>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-sm tracking-widest uppercase text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
