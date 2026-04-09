'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteData } from '@/lib/data';
import { GradientText } from '@/components/ui/gradient-text';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container px-4 md:px-6 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">
            My <GradientText>Arsenal</GradientText>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 max-w-4xl"
        >
          {siteData.skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass px-6 py-3 rounded-full flex items-center gap-3 border border-white/10 hover:border-primary/50 transition-colors group cursor-default"
            >
              {/* Optional: we could add actual icons based on skill name, using a small dot as placeholder */}
              <div className="w-2 h-2 rounded-full bg-secondary group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
              <span className="font-medium text-foreground tracking-wide">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
