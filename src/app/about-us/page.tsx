import Image from "next/image";
import Heading from "../../components/atoms/Heading";
import { FaArrowRight, FaBeer, FaToiletPaper } from "react-icons/fa";
import PpButton from "../../components/atoms/Button";
import MultiLangSpan from "../../components/atoms/MultiLangSpan";
import aboutUsContent from "../../data/aboutUsContent";

export default function AboutUs() {
  return (
    <main className="w-full min-h-screen pb-16" id="home-hero">
      {/* Header */}
      <div className="mx-auto px-2 xl:px-6 h-[calc(100vh-160px)] w-full flex justify-center items-center">
        <div className="max-w-[1480px]">
          <div className="rounded-full border-yellow-bright border-2 text-white py-4 px-6 w-fit mx-auto font-semibold mb-4 text-2xl">
            <MultiLangSpan content={aboutUsContent.hero.tag}></MultiLangSpan>
          </div>
          <Heading
            level={1}
            className="text-white font-bold text-center mb-4 xl:text-[100px]!"
          >
            <MultiLangSpan content={aboutUsContent.hero.title}></MultiLangSpan>
          </Heading>
          <p className="font-semi text-lg! lg:text-xl! text-muted-steel-blue text-center mx-auto xl:w-[75%] mb-8">
            <MultiLangSpan
              content={aboutUsContent.hero.subtitle}
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
                content={aboutUsContent.mission.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-16 lg:max-w-[75%] mx-auto">
              <p className="text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={aboutUsContent.mission.body}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:max-w-[75%] mx-auto">
              <div className="col-span-1">
                <div className="border-1 p-6 rounded-2xl bg-slate-800 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <p className="font-semibold text-xl mb-4">
                    <MultiLangSpan
                      content={aboutUsContent.mission.cards[0].title}
                    ></MultiLangSpan>
                  </p>
                  <p>
                    <MultiLangSpan
                      content={aboutUsContent.mission.cards[0].body}
                    ></MultiLangSpan>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="border-1 p-6 rounded-2xl bg-slate-800 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <p className="font-semibold text-xl mb-4">
                    <MultiLangSpan
                      content={aboutUsContent.mission.cards[1].title}
                    ></MultiLangSpan>
                  </p>
                  <p>
                    <MultiLangSpan
                      content={aboutUsContent.mission.cards[1].body}
                    ></MultiLangSpan>
                  </p>
                </div>
              </div>
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
                content={aboutUsContent.values.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-16 lg:max-w-[75%] mx-auto">
              <p className="text-center text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={aboutUsContent.values.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mx-auto">
              <div className="col-span-1">
                <div className="border-1 p-6 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <div className="w-16 h-16 flex justify-center items-center bg bg-slate-950 rounded-full border-slate-600 border-2 mb-6">
                    <FaBeer className="w-6 h-6"></FaBeer>
                  </div>
                  <p className="font-semibold text-xl mb-4">
                    <MultiLangSpan
                      content={aboutUsContent.values.items[0].title}
                    ></MultiLangSpan>
                  </p>
                  <p>
                    <MultiLangSpan
                      content={aboutUsContent.values.items[0].body}
                    ></MultiLangSpan>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="border-1 p-6 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <div className="w-16 h-16 flex justify-center items-center bg bg-slate-950 rounded-full border-slate-600 border-2 mb-6">
                    <FaBeer className="w-6 h-6"></FaBeer>
                  </div>
                  <p className="font-semibold text-xl mb-4">
                    <MultiLangSpan
                      content={aboutUsContent.values.items[1].title}
                    ></MultiLangSpan>
                  </p>
                  <p>
                    <MultiLangSpan
                      content={aboutUsContent.values.items[1].body}
                    ></MultiLangSpan>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="border-1 p-6 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <div className="w-16 h-16 flex justify-center items-center bg bg-slate-950 rounded-full border-slate-600 border-2 mb-6">
                    <FaBeer className="w-6 h-6"></FaBeer>
                  </div>
                  <p className="font-semibold text-xl mb-4">
                    <MultiLangSpan
                      content={aboutUsContent.values.items[2].title}
                    ></MultiLangSpan>
                  </p>
                  <p>
                    <MultiLangSpan
                      content={aboutUsContent.values.items[2].body}
                    ></MultiLangSpan>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="border-1 p-6 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <div className="w-16 h-16 flex justify-center items-center bg bg-slate-950 rounded-full border-slate-600 border-2 mb-6">
                    <FaBeer className="w-6 h-6"></FaBeer>
                  </div>
                  <p className="font-semibold text-xl mb-4">
                    <MultiLangSpan
                      content={aboutUsContent.values.items[3].title}
                    ></MultiLangSpan>
                  </p>
                  <p>
                    <MultiLangSpan
                      content={aboutUsContent.values.items[3].body}
                    ></MultiLangSpan>
                  </p>
                </div>
              </div>
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
                content={aboutUsContent.mission.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-16 lg:max-w-[75%] mx-auto">
              <p className="text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={aboutUsContent.mission.body}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:max-w-[75%] mx-auto">
              <div className="col-span-1">
                <div className="border-1 p-6 rounded-2xl bg-slate-800 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <p className="font-semibold text-xl mb-4">
                    <MultiLangSpan
                      content={aboutUsContent.mission.cards[0].title}
                    ></MultiLangSpan>
                  </p>
                  <p>
                    <MultiLangSpan
                      content={aboutUsContent.mission.cards[0].body}
                    ></MultiLangSpan>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="border-1 p-6 rounded-2xl bg-slate-800 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <p className="font-semibold text-xl mb-4">
                    <MultiLangSpan
                      content={aboutUsContent.mission.cards[1].title}
                    ></MultiLangSpan>
                  </p>
                  <p>
                    <MultiLangSpan
                      content={aboutUsContent.mission.cards[1].body}
                    ></MultiLangSpan>
                  </p>
                </div>
              </div>
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
                content={aboutUsContent.story.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-16 lg:max-w-[75%] mx-auto">
              <p className="text-center text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={aboutUsContent.story.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-3"></div>
              <div className="col-span-9">
                <div className="grid grid-cols-1 gap-8 mx-auto">
                  {aboutUsContent.story.timeline.map((t) => {
                    return (
                      <div className="col-span-1">
                        <div className="border-1 p-6 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                          <p className="font-semibold text-md mb-4">{t.year}</p>
                          <p className="font-semibold text-xl mb-4">
                            <MultiLangSpan content={t.title}></MultiLangSpan>
                          </p>
                          <p>
                            <MultiLangSpan content={t.body}></MultiLangSpan>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
