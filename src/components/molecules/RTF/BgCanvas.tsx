//@ts-nocheck
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
import { Float, Line, OrbitControls } from "@react-three/drei";
import { Logo3D } from "./Logo";
import SceneObjects from "./MultiObject";
import WobblePlane from "./WobbleGeo";
import ScrollAndMouseGroup from "./ScrolledContant";
import AbstractNetwork from "./AbstractNetwork";

export default function BgCanvas() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 -z-50 bg-slate-950">
      <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
        {/* Rotating scene group */}
        <WobblePlane></WobblePlane>
        <ScrollAndMouseGroup />
        {/* <mesh>
          <sphereGeometry args={[2, 70, 70]} />
          <meshStandardMaterial color="#010001" side={THREE.DoubleSide} />
        </mesh> */}
        <OrbitControls></OrbitControls>
        {/* Basic lighting */}
        <ambientLight intensity={5} />
        {/* <directionalLight position={[4, 6, 3]} intensity={1.2} /> */}
        <perspectiveCamera default></perspectiveCamera>
        {/* <AbstractNetwork></AbstractNetwork> */}
        {/* Post-processing */}
        <EffectComposer multisampling={0}>
          {/* Depth of field aimed at the origin (where your torus is) */}
          {/* <DepthOfField
            focusDistance={0.5} // tweak for where focus starts
            focalLength={0.5} // how strong the DOF is
            bokehScale={1.5} // size of the blur circles
            height={480}
          /> */}

          {/* Bloom for glow */}
          {/* <Bloom
            intensity={0.5} // how strong
            luminanceThreshold={0.5} // what is considered "bright"
            luminanceSmoothing={0.15}
          /> */}
        </EffectComposer>
      </Canvas>
    </div>
  );
}
