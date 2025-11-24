import Image from "next/image";
import Heading from "../../components/atoms/Heading";
import { FaArrowRight, FaBeer, FaToiletPaper } from "react-icons/fa";
import PpButton from "../../components/atoms/Button";
import MyCarousel from "../../components/organisms/Carousel";
import { BiBeer } from "react-icons/bi";
import MultiLangSpan from "../../components/atoms/MultiLangSpan";
import aboutUsContent from "../../data/aboutUsContent";
import { SiHomepage } from "react-icons/si";
import ShimmerBorderCard from "../../components/atoms/Card";
import { FiCloudLightning } from "react-icons/fi";
import { GiCargoShip } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuShipWheel } from "react-icons/lu";

export default function AboutUs() {
  return (
    <main className="w-full min-h-screen pb-16" id="home-hero">
      {/* Header */}
      <div className="mx-auto px-2 xl:px-6 h-[calc(100vh-160px)] w-full flex justify-center items-center">
        <div className="max-w-[1480px]">
          <div className="rounded-full border-yellow-bright border-2 text-white py-4 px-6 w-fit mx-auto font-semibold mb-4">
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
          <div className="flex justify-center items-center mb-8">
            {/* <div>
              <PpButton theme={"yellow"} icon={<FaBeer size={18} />} href={"/"}>
                Contact Us
              </PpButton>
            </div> */}
            <div className="ml-3">
              <PpButton
                theme={"yellow"}
                icon={<FaArrowRight size={18} />}
                href={"/"}
              >
                <MultiLangSpan
                  content={aboutUsContent.hero.button}
                ></MultiLangSpan>
              </PpButton>
            </div>
          </div>
        </div>
      </div>
      {/* About */}

      <div
        id="home-highlights"
        className="w-full mb-40 py-[1px] bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_0%,rgba(2,6,24,1)_100%)]"
      >
        <div className=" inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-800 py-16 h-full">
          <div className="w-full mx-auto max-w-[1480px] px-2 xl:px-6">
            <Heading level={2} className="text-left font-semibold! text-white">
              <MultiLangSpan
                content={aboutUsContent.about.title}
              ></MultiLangSpan>
            </Heading>
          </div>
        </div>
      </div>
    </main>
  );
}
