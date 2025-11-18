import Image from "next/image";
import { ColorGrid, HeadingShowcase } from "./components";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-red-400">
      <ColorGrid></ColorGrid>
      <HeadingShowcase></HeadingShowcase>
    </main>
  );
}
