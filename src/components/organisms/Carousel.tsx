"use client";

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
    <div className="w-full max-w-4xl mx-auto">
      <Carousel
        responsive={responsive}
        showDots
        arrows
        infinite={false}
        keyBoardControl
        draggable
        containerClass="carousel-container"
        dotListClass="flex justify-center gap-2 mt-4"
        itemClass="px-2"
        renderDotsOutside={false}
      >
        {/* Slide 1 */}
        <div className="h-56 flex items-center justify-center rounded-xl bg-slate-800 text-slate-100">
          <span>Slide 1 – put your content here</span>
        </div>

        {/* Slide 2 */}
        <div className="h-56 flex items-center justify-center rounded-xl bg-slate-800 text-slate-100">
          <span>Slide 2 – placeholder item</span>
        </div>

        {/* Slide 3 */}
        <div className="h-56 flex items-center justify-center rounded-xl bg-slate-800 text-slate-100">
          <span>Slide 3 – placeholder item</span>
        </div>
      </Carousel>
    </div>
  );
}
