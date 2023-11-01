import { ACCORDION_STATES } from "../accordion-states.js";
import { AccordionItem } from "../accordion-item/accordion-item.jsx";
import { MAP_TILES } from "./map-tiles.js";
import { MapTile } from "./map-tile/map-tile.jsx";
import { SearchDataContext } from "../../../../../../context/search-data-context.js";
import { TextInput } from "./text-input/text-input.jsx";
import { useContext } from "react";

const DESTINATIONS_WITH_ID = MAP_TILES.map((destination) => {
  return { ...destination, id: crypto.randomUUID() };
});

export function WhereItem({
  setAccordionValue,
  isSearchBarFocused,
  setIsSearchBarFocused,
}) {
  const { searchData } = useContext(SearchDataContext);
  const { destination } = searchData;
  return (
    <AccordionItem
      className={isSearchBarFocused ? "fixed left-0 h-full w-full" : ""}
      value={ACCORDION_STATES[0]}
      trigger={{
        title: "Where",
        description: destination.length === 0 ? "I'm flexible" : destination,
      }}
      itemContent={{
        title: isSearchBarFocused ? null : (
          <div className="font-600 text-[22px]">Where to?</div>
        ),
        content: (
          <TextInput
            setIsSearchBarFocused={setIsSearchBarFocused}
            isSearchBarFocused={isSearchBarFocused}
            setAccordionValue={setAccordionValue}
          ></TextInput>
        ),
        additional: isSearchBarFocused ? null : (
          <div className="m-t-[16px] flex gap-[16px] overflow-x-scroll pb-2">
            {DESTINATIONS_WITH_ID.map((destination) => {
              return (
                <MapTile
                  setAccordionValue={setAccordionValue}
                  key={destination.id}
                  name={destination.name}
                  img={destination.img}
                ></MapTile>
              );
            })}
          </div>
        ),
      }}
    ></AccordionItem>
  );
}
