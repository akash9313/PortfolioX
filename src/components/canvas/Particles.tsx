'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Particles({ count = 1500 }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate an elegant, orbital galaxy-swirl for particles
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    const colorPrimary = new THREE.Color('#8a2be2'); // Purple
    const colorSecondary = new THREE.Color('#00ffff'); // Cyan

    for (let i = 0; i < count; i++) {
      // Swirling galaxy distribution math
      const radius = 4 + (Math.random() * 25);
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 4 * (28 / radius); // Tighter on outer edges

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = height;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      // Color mixing gradient based on distance from center
      const mixRatio = Math.min(1, Math.max(0, (radius - 4) / 25));
      const mixedColor = colorPrimary.clone().lerp(colorSecondary, mixRatio * Math.random());
      
      cols[i * 3] = mixedColor.r;
      cols[i * 3 + 1] = mixedColor.g;
      cols[i * 3 + 2] = mixedColor.b;
    }

    return [pos, cols];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Slow orbital rotation
      pointsRef.current.rotation.y += delta * 0.02;
      
      // Keep it slightly tilted for cinematic depth
      pointsRef.current.rotation.x = Math.PI * 0.15;
      pointsRef.current.rotation.z = Math.PI * 0.05;
      
      // Undulate vertically very softly over time
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
