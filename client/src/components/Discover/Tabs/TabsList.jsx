import { useRef, useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import styles from "./TabsList.module.css";
import { categories } from "./categories";

const NUMBER_OF_ITEMS_TO_SCROLL = 5;

function calculateScrollDistance(elementWidth, totalItems, direction) {
  const scrollDistance =
    NUMBER_OF_ITEMS_TO_SCROLL * Math.ceil(elementWidth / totalItems);
  return direction === "left" ? -scrollDistance : scrollDistance;
}

export function TabsList() {
  const tabListElementRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = () => {
    if (tabListElementRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } =
        tabListElementRef.current;
      const maxScrollPosition = scrollWidth - offsetWidth;

      setIsAtStart(scrollLeft <= 10);
      setIsAtEnd(maxScrollPosition - scrollLeft <= 10);
    }
  };

  const handleArrowClick = (direction) => {
    if (tabListElementRef.current) {
      const elementWidth = tabListElementRef.current.offsetWidth;
      const scrollDistance = calculateScrollDistance(
        elementWidth,
        categories.length,
        direction
      );

      tabListElementRef.current.scrollBy({
        top: 0,
        left: scrollDistance,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="relative md:mt-6">
      <div className="z-2 pointer-events-none absolute flex h-full w-full justify-between px-6 md:px-20">
        <div
          className={`hidden h-full w-16 items-center bg-gradient-to-l from-transparent to-[#fafafa] transition-opacity duration-200 md:flex ${
            isAtStart ? "opacity-0" : "opacity-100"
          }`}
        >
          <button
            onClick={() => handleArrowClick("left")}
            className={`rounded-full border-[0.5px] border-solid border-[#d8d8d8] bg-[#ffffff] ${
              isAtStart ? "pointer-events-none" : "pointer-events-auto"
            }`}
          >
            <div className="i-radix-icons:chevron-left text-xl"></div>
          </button>
        </div>
        <div
          className={`hidden h-full w-16 items-center justify-end bg-gradient-to-r from-transparent to-[#fafafa] transition-opacity duration-200 md:flex ${
            isAtEnd ? "opacity-0" : "opacity-100"
          }`}
        >
          <button
            onClick={() => handleArrowClick("right")}
            className={`rounded-full border-[0.5px] border-solid border-[#d8d8d8] bg-[#ffffff] ${
              isAtEnd ? "pointer-events-none" : "pointer-events-auto"
            }`}
          >
            <div className="i-radix-icons:chevron-right text-xl"></div>
          </button>
        </div>
      </div>
      <Tabs.List
        onScroll={handleScroll}
        ref={tabListElementRef}
        className="scrollbar-hide flex gap-6 overflow-x-scroll whitespace-nowrap px-6 md:mx-20 md:gap-10 md:px-0"
      >
        {categories.map(({ name, iconUrl }) => (
          <Tabs.Trigger
            className={`${styles.button} inline-flex flex-col items-center bg-transparent p-0 opacity-60 transition-opacity duration-200 ease-in-out hover:opacity-100 data-[state=active]:opacity-100`}
            key={name}
            value={name}
          >
            <div className="m-b-2 m-t-4">
              <img src={iconUrl} className="w-[24px]" alt={name} />
              <div className="m-t-1 text-xs font-semibold">{name}</div>
            </div>
            <div
              className={`${styles.indicator} h-[2px] w-full bg-[#000000] opacity-0 transition-opacity duration-200 ease-in-out`}
            ></div>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </div>
  );
}
