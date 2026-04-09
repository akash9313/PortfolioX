'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Portfolio } from '@/lib/store';

function AnimatedCounter({ value }: { value: string }) {
  const numberValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, '');
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView && ref.current && !isNaN(numberValue)) {
      let start = 0;
      const end = numberValue;
      const duration = 2000;
      const startTime = performance.now();
      
      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          const easeProgress = 1 - Math.pow(1 - progress, 4);
          const currentVal = Math.floor(easeProgress * end);
          if (ref.current) ref.current.textContent = currentVal.toString() + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          if (ref.current) ref.current.textContent = value;
        }
      };
      requestAnimationFrame(updateCounter);
    }
  }, [inView, numberValue, value, suffix]);

  if (isNaN(numberValue)) return <span>{value}</span>;
  return <span ref={ref}>0{suffix}</span>;
}

export function Highlights({ data }: { data: Portfolio }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="highlights" className="py-24 relative" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div 
          key={`highlights-${data.achievements.length}`}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {data.achievements.map((item, index) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className="glass p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                style={{ backgroundColor: data.theme.primaryColor }}
              />
              <h3 className="text-4xl md:text-5xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                <AnimatedCounter value={item.value || "0"} />
              </h3>
              <p className="text-sm md:text-base uppercase tracking-widest font-semibold text-center" style={{ color: data.theme.primaryColor }}>
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
