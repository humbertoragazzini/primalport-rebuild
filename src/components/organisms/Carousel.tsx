"use client";

import { useState, KeyboardEvent } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Slide = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Placeholder project one",
    description:
      "Short description for the first placeholder slide. Explain what this could be in a real project.",
    imageUrl: "https://via.placeholder.com/960x540?text=Slide+1",
    imageAlt: "Abstract placeholder image for slide 1",
  },
  {
    id: 2,
    title: "Placeholder project two",
    description:
      "Another short description for the second slide. You can replace this with real content later.",
    imageUrl: "https://via.placeholder.com/960x540?text=Slide+2",
    imageAlt: "Abstract placeholder image for slide 2",
  },
  {
    id: 3,
    title: "Placeholder project three",
    description:
      "Text for the third slide. The layout stays the same regardless of the content length.",
    imageUrl: "https://via.placeholder.com/960x540?text=Slide+3",
    imageAlt: "Abstract placeholder image for slide 3",
  },
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = SLIDES.length;

  const goTo = (index: number) => {
    if (index < 0) {
      setCurrentIndex(total - 1);
    } else if (index >= total) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(currentIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(currentIndex - 1);
    }
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <section
      aria-labelledby="carousel-heading"
      className="w-full bg-slate-950 px-6 py-10 text-slate-100"
    >
      <div className="mx-auto max-w-6xl">
        {/* Top text (same for entire carousel) */}
        <div className="mb-8 max-w-2xl">
          <h2
            id="carousel-heading"
            className="text-2xl sm:text-3xl font-semibold mb-2"
          >
            Explore our placeholder highlights
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            This is a simple, accessible carousel with placeholder images and
            text. You can plug in real content later without changing the
            structure.
          </p>
        </div>

        {/* Carousel */}
        <div
          role="region"
          aria-label="Showcase carousel"
          aria-roledescription="carousel"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="outline-none"
        >
          <div className="relative">
            {/* Image and content */}
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-black/40">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/3">
                  <img
                    src={currentSlide.imageUrl}
                    alt={currentSlide.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Text content for current slide */}
                <div className="md:w-1/3 flex flex-col justify-between p-4 sm:p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                      Slide {currentIndex + 1} of {total}
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {currentSlide.title}
                    </h3>
                    <p className="text-sm text-slate-300">
                      {currentSlide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prev / Next buttons */}
            <button
              type="button"
              onClick={() => goTo(currentIndex - 1)}
              aria-label="Previous slide"
              className="
                absolute left-2 top-1/2 -translate-y-1/2
                inline-flex items-center justify-center
                rounded-full bg-black/60 hover:bg-black
                border border-white/20
                p-2 text-slate-100
                focus:outline-none focus:ring-2 focus:ring-yellow-bright
              "
            >
              <FaChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(currentIndex + 1)}
              aria-label="Next slide"
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                inline-flex items-center justify-center
                rounded-full bg-black/60 hover:bg-black
                border border-white/20
                p-2 text-slate-100
                focus:outline-none focus:ring-2 focus:ring-yellow-bright
              "
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>

          {/* Dots / slide indicators */}
          <div
            className="mt-4 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Choose slide to display"
          >
            {SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show slide ${index + 1}`}
                  className={`
                    h-2.5 w-2.5 rounded-full border
                    ${
                      isActive
                        ? "bg-yellow-bright border-yellow-bright"
                        : "bg-transparent border-slate-500 hover:border-yellow-bright"
                    }
                    focus:outline-none focus:ring-2 focus:ring-yellow-bright
                  `}
                  onClick={() => goTo(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
