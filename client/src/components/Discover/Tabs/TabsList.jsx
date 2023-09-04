import { useRef, useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import styles from "./TabsList.module.css";

const tabListItems = [
  {
    name: "Rooms",
    iconUrl:
      "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
  },
  {
    name: "Beachfront",
    iconUrl:
      "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
  },
  {
    name: "Cabins",
    iconUrl:
      "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
  },
  {
    name: "Amazing Pools",
    iconUrl:
      "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
  },
  {
    name: "Countryside",
    iconUrl:
      "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
  },
  {
    name: "Amazing Views",
    iconUrl:
      "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
  },
  {
    name: "Trending",
    iconUrl:
      "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
  },
  {
    name: "Mansions",
    iconUrl:
      "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
  },
  {
    name: "OMG!",
    iconUrl:
      "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
  },
  {
    name: "Tiny Houses",
    iconUrl:
      "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
  },
  {
    name: "Castles",
    iconUrl:
      "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
  },
  {
    name: "Skiing",
    iconUrl:
      "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
  },
  {
    name: "Iconic Cities",
    iconUrl:
      "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
  },
  {
    name: "Mansions",
    iconUrl:
      "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
  },
  {
    name: "National parks",
    iconUrl:
      "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
  },
  {
    name: "Vineyards",
    iconUrl:
      "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
  },
  {
    name: "Trending",
    iconUrl:
      "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
  },
  {
    name: "Tropical",
    iconUrl:
      "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
  },
  {
    name: "Caves",
    iconUrl:
      "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
  },
  {
    name: "Houseboats",
    iconUrl:
      "https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg",
  },
  {
    name: "Farms",
    iconUrl:
      "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
  },
  {
    name: "Lake",
    iconUrl:
      "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
  },
  {
    name: "Design",
    iconUrl:
      "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
  },
];

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
        tabListItems.length,
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
        {tabListItems.map((item, index) => (
          <Tabs.Trigger
            className={`${styles.button} inline-flex flex-col items-center bg-transparent p-0 opacity-60 transition-opacity duration-200 ease-in-out hover:opacity-100 data-[state=active]:opacity-100`}
            key={index}
            value={`tab${index + 1}`}
          >
            <div className="m-b-2 m-t-4">
              <img src={item.iconUrl} className="w-[24px]" alt={item.name} />
              <div className="m-t-1 text-xs font-semibold">{item.name}</div>
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
