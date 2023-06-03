import { DestinationCard } from "../../DestinationCard/DestinationCard.jsx";
import { useContext } from "react";
import { Item } from "../Item.jsx";
import { SearchBar } from "../../SearchBar/SearchBar.jsx";
import { FormDataContext } from "../../../../../context/FormDataContext.js";

const DESTINATIONS = [
  {
    img: "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg",
    name: "",
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

export function WhereItem({
  setAccordionValue,
  isSearchBarFocused,
  setIsSearchBarFocused,
}) {
  const { formData } = useContext(FormDataContext);
  const { destination } = formData;
  return (
    <Item
      className={isSearchBarFocused ? "fixed left-0 w-full" : ""}
      value="where"
      trigger={{
        title: "Where",
        destination: destination.length === 0 ? "I'm flexible" : destination,
      }}
      itemContent={{
        title: isSearchBarFocused ? null : (
          <div className="font-600 text-[22px]">Where to?</div>
        ),
        content: (
          <SearchBar
            setIsSearchBarFocused={setIsSearchBarFocused}
            isSearchBarFocused={isSearchBarFocused}
          ></SearchBar>
        ),
        additional: isSearchBarFocused ? null : (
          <div className="m-t-[16px] flex gap-[16px] overflow-x-scroll">
            {DESTINATIONS_WITH_ID.map((destination) => {
              return (
                <DestinationCard
                  setAccordionValue={setAccordionValue}
                  key={destination.id}
                  name={destination.name}
                  img={destination.img}
                ></DestinationCard>
              );
            })}
          </div>
        ),
      }}
    ></Item>
  );
}
