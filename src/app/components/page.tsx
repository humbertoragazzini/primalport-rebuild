import Image from "next/image";
import { ColorGrid, HeadingShowcase } from "./components";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <ColorGrid></ColorGrid>
      <HeadingShowcase></HeadingShowcase>
    </main>
  );
}
