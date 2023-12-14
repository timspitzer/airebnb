import { useRef } from "react";

export function ImageSlider({ images, areButtonsShown }) {
  const sliderRef = useRef(null);

  const handleArrowClick = (event, direction) => {
    event.stopPropagation();
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
    <div className="grid-cols-[auto 1fr auto] rounded-3 bg-gray mb-3 grid aspect-[1/0.95] w-full overflow-hidden">
      {/* IMAGES */}
      <div
        ref={sliderRef}
        className="grid-col-[1/4] grid-row-[1] flex overflow-x-scroll scroll-smooth [scroll-snap-type:x_mandatory]"
      >
        {images.map((image, i) => (
          <img
            key={i}
            loading="lazy"
            src={image}
            className="h-full w-full flex-shrink-0 snap-center object-cover"
          ></img>
        ))}
      </div>
      {/* BUTTON LEFT */}
      <div className="grid-col-[1] grid-row-[1] flex items-center">
        <button
          onClick={(event) => handleArrowClick(event, "left")}
          className={`ml-3 rounded-full border-[0.5px] border-solid border-[#d8d8d8] bg-[#ffffff] p-1 transition-opacity  ${
            areButtonsShown ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="i-radix-icons:chevron-left text-xl"></div>
        </button>
      </div>
      {/* BUTTON RIGHT  */}
      <div className="grid-col-[3] grid-row-[1] flex items-center">
        <button
          onClick={(event) => handleArrowClick(event, "right")}
          className={`mr-3 rounded-full border-[0.5px] border-solid border-[#d8d8d8] bg-[#ffffff] p-1 transition-opacity  ${
            areButtonsShown ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="i-radix-icons:chevron-right text-xl"></div>
        </button>
      </div>
    </div>
  );
}
