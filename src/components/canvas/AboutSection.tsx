'use client';
import { Text, Html, Float } from '@react-three/drei';
import { siteData } from '@/lib/data';

export function AboutSection() {
  return (
    <group position={[0, 0, -15]}>
      <Text 
        position={[0, 3, 0]} 
        fontSize={1.2} 
        color="#8a2be2"
        font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkGpu8PNwKzCgxwdxXwIQ.woff"
      >
        About Me
      </Text>
      
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1} position={[-3, 0, -1]}>
        <mesh>
          <boxGeometry args={[4.5, 3.5, 0.1]} />
          <meshPhysicalMaterial 
             transmission={1} 
             roughness={0.1} 
             thickness={1} 
             color="#1a1a1a" 
          />
        </mesh>
        
        <Html transform position={[0, 0, 0.1]} scale={0.5}>
          <div className="w-[350px] text-white p-6 pointer-events-none">
            <h3 className="text-2xl font-bold mb-4 font-space text-primary glow-text">Mission</h3>
            <p className="text-sm leading-relaxed text-gray-300">{siteData.about.description}</p>
          </div>
        </Html>
      </Float>

      <Float speed={2} rotationIntensity={0.5} position={[3, 0, 1]}>
        <mesh>
          <torusGeometry args={[1.5, 0.3, 16, 64]} />
          <meshStandardMaterial color="#00ffff" wireframe />
        </mesh>
        <Html transform position={[0, 0, 0]} scale={0.4}>
            <div className="flex flex-wrap gap-2 w-[250px] justify-center pointer-events-none">
              {siteData.skills.slice(0, 8).map(skill => (
                <span key={skill.name} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white backdrop-blur-md">
                  {skill.name}
                </span>
              ))}
            </div>
        </Html>
      </Float>
    </group>
  );
}
