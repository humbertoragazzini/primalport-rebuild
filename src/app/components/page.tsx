import Image from "next/image";
import { ColorGrid } from "./components";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-red-400">
      <ColorGrid></ColorGrid>
    </main>
  );
}
