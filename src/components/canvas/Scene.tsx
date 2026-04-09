'use client';

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { HeroOrb } from './HeroOrb';
import { Particles } from './Particles';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

// This component softly tracks the mouse slightly moving the camera
function Rig() {
  useFrame((state, delta) => {
    // Smooth camera mouse follow
    const targetX = (state.pointer.x * 2);
    const targetY = (state.pointer.y * 2);

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    // state.camera.lookAt(0, 0, 0); 
    // We don't want it exactly look at 0, 0, 0 so the scene feels parallax not swivel
    state.camera.rotation.x = THREE.MathUtils.lerp(state.camera.rotation.x, -(targetY * 0.1), 0.05);
    state.camera.rotation.y = THREE.MathUtils.lerp(state.camera.rotation.y, (targetX * 0.1), 0.05);
  });
  return null;
}

export function Scene() {
  return (
    <div className="fixed inset-0 z-[-1] bg-background pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} color="#ffffff" />
        <Suspense fallback={null}>
          <HeroOrb />
          <Particles count={800} />
          {/* Add a subtle environment map for reflections if needed */}
          <Environment preset="city" />
        </Suspense>
        <Rig />
      </Canvas>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-80" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
    </div>
  );
}
