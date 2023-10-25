import * as Dialog from "@radix-ui/react-dialog";

import { FormDataContext } from "../../../context/FormDataContext.js";
import { formatDate } from "../../../utils/dates/formatDate.js";
import { useContext } from "react";

function DesktopDivider() {
  return (
    <div className="hidden h-[60%] w-[1px] bg-[#eeeeee] md:inline-block"></div>
  );
}

export function Search() {
  const { formData } = useContext(FormDataContext);

  return (
    <div className="md:min-h-12 min-h-14 min-w-xs flex items-stretch justify-between rounded-[1000px] border-[0.5px] border-solid border-neutral-100 shadow-md md:border-neutral-300">
      <Dialog.Trigger className="grow bg-transparent">
        <div className="flex h-full items-center">
          <div className="pl-5 pr-4 md:hidden">
            <div className="i-radix-icons:magnifying-glass text-xl"></div>
          </div>
          <div className="items-center gap-2 md:flex md:h-full md:pl-6">
            {/* DESTINATION */}
            <div className="text-left text-sm font-semibold md:inline">
              <span>
                {formData.destination.length === 0
                  ? "Anywhere"
                  : formData.destination}
              </span>
            </div>
            <DesktopDivider></DesktopDivider>
            {/* DESTINATION */}

            {/* MOBILE DATES AND GUESTS */}
            <div className="text-left md:hidden">
              <sub className="text-xs text-neutral-500">
                <span>
                  {formData.startDate && formData.endDate
                    ? `${formatDate(formData.startDate)} – ${formatDate(
                        formData.endDate
                      )}`
                    : "Any week"}
                  {" · "}
                  {formData.guests === 0 ? "Add guests" : null}
                  {formData.guests === 1 ? `${formData.guests} guest` : null}
                  {formData.guests > 1 ? `${formData.guests} guests` : null}
                </span>
              </sub>
            </div>
            {/* MOBILE DATES AND GUESTS */}

            {/* DESKTOP DATES AND GUESTS */}
            <span className="hidden font-semibold md:inline">
              {formData.startDate && formData.endDate
                ? `${formatDate(formData.startDate)} – ${formatDate(
                    formData.endDate
                  )}`
                : "Any week"}
            </span>
            <DesktopDivider></DesktopDivider>
            <span className="hidden text-neutral-500 md:inline">
              {formData.guests === 0 ? "Add guests" : null}
              {formData.guests === 1 ? `${formData.guests} guest` : null}
              {formData.guests > 1 ? `${formData.guests} guests` : null}
            </span>
            {/* DESKTOP DATES AND GUESTS */}
          </div>
          <div className="hidden border-none bg-[transparent] md:inline-block">
            <div className="rounded-max mx-[10px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#ff385c]">
              <div className="i-radix-icons:magnifying-glass bg-[#FFFFFF] text-lg"></div>
            </div>
          </div>
        </div>
      </Dialog.Trigger>{" "}
      <button className="border-none bg-transparent md:hidden">
        <div className="rounded-max mx-[10px] flex h-[36px] w-[36px] items-center justify-center rounded-full border border-solid border-neutral-300">
          <div className="i-gg:options -scale-x-100 text-lg"></div>
        </div>
      </button>
    </div>
  );
}
