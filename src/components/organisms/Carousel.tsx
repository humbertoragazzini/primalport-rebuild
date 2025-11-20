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
    <div className="w-full py-16">
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
            <div className="grid grid-cols-2 gap-12 max-w-6xl">
              <div className="col-span-1">
                <img src={"https://placehold.co/600x450"}></img>
                {/* <Image
                  alt=""
                  width={450}
                  height={600}
                  src={"https://placehold.co/600x450"}
                ></Image> */}
              </div>
              <div className="col-span-1 h-full">
                <div className="w-full h-full flex flex-col justify-center items-center text-white">
                  <div>
                    <div class="text-3xl mb-8">
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

        {/* Slide 2 */}
        <div className="flex items-center justify-center py-16">
          <Item>
            <div className="grid grid-cols-2 gap-12 max-w-6xl">
              <div className="col-span-1">
                <img src={"https://placehold.co/600x450"}></img>
                {/* <Image
                  alt=""
                  width={450}
                  height={600}
                  src={"https://placehold.co/600x450"}
                ></Image> */}
              </div>
              <div className="col-span-1 h-full">
                <div className="w-full h-full flex flex-col justify-center items-center text-white">
                  <div>
                    <div class="text-3xl mb-8">
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

        {/* Slide 3 */}
        <div className="flex items-center justify-center py-16">
          <Item>
            <div className="grid grid-cols-2 gap-12 max-w-6xl">
              <div className="col-span-1">
                <img src={"https://placehold.co/600x450"}></img>
                {/* <Image
                  alt=""
                  width={450}
                  height={600}
                  src={"https://placehold.co/600x450"}
                ></Image> */}
              </div>
              <div className="col-span-1 h-full">
                <div className="w-full h-full flex flex-col justify-center items-center text-white">
                  <div>
                    <div class="text-3xl mb-8">
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
  return <div>{children}</div>;
}
