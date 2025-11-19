import Image from "next/image";
import Heading from "../components/atoms/Heading";
import { FaBeer } from "react-icons/fa";
import PpButton from "../components/atoms/Button";
import { Carousel } from "../components/organisms/Carousel";

export default function Home() {
  return (
    <main className="w-full flex justify-center items-center min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-10 h-full backdrop-blur-lg border-1 rounded-4xl border-[rgba(255,255,255,0.1)]">
        <Heading level={1} className="text-white font-bold text-center mb-4">
          <span>
            Powerful for developers.<br></br> Fast for everyone.
          </span>
        </Heading>
        <p className="font-semi text-xl text-white text-center mx-auto w-[75%] mb-8">
          Bring blockchain to the people. Solana supports experiences for power
          users, new consumers, and everyone in between.
        </p>
        <div className="flex justify-center items-center">
          <div>
            <PpButton theme={"yellow"} icon={<FaBeer size={18} />} href={"/"}>
              Contact Us
            </PpButton>
          </div>
          <div className="ml-3">
            <PpButton theme={"yellow"} icon={<FaBeer size={18} />} href={"/"}>
              Check our services
            </PpButton>
          </div>
        </div>
        <Carousel></Carousel>
      </div>
    </main>
  );
}
