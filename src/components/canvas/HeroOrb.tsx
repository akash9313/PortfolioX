'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function HeroOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y -= delta * 0.2;
      glowRef.current.rotation.z -= delta * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Premium Glass Torus Knot */}
      <mesh ref={meshRef} scale={1.1}>
        <torusKnotGeometry args={[1.3, 0.45, 256, 64]} />
        <MeshTransmissionMaterial 
          backside
          backsideThickness={1}
          samples={4}
          thickness={0.8}
          chromaticAberration={0.08}
          anisotropy={0.2}
          distortion={0.2}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          clearcoat={1}
          roughness={0.1}
          color="#a374ff"
        />
      </mesh>
      
      {/* Inner hovering geometric core */}
      <mesh ref={glowRef}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.25} />
      </mesh>
      
      {/* Kinetic Lighting for Dramatic Reflections */}
      <pointLight color="#8a2be2" position={[-3, 3, 2]} intensity={60} distance={20} />
      <pointLight color="#00ffff" position={[3, -3, 2]} intensity={60} distance={20} />
      <pointLight color="#ffffff" position={[0, 0, -3]} intensity={30} distance={15} />
    </Float>
  );
}
