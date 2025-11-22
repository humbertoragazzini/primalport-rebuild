import Image from "next/image";
import Heading from "../components/atoms/Heading";
import { FaBeer } from "react-icons/fa";
import PpButton from "../components/atoms/Button";
import MyCarousel from "../components/organisms/Carousel";
import { BiBeer } from "react-icons/bi";
import MultiLangSpan from "../components/atoms/MultiLangSpan";
import homeContent from "../data/homeContent";
import { SiHomepage } from "react-icons/si";
import Example from "../components/atoms/Card";

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
            <MultiLangSpan content={homeContent.hero.title}></MultiLangSpan>
          </Heading>
          <p className="font-semi text-xl text-muted-steel-blue text-center mx-auto w-[75%] mb-8">
            <MultiLangSpan content={homeContent.hero.subtitle}></MultiLangSpan>
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
          <div className="w-full mx-auto max-w-[1480px] px-6">
            <Heading level={2} className="text-left !font-semibold text-white">
              <MultiLangSpan content={homeContent.about.title}></MultiLangSpan>
            </Heading>
          </div>
          <MyCarousel></MyCarousel>
        </div>
      </div>
      {/* cards */}
      <div className=" w-full min-h-screen flex justify-center items-center">
        <div className="mx-auto max-w-[1480px] text-white mb-[200px]">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <Heading level={2} className="font-bold">
                <MultiLangSpan
                  content={homeContent.solutions.title}
                ></MultiLangSpan>
              </Heading>
            </div>
            <div className="col-span-8">
              <div className="grid grid-cols-2 gap-7">
                <div className="col-span-1 border-1 aspect-[4/3] rounded-3xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-8 py-7 translate-y-[80px] shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  {/* <div className="w-16 h-16 mb-4 rounded-xl bg-slate-800 flex justify-center items-center">
                    <BiBeer className="w-6 h-6"></BiBeer>
                  </div> */}
                  {/* <div
                    className="w-full mb-5 rounded-xl bg-cover bg-bottoms flex justify-center items-center aspect-3/1 overflow-hidden"
                    style={{ backgroundImage: "url(./images/ship.avif)" }}
                  ></div>
                  <Heading level={3} className="mb-4 text-md font-semibold">
                    <MultiLangSpan
                      content={homeContent.solutions.cardSmartImportTitle}
                    ></MultiLangSpan>
                  </Heading>
                  <p className="mb-4 text-muted-steel-blue">
                    <MultiLangSpan
                      content={homeContent.solutions.cardSmartImportBody}
                    ></MultiLangSpan>
                  </p> */}
                  <Example></Example>
                </div>
                <div className="col-span-1 border-1 aspect-[4/3] rounded-3xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-8 py-7 shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-slate-800 flex justify-center items-center">
                    <BiBeer className="w-6 h-6"></BiBeer>
                  </div>
                  <Heading level={3} className="mb-4 text-md font-semibold">
                    <MultiLangSpan
                      content={homeContent.solutions.cardSmoothExportTitle}
                    ></MultiLangSpan>
                  </Heading>
                  <p className="mb-4 text-muted-steel-blue">
                    <MultiLangSpan
                      content={homeContent.solutions.cardSmoothExportBody}
                    ></MultiLangSpan>
                  </p>
                </div>
                <div className="col-span-1 border-1 aspect-[4/3] rounded-3xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-8 py-7 translate-y-[80px] shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-slate-800 flex justify-center items-center">
                    <BiBeer className="w-6 h-6"></BiBeer>
                  </div>
                  <Heading level={3} className="mb-4 text-md font-semibold">
                    <MultiLangSpan
                      content={homeContent.solutions.cardPaperLineTitle}
                    ></MultiLangSpan>
                  </Heading>
                  <p className="mb-4 text-muted-steel-blue">
                    <MultiLangSpan
                      content={homeContent.solutions.cardPaperLineBody}
                    ></MultiLangSpan>
                  </p>
                </div>
                <div className="col-span-1 border-1 aspect-[4/3] rounded-3xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl px-8 py-7 shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-slate-800 flex justify-center items-center">
                    <BiBeer className="w-6 h-6"></BiBeer>
                  </div>
                  <Heading level={3} className="mb-4 text-md font-semibold">
                    <MultiLangSpan
                      content={homeContent.solutions.cardLogisticsTitle}
                    ></MultiLangSpan>
                  </Heading>
                  <p className="mb-4 text-muted-steel-blue">
                    <MultiLangSpan
                      content={homeContent.solutions.cardLogisticsBody}
                    ></MultiLangSpan>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
