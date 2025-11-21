import Image from "next/image";
import Heading from "../components/atoms/Heading";
import { FaBeer } from "react-icons/fa";
import PpButton from "../components/atoms/Button";
import MyCarousel from "../components/organisms/Carousel";

export default function Home() {
  return (
    <main className="w-full min-h-screen pb-16">
      {/* Header */}
      <div className="mx-auto h-[calc(100vh-160px)] w-full flex justify-center items-center">
        <div className="max-w-[1480px]">
          <Heading
            level={1}
            className="text-white font-bold text-center mb-4 text-[100px]"
          >
            <span>
              <span className="text-yellow-bright">Powerful</span> for
              developers.
              <br></br> Fast for{" "}
              <span className="text-yellow-bright">everyone</span>.
            </span>
          </Heading>
          <p className="font-semi text-xl text-muted-steel-blue text-center mx-auto w-[75%] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum,
            tempora delectus, ut reprehenderit itaque blanditiis repudiandae
            optio sint inventore assumenda atque corporis explicabo nostrum? Ut
            nemo nobis ullam nam.
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
      </div>
      {/* carousel */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center py-16 bg-slate-950 mb-40">
        <Heading level={2} className="text-center font-bold text-white">
          Some heading for the carousel
        </Heading>
        <MyCarousel></MyCarousel>
      </div>
      {/* cards */}
      <div className=" w-full min-h-screen flex justify-center items-center">
        <div className="mx-auto max-w-[1480px] text-white mb-[200px]">
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
      </div>
    </main>
  );
}
