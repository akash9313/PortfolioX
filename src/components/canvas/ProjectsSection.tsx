'use client';
import { Text, Float, Html } from '@react-three/drei';
import { siteData } from '@/lib/data';

export function ProjectsSection() {
  return (
    <group position={[0, 0, -35]}>
      <Text 
        position={[0, 5, 0]} 
        fontSize={1.5} 
        color="#00ffff"
        font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkGpu8PNwKzCgxwdxXwIQ.woff"
      >
        Featured Projects
      </Text>
      
      {siteData.projects.map((project, i) => {
        const isLeft = i % 2 === 0;
        const xOffset = isLeft ? -4 : 4;
        const zOffset = -i * 12; // deep stagger
        
        return (
          <Float key={i} speed={2} rotationIntensity={0.2} floatIntensity={0.5} position={[xOffset, 0, zOffset]}>
             <Html transform position={[0, 0, 0]} scale={0.5} className="group cursor-pointer">
              <div className="w-[450px] glass rounded-xl border border-white/10 text-white overflow-hidden shadow-[0_0_30px_rgba(138,43,226,0.1)] transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop`} 
                  alt="Abstract Cyber Texture" 
                  className="w-full h-[200px] object-cover opacity-80 mix-blend-screen"
                />
                <div className="p-6 bg-black/60 backdrop-blur-md">
                  <h3 className="text-2xl font-bold mb-2 text-primary font-space">{project.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
                  <div className="flex gap-2 mt-4">
                    {project.tags.map(t => (
                      <span key={t} className="text-[10px] uppercase font-bold text-secondary tracking-widest bg-white/5 border border-white/10 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
             </Html>
          </Float>
        );
      })}
    </group>
  );
}
