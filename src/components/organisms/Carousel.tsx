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
        <div className="h-56 flex items-center justify-center">
          <Item>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <Image
                  alt=""
                  width={450}
                  height={600}
                  src={"https://placehold.co/600x450"}
                ></Image>
              </div>
              <div className="col-span-1"></div>
            </div>
          </Item>
        </div>

        {/* Slide 2 */}
        <div className="h-56 flex items-center justify-center">
          <Item>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <Image
                  alt=""
                  width={450}
                  height={600}
                  src={"https://placehold.co/600x450"}
                ></Image>
              </div>
              <div className="col-span-1"></div>
            </div>
          </Item>
        </div>

        {/* Slide 3 */}
        <div className="h-56 flex items-center justify-center">
          <Item>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <Image
                  alt=""
                  width={450}
                  height={600}
                  src={"https://placehold.co/600x450"}
                ></Image>
              </div>
              <div className="col-span-1"></div>
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
