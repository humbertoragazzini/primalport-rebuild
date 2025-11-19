"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function ScrollAndMouseGroup() {
  const groupRef = useRef<THREE.Group>(null);

  const scrollRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Track scroll + mouse
  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY || 0;
    };

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      mouseRef.current = { x, y: -y };
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animate group
  useFrame(() => {
    if (!groupRef.current) return;

    const scrollY = scrollRef.current;
    const { x: mx, y: my } = mouseRef.current;

    // scroll rotation
    const t = scrollY * 0.001;

    // Rotation multipliers
    const scrollStrength = 0.8;
    const mouseStrength = 0.2;

    // apply rotations
    groupRef.current.rotation.x =
      Math.sin(t * 0.6) * scrollStrength + my * mouseStrength;

    groupRef.current.rotation.y =
      Math.cos(t * 0.8) * scrollStrength + mx * mouseStrength;

    groupRef.current.rotation.z = Math.sin(t * 0.3) * scrollStrength + mx * 0.1;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 120, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </group>
  );
}

export default function BgCanvas() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 -z-50 bg-slate-950">
      <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
        {/* SCENE GROUP THAT ROTATES */}
        <ScrollAndMouseGroup></ScrollAndMouseGroup>

        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}
