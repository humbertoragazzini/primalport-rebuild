import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WobblePlane() {
  const mat = useRef<THREE.ShaderMaterial>(null!);
  const sphere = useRef<THREE.Group>(null);
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
      mouseRef.current = { x, y: y };
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state) => {
    // elapsedTime is a nice stable clock (seconds)
    mat.current.uniforms.uTime.value = state.clock.elapsedTime;
    // sphere.current.rotation.x = mouseRef.current.y/10
    // sphere.current.rotation.y = mouseRef.current.x/10
    sphere.current.rotation.y = scrollRef.current;

  });

  return (
    <mesh ref={sphere} rotation={[0, Math.PI / 4, 0]} position={[0, 0, 0]} scale={1}>
      {/* <sphereGeometry args={[20, 50, 50, 50]} /> */}
      <icosahedronGeometry args={[100, 100]} />
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
            p.z += sin(uTime/2.0 + p.x * 0.1) * 5.0; // wobble
            p.x += sin(uTime/2.0 + p.y * 0.1) * 5.0; // wobble
            p.y += sin(uTime/2.0 + p.z * 0.1) * 5.0; // wobble
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

            gl_FragColor = vec4(smoothstep(0.0,1.0,x-16.0),smoothstep(0.0,1.0,x-105.0),smoothstep(0.0,1.0,x-16.0),smoothstep(0.0,1.0,x-104.5));
          }
        `}
            //         float x = (distance(uPosition, vec3(0,0,0)));
            // float y = sin(distance(uPosition, vec3(0,0,0)));
            // float z = sin(distance(uPosition, vec3(0,0,0))) * cos(distance(uPosition, vec3(0,0,0)));
            // float test = pow(sin(x),cos(x))*pow(sin(x),cos(x));
            // float test2 = pow(sin(y),cos(y))*pow(sin(y),cos(y));
            // float test3 = pow(sin(x),cos(x))*pow(sin(x),cos(x));

            // gl_FragColor = vec4(smoothstep(0.0,1.0,x),smoothstep(0.0,1.0,y/2.0),smoothstep(0.0,1.0,x),smoothstep(0.0,1.0,z));
        uniforms={{
          uTime: { value: 0 }, // you *must* wrap in { value: ... }
        }}
      />
    </mesh>
  );
}
