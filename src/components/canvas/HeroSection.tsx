'use client';
import { Text, Float } from '@react-three/drei';
import { HeroOrb } from './HeroOrb';
import { siteData } from '@/lib/data';

export function HeroSection() {
  return (
    <group position={[0, 0, 0]}>
      {/* Background Orb */}
      <group position={[2, 0, -2]}>
        <HeroOrb />
      </group>
      
      {/* 3D Typography */}
      <Float speed={2} floatIntensity={0.5}>
        <Text
          position={[-3, 1, 1]}
          fontSize={1.8}
          color="#ffffff"
          anchorX="left"
          font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkGpu8PNwKzCgxwdxXwIQ.woff"
        >
          {siteData.header.name}.
        </Text>
        <Text
          position={[-3, -0.3, 1]}
          fontSize={0.4}
          color="#00ffff"
          anchorX="left"
          maxWidth={4}
          font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkGpu8PNwKzCgxwdxXwIQ.woff"
        >
          {siteData.header.tagline}
        </Text>
      </Float>
    </group>
  );
}
