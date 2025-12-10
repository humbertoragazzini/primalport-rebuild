import Image from "next/image";
import Heading from "../components/atoms/Heading";
import { FaArrowRight, FaBeer, FaToiletPaper } from "react-icons/fa";
import PpButton from "../components/atoms/Button";
import MyCarousel from "../components/organisms/Carousel";
import { BiBeer } from "react-icons/bi";
import MultiLangSpan from "../components/atoms/MultiLangSpan";
import homeContent from "../data/homeContent";
import { SiHomepage } from "react-icons/si";
import ShimmerBorderCard from "../components/atoms/Card";
import { FiCloudLightning } from "react-icons/fi";
import { GiCargoShip } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuShipWheel } from "react-icons/lu";
import Header from "../components/molecules/Header";
import HeadingSection from "../components/organisms/HeadingSection";
import GradientSection from "../components/atoms/GradientSection";
import TransparentSection from "../components/atoms/TransparentSection";
import Cards from "../components/organisms/tools/Cards";
import { ScrollReveal } from "../components/atoms/ScrollReveal";

export default function Home() {
  return (
    <main className="w-full min-h-screen" id="home-hero">
      {/* Header */}
      <HeadingSection
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        button={homeContent.hero.button}
      ></HeadingSection>

      {/* carousel */}
      <GradientSection
        id={"home-highlights"}
        className={"[&_.inner-container]:px-0 [&_.inner-container]:py-16"}
      >
        <div className="w-full mb-16">
          <ScrollReveal direction="left" delay={0.3}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl leading-tight md:leading-tight xl:leading-tight text-left mb-8 font-semibold! text-white">
              <span lang="en">Nuestras herramientas</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.3}>
            <p className="text-xl! lg:text-2xl! text-muted-steel-blue">
              <span lang="en">
                Te brindamos herramientas utiles para el enprendedor, utilizalas
                de forma totalmente gratuita, necesitas acesoramiento,
                comunicate con nosotros y uno de nuestros expertos te ayudara a
                conseguir lo mejor de tu negocio.
              </span>
            </p>
          </ScrollReveal>
        </div>
        {/* <MyCarousel></MyCarousel> */}
        <Cards></Cards>
      </GradientSection>

      {/* cards */}
      <TransparentSection id={"cards-highlights"}>
        <div className="mx-auto text-white">
          <div className="grid grid-cols-12">
            <ScrollReveal
              direction="left"
              delay={0.3 * (Math.random() * 1)}
              className="col-span-12 lg:col-span-4 px-2 lg:px-0"
            >
              <Heading level={2} className="font-bold">
                <MultiLangSpan
                  content={homeContent.solutions.title}
                ></MultiLangSpan>
              </Heading>
            </ScrollReveal>

            <div className="col-span-12 lg:col-span-8 pt-16 lg:px-0 lg:pt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                <ScrollReveal
                  direction="scale"
                  delay={Math.random() * 0.5}
                  className="col-span-1 hover:shadow-[0_0_25px_6px_rgba(150,150,150,0.3)] rounded-3xl backdrop-blur-2xl shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]"
                >
                  <a
                    href={"/our-services#import-services"}
                    className="transition-all duration-500 group lg:translate-y-32"
                  >
                    <div className="transition-all duration-500 group-hover:bg-slate-950/50 h-full border-1 p-6 rounded-2xl flex justify-center items-center flex-col bg-slate-700/40 border-[rgba(255,255,255,0.1)]">
                      <div className="w-28 h-28 z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 flex justify-center items-center text-7xl">
                        <GiCargoShip className="w-14 h-14 relative text-indigo-500" />
                      </div>
                      <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50 group-hover:text-yellow-bright">
                        <MultiLangSpan
                          content={homeContent.solutions.cardSmartImportTitle}
                        ></MultiLangSpan>
                      </h4>
                      <p className="relative z-10 text-slate-400">
                        <MultiLangSpan
                          content={homeContent.solutions.cardSmartImportBody}
                        ></MultiLangSpan>
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
                <ScrollReveal
                  direction="scale"
                  delay={Math.random() * 0.5}
                  className="col-span-1 hover:shadow-[0_0_25px_6px_rgba(150,150,150,0.3)] rounded-3xl backdrop-blur-2xl shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]"
                >
                  <a
                    href={"/our-services#export-services"}
                    className="transition-all duration-500 group lg:translate-y-0"
                  >
                    <div className="transition-all duration-500 group-hover:bg-slate-950/50 h-full border-1 p-6 rounded-2xl flex justify-center items-center flex-col bg-slate-700/40 border-[rgba(255,255,255,0.1)]">
                      <div className="w-28 h-28 z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 flex justify-center items-center text-7xl">
                        <LuShipWheel className="w-15 h-15 relative text-indigo-500" />
                      </div>
                      <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50 group-hover:text-yellow-bright">
                        <MultiLangSpan
                          content={homeContent.solutions.cardSmoothExportTitle}
                        ></MultiLangSpan>
                      </h4>
                      <p className="relative z-10 text-slate-400">
                        <MultiLangSpan
                          content={homeContent.solutions.cardSmoothExportBody}
                        ></MultiLangSpan>
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
                <ScrollReveal
                  direction="scale"
                  delay={Math.random() * 0.5}
                  className="col-span-1 hover:shadow-[0_0_25px_6px_rgba(150,150,150,0.3)] rounded-3xl backdrop-blur-2xl shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]"
                >
                  <a
                    href={"/our-services#logistics-services"}
                    className="transition-all duration-500 group lg:translate-y-32"
                  >
                    <div className="transition-all duration-500 group-hover:bg-slate-950/50 h-full border-1 p-6 rounded-2xl flex justify-center items-center flex-col bg-slate-700/40 border-[rgba(255,255,255,0.1)]">
                      <div className="w-28 h-28 z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 flex justify-center items-center text-7xl">
                        <LiaShippingFastSolid className="w-14 h-14 relative text-indigo-500" />
                      </div>
                      <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50 group-hover:text-yellow-bright">
                        <MultiLangSpan
                          content={homeContent.solutions.cardLogisticsTitle}
                        ></MultiLangSpan>
                      </h4>
                      <p className="relative z-10 text-slate-400">
                        <MultiLangSpan
                          content={homeContent.solutions.cardLogisticsBody}
                        ></MultiLangSpan>
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
                <ScrollReveal
                  direction="scale"
                  delay={Math.random() * 0.5}
                  className="col-span-1 hover:shadow-[0_0_25px_6px_rgba(150,150,150,0.3)] rounded-3xl backdrop-blur-2xl shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]"
                >
                  <a
                    href={"/our-services#paper-services"}
                    className="transition-all duration-500 group lg:translate-y-0"
                  >
                    <div className="transition-all duration-500 group-hover:bg-slate-950/50 h-full border-1 p-6 rounded-2xl flex justify-center items-center flex-col bg-slate-700/40 border-[rgba(255,255,255,0.1)]">
                      <div className="w-28 h-28 z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 flex justify-center items-center text-7xl">
                        <FaToiletPaper className="w-14 h-14 relative text-indigo-500" />
                      </div>
                      <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50 group-hover:text-yellow-bright">
                        <MultiLangSpan
                          content={homeContent.solutions.cardPaperLineTitle}
                        ></MultiLangSpan>
                      </h4>
                      <p className="relative z-10 text-slate-400">
                        <MultiLangSpan
                          content={homeContent.solutions.cardPaperLineBody}
                        ></MultiLangSpan>
                      </p>
                    </div>
                    {/* <ShimmerBorderCard
        title={}
        body={}
        icon={}
      ></ShimmerBorderCard> */}
                  </a>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </TransparentSection>
    </main>
  );
}
