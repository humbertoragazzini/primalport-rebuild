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
      <GradientSection id={"home-highlights"}>
        <div className="w-full mx-auto max-w-[1480px] px-2 xl:px-6">
          <Heading level={2} className="text-center font-semibold! text-white">
            <MultiLangSpan content={homeContent.about.title}></MultiLangSpan>
          </Heading>
        </div>
        <MyCarousel></MyCarousel>
      </GradientSection>

      {/* cards */}
      <TransparentSection id={"cards-highlights"}>
        <div className="mx-auto text-white lg:pb-[145px]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-4 px-6 lg:px-0">
              <Heading level={2} className="font-bold">
                <MultiLangSpan
                  content={homeContent.solutions.title}
                ></MultiLangSpan>
              </Heading>
            </div>
            <div className="col-span-12 lg:col-span-8 px-6 pt-16 lg:px-0 lg:pt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                <div className="col-span-1 lg:translate-y-32 rounded-3xl backdrop-blur-2xl shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <ShimmerBorderCard
                    title={
                      <MultiLangSpan
                        content={homeContent.solutions.cardSmartImportTitle}
                      ></MultiLangSpan>
                    }
                    icon={
                      <GiCargoShip className="w-14 h-14 relative text-indigo-500" />
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
                    icon={
                      <LuShipWheel className="w-15 h-15 relative text-indigo-500" />
                    }
                    body={
                      <MultiLangSpan
                        content={homeContent.solutions.cardSmoothExportBody}
                      ></MultiLangSpan>
                    }
                  ></ShimmerBorderCard>
                </div>
                <div className="col-span-1 lg:translate-y-32 rounded-3xl backdrop-blur-2xl shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
                  <ShimmerBorderCard
                    title={
                      <MultiLangSpan
                        content={homeContent.solutions.cardLogisticsTitle}
                      ></MultiLangSpan>
                    }
                    icon={
                      <LiaShippingFastSolid className="w-14 h-14 relative text-indigo-500" />
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
                    icon={
                      <FaToiletPaper className="w-14 h-14 relative text-indigo-500" />
                    }
                  ></ShimmerBorderCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransparentSection>
    </main>
  );
}
