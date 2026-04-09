'use client';
import { Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { Particles } from './Particles';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';

// The Rig that controls the camera's Z position based on scroll progress
function CameraRig() {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame((state, delta) => {
    // scroll.offset goes from 0 (top) to 1 (bottom)
    // Map scroll timeline to Z depth (journey ends at -80)
    const targetZ = THREE.MathUtils.lerp(5, -80, scroll.offset);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 4 * delta);
    
    // Slight parallax x/y movement based on mouse
    const mouseX = (state.pointer.x * 2);
    const mouseY = (state.pointer.y * 2);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouseX, 2 * delta);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouseY, 2 * delta);
    
    // Look slightly towards the center
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, -(mouseY * 0.05), 2 * delta);
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, (mouseX * 0.05), 2 * delta);
  });
  
  return null;
}

export function Scene() {
  return (
    <div className="fixed inset-0 z-0 bg-background">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.2} color="#ffffff" />
        
        {/* Environment Map for Glass Refraction */}
        <Environment preset="city" />

        <Suspense fallback={null}>
          <ScrollControls pages={6} damping={0.25} distance={1.5}>
            <CameraRig />
            
            {/* The 3D Universe Timeline */}
            <Scroll>
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <ContactSection />
              {/* Expand particle spread dynamically down to -100 on Z */}
              <group position={[0,0,-40]}>
                 <Particles count={2500} />
              </group>
            </Scroll>
            
            {/* Static overlay HTML elements that stay pinned to screen */}
            <Scroll html>
               <div className="fixed top-8 left-8 pointer-events-none">
                  <h1 className="text-2xl font-bold font-space tracking-widest text-[#00ffff] drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">AKASH.</h1>
               </div>
               <div className="fixed bottom-8 right-8 text-sm text-gray-400 font-mono tracking-widest uppercase flex items-center gap-4 pointer-events-none">
                  <span>Scroll to Fly</span>
                  <div className="w-12 h-[1px] bg-primary/50" />
               </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03] pointer-events-none" />
    </div>
  );
}
