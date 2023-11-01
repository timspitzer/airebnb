import { ACCORDION_STATES } from "../../accordion-states";
import { SearchDataContext } from "../../../../../../../context/search-data-context.js";
import { useContext } from "react";

export function MapTile({ img, name, setAccordionValue }) {
  const { searchData, updateSearchData } = useContext(SearchDataContext);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        updateSearchData({ destination: name });
        setAccordionValue(ACCORDION_STATES[1]);
      }}
      className="first:m-l-[24px] last:m-r-[24px] bg-transparent text-left"
    >
      <img
        className={`h-[122px] w-[122px] rounded-[12px] border-solid transition-transform ease-in-out active:scale-95 ${
          searchData.destination === name
            ? "border-2 border-[#222222]"
            : "border-1 border-[#dddddd] hover:border-[#000000]"
        }`}
        src={img}
        alt="country"
      />

      <div className="m-l-[2px] m-b-[4px] m-t-[8px] text-[14px]">
        {name === "" ? "I'm flexible" : name}
      </div>
    </button>
  );
}
