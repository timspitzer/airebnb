import { useContext } from "react";
import { FormDataContext } from "../../../../context/FormDataContext.js";
import { Item } from "./Item.jsx";
import { DatePicker } from "../../../common/DatePicker.jsx";
import { formatDate } from "../../../../utils/dates/formatDate.js";
import { PlusMinusDays } from "./PlusMinusDays.jsx";

export function WhenItem() {
  const { formData } = useContext(FormDataContext);
  return (
    <Item
      value="when"
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
              <PlusMinusDays></PlusMinusDays>
            </div>
            <div className="mx-6 mt-4 flex justify-between">
              <button
                onClick={(e) => e.preventDefault()}
                className="rounded-lg p-[10px] text-[16px] active:scale-95 active:bg-[#f7f7f7]"
              >
                <u>Reset</u>
              </button>
              <button className="p-x-[24px] p-y-[12px] flex rounded-[8px] bg-[#222222] text-[#ffffff] active:scale-95 active:bg-[#000000]">
                <span className="font-600 text-[16px]">Next</span>
              </button>
            </div>
          </>
        ),
      }}
    ></Item>
  );
}
