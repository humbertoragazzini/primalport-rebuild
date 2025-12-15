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

    const count = 150;

    // We’ll build a grid big enough to hold `count` cubes
    const spacing = 10; // distance between cubes in X/Y
    const jitter = 3; // little random offset so it doesn’t look too perfect

    // Try to make grid roughly square
    const gridX = Math.ceil(Math.sqrt(count)); // columns
    const gridY = Math.ceil(count / gridX); // rows

    const result: {
      position: [number, number, number];
      scale: number;
      color: string;
    }[] = [];

    for (let i = 0; i < count; i++) {
      const col = i % gridX;
      const row = Math.floor(i / gridX);

      // center grid around 0 using (gridN - 1) / 2
      const centerX = (gridX - 1) / 2;
      const centerY = (gridY - 1) / 2;

      let x = (col - centerX) * spacing;
      let y = (row - centerY) * spacing;

      // add small randomness so it looks less rigid
      x += (Math.random() - 0.5) * jitter;
      y += (Math.random() - 0.5) * jitter;

      // random depth from -5 to -50
      const z = -5 - Math.random() * 45;

      const color = GREYS[Math.floor(Math.random() * GREYS.length)];

      result.push({
        position: [x, y, z],
        scale: 1,
        color,
      });
    }

    return result;
  }, []);

  return (
    <>
      {objects.map((obj, i) => (
        <mesh key={i} position={obj.position} scale={obj.scale}>
          <Float>
            <Logo3D></Logo3D>
          </Float>
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

    // camera.position.y = t * -scrollStrength;

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

function WobblePlane() {
  const mat = useRef<THREE.ShaderMaterial>(null!);

  useFrame((state) => {
    // elapsedTime is a nice stable clock (seconds)
    mat.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh iframe rotation={[0, Math.PI / 4, 0]} position={[0, 0, 5]}>
      <planeGeometry args={[10, 10, 100, 100]} />
      <shaderMaterial
        ref={mat}
        wireframe
        vertexShader={`
          varying vec2 vUv;
          varying vec3 uPosition;
          uniform float uTime;

          void main() {
            vUv = uv;

            vec3 p = position;
            uPosition = position;
            p.z += sin(uTime + p.x * 4.0) * 0.1; // wobble
            p.x += sin(uTime + p.y * 4.0) * 0.1; // wobble
            p.y += sin(uTime + p.x * p.y * 4.0) * 0.1; // wobble
            uPosition = p;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          varying vec3 uPosition;
          uniform float uTime;

          void main() {
          float pulse = cos(vUv.y) * vUv.x * sin(uTime);

          float a = 0.1;
          float b = 0.3;
          float w = 0.05;

          float band = smoothstep(a - w, a + w, pulse) - smoothstep(b - w, b + w, pulse);

          gl_FragColor = vec4(uPosition.z*uPosition.x, 0.0, uPosition.z*uPosition.y, 1.0);
          }
        `}
        uniforms={{
          uTime: { value: 0 }, // you *must* wrap in { value: ... }
        }}
      />
    </mesh>
  );
}

export default function BgCanvas() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 -z-50 bg-slate-950">
      <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
        {/* Rotating scene group */}
        <ScrollAndMouseGroup />
        <WobblePlane></WobblePlane>
        {/* <mesh>
          <sphereGeometry args={[2, 70, 70]} />
          <meshStandardMaterial color="#010001" side={THREE.DoubleSide} />
        </mesh> */}
        <OrbitControls></OrbitControls>
        {/* Basic lighting */}
        {/* <ambientLight intensity={0.5} /> */}
        {/* <directionalLight position={[4, 6, 3]} intensity={1.2} /> */}
        <perspectiveCamera default></perspectiveCamera>
        <AbstractNetwork></AbstractNetwork>
        {/* Post-processing */}
        <EffectComposer multisampling={0}>
          {/* Depth of field aimed at the origin (where your torus is) */}
          <DepthOfField
            focusDistance={0.5} // tweak for where focus starts
            focalLength={0.5} // how strong the DOF is
            bokehScale={1.5} // size of the blur circles
            height={480}
          />

          {/* Bloom for glow */}
          <Bloom
            intensity={2} // how strong
            luminanceThreshold={1.1} // what is considered "bright"
            luminanceSmoothing={0.15}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

/* ---------- Single glowing line ---------- */

type NetworkLineProps = {
  curve: THREE.CatmullRomCurve3;
  color?: string;
};

function NetworkLine({ curve, color = "#100505" }: NetworkLineProps) {
  const points = useMemo(() => curve.getPoints(80), [curve]);

  return (
    <Line
      points={points}
      color={color}
      lineWidth={1.5}
      transparent
      opacity={0.5}
    />
  );
}

/* ---------- Node that moves along a curve ---------- */

type MovingNodeProps = {
  curve: THREE.CatmullRomCurve3;
};

function MovingNode({ curve }: MovingNodeProps) {
  const ref = useRef<THREE.Mesh | null>(null);
  const t = useRef(Math.random()); // start at a random point on the curve

  useFrame((_, delta) => {
    if (!ref.current) return;

    // move along the curve in [0, 1]
    t.current = (t.current + delta * 0.06) % 1;
    const pos = curve.getPoint(t.current);
    ref.current.position.copy(pos);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.18, 16, 16]} />
      <meshStandardMaterial
        color="#ffd85a"
        emissive="#ffd85a"
        emissiveIntensity={10}
      />
    </mesh>
  );
}

/* ---------- Whole network of lines + nodes ---------- */

function AbstractNetwork() {
  const curves = useMemo(() => {
    const items: THREE.CatmullRomCurve3[] = [];

    const lineCount = 20;
    const spanX = 50; // how far left/right the lines go
    const maxAmp = 20; // how “tall” the waves are

    for (let i = 0; i < lineCount; i++) {
      const t = i / (lineCount - 1);

      // base height for this line (spaced from -6 to +6)
      const yBase = t * 12 - 6;

      // random amplitude & phase so they don't all look the same
      const amp = maxAmp * (0.4 + Math.random() * 0.6); // 40–100% of maxAmp
      const phase = Math.random() * Math.PI * 2;

      // depth
      const z = 10;

      // 4 control points across X
      const p1 = new THREE.Vector3(-spanX, yBase, z);
      const p2 = new THREE.Vector3(
        -spanX / 3,
        yBase + amp * Math.sin(phase),
        z - 2
      );
      const p3 = new THREE.Vector3(
        spanX / 3,
        yBase + amp * Math.sin(phase + Math.PI / 2),
        z - 3
      );
      const p4 = new THREE.Vector3(spanX, yBase, z);

      const curve = new THREE.CatmullRomCurve3([p1, p2, p3, p4]);
      items.push(curve);
    }

    return items;
  }, []);

  return (
    <group position={[-20, -10, -20]} rotation={[0, Math.PI / 4, 0]}>
      {curves.map((curve, i) => (
        <group key={i}>
          <NetworkLine curve={curve} />
          <MovingNode curve={curve} />
        </group>
      ))}
    </group>
  );
}
