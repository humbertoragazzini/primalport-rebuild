import Image from "next/image";
import {
  ButtonsShowcase,
  ColorGrid,
  HeadingShowcase,
  HeadingsI18nShowcase,
} from "./components";
export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <ColorGrid></ColorGrid>
      <HeadingShowcase></HeadingShowcase>
      <ButtonsShowcase></ButtonsShowcase>
      <HeadingsI18nShowcase></HeadingsI18nShowcase>
    </main>
  );
}
