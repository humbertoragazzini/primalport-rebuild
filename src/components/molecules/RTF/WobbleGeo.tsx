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
    <mesh rotation={[0, Math.PI / 4, 0]} position={[0, 0, 0]}>
      {/* <sphereGeometry args={[20, 50, 50, 50]} /> */}
      <icosahedronGeometry args={[100, 50]} />
      {/* <planeGeometry args={[10, 10, 50, 50]}></planeGeometry> */}
      {/* <boxGeometry args={[50, 50, 50, 50, 50, 50]}></boxGeometry> */}
      <shaderMaterial
        ref={mat}
        side={THREE.DoubleSide}
        // wireframe
        transparent
        vertexShader={`
          varying vec2 vUv;
          varying vec3 uPosition;
          uniform float uTime;

          void main() {
            vUv = uv;

            vec3 p = position;
            p.z += sin(uTime/2.0 + p.x * 0.1) * 4.0; // wobble
            p.x += sin(uTime/2.0 + p.y * 0.1) * 4.0; // wobble
            p.y += sin(uTime/2.0 + p.z * 0.1) * 4.0; // wobble
            uPosition = p;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          varying vec3 uPosition;
          uniform float uTime;

          void main() {
            float x = (distance(uPosition, vec3(0,0,0)));
            float y = sin(distance(uPosition, vec3(0,0,0)));
            float z = sin(distance(uPosition, vec3(0,0,0))) * cos(distance(uPosition, vec3(0,0,0)));

            gl_FragColor = vec4(x-16.0,x-16.0,x-16.0,x-98.0);
          }
        `}
        uniforms={{
          uTime: { value: 0 }, // you *must* wrap in { value: ... }
        }}
      />
    </mesh>
  );
}
