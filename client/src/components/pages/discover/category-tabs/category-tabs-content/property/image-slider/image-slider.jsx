import { useRef } from "react";

export function ImageSlider({ images, areButtonsShown }) {
  const sliderRef = useRef(null);

  const handleArrowClick = (direction) => {
    if (sliderRef.current) {
      const elementWidth = sliderRef.current.offsetWidth;
      const scrollDistance =
        direction === "right" ? elementWidth : -elementWidth;
      sliderRef.current.scrollBy({
        top: 0,
        left: scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-75 h-71 grid-cols-[auto 1fr auto] rounded-3 bg-gray grid overflow-hidden">
      {/* IMAGES */}
      <div
        ref={sliderRef}
        className="grid-col-[1/4] grid-row-[1] snap-type-x-mandatory flex overflow-x-scroll scroll-smooth"
      >
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            className="h-full w-full flex-shrink-0 snap-center object-cover"
          ></img>
        ))}
      </div>
      {/* BUTTON LEFT */}
      <div className="grid-col-[1] grid-row-[1] flex items-center">
        <button
          onClick={() => handleArrowClick("left")}
          className={`ml-3 rounded-full border-[0.5px] border-solid border-[#d8d8d8] bg-[#ffffff] p-1 ${
            areButtonsShown ? "block" : "hidden"
          }`}
        >
          <div className="i-radix-icons:chevron-left text-xl"></div>
        </button>
      </div>
      {/* BUTTON RIGHT  */}
      <div className="grid-col-[3] grid-row-[1] flex items-center">
        <button
          onClick={() => handleArrowClick("right")}
          className={`mr-3 rounded-full border-[0.5px] border-solid border-[#d8d8d8] bg-[#ffffff] p-1 ${
            areButtonsShown ? "block" : "hidden"
          }`}
        >
          <div className="i-radix-icons:chevron-right text-xl"></div>
        </button>
      </div>
    </div>
  );
}
