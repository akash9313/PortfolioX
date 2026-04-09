'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteData } from '@/lib/data';
import { GradientText } from '@/components/ui/gradient-text';

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline" className="py-24 relative" ref={ref}>
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">
            My <GradientText>Journey</GradientText>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full" />
          
          {/* Animated Vertical Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary -translate-x-1/2 rounded-full z-10" 
          />

          <div className="space-y-12">
            {siteData.timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center md:justify-between flex-col md:flex-row">
                  
                  {/* Glowing Dot on the Line */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(138,43,226,0.8)]" />

                  {/* Content Card container */}
                  <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:translate-x-[115%] md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors"
                    >
                      <span className="text-xs font-bold text-secondary mb-2 block tracking-wider uppercase">{item.year}</span>
                      <h4 className="text-xl font-bold font-space mb-2 text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                  
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
