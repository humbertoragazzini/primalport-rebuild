import Image from "next/image";
import Heading from "../../components/atoms/Heading";
import {
  FaArrowRight,
  FaBeer,
  FaHandHoldingHeart,
  FaLeaf,
  FaToiletPaper,
} from "react-icons/fa";
import PpButton from "../../components/atoms/Button";
import MultiLangSpan from "../../components/atoms/MultiLangSpan";
import aboutUsContent from "../../data/aboutUsContent";
import { FaCircleCheck, FaPeopleGroup } from "react-icons/fa6";
import HeadingSection from "@/src/components/organisms/HeadingSection";
import { ImLeaf } from "react-icons/im";
import { GiBrain } from "react-icons/gi";
import GradientSection from "@/src/components/atoms/GradientSection";
import TransparentSection from "@/src/components/atoms/TransparentSection";
import { Direction, ScrollReveal } from "@/src/components/atoms/ScrollReveal";

export default function AboutUs() {
  return (
    <main className="w-full min-h-screen" id="home-hero">
      {/* Header */}
      <HeadingSection
        tag={aboutUsContent.hero.tag}
        title={aboutUsContent.hero.title}
        subtitle={aboutUsContent.hero.subtitle}
      ></HeadingSection>

      {/* our mission */}
      <GradientSection id={"our-mission"}>
        <div className="w-full text-white">
          <ScrollReveal direction="left" delay={0.3}>
            <Heading level={2} className="text-left font-semibold! mb-8">
              <MultiLangSpan
                content={aboutUsContent.mission.title}
              ></MultiLangSpan>
            </Heading>
          </ScrollReveal>

          <div className="mb-16 ">
            <ScrollReveal direction="right" delay={0.4}>
              <p className="text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={aboutUsContent.mission.body}
                ></MultiLangSpan>
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <ScrollReveal
              className="col-span-1"
              direction="bottom"
              delay={0.53}
            >
              <div className="border-1 p-6 rounded-2xl bg-slate-800 border-[rgba(255,255,255,0.1)] -blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
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
            </ScrollReveal>
            <ScrollReveal
              className="col-span-1"
              direction="bottom"
              delay={0.35}
            >
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
            </ScrollReveal>
          </div>
        </div>
      </GradientSection>

      {/* our values */}
      <TransparentSection id={"our-values"}>
        <div className="w-ful text-white">
          <ScrollReveal direction="bottom" delay={0.35}>
            <Heading level={2} className="text-center font-semibold! mb-8">
              <MultiLangSpan
                content={aboutUsContent.values.title}
              ></MultiLangSpan>
            </Heading>
          </ScrollReveal>
          <ScrollReveal direction="bottom" delay={0.35}>
            <div className="mb-16 mx-auto">
              <p className="text-center text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={aboutUsContent.values.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
            <ScrollReveal direction="left" delay={0.6}>
              <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                <div className="w-16 h-16 flex justify-center items-center bg bg-slate-950 rounded-full border-slate-600 border-2 mb-6">
                  <FaLeaf className="w-6 h-6"></FaLeaf>
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
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.45}>
              <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                <div className="w-16 h-16 flex justify-center items-center bg bg-slate-950 rounded-full border-slate-600 border-2 mb-6">
                  <FaHandHoldingHeart className="w-6 h-6"></FaHandHoldingHeart>
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
            </ScrollReveal>
            <ScrollReveal direction="bottom" delay={0.55}>
              <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                <div className="w-16 h-16 flex justify-center items-center bg bg-slate-950 rounded-full border-slate-600 border-2 mb-6">
                  <FaPeopleGroup className="w-6 h-6"></FaPeopleGroup>
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
            </ScrollReveal>
            <ScrollReveal direction="bottom" delay={0.45}>
              <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                <div className="w-16 h-16 flex justify-center items-center bg bg-slate-950 rounded-full border-slate-600 border-2 mb-6">
                  <GiBrain className="w-6 h-6"></GiBrain>
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
            </ScrollReveal>
          </div>
        </div>
      </TransparentSection>

      {/* our mission */}
      <TransparentSection id={"our-story"}>
        <div className=" inset-0 h-full">
          <div className="w-full mx-auto text-white">
            <ScrollReveal direction="bottom" delay={0.4}>
              <Heading level={2} className="text-center font-semibold! mb-8">
                <MultiLangSpan
                  content={aboutUsContent.story.title}
                ></MultiLangSpan>
              </Heading>
            </ScrollReveal>
            <ScrollReveal direction="bottom" delay={0.4}>
              <div className="mb-16 ">
                <p className="text-center text-xl! lg:text-2xl! text-muted-steel-blue">
                  <MultiLangSpan
                    content={aboutUsContent.story.subtitle}
                  ></MultiLangSpan>
                </p>
              </div>
            </ScrollReveal>

            <div className="w-full flex flex-row">
              <div className="w-[15%]"></div>
              <div className="w-[80%]">
                <div className="grid grid-cols-1 gap-8 mx-auto">
                  {aboutUsContent.story.timeline.map((t, i) => {
                    return (
                      <div className="col-span-1 relative">
                        <div className="absolute h-full top-0 -translate-x-9 md:-translate-x-12 lg:-translate-x-16 xl:-translate-x-22">
                          <ScrollReveal direction="scale" delay={0.2}>
                            <div className="relative z-10 flex justify-center items-center">
                              <div className="w-4 h-4 bg-slate-700 border-2 border-slate-800 rounded-full -mb-1"></div>
                            </div>
                          </ScrollReveal>

                          <ScrollReveal
                            className="relative z-0 w-full h-full flex justify-center"
                            direction="bottom"
                            delay={0.2}
                          >
                            <div
                              className={`${
                                i + 1 == aboutUsContent.story.timeline.length
                                  ? "h-[calc(100%-15px)]"
                                  : "h-[calc(100%+2rem)]"
                              } w-[2px] bg-slate-500 shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]`}
                            ></div>
                          </ScrollReveal>
                        </div>

                        <ScrollReveal
                          className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]"
                          direction="bottom"
                          delay={0.2}
                        >
                          <p className="font-semibold text-md mb-4">{t.year}</p>
                          <p className="font-semibold text-xl mb-4">
                            <MultiLangSpan content={t.title}></MultiLangSpan>
                          </p>
                          <p>
                            <MultiLangSpan content={t.body}></MultiLangSpan>
                          </p>
                        </ScrollReveal>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="col-span-1 hidden md:block"></div>
            </div>
          </div>
        </div>
      </TransparentSection>

      {/* our mission */}
      <GradientSection id={"why-were-different"}>
        <div className="w-full mx-auto text-white">
          <ScrollReveal direction="left" delay={0.3}>
            <Heading level={2} className="text-left font-semibold! mb-8">
              <MultiLangSpan
                content={aboutUsContent.whyDifferent.title}
              ></MultiLangSpan>
            </Heading>
          </ScrollReveal>
          <div className="mb-16 w-full">
            <ScrollReveal direction="bottom" delay={0.3}>
              <p className="text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={aboutUsContent.whyDifferent.subtitle}
                ></MultiLangSpan>
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutUsContent.whyDifferent.points.map((t, i) => {
              return (
                <ScrollReveal
                  direction="bottom"
                  className="col-span-1 relative"
                  delay={((0.3 * i) / 8) * Math.random()}
                >
                  <div className="border-1 h-full p-6 flex items-center bg-slate-700 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                    <div className="w-[28px] h-[28px] p-[2px] bg bg-slate-950 rounded-full border-yellow-bright border-2">
                      <FaCircleCheck className="w-[20px] h-[20px] text-yellow-bright"></FaCircleCheck>
                    </div>
                    <p className="text-xl ml-5">
                      <MultiLangSpan content={t}></MultiLangSpan>
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </GradientSection>

      {/* our values */}
      <TransparentSection id={"our-team"}>
        <div className=" inset-0 h-full">
          <div className="w-full mx-auto text-white">
            <ScrollReveal direction="left" delay={0.3}>
              <Heading level={2} className="text-center font-semibold! mb-8">
                <MultiLangSpan
                  content={aboutUsContent.team.title}
                ></MultiLangSpan>
              </Heading>
            </ScrollReveal>
            <div className="mb-16 ">
              <ScrollReveal direction="right" delay={0.3}>
                <p className="text-center text-xl! lg:text-2xl! text-muted-steel-blue">
                  <MultiLangSpan
                    content={aboutUsContent.team.subtitle}
                  ></MultiLangSpan>
                </p>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
              {aboutUsContent.team.members.map((m, i) => {
                const from = ["left", "bottom", "right"];
                return (
                  <ScrollReveal
                    className="col-span-1"
                    direction={from[i] as Direction}
                    delay={Math.random()}
                  >
                    <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                      <ScrollReveal
                        direction={"scale"}
                        delay={0}
                        className="aspect-square w-fit overflow-hidden mx-auto p-3 flex justify-center items-center bg bg-slate-950 rounded-full border-slate-600 border-2 mb-6"
                      >
                        <img
                          className="max-w-40 rounded-full w-full aspect-square"
                          src="http://placehold.co/450x450"
                        ></img>
                      </ScrollReveal>
                      <ScrollReveal direction={"bottom"} delay={0.2}>
                        <p className="font-semibold text-xl mb-4 text-yellow-bright">
                          <MultiLangSpan content={m.name}></MultiLangSpan>
                        </p>
                      </ScrollReveal>
                      <ScrollReveal direction={"bottom"} delay={0.4}>
                        <p className="mb-4">
                          <MultiLangSpan content={m.bio}></MultiLangSpan>
                        </p>
                      </ScrollReveal>
                      <ScrollReveal direction={"bottom"} delay={0.6}>
                        <p className="text-sm">
                          <MultiLangSpan content={m.role}></MultiLangSpan>
                        </p>
                      </ScrollReveal>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </TransparentSection>
    </main>
  );
}
