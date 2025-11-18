import Image from "next/image";
import { ColorShowcase } from "./components";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-red-400">
      <ColorShowcase></ColorShowcase>
    </main>
  );
}
