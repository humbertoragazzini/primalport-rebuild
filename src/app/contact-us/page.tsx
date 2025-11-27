import Image from "next/image";
import Heading from "../../components/atoms/Heading";
import { FaArrowRight, FaBeer, FaToiletPaper } from "react-icons/fa";
import PpButton from "../../components/atoms/Button";
import MyCarousel from "../../components/organisms/Carousel";
import MultiLangSpan from "@/src/components/atoms/MultiLangSpan";
import { FaCircleCheck } from "react-icons/fa6";
import contactPageContent from "@/src/data/contactPageContent";
import ShimmerBorderCard from "@/src/components/atoms/Card";
import { useLanguageStore } from "@/src/hooks/useLanguage";
import ContactForm from "@/src/components/organisms/ContactForm";

export default function Contact() {
  return (
    <main className="w-full min-h-screen pb-16" id="home-hero">
      {/* Header */}
      <div className="mx-auto px-2 xl:px-6 py-16 lg:py-0 h-screen lg:h-[calc(100vh-160px)] w-full flex justify-center items-center">
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

      {/* carousel */}
      <div
        id="home-highlights"
        className="w-full py-[1px] bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_0%,rgba(2,6,24,1)_100%)]"
      >
        <div className=" inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-800 py-16 h-full px-2 xl:px-6">
          <div className="w-full mx-auto max-w-[1480px]">
            <Heading
              level={2}
              className="text-center font-semibold! text-white"
            >
              <MultiLangSpan
                content={contactPageContent.infoSection.title}
              ></MultiLangSpan>
            </Heading>
          </div>
          <div className="mb-16 lg:max-w-[1280px] mx-auto">
            <p className="text-md! text-center lg:text-2xl! text-muted-steel-blue">
              <MultiLangSpan
                content={contactPageContent.infoSection.subtitle}
              ></MultiLangSpan>
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:max-w-[75%] mx-auto">
            {contactPageContent.infoSection.cards.map((c) => {
              return (
                <ShimmerBorderCard
                  title={
                    <div className="text-center w-full">
                      <MultiLangSpan content={c.title}></MultiLangSpan>
                    </div>
                  }
                  body={
                    <>
                      <div className="w-full text-center">
                        <MultiLangSpan content={c.line1}></MultiLangSpan>
                      </div>
                      <div className="w-full text-center">
                        <MultiLangSpan content={c.line2}></MultiLangSpan>
                      </div>
                    </>
                  }
                  icon={
                    <FaToiletPaper className="w-14 h-14 relative text-indigo-500" />
                  }
                ></ShimmerBorderCard>
              );
            })}
          </div>
        </div>
      </div>

      <div
        id="cards-highlights"
        className="mx-auto w-full max-w-[1480px] min-h-screen flex flex-col justify-center items-center px-2 xl:px-6"
      >
        <div className="mx-auto text-white">
          <div className="w-full mx-auto max-w-[1480px] mb-16 text-white">
            <Heading level={2} className="font-bold">
              <MultiLangSpan
                content={contactPageContent.formSection.title}
              ></MultiLangSpan>
            </Heading>
          </div>
        </div>
        <div className="w-full mx-auto max-w-[800px]">
          <div className="border-1 p-6 rounded-2xl bg-slate-700/40 border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </main>
  );
}
