'use client';

import { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Portfolio } from '@/lib/store';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

function TiltCard({ project, theme }: { project: Portfolio['projects'][0], theme: Portfolio['theme'] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-full rounded-xl glass border border-white/5 bg-card/40 hover:bg-card/60 transition-colors p-6 flex flex-col group cursor-pointer"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" 
        style={{ transform: "translateZ(1px)", background: `linear-gradient(to bottom right, ${theme.accentGlow}30, transparent, ${theme.primaryColor}20)` }}
      />
      
      <div className="flex-1" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-bold font-space mb-2 text-foreground transition-colors" style={{ color: theme.primaryColor }}>
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div style={{ transform: "translateZ(20px)" }} className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs font-semibold px-2 py-1 rounded bg-white/5 border border-white/10 text-foreground/80">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 relative z-20">
          {project.github && (
             <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm font-medium">
               <FaGithub className="w-4 h-4" /> Code
             </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a href={project.demo} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm font-medium">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects({ data }: { data: Portfolio }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container px-4 md:px-6">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
           transition={{ duration: 0.6 }}
           className="mb-16 md:flex justify-between items-end"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">
              Featured <span style={{ color: data.theme.primaryColor }}>Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of my best work, demonstrating my ability to build complex, scalable, and visually engaging digital experiences.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:px-8 perspective-1000">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="h-[300px]"
            >
              <TiltCard project={project} theme={data.theme} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
