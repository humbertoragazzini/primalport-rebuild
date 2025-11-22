"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    <div className="w-full mx-auto max-w-[1480px] pb-16">
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
        <div className="flex items-center justify-center py-16">
          <Item>
            <div className="grid grid-cols-12 gap-12 max-w-[1180px]">
              {/* <div className="relative col-span-5">
              <img
                className="absolute top-0 left-0 h-full"
                src={"https://placehold.co/600x450"}
              ></img>
            </div> */}
              <div className="col-span-12 h-full">
                <div className="w-full h-full flex flex-col justify-center items-center text-white p-12">
                  <div>
                    <div class="text-4xl mb-8">
                      <p>
                        "Time-to-market is crucial in our ever-changing market
                        environment. With help of Dash Enterprise, we were able
                        to accelerate deployment of new apps from weeks to
                        minutes without compromising on governance aspects and
                        security."
                      </p>
                    </div>
                    <div className="">
                      <div className="text-md">
                        <p className="">
                          Volodymyr Sorokoumov - Digital Trading - Lead Platform
                          Design &amp; Operations
                        </p>
                        <p className="">Uniper</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Item>
        </div>
        {/* Slide 1 */}
        <div className="flex items-center justify-center py-16">
          <Item>
            <div className="grid grid-cols-12 gap-12 max-w-[1180px]">
              {/* <div className="relative col-span-5">
                <img
                  className="absolute top-0 left-0 h-full"
                  src={"https://placehold.co/600x450"}
                ></img>
              </div> */}
              <div className="col-span-12 h-full">
                <div className="w-full h-full flex flex-col justify-center items-center text-white p-12">
                  <div>
                    <div class="text-4xl mb-8">
                      <p>
                        "Time-to-market is crucial in our ever-changing market
                        environment. With help of Dash Enterprise, we were able
                        to accelerate deployment of new apps from weeks to
                        minutes without compromising on governance aspects and
                        security."
                      </p>
                    </div>
                    <div className="">
                      <div className="text-md">
                        <p className="">
                          Volodymyr Sorokoumov - Digital Trading - Lead Platform
                          Design &amp; Operations
                        </p>
                        <p className="">Uniper</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Item>
        </div>
        {/* Slide 1 */}
        <div className="flex items-center justify-center py-16">
          <Item>
            <div className="grid grid-cols-12 gap-12 max-w-[1180px]">
              {/* <div className="relative col-span-5">
                <img
                  className="absolute top-0 left-0 h-full"
                  src={"https://placehold.co/600x450"}
                ></img>
              </div> */}
              <div className="col-span-12 h-full">
                <div className="w-full h-full flex flex-col justify-center items-center text-white p-12">
                  <div>
                    <div class="text-4xl mb-8">
                      <p>
                        "Time-to-market is crucial in our ever-changing market
                        environment. With help of Dash Enterprise, we were able
                        to accelerate deployment of new apps from weeks to
                        minutes without compromising on governance aspects and
                        security."
                      </p>
                    </div>
                    <div className="">
                      <div className="text-md">
                        <p className="">
                          Volodymyr Sorokoumov - Digital Trading - Lead Platform
                          Design &amp; Operations
                        </p>
                        <p className="">Uniper</p>
                      </div>
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
    <div className="border-1 rounded-2xl border-[rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden shadow-[0_0_25px_6px_rgba(150,150,150,0.2)]">
      {children}
    </div>
  );
}
