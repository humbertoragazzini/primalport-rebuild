import Image from "next/image";
import Heading from "../../components/atoms/Heading";
import { FaArrowRight, FaBeer } from "react-icons/fa";
import PpButton from "../../components/atoms/Button";
import MyCarousel from "../../components/organisms/Carousel";
import MultiLangSpan from "@/src/components/atoms/MultiLangSpan";
import { FaCircleCheck } from "react-icons/fa6";
import servicesPageContent from "@/src/data/servicesPageContent";
import HeadingSection from "@/src/components/organisms/HeadingSection";
import GradientSection from "@/src/components/atoms/GradientSection";
import TransparentSection from "@/src/components/atoms/TransparentSection";
import { ScrollReveal } from "@/src/components/atoms/ScrollReveal";

export default function OurServices() {
  return (
    <main className="w-full min-h-screen" id="home-hero">
      {/* Header */}
      <HeadingSection
        tag={servicesPageContent.hero.tag}
        title={servicesPageContent.hero.title}
        subtitle={servicesPageContent.hero.subtitle}
      ></HeadingSection>

      <GradientSection>
        <div className="w-full  text-white">
          <ScrollReveal direction={"right"} delay={Math.random() / 2}>
            <Heading level={2} className="text-left font-semibold! mb-8">
              <MultiLangSpan
                content={servicesPageContent.overview.title}
              ></MultiLangSpan>
            </Heading>
          </ScrollReveal>
          <ScrollReveal direction={"left"} delay={Math.random() / 2}>
            <div className="mb-16 ">
              <p className="text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={servicesPageContent.overview.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {servicesPageContent.overview.cards.map((c) => {
              return (
                <ScrollReveal
                  className="col-span-1"
                  direction={"bottom"}
                  delay={Math.random()}
                >
                  <div className="border-1 p-6 rounded-2xl bg-slate-800 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                    <p className="font-semibold text-xl mb-4">
                      <MultiLangSpan content={c.title}></MultiLangSpan>
                    </p>
                    <p>
                      <MultiLangSpan content={c.body}></MultiLangSpan>
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </GradientSection>

      <TransparentSection>
        <div className="w-full mx-auto max-w-[1280px] px-2 xl:px-6 text-white">
          <ScrollReveal
            className="col-span-1"
            direction={"left"}
            delay={Math.random()}
          >
            <Heading level={2} className="text-center font-semibold! mb-8">
              <MultiLangSpan
                content={servicesPageContent.importSection.title}
              ></MultiLangSpan>
            </Heading>
          </ScrollReveal>
          <ScrollReveal
            className="col-span-1"
            direction={"right"}
            delay={Math.random()}
          >
            <div className="mb-4 ">
              <p className="text-center font-semibold text-xl! lg:text-2xl! text-yellow-bright">
                <MultiLangSpan
                  content={servicesPageContent.importSection.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal
            className="col-span-1"
            direction={"bottom"}
            delay={Math.random()}
          >
            <div className="mb-16 ">
              <p className="text-center text-lg! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={servicesPageContent.importSection.body}
                ></MultiLangSpan>
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
            {servicesPageContent.importSection.bullets.map((b) => {
              return (
                <ScrollReveal
                  className="col-span-1 relative"
                  direction={"bottom"}
                  delay={Math.random()}
                >
                  <div className="border-1 p-6 flex items-center bg-slate-700 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                    <div className="w-[28px] h-[28px] p-[2px] bg bg-slate-950 rounded-full border-yellow-bright border-2">
                      <FaCircleCheck className="w-[20px] h-[20px] text-yellow-bright"></FaCircleCheck>
                    </div>
                    <p className="text-xl ml-5">
                      <MultiLangSpan content={b}></MultiLangSpan>
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </TransparentSection>

      <GradientSection>
        <div className="w-full  text-white">
          <ScrollReveal direction={"up"} delay={Math.random()}>
            <Heading level={2} className="text-left font-semibold! mb-8">
              <MultiLangSpan
                content={servicesPageContent.exportSection.title}
              ></MultiLangSpan>
            </Heading>
          </ScrollReveal>
          <ScrollReveal
            className="mb-16 lg:max-w-[1200px] mx-auto"
            direction={"right"}
            delay={Math.random()}
          >
            <p className="text-xl! lg:text-2xl! text-muted-steel-blue">
              <MultiLangSpan
                content={servicesPageContent.exportSection.body}
              ></MultiLangSpan>
            </p>
          </ScrollReveal>
          <div className="grid lg:max-w-[1200px] grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
            {servicesPageContent.exportSection.bullets.map((b) => {
              return (
                <ScrollReveal
                  className="col-span-1 relative"
                  direction={"bottom"}
                  delay={Math.random()}
                >
                  <div className="border-1 p-6 flex items-center bg-slate-700 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                    <div className="w-[28px] h-[28px] p-[2px] bg bg-slate-950 rounded-full border-yellow-bright border-2">
                      <FaCircleCheck className="w-[20px] h-[20px] text-yellow-bright"></FaCircleCheck>
                    </div>
                    <p className="text-xl ml-5">
                      <MultiLangSpan content={b}></MultiLangSpan>
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </GradientSection>
      <TransparentSection>
        <div className=" inset-0 h-full">
          <div className="w-full mx-auto max-w-[1280px] px-2 xl:px-6 text-white">
            <ScrollReveal direction={"up"} delay={Math.random()}>
              <Heading level={2} className="text-center font-semibold! mb-8">
                <MultiLangSpan
                  content={servicesPageContent.consultingSection.title}
                ></MultiLangSpan>
              </Heading>
            </ScrollReveal>
            <ScrollReveal direction={"bottom"} delay={Math.random()}>
              <div className="mb-4 ">
                <p className="text-center font-semibold text-xl! lg:text-2xl! text-yellow-bright">
                  <MultiLangSpan
                    content={servicesPageContent.consultingSection.subtitle}
                  ></MultiLangSpan>
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction={"left"} delay={Math.random()}>
              <div className="mb-16 ">
                <p className="text-center text-lg! lg:text-2xl! text-muted-steel-blue">
                  <MultiLangSpan
                    content={servicesPageContent.consultingSection.body}
                  ></MultiLangSpan>
                </p>
              </div>
            </ScrollReveal>
            <div className="grid lg:max-w-[1200px] grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
              {servicesPageContent.consultingSection.bullets.map((b) => {
                return (
                  <ScrollReveal
                    className="col-span-1 relative"
                    direction={"left"}
                    delay={Math.random()}
                  >
                    <div className="border-1 p-6 flex items-center bg-slate-700 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                      <div className="w-[28px] h-[28px] p-[2px] bg bg-slate-950 rounded-full border-yellow-bright border-2">
                        <FaCircleCheck className="w-[20px] h-[20px] text-yellow-bright"></FaCircleCheck>
                      </div>
                      <p className="text-xl ml-5">
                        <MultiLangSpan content={b}></MultiLangSpan>
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </TransparentSection>

      <GradientSection>
        <div className="w-full  text-white">
          <div className="mb-4 ">
            <Heading level={2} className="text-center font-semibold! mb-8">
              <MultiLangSpan
                content={servicesPageContent.paperSection.title}
              ></MultiLangSpan>
            </Heading>
          </div>

          <div className="mb-4 ">
            <p className="text-center font-semibold text-xl! lg:text-2xl! text-yellow-bright">
              <MultiLangSpan
                content={servicesPageContent.paperSection.subtitle}
              ></MultiLangSpan>
            </p>
          </div>
          <div className="mb-16 ">
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
      </GradientSection>
      <TransparentSection>
        <div className=" inset-0 h-full">
          <div className="w-full mx-auto max-w-[1280px] px-2 xl:px-6 text-white">
            <Heading level={2} className="text-center font-semibold! mb-8">
              <MultiLangSpan
                content={servicesPageContent.whyUs.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-16 ">
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
      </TransparentSection>

      <GradientSection>
        <div className="w-full  text-white">
          <div className="mb-4 ">
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
      </GradientSection>
      <TransparentSection>
        <div className=" inset-0 h-full">
          <div className="w-full mx-auto max-w-[1280px] px-2 xl:px-6 text-white">
            <Heading level={2} className="text-center font-semibold! mb-8">
              <MultiLangSpan
                content={servicesPageContent.cta.title}
              ></MultiLangSpan>
            </Heading>
            <div className="mb-16 ">
              <p className="text-center text-xl! lg:text-2xl! text-muted-steel-blue">
                <MultiLangSpan
                  content={servicesPageContent.cta.subtitle}
                ></MultiLangSpan>
              </p>
            </div>
            <div className="flex justify-center items-center">
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
      </TransparentSection>
    </main>
  );
}
