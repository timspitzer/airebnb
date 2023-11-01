import { useContext, useState } from "react";

import { ACCORDION_STATES } from "../accordion-states.js";
import { AccordionItem } from "../accordion-item/accordion-item.jsx";
import { DatePicker } from "./datepicker/datepicker.jsx";
import { PlusMinusDays } from "./plus-minus-days/plus-minus-days.jsx";
import { SearchDataContext } from "../../../../../../context/search-data-context.js";
import { formatDate } from "../../../../../../utils/dates/format-date.js";

const INITIAL_PILL = 0;

export function WhenItem({ setAccordionValue }) {
  const { searchData, updateSearchData } = useContext(SearchDataContext);
  const [activePill, setActivePill] = useState(INITIAL_PILL);

  const handleResetClick = (e) => {
    e.preventDefault();
    updateSearchData({ startDate: null, endDate: null });
    setActivePill(INITIAL_PILL);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    console.log("next");
    setAccordionValue(ACCORDION_STATES[2]);
  };
  return (
    <AccordionItem
      value={ACCORDION_STATES[1]}
      trigger={{
        title: "When",
        description:
          searchData.startDate && searchData.endDate
            ? `${formatDate(searchData.startDate)} - ${formatDate(
                searchData.endDate
              )}`
            : "Add dates",
      }}
      itemContent={{
        title: (
          <div className="font-600 text-[22px]">When{"'"}s your trip?</div>
        ),
        content: (
          <>
            <div className="mx-6 my-4">
              <DatePicker></DatePicker>
            </div>
            <div className="border-y-solid border-y-1 border-y-[#ebebeb] py-2">
              <PlusMinusDays
                activePill={activePill}
                setActivePill={setActivePill}
              ></PlusMinusDays>
            </div>
            <div className="mx-6 mt-4 flex justify-between">
              <button
                onClick={handleResetClick}
                className="rounded-lg p-[10px] text-[16px] active:scale-95 active:bg-[#f7f7f7]"
              >
                <u>Reset</u>
              </button>
              <button
                onClick={handleNextClick}
                className="p-x-[24px] p-y-[12px] flex rounded-[8px] bg-[#222222] text-[#ffffff] active:scale-95 active:bg-[#000000]"
              >
                <span className="font-600 text-[16px]">Next</span>
              </button>
            </div>
          </>
        ),
      }}
    ></AccordionItem>
  );
}
