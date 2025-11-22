import Image from "next/image";
import Heading from "../components/atoms/Heading";
import { FaBeer } from "react-icons/fa";
import PpButton from "../components/atoms/Button";
import MyCarousel from "../components/organisms/Carousel";
import { BiBeer } from "react-icons/bi";

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
              <span className="text-yellow-bright">Conectamos</span> Argentina
              <br></br> con el <span className="text-yellow-bright">mundo</span>
              .
            </span>
          </Heading>
          <p className="font-semi text-xl text-muted-steel-blue text-center mx-auto w-[75%] mb-8">
            Importación, exportación y soluciones logísticas para empresas que
            buscan crecer sin fronteras.
          </p>
          <div className="flex justify-center items-center mb-8">
            {/* <div>
              <PpButton theme={"yellow"} icon={<FaBeer size={18} />} href={"/"}>
                Contact Us
              </PpButton>
            </div> */}
            <div className="ml-3">
              <PpButton theme={"yellow"} icon={<FaBeer size={18} />} href={"/"}>
                Check our services
              </PpButton>
            </div>
          </div>
        </div>
      </div>
      {/* carousel */}
      <div className="w-full mb-40 py-[1px] bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_0%,rgba(2,6,24,1)_100%)]">
        <div className=" inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-800 py-16 h-full">
          <Heading level={2} className="text-center font-bold text-white">
            Some heading for the carousel
          </Heading>
          <MyCarousel></MyCarousel>
        </div>
      </div>
      {/* cards */}
      <div className=" w-full min-h-screen flex justify-center items-center">
        <div className="mx-auto max-w-[1480px] text-white mb-[200px]">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <Heading level={2} className="font-bold">
                Made for mass adoption.
              </Heading>
            </div>
            <div className="col-span-8">
              <div className="grid grid-cols-2 gap-7">
                <div className="col-span-1 border-1 aspect-[4/3] rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-8 py-7 translate-y-[80px] shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-slate-800 flex justify-center items-center">
                    <BiBeer className="w-6 h-6"></BiBeer>
                  </div>
                  <Heading level={3} className="mb-4 text-md font-semibold">
                    Decentralized
                  </Heading>
                  <p className="mb-4 text-muted-steel-blue">
                    The Solana network is validated by thousands of nodes that
                    operate independently of each other, ensuring your data
                    remains secure and censorship resistant.
                  </p>
                  <p className="text-sm">The Solana network.</p>
                </div>
                <div className="col-span-1 border-1 aspect-[4/3] rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-8 py-7 shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-slate-800 flex justify-center items-center">
                    <BiBeer className="w-6 h-6"></BiBeer>
                  </div>
                  <Heading level={3} className="mb-4 text-md font-semibold">
                    Decentralized
                  </Heading>
                  <p className="mb-4 text-muted-steel-blue">
                    The Solana network is validated by thousands of nodes that
                    operate independently of each other, ensuring your data
                    remains secure and censorship resistant.
                  </p>
                  <p className="text-sm">The Solana network.</p>
                </div>
                <div className="col-span-1 border-1 aspect-[4/3] rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-8 py-7 translate-y-[80px] shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-slate-800 flex justify-center items-center">
                    <BiBeer className="w-6 h-6"></BiBeer>
                  </div>
                  <Heading level={3} className="mb-4 text-md font-semibold">
                    Decentralized
                  </Heading>
                  <p className="mb-4 text-muted-steel-blue">
                    The Solana network is validated by thousands of nodes that
                    operate independently of each other, ensuring your data
                    remains secure and censorship resistant.
                  </p>
                  <p className="text-sm">The Solana network.</p>
                </div>
                <div className="col-span-1 border-1 aspect-[4/3] rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-8 py-7 shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-slate-800 flex justify-center items-center">
                    <BiBeer className="w-6 h-6"></BiBeer>
                  </div>
                  <Heading level={3} className="mb-4 text-md font-semibold">
                    Decentralized
                  </Heading>
                  <p className="mb-4 text-muted-steel-blue">
                    The Solana network is validated by thousands of nodes that
                    operate independently of each other, ensuring your data
                    remains secure and censorship resistant.
                  </p>
                  <p className="text-sm">The Solana network.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
