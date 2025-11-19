"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";

function ScrollCamera() {
  const { camera } = useThree();
  const [scrollY, setScrollY] = useState(0);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate the camera rotation smoothly
  useFrame(() => {
    const t = scrollY * 0.001; // control rotation speed
    camera.position.x = Math.sin(t) * 5;
    camera.position.z = Math.cos(t) * 5;
    camera.position.y = Math.sin(t * 0.5) * 1.5;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function BgCanvas() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 -z-50 bg-slate-950">
      <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
        {/* Scroll reactive camera */}
        <ScrollCamera />

        <mesh>
          <torusKnotGeometry args={[1, 0.3, 120, 32]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}
