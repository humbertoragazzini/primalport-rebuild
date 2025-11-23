import Image from "next/image";
import Heading from "../components/atoms/Heading";
import { FaBeer } from "react-icons/fa";
import PpButton from "../components/atoms/Button";
import MyCarousel from "../components/organisms/Carousel";
import { BiBeer } from "react-icons/bi";
import MultiLangSpan from "../components/atoms/MultiLangSpan";
import homeContent from "../data/homeContent";
import { SiHomepage } from "react-icons/si";
import ShimmerBorderCard from "../components/atoms/Card";

export default function Home() {
  return (
    <main className="w-full min-h-screen pb-16">
      {/* Header */}
      <div className="mx-auto  px-6 h-[calc(100vh-160px)] w-full flex justify-center items-center">
        <div className="max-w-[1480px]">
          <Heading
            level={1}
            className="text-white font-bold text-center mb-4 text-3xl md:text-6 xl:text-[100px]"
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
                <div className="col-span-1 translate-y-32 rounded-3xl backdrop-blur-2xl shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <ShimmerBorderCard
                    title={
                      <MultiLangSpan
                        content={homeContent.solutions.cardSmartImportTitle}
                      ></MultiLangSpan>
                    }
                    body={
                      <MultiLangSpan
                        content={homeContent.solutions.cardSmartImportBody}
                      ></MultiLangSpan>
                    }
                  ></ShimmerBorderCard>
                </div>
                <div className="col-span-1 rounded-3xl backdrop-blur-2xl shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <ShimmerBorderCard
                    title={
                      <MultiLangSpan
                        content={homeContent.solutions.cardSmoothExportTitle}
                      ></MultiLangSpan>
                    }
                    body={
                      <MultiLangSpan
                        content={homeContent.solutions.cardSmoothExportBody}
                      ></MultiLangSpan>
                    }
                  ></ShimmerBorderCard>
                </div>
                <div className="col-span-1 translate-y-32 rounded-3xl backdrop-blur-2xl shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <ShimmerBorderCard
                    title={
                      <MultiLangSpan
                        content={homeContent.solutions.cardLogisticsTitle}
                      ></MultiLangSpan>
                    }
                    body={
                      <MultiLangSpan
                        content={homeContent.solutions.cardLogisticsBody}
                      ></MultiLangSpan>
                    }
                  ></ShimmerBorderCard>
                </div>
                <div className="col-span-1 rounded-3xl backdrop-blur-2xl shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <ShimmerBorderCard
                    title={
                      <MultiLangSpan
                        content={homeContent.solutions.cardPaperLineTitle}
                      ></MultiLangSpan>
                    }
                    body={
                      <MultiLangSpan
                        content={homeContent.solutions.cardPaperLineBody}
                      ></MultiLangSpan>
                    }
                  ></ShimmerBorderCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
