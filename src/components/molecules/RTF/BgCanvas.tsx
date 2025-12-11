"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing";
import { useMemo } from "react";
import { OrbitControls } from "@react-three/drei";

function SceneObjects() {
  const objects = useMemo(() => {
    const GREYS = [
      "#0b0c10",
      "#14151b",
      "#1f2128",
      "#2b2e37",
      "#3a3e4a",
      "#515669",
      "#707791",
      "#9aa1b5",
      "#c3c7d3",
      "#e5e7ec",
    ];

    // how many cubes across / down
    const gridX = 30;
    const gridY = 30;

    // spacing between cubes on x and y
    const spacing = 30;

    const result: {
      position: [number, number, number];
      scale: number;
      color: string;
    }[] = [];

    for (let y = 0; y < gridY; y++) {
      for (let x = 0; x < gridX; x++) {
        // grid layout centered roughly around 0
        const posX = (x - gridX / 2) * (spacing - spacing * Math.random());
        const posY = (y - gridY / 2) * (spacing - spacing * Math.random());

        // random depth
        const posZ = -5 - Math.random() * 45; // → -5 to -50

        const scale = 1;
        const color = GREYS[Math.floor(Math.random() * GREYS.length)];

        result.push({
          position: [posX, posY, posZ],
          scale,
          color,
        });
      }
    }

    return result;
  }, []);

  return (
    <>
      {objects.map((obj, i) => (
        <mesh key={i} position={obj.position} scale={obj.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={obj.color} />
        </mesh>
      ))}
    </>
  );
}

function ScrollAndMouseGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
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
  useFrame(({ camera }) => {
    if (!groupRef.current) return;

    const scrollY = scrollRef.current;
    const { x: mx, y: my } = mouseRef.current;

    const t = scrollY * 0.01;

    const scrollStrength = 1.5;
    const mouseStrength = 0.1;

    // groupRef.current.rotation.x = Math.sin(t * 0.6) * mouseStrength;

    // groupRef.current.rotation.y = Math.cos(t * 0.6) * mouseStrength;

    // groupRef.current.rotation.z = Math.sin(t * 0.3) * scrollStrength + mx * 0.1;

    // groupRef.current.position.x = t * mouseStrength;

    camera.position.y = t * -scrollStrength;

    // 🔥 modify fov on every frame
    // camera.fov = 60 - ((10 * t) / 2) * scrollStrength;

    // You MUST update projection matrix after modifying the fov
    camera.updateProjectionMatrix();

    // groupRef.current.position.z = Math.cos(t * 0.8) * scrollStrength;
  });

  return (
    <group ref={groupRef}>
      {/* You can replace this with your real scene later */}
      <SceneObjects></SceneObjects>
    </group>
  );
}

export default function BgCanvas() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 -z-50 bg-slate-950">
      <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
        {/* Rotating scene group */}
        <ScrollAndMouseGroup />
        {/* <OrbitControls></OrbitControls> */}
        {/* Basic lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 3]} intensity={1.2} />
        <perspectiveCamera default></perspectiveCamera>

        {/* Post-processing */}
        <EffectComposer multisampling={0}>
          {/* Depth of field aimed at the origin (where your torus is) */}
          <DepthOfField
            focusDistance={0.02} // tweak for where focus starts
            focalLength={0.04} // how strong the DOF is
            bokehScale={3} // size of the blur circles
            height={480}
          />

          {/* Bloom for glow */}
          <Bloom
            intensity={1.2} // how strong
            luminanceThreshold={0.2} // what is considered "bright"
            luminanceSmoothing={0.15}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
