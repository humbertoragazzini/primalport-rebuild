"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function BgCanvas() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 -z-50 bg-slate-950">
      <Canvas>
        <mesh>
          <torusKnotGeometry args={[1, 0.3, 120, 32]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}
