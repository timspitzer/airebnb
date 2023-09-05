import { useContext } from "react";
import { Item } from "./Item";
import { FormDataContext } from "../../../../context/FormDataContext";
import { ACCORDION_VALUES } from "../../../../utils/constants";

export function WhoItem() {
  const { formData, updateFormData } = useContext(FormDataContext);
  const { guests } = formData;

  const handleMinusClick = (e) => {
    e.preventDefault();
    if (guests === 0) return;
    updateFormData({ guests: guests - 1 });
  };
  const handlePlusClick = (e) => {
    e.preventDefault();
    if (guests === 16) return;
    updateFormData({ guests: guests + 1 });
  };

  return (
    <Item
      value={ACCORDION_VALUES[2]}
      trigger={{
        title: "Who",
        description:
          guests === 0
            ? "Add guests"
            : guests === 1
            ? "1 guest"
            : `${guests} guests`,
      }}
      itemContent={{
        title: <div className="font-600 text-[22px]">Who{"'"}s coming?</div>,
        content: (
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <div className="text-[17px] font-medium">Adults</div>
              <sub className="color-[#717171] text-[14px]">
                Ages 13 or above
              </sub>
            </div>
            <div className="flex w-[104px] items-center justify-between gap-3">
              <button onClick={handleMinusClick}>
                <div
                  className={`i-radix-icons:minus-circled h-[32px] w-[32px] ${
                    guests === 0
                      ? "color-[#ebebeb] cursor-not-allowed"
                      : "color-[#b0b0b0] hover:color-[#000000]"
                  }`}
                ></div>
              </button>
              <div className="flex min-w-[17px] max-w-[17px] justify-center text-[17px] font-light">
                {guests === 16 ? "16+" : guests}
              </div>
              <button onClick={handlePlusClick}>
                <div
                  className={`i-radix-icons:plus-circled h-[32px] w-[32px] ${
                    guests === 16
                      ? "color-[#ebebeb] cursor-not-allowed"
                      : "color-[#b0b0b0] hover:color-[#000000]"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        ),
      }}
    ></Item>
  );
}
