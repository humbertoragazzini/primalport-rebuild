import Image from "next/image";
import Heading from "../components/atoms/Heading";
import { FaBeer } from "react-icons/fa";
import PpButton from "../components/atoms/Button";
import { ShowcaseCarousel } from "../components/organisms/Carousel";
import MyCarousel from "../components/organisms/Carousel";

export default function Home() {
  return (
    <main className="w-full min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-6 py-10 h-full backdrop-blur-lg border-1 rounded-4xl border-[rgba(255,255,255,0.1)] mb-16 shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
        <Heading level={1} className="text-white font-bold text-center mb-4">
          <span>
            Powerful for developers.<br></br> Fast for everyone.
          </span>
        </Heading>
        <p className="font-semi text-xl text-white text-center mx-auto w-[75%] mb-8">
          Bring blockchain to the people. Solana supports experiences for power
          users, new consumers, and everyone in between.
        </p>
        <div className="flex justify-center items-center mb-8">
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
      </div>
      <div className="w-full bg-slate-950">
        <MyCarousel></MyCarousel>
      </div>
      <div className="mx-auto max-w-6xl text-white mb-[96px]">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <Heading level={2} className="">
              Made for mass adoption.
            </Heading>
          </div>
          <div className="col-span-8">
            <div className="grid grid-cols-2 gap-7">
              <div className="col-span-1 border-1 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-8 py-6 translate-y-[80px] shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                <Heading level={3}>Decentralized</Heading>
                <p>
                  The Solana network is validated by thousands of nodes that
                  operate independently of each other, ensuring your data
                  remains secure and censorship resistant.
                </p>
                <p>850</p>
              </div>
              <div className="col-span-1 border-1 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-8 py-6 shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                <Heading level={3}>Decentralized</Heading>
                <p>
                  The Solana network is validated by thousands of nodes that
                  operate independently of each other, ensuring your data
                  remains secure and censorship resistant.
                </p>
                <p>850</p>
              </div>
              <div className="col-span-1 border-1 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-8 py-6 translate-y-[80px] shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                <Heading level={3}>Decentralized</Heading>
                <p>
                  The Solana network is validated by thousands of nodes that
                  operate independently of each other, ensuring your data
                  remains secure and censorship resistant.
                </p>
                <p>850</p>
              </div>
              <div className="col-span-1 border-1 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-8 py-6 shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                <Heading level={3}>Decentralized</Heading>
                <p>
                  The Solana network is validated by thousands of nodes that
                  operate independently of each other, ensuring your data
                  remains secure and censorship resistant.
                </p>
                <p>850</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
