"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

function ScrollAndMouseCamera() {
  const { camera } = useThree();

  const scrollRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY || window.pageYOffset || 0;
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      // Normalize to [-1, 1]
      const x = (event.clientX / innerWidth) * 2 - 1;
      const y = (event.clientY / innerHeight) * 2 - 1;

      mouseRef.current = { x, y: -y }; // invert y so up is positive
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // initial set
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    const scrollY = scrollRef.current;
    const { x: mx, y: my } = mouseRef.current;

    const t = scrollY * 0.001; // control scroll rotation speed
    const radius = 5;

    // Base orbit from scroll
    const orbitX = Math.sin(t) * radius;
    const orbitZ = Math.cos(t) * radius;
    const orbitY = Math.sin(t * 0.5) * 1.5;

    // Mouse influence – keep it subtle
    const mousePosInfluence = 1.0; // how much camera position reacts to mouse
    const mouseHeightInfluence = 0.8;

    camera.position.x = orbitX + mx * mousePosInfluence;
    camera.position.z = orbitZ + mx * 0.2; // tiny extra depth shift
    camera.position.y = orbitY + my * mouseHeightInfluence;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function BgCanvas() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 -z-50 bg-slate-950">
      <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
        {/* Scroll + mouse reactive camera */}
        <ScrollAndMouseCamera />

        <mesh>
          <torusKnotGeometry args={[1, 0.3, 120, 32]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}
