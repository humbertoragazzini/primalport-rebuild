import Image from "next/image";
import Heading from "../../components/atoms/Heading";
import { FaArrowRight, FaBeer } from "react-icons/fa";
import PpButton from "../../components/atoms/Button";
import MyCarousel from "../../components/organisms/Carousel";
import MultiLangSpan from "@/src/components/atoms/MultiLangSpan";
import { FaCircleCheck } from "react-icons/fa6";
import contactPageContent from "@/src/data/contactPageContent";

export default function Contact() {
  return (
    <main className="w-full min-h-screen pb-16" id="home-hero">
      {/* Header */}
      <div className="mx-auto px-2 xl:px-6 py-16 lg:py-0 lg:h-[calc(100vh-160px)] w-full flex justify-center items-center">
        <div className="max-w-[1480px]">
          <div className="rounded-full border-yellow-bright border-2 text-white py-4 px-6 w-fit mx-auto font-semibold mb-4 text-2xl">
            <MultiLangSpan
              content={contactPageContent.hero.tag}
            ></MultiLangSpan>
          </div>
          <Heading
            level={1}
            className="text-white font-bold text-center mb-4 xl:text-[100px]!"
          >
            <MultiLangSpan
              content={contactPageContent.hero.title}
            ></MultiLangSpan>
          </Heading>
          <p className="font-semi text-lg! lg:text-xl! text-muted-steel-blue text-center mx-auto xl:w-[75%] mb-8">
            <MultiLangSpan
              content={contactPageContent.hero.subtitle}
            ></MultiLangSpan>
          </p>
          <div className="flex justify-center items-center mb-8"></div>
        </div>
      </div>
    </main>
  );
}
