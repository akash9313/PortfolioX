'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight, LayoutTemplate, Zap, Shield, Sparkles } from 'lucide-react';

export default function MarketingPage() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden bg-background text-foreground">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 glass backdrop-blur-md border-b border-white/5">
        <div className="container px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-space tracking-wide flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" /> PortfolioX
          </Link>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-foreground">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button className="shadow-[0_0_15px_rgba(138,43,226,0.3)] hover:shadow-[0_0_25px_rgba(138,43,226,0.6)]">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <section className="container px-6 py-20 md:py-32 flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            The Ultimate Portfolio SaaS
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter font-space mb-6 max-w-4xl leading-tight"
          >
            Build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow-text">3D Portfolio</span> in minutes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            A Notion-style editor that publishes Awwwards-winning 3D developer portfolios instantly. No coding required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/signup">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-[0_0_20px_rgba(138,43,226,0.4)]">
                Start Building Free <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/u/akash">
              <Button variant="glass" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                View Live Demo
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Features Preview */}
        <section className="container px-6 py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl border border-white/5 bg-card/30">
              <LayoutTemplate className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold font-space mb-3">Live Editing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Experience real-time split-screen editing. As you type, your 3D portfolio rebuilds itself seamlessly right in the dashboard.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/5 bg-card/30">
              <Sparkles className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold font-space mb-3">Cinematic 3D Output</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Powered by React Three Fiber and Framer Motion, every portfolio feels expensive, professional, and entirely unique.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/5 bg-card/30">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold font-space mb-3">Custom Routes</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Claim your slice of the web at /u/yourname. One-click publishing directly to our global edge network.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
