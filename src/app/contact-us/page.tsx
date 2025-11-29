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
import HeadingSection from "@/src/components/organisms/HeadingSection";
import GradientSection from "@/src/components/atoms/GradientSection";
import TransparentSection from "@/src/components/atoms/TransparentSection";

export default function Contact() {
  return (
    <main className="w-full min-h-screen" id="home-hero">
      {/* Header */}
      <HeadingSection
        tag={contactPageContent.hero.tag}
        title={contactPageContent.hero.title}
        subtitle={contactPageContent.hero.subtitle}
      ></HeadingSection>

      {/* carousel */}
      <GradientSection>
        <>
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
        </>
      </GradientSection>

      <TransparentSection>
        <>
          <div className="mx-auto text-white">
            <div className="w-full mx-auto max-w-[1480px] mb-16 text-white">
              <Heading level={2} className="font-bold">
                <MultiLangSpan
                  content={contactPageContent.formSection.title}
                ></MultiLangSpan>
              </Heading>
            </div>

            <ContactForm></ContactForm>
          </div>
        </>
      </TransparentSection>
    </main>
  );
}
