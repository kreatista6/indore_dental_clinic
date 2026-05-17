"use client";

import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

useGLTF.setDecoderPath("/draco/");

function RendererWakeup() {
  const { gl, invalidate } = useThree();
  useEffect(() => {
    const canvas = gl.domElement;
    const container = canvas.parentElement;
    if (!container) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) { gl.setSize(width, height); invalidate(); }
      }
    });
    observer.observe(container);
    const { clientWidth, clientHeight } = container;
    if (clientWidth > 0 && clientHeight > 0) { gl.setSize(clientWidth, clientHeight); invalidate(); }
    return () => observer.disconnect();
  }, [gl, invalidate]);
  return null;
}

function BackdropGlow() {
  const meshRef = useRef<THREE.Mesh>(null!);

  const texture = (() => {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0,   "rgba(13, 115, 119, 1.0)");
    gradient.addColorStop(0.3, "rgba(13, 115, 119, 0.85)");
    gradient.addColorStop(0.6, "rgba(20, 184, 166, 0.5)");
    gradient.addColorStop(1,   "rgba(13, 115, 119, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  })();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const s = 1 + Math.sin(t * 0.8) * 0.06;
    meshRef.current.scale.set(s, s, 1);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1.5]}>
      <planeGeometry args={[8, 8]} />
      <meshBasicMaterial map={texture} transparent opacity={1} depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

function Tooth() {
  const group = useRef<THREE.Group>(null!);
  const { scene } = useGLTF("/molar_tooth.glb");
  const opacity = useRef(0);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 0.6) * 0.12;
    group.current.rotation.y = t * 0.3;
    group.current.rotation.z = Math.sin(t * 0.4) * 0.06;
    group.current.rotation.x = Math.sin(t * 0.3) * 0.04;
    if (opacity.current < 1) {
      opacity.current = Math.min(1, opacity.current + 0.02);
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
          if (mat) { mat.transparent = true; mat.opacity = opacity.current; }
        }
      });
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={1.2} position={[0, 0, 0]} />
    </group>
  );
}

useGLTF.preload("/molar_tooth.glb");

export function ToothModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Don't render WebGL on mobile — too expensive, causes jank
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  if (isMobile) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        frameloop="always"
        camera={{ position: [0, 0, 6], fov: 40 }}
        gl={{ antialias: false, alpha: true, powerPreference: "default" }}
        style={{ width: "100%", height: "100%", display: "block" }}
        resize={{ scroll: false, debounce: { scroll: 0, resize: 0 } }}
      >
        <RendererWakeup />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <directionalLight position={[-4, 2, -4]} intensity={0.4} color="#C9A96E" />
        <pointLight position={[3, 3, 3]} intensity={0.8} />
        <Suspense fallback={null}>
          <BackdropGlow />
          <Tooth />
          <ContactShadows position={[0, -1.6, 0]} opacity={0.1} scale={4} blur={2} far={2} />
        </Suspense>
      </Canvas>
    </div>
  );
}
