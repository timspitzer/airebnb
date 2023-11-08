import { useEffect, useState } from "react";

export function ImageSlider({ images, areButtonsShown }) {
  const [activeImage, setActiveImage] = useState(0);

  const handleArrowClick = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("test");
  };

  return (
    <div className="w-75 h-71 grid-cols-[auto 1fr auto] rounded-3 grid">
      <div className="scrollbar-hide grid-col-[1/4] grid-row-[1] flex items-center overflow-hidden rounded-[inherit]">
        {images.map((image, i) => (
          <img
            className="h-full w-full shrink-0 object-cover"
            key={i}
            src={image}
          ></img>
        ))}
      </div>
      <div className="grid-col-[1] grid-row-[1] flex items-center">
        <button
          className={`ml-3 rounded-full border-[0.5px] border-solid border-[#d8d8d8] bg-[#ffffff] p-1 ${
            areButtonsShown ? "block" : "hidden"
          }`}
        >
          <div className="i-radix-icons:chevron-left text-xl"></div>
        </button>
      </div>
      <div className="grid-col-[3] grid-row-[1] flex items-center text-center">
        <button
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
