'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Portfolio } from '@/lib/store';

export function Timeline({ data }: { data: Portfolio }) {
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
            My <span style={{ color: data.theme.primaryColor }}>Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full" />
          
          {/* Animated Vertical Line */}
          <motion.div 
            style={{ scaleY, originY: 0, backgroundImage: `linear-gradient(to bottom, ${data.theme.primaryColor}, ${data.theme.accentGlow})` }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full z-10" 
          />

          <div className="space-y-12">
            {data.timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id || index} className="relative flex items-center md:justify-between flex-col md:flex-row">
                  
                  {/* Glowing Dot on the Line */}
                  <div 
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 -translate-x-1/2 z-20" 
                    style={{ borderColor: data.theme.primaryColor, boxShadow: `0 0 15px ${data.theme.primaryColor}B3` }}
                  />

                  {/* Content Card container */}
                  <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:translate-x-[115%] md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="glass p-6 rounded-2xl transition-colors"
                      style={{ borderBottom: `2px solid transparent` }}
                      whileHover={{ borderBottomColor: data.theme.primaryColor }}
                    >
                      <span className="text-xs font-bold mb-2 block tracking-wider uppercase" style={{ color: data.theme.primaryColor }}>{item.year}</span>
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
