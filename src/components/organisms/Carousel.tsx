"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import homeContent from "@/src/data/homeContent";
import MultiLangSpan from "../atoms/MultiLangSpan";
import Heading from "../atoms/Heading";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export default function MyCarousel() {
  return (
    <div className="w-full mx-auto max-w-[1480px] px-2 lg:px-6">
      <Carousel
        responsive={responsive}
        showDots
        arrows
        infinite={false}
        keyBoardControl
        draggable
        containerClass="carousel-container"
        dotListClass="flex justify-center gap-2"
        itemClass="px-2"
        renderDotsOutside={false}
      >
        {/* Slide 1 */}
        <div className="flex items-center justify-center py-12 overflow-visible">
          <Item>
            <div className="w-full">
              <div className="h-full">
                <div className="w-full h-full flex flex-col justify-center items-center text-white p-6 xl:p-12">
                  <div>
                    <div className="text-4xl mb-8">
                      <Heading
                        level={3}
                        className="font-semibold text-yellow-bright"
                      >
                        <MultiLangSpan
                          content={homeContent.services.importTitle}
                        ></MultiLangSpan>
                      </Heading>
                    </div>
                    <div className="">
                      <p className="text-base lg:text-xl text-muted-steel-blue">
                        <MultiLangSpan
                          content={homeContent.services.importBody}
                        ></MultiLangSpan>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Item>
        </div>
        {/* Slide 1 */}
        <div className="flex items-center justify-center pt-16">
          <Item>
            <div className="max-w-[1180px]">
              <div className="h-full">
                <div className="w-full h-full flex flex-col justify-center items-center text-white p-6 xl:p-12">
                  <div>
                    <div className="text-4xl mb-8">
                      <Heading
                        level={3}
                        className="font-semibold text-yellow-bright"
                      >
                        <MultiLangSpan
                          content={homeContent.services.consultingTitle}
                        ></MultiLangSpan>
                      </Heading>
                    </div>
                    <div className="">
                      <p className="text-base lg:text-xl text-muted-steel-blue">
                        <MultiLangSpan
                          content={homeContent.services.consultingBody}
                        ></MultiLangSpan>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Item>
        </div>
        {/* Slide 1 */}
        <div className="flex items-center justify-center pt-16">
          <Item>
            <div className="max-w-[1180px]">
              <div className="h-full">
                <div className="w-full h-full flex flex-col justify-center items-center text-white p-6 xl:p-12 ">
                  <div>
                    <div className="text-4xl mb-8">
                      <Heading
                        level={3}
                        className="font-semibold text-yellow-bright"
                      >
                        <MultiLangSpan
                          content={homeContent.services.paperTitle}
                        ></MultiLangSpan>
                      </Heading>
                    </div>
                    <div className="">
                      <p className="text-base lg:text-xl text-muted-steel-blue">
                        <MultiLangSpan
                          content={homeContent.services.paperBody}
                        ></MultiLangSpan>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Item>
        </div>
      </Carousel>
    </div>
  );
}

function Item({ children }: { children: any }) {
  return (
    <div className="border-1 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl bg-slate-950">
      {children}
    </div>
  );
}
