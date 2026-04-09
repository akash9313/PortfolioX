'use client';
import { Text, Html, Float } from '@react-three/drei';
import { siteData } from '@/lib/data';

export function ContactSection() {
  return (
    <group position={[0, 0, -85]}>
      {/* 3D Core representation of the end portal */}
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh>
          <octahedronGeometry args={[2, 0]} />
          <meshPhysicalMaterial 
            color="#8a2be2" 
            emissive="#8a2be2" 
            emissiveIntensity={2} 
            wireframe 
          />
        </mesh>
      </Float>
      
      <Text 
         position={[0, 3, 0]} 
         fontSize={1.2} 
         color="#ffffff"
         font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkGpu8PNwKzCgxwdxXwIQ.woff"
      >
        Let's Work Together
      </Text>
      
      <Html transform position={[0, -3, 1]} scale={0.5}>
        <div className="flex gap-6 items-center">
          <a href={`mailto:${siteData.contact.email}`} className="bg-primary/20 text-white hover:bg-primary px-8 py-4 rounded-full border border-primary/50 transition-all font-space text-xl shadow-[0_0_20px_rgba(138,43,226,0.4)]">
            Shoot me an email
          </a>
          <a href={siteData.contact.github} target="_blank" rel="noreferrer" className="bg-white/5 text-white hover:bg-white/20 px-8 py-4 rounded-full border border-white/10 transition-all font-space text-xl">
            GitHub
          </a>
        </div>
      </Html>
    </group>
  );
}
