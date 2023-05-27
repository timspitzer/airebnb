import * as RadixAccordion from "@radix-ui/react-accordion";
import { DestinationCard } from "../DestinationCard/DestinationCard.jsx";
import { useState } from "react";

const DESTINATIONS = [
  {
    img: "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg",
    name: "I'm flexible",
  },
  {
    img: "https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320",
    name: "Europe",
  },
  {
    img: "https://a0.muscache.com/im/pictures/a940f971-4ac1-413b-90dd-bd55965b215e.jpg?im_w=320",
    name: "Mexico",
  },
  {
    img: "https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320",
    name: "United States",
  },
  {
    img: "https://a0.muscache.com/im/pictures/0907be0d-30dd-47c0-a0d5-cbef355fbadf.jpg?im_w=320",
    name: "Colombia",
  },
  {
    img: "https://a0.muscache.com/im/pictures/c61d10f5-4ab3-4d16-bed7-0449e15c8277.jpg?im_w=320",
    name: "Caribbean",
  },
  {
    img: "https://a0.muscache.com/im/pictures/86307179-60ee-4a7e-a4cb-c32d511bee0b.jpg?im_w=320",
    name: "Argentina",
  },
  {
    img: "https://a0.muscache.com/im/pictures/66a7dcd7-607a-48b0-9962-4e14179615c0.jpg?im_w=320",
    name: "Central America",
  },
  {
    img: "https://a0.muscache.com/im/pictures/a0fd6dfc-6bec-4abb-850e-9ab78ed7bf37.jpg?im_w=320",
    name: "Spain",
  },
];

const DESTINATIONS_WITH_ID = DESTINATIONS.map((destination) => {
  return { ...destination, id: crypto.randomUUID() };
});

export function WhereItem() {
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);

  return (
    <RadixAccordion.Item value="where">
      <RadixAccordion.Trigger className="m-b-[12px] flex h-full w-full justify-between rounded-[16px] bg-[#ffffff] p-[24px] shadow-md data-[state=open]:hidden">
        <div>Where</div>
        <div>I am flexible</div>
      </RadixAccordion.Trigger>
      <RadixAccordion.Content className="m-b-[12px] rounded-[16px] bg-[#ffffff] p-[24px] shadow-md">
        {isSearchBarFocused ? null : (
          <div className="font-600 text-[22px]">Where to?</div>
        )}
        <label
          onFocus={() => setIsSearchBarFocused(true)}
          className="m-t-[16px] p-x-[20px] flex h-[60px] w-full rounded-[12px] border border-solid border-[#b0b0b0] focus-within:border-0 focus-within:bg-[#f7f7f7]"
        >
          <div className="i-radix-icons:magnifying-glass m-r-[10px] h-full text-2xl"></div>
          <input
            type="text"
            id="name"
            name="name"
            className="font-600 focus:font-400 w-full text-[14px] focus:text-[#aeaeae]"
            placeholder="Search destinations"
          ></input>
        </label>
        {isSearchBarFocused ? null : <Destinations></Destinations>}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}

function Destinations() {
  <div className="m-t-20px flex gap-[12px] overflow-x-scroll">
    {DESTINATIONS_WITH_ID.map((destination) => (
      <DestinationCard
        key={destination.id}
        name={destination.name}
        img={destination.img}
      ></DestinationCard>
    ))}
  </div>;
}
