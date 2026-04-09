'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export function HeroOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y -= delta * 0.15;
      glowRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Inner solid dark core */}
      <mesh>
        <icosahedronGeometry args={[2, 0]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Main wireframe structure */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.01, 2]} />
        <meshStandardMaterial 
          color="#8a2be2" 
          wireframe 
          transparent 
          opacity={0.4} 
        />
      </mesh>

      {/* Glow outer structure */}
      <mesh ref={glowRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial 
          color="#00ffff" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </mesh>
      
      {/* Lights specific to the orb */}
      <pointLight color="#8a2be2" position={[0, 0, 0]} intensity={20} distance={10} />
      <pointLight color="#00ffff" position={[2, 2, 2]} intensity={10} distance={10} />
    </Float>
  );
}
