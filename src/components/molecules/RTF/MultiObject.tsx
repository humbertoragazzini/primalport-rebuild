import { Float } from "@react-three/drei";
import { useMemo } from "react";
import { Logo3D } from "./Logo";

export default function SceneObjects() {
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