import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import SceneObjects from "./MultiObject";
import * as THREE from "three";

export default function ScrollAndMouseGroup() {
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
