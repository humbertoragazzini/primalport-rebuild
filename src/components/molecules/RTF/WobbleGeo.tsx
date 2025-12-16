
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function WobblePlane() {
  const mat = useRef<THREE.ShaderMaterial>(null!);

  useFrame((state) => {
    // elapsedTime is a nice stable clock (seconds)
    mat.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh
      rotation={[0, Math.PI / 4, 0]}
      position={[0, 0, -25]}
    >
      <planeGeometry args={[50, 50, 50, 50]} />
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