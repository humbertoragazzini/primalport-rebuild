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
    <mesh rotation={[0, Math.PI / 4, 0]} position={[0, 0, -80]}>
      <sphereGeometry args={[50, 50, 50, 50]} />
      {/* <icosahedronGeometry args={[50, 50, 50, 50]} /> */}
      <shaderMaterial
        ref={mat}
        // wireframe
        vertexShader={`
          varying vec2 vUv;
          varying vec3 uPosition;
          uniform float uTime;

          void main() {
            vUv = uv;

            vec3 p = position;
            p.z += sin(uTime + p.x * 0.1) * 10.0; // wobble
            p.x += sin(uTime + p.y * 0.1) * 10.0; // wobble
            p.y += sin(uTime + p.z * 0.1) * 10.0; // wobble
            uPosition = p;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          varying vec3 uPosition;
          uniform float uTime;

          void main() {
            float d = distance(uPosition, vec3(0,0,0))/60.0;

            gl_FragColor = vec4(d,d,d, 1.0);
          }
        `}
        uniforms={{
          uTime: { value: 0 }, // you *must* wrap in { value: ... }
        }}
      />
    </mesh>
  );
}
