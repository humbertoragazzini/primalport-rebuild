import Image from "next/image";
import Heading from "../../components/atoms/Heading";
import { FaArrowRight, FaBeer, FaToiletPaper } from "react-icons/fa";
import PpButton from "../../components/atoms/Button";
import MultiLangSpan from "../../components/atoms/MultiLangSpan";
import aboutUsContent from "../../data/aboutUsContent";
import { FaCircleCheck } from "react-icons/fa6";
import HeadingSection from "@/src/components/organisms/Header";

export default function AboutUs() {
  return (
    <main className="w-full min-h-screen pb-16" id="home-hero">
      {/* Header */}
      <HeadingSection
        tag={aboutUsContent.hero.tag}
        title={aboutUsContent.hero.title}
        subtitle={aboutUsContent.hero.subtitle}
      ></HeadingSection>

      {/* our mission */}
      <div
        id="home-highlights"
        className="w-full mb-40 py-[1px] bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_95%,rgba(2,6,24,1)_100%)] md:bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_0%,rgba(2,6,24,1)_100%)]"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-[75%] mx-auto">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
              <div className="col-span-1">
                <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
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
                <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
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
                <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
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
                <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
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
        className="w-full mb-40 py-[1px] bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_95%,rgba(2,6,24,1)_100%)] md:bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_0%,rgba(2,6,24,1)_100%)]"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-[75%] mx-auto">
              <div className="col-span-1">
                <div className="border-1 p-6 rounded-2xl bg-slate-700 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
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
                <div className="border-1 p-6 rounded-2xl bg-slate-700 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
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
            <div className="w-full flex flex-row">
              <div className="w-[15%]"></div>
              <div className="w-[80%]">
                <div className="grid grid-cols-1 gap-8 mx-auto">
                  {aboutUsContent.story.timeline.map((t, i) => {
                    return (
                      <div className="col-span-1 relative">
                        <div className="absolute h-full top-0 -translate-x-9 md:-translate-x-12 lg:-translate-x-16 xl:-translate-x-22">
                          <div className="relative z-10 flex justify-center items-center">
                            <div className="w-4 h-4 bg-slate-700 border-2 border-slate-800 rounded-full -mb-1"></div>
                          </div>
                          <div className="relative z-0 w-full h-full flex justify-center">
                            <div
                              className={`${
                                i + 1 == aboutUsContent.story.timeline.length
                                  ? "h-[calc(100%-15px)]"
                                  : "h-[calc(100%+2rem)]"
                              } w-[2px] bg-slate-500 shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]`}
                            ></div>
                          </div>
                        </div>
                        <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
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

              <div className="col-span-1 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>

      {/* our mission */}
      <div
        id="home-highlights"
        className="w-full mb-40 py-[1px] bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_95%,rgba(2,6,24,1)_100%)] md:bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_0%,rgba(2,6,24,1)_100%)]"
      >
        <div className=" inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-800 py-16 h-full">
          <div className="w-full mx-auto max-w-[1480px] px-2 xl:px-6 text-white">
            <Heading level={2} className="text-left font-semibold! mb-8">
              <MultiLangSpan
                content={aboutUsContent.whyDifferent.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-16 lg:max-w-[75%] mx-auto">
              <p className="text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={aboutUsContent.whyDifferent.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 lg:max-w-[75%] mx-auto">
              {aboutUsContent.whyDifferent.points.map((t, i) => {
                return (
                  <div className="col-span-1 relative">
                    <div className="border-1 p-6 flex items-center bg-slate-700 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                      <div className="w-[28px] h-[28px] p-[2px] bg bg-slate-950 rounded-full border-yellow-bright border-2">
                        <FaCircleCheck className="w-[20px] h-[20px] text-yellow-bright"></FaCircleCheck>
                      </div>
                      <p className="text-xl ml-5">
                        <MultiLangSpan content={t}></MultiLangSpan>
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
                content={aboutUsContent.team.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-16 lg:max-w-[75%] mx-auto">
              <p className="text-center text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={aboutUsContent.team.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
              {aboutUsContent.team.members.map((m) => {
                return (
                  <div className="col-span-1">
                    <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                      <div className="aspect-square w-fit overflow-hidden mx-auto p-3 flex justify-center items-center bg bg-slate-950 rounded-full border-slate-600 border-2 mb-6">
                        <img
                          className="max-w-40 rounded-full w-full aspect-square"
                          src="http://placehold.co/450x450"
                        ></img>
                      </div>
                      <p className="font-semibold text-xl mb-4 text-yellow-bright">
                        <MultiLangSpan content={m.name}></MultiLangSpan>
                      </p>
                      <p className="mb-4">
                        <MultiLangSpan content={m.bio}></MultiLangSpan>
                      </p>
                      <p className="text-sm">
                        <MultiLangSpan content={m.role}></MultiLangSpan>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
