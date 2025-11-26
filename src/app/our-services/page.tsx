import Image from "next/image";
import Heading from "../../components/atoms/Heading";
import { FaArrowRight, FaBeer } from "react-icons/fa";
import PpButton from "../../components/atoms/Button";
import MyCarousel from "../../components/organisms/Carousel";
import MultiLangSpan from "@/src/components/atoms/MultiLangSpan";
import { FaCircleCheck } from "react-icons/fa6";
import servicesPageContent from "@/src/data/servicesPageContent";

export default function Home() {
  return (
    <main className="w-full min-h-screen pb-16" id="home-hero">
      {/* Header */}
      <div className="mx-auto px-2 xl:px-6 py-16 lg:py-0 lg:h-[calc(100vh-160px)] w-full flex justify-center items-center">
        <div className="max-w-[1480px]">
          <div className="rounded-full border-yellow-bright border-2 text-white py-4 px-6 w-fit mx-auto font-semibold mb-4 text-2xl">
            <MultiLangSpan
              content={servicesPageContent.hero.tag}
            ></MultiLangSpan>
          </div>
          <Heading
            level={1}
            className="text-white font-bold text-center mb-4 xl:text-[100px]!"
          >
            <MultiLangSpan
              content={servicesPageContent.hero.title}
            ></MultiLangSpan>
          </Heading>
          <p className="font-semi text-lg! lg:text-xl! text-muted-steel-blue text-center mx-auto xl:w-[75%] mb-8">
            <MultiLangSpan
              content={servicesPageContent.hero.subtitle}
            ></MultiLangSpan>
          </p>
          <div className="flex justify-center items-center mb-8"></div>
        </div>
      </div>

      {/* our mission */}
      <div
        id="home-highlights"
        className="w-full mb-40 py-[1px] bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_0%,rgba(2,6,24,1)_100%)]"
      >
        <div className=" inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-800 py-16 h-full">
          <div className="w-full mx-auto max-w-[1480px] px-2 xl:px-6 text-white">
            <Heading level={2} className="text-left font-semibold! mb-8">
              <MultiLangSpan
                content={servicesPageContent.overview.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-16 lg:max-w-[75%] mx-auto">
              <p className="text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={servicesPageContent.overview.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-[75%] mx-auto">
              {servicesPageContent.overview.cards.map((c) => {
                return (
                  <div className="col-span-1">
                    <div className="border-1 p-6 rounded-2xl bg-slate-800 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                      <p className="font-semibold text-xl mb-4">
                        <MultiLangSpan content={c.title}></MultiLangSpan>
                      </p>
                      <p>
                        <MultiLangSpan content={c.body}></MultiLangSpan>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* our values */}
      <div id="home-highlights" className="w-full mb-40">
        <div className=" inset-0 py-16 h-full">
          <div className="w-full mx-auto max-w-[1280px] px-2 xl:px-6 text-white">
            <Heading level={2} className="text-center font-semibold! mb-8">
              <MultiLangSpan
                content={servicesPageContent.importSection.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-4 lg:max-w-[75%] mx-auto">
              <p className="text-center font-semibold text-xl! lg:text-2xl! text-yellow-bright">
                <MultiLangSpan
                  content={servicesPageContent.importSection.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="mb-16 lg:max-w-[75%] mx-auto">
              <p className="text-center text-lg! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={servicesPageContent.importSection.body}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
              {servicesPageContent.importSection.bullets.map((b) => {
                return (
                  <div className="col-span-1 relative">
                    <div className="border-1 p-6 flex items-center bg-slate-700 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                      <div className="w-[28px] h-[28px] p-[2px] bg bg-slate-950 rounded-full border-yellow-bright border-2">
                        <FaCircleCheck className="w-[20px] h-[20px] text-yellow-bright"></FaCircleCheck>
                      </div>
                      <p className="text-xl ml-5">
                        <MultiLangSpan content={b}></MultiLangSpan>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* our mission */}
      <div
        id="home-highlights"
        className="w-full mb-40 py-[1px] bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_0%,rgba(2,6,24,1)_100%)]"
      >
        <div className=" inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-800 py-16 h-full">
          <div className="w-full mx-auto max-w-[1480px] px-2 xl:px-6 text-white">
            <Heading level={2} className="text-left font-semibold! mb-8">
              <MultiLangSpan
                content={servicesPageContent.exportSection.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-16 lg:max-w-[1200px] mx-auto">
              <p className="text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={servicesPageContent.exportSection.body}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="grid lg:max-w-[1200px] grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
              {servicesPageContent.exportSection.bullets.map((b) => {
                return (
                  <div className="col-span-1 relative">
                    <div className="border-1 p-6 flex items-center bg-slate-700 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                      <div className="w-[28px] h-[28px] p-[2px] bg bg-slate-950 rounded-full border-yellow-bright border-2">
                        <FaCircleCheck className="w-[20px] h-[20px] text-yellow-bright"></FaCircleCheck>
                      </div>
                      <p className="text-xl ml-5">
                        <MultiLangSpan content={b}></MultiLangSpan>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* our values */}
      <div id="home-highlights" className="w-full mb-40">
        <div className=" inset-0 py-16 h-full">
          <div className="w-full mx-auto max-w-[1280px] px-2 xl:px-6 text-white">
            <Heading level={2} className="text-center font-semibold! mb-8">
              <MultiLangSpan
                content={servicesPageContent.consultingSection.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-4 lg:max-w-[75%] mx-auto">
              <p className="text-center font-semibold text-xl! lg:text-2xl! text-yellow-bright">
                <MultiLangSpan
                  content={servicesPageContent.consultingSection.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="mb-16 lg:max-w-[75%] mx-auto">
              <p className="text-center text-lg! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={servicesPageContent.consultingSection.body}
                ></MultiLangSpan>
              </p>
            </div>

            <div className="grid lg:max-w-[1200px] grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
              {servicesPageContent.consultingSection.bullets.map((b) => {
                return (
                  <div className="col-span-1 relative">
                    <div className="border-1 p-6 flex items-center bg-slate-700 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                      <div className="w-[28px] h-[28px] p-[2px] bg bg-slate-950 rounded-full border-yellow-bright border-2">
                        <FaCircleCheck className="w-[20px] h-[20px] text-yellow-bright"></FaCircleCheck>
                      </div>
                      <p className="text-xl ml-5">
                        <MultiLangSpan content={b}></MultiLangSpan>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* our mission */}
      <div
        id="home-highlights"
        className="w-full mb-40 py-[1px] bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_0%,rgba(2,6,24,1)_100%)]"
      >
        <div className=" inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-800 py-16 h-full">
          <div className="w-full mx-auto max-w-[1480px] px-2 xl:px-6 text-white">
            <div className="mb-4 lg:max-w-[75%] mx-auto">
              <Heading level={2} className="text-center font-semibold! mb-8">
                <MultiLangSpan
                  content={servicesPageContent.paperSection.title}
                ></MultiLangSpan>
              </Heading>
            </div>

            <div className="mb-4 lg:max-w-[75%] mx-auto">
              <p className="text-center font-semibold text-xl! lg:text-2xl! text-yellow-bright">
                <MultiLangSpan
                  content={servicesPageContent.paperSection.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="mb-16 lg:max-w-[75%] mx-auto">
              <p className="text-center text-lg! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={servicesPageContent.paperSection.body}
                ></MultiLangSpan>
              </p>
            </div>

            <div className="grid lg:max-w-[1200px] grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
              {servicesPageContent.paperSection.bullets.map((b) => {
                return (
                  <div className="col-span-1 relative">
                    <div className="border-1 p-6 flex items-center bg-slate-700 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                      <div className="w-[28px] h-[28px] p-[2px] bg bg-slate-950 rounded-full border-yellow-bright border-2">
                        <FaCircleCheck className="w-[20px] h-[20px] text-yellow-bright"></FaCircleCheck>
                      </div>
                      <p className="text-xl ml-5">
                        <MultiLangSpan content={b}></MultiLangSpan>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* our values */}
      <div id="home-highlights" className="w-full mb-40">
        <div className=" inset-0 py-16 h-full">
          <div className="w-full mx-auto max-w-[1280px] px-2 xl:px-6 text-white">
            <Heading level={2} className="text-center font-semibold! mb-8">
              <MultiLangSpan
                content={servicesPageContent.whyUs.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-16 lg:max-w-[75%] mx-auto">
              <p className="text-center text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={servicesPageContent.whyUs.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
              {servicesPageContent.whyUs.points.map((m) => {
                return (
                  <div className="col-span-1">
                    <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                      {/* <div className="aspect-square w-fit overflow-hidden mx-auto p-3 flex justify-center items-center bg bg-slate-950 rounded-full border-slate-600 border-2 mb-6">
                        <img
                          className="max-w-40 rounded-full w-full aspect-square"
                          src="http://placehold.co/450x450"
                        ></img>
                      </div> */}
                      <p className="font-semibold text-xl">
                        <MultiLangSpan content={m}></MultiLangSpan>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* our mission */}
      <div
        id="home-highlights"
        className="w-full mb-40 py-[1px] bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_0%,rgba(2,6,24,1)_100%)]"
      >
        <div className=" inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-800 py-16 h-full">
          <div className="w-full mx-auto max-w-[1480px] px-2 xl:px-6 text-white">
            <div className="mb-4 lg:max-w-[75%] mx-auto">
              <Heading level={2} className="text-center font-semibold! mb-8">
                <MultiLangSpan
                  content={servicesPageContent.process.title}
                ></MultiLangSpan>
              </Heading>
            </div>

            <div className="grid lg:max-w-[1200px] grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
              {servicesPageContent.process.steps.map((b) => {
                return (
                  <div className="col-span-1 relative">
                    <div className="border-1 p-6 flex items-center bg-slate-700 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                      <div className="flex justify-center items-center min-w-[48px] text-yellow-bright min-h-[48px] bg bg-slate-950 rounded-full border-yellow-bright border-2 font-bold">
                        {b.number}
                      </div>
                      <div>
                        <p className="text-xl font-semibold ml-5">
                          <MultiLangSpan content={b.title}></MultiLangSpan>
                        </p>
                        <p className="text-md ml-5">
                          <MultiLangSpan content={b.body}></MultiLangSpan>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* our values */}
      <div id="home-highlights" className="w-full mb-40">
        <div className=" inset-0 py-16 h-full">
          <div className="w-full mx-auto max-w-[1280px] px-2 xl:px-6 text-white">
            <Heading level={2} className="text-center font-semibold! mb-8">
              <MultiLangSpan
                content={servicesPageContent.cta.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-16 lg:max-w-[75%] mx-auto">
              <p className="text-center text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={servicesPageContent.cta.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="flex justify-center items-center mb-8">
              <div className="ml-3">
                <PpButton
                  theme={"yellow"}
                  icon={<FaArrowRight size={18} />}
                  href={"/"}
                >
                  <MultiLangSpan
                    content={servicesPageContent.cta.button}
                  ></MultiLangSpan>
                </PpButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
