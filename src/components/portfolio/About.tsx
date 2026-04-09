'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Portfolio } from '@/lib/store';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Code, Layout, Lightbulb, Terminal } from 'lucide-react';

const icons = [Layout, Lightbulb, Terminal, Code];

export function About({ data }: { data: Portfolio }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
              About <span style={{ color: data.theme.primaryColor }}>Me</span>
            </h2>
            <div className="glass p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to bottom right, ${data.theme.accentGlow}20, transparent)` }} />
              <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                {data.about.description}
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {data.about.cards.map((card, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card glow className="h-full bg-card/60 backdrop-blur-md border-white/5">
                    <CardHeader>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${data.theme.primaryColor}20`, color: data.theme.primaryColor }}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
