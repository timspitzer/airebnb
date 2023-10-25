import { useContext, useState } from "react";

import { ACCORDION_VALUES } from "./constants.js";
import { DatePicker } from "../../../../Discover/datepicker/datepicker.jsx";
import { FormDataContext } from "../../../../../context/FormDataContext.js";
import { Item } from "./Item.jsx";
import { PlusMinusDays } from "./plus-minus-days.jsx";
import { formatDate } from "../../../../../utils/dates/formatDate.js";

const INITIAL_PILL = 0;

export function WhenItem({ setAccordionValue }) {
  const { formData, updateFormData } = useContext(FormDataContext);
  const [activePill, setActivePill] = useState(INITIAL_PILL);

  const handleResetClick = (e) => {
    e.preventDefault();
    updateFormData({ startDate: null, endDate: null });
    setActivePill(INITIAL_PILL);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    console.log("next");
    setAccordionValue(ACCORDION_VALUES[2]);
  };
  return (
    <Item
      value={ACCORDION_VALUES[1]}
      trigger={{
        title: "When",
        description:
          formData.startDate && formData.endDate
            ? `${formatDate(formData.startDate)} - ${formatDate(
                formData.endDate
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
    ></Item>
  );
}
