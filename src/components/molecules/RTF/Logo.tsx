import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Logo3D(props) {
  const { nodes, materials } = useGLTF("/blender/glbs/band1v3Main.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={materials.Material}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={
          new THREE.MeshStandardMaterial({
            color: new THREE.Color().setRGB(1, 0, 1),
          })
        }
        position={[0, -0.009, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 0.165]}
      />
    </group>
  );
}

useGLTF.preload("/blender/glbs/band1v3Main.glb");
