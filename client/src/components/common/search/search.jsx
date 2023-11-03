import * as Dialog from "@radix-ui/react-dialog";

import { FormattedDate } from "../formatted-date/formatted-date.jsx";
import { SearchDataContext } from "../../../context/search-data-context.js";
import { formatDate } from "../../../utils/dates/format-date.js";
import { useContext } from "react";

function DesktopDivider() {
  return (
    <div className="hidden h-[60%] w-[1px] bg-[#eeeeee] md:inline-block"></div>
  );
}

export function Search() {
  const { searchData } = useContext(SearchDataContext);

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
                {searchData.destination.length === 0
                  ? "Anywhere"
                  : searchData.destination}
              </span>
            </div>
            <DesktopDivider></DesktopDivider>
            {/* DESTINATION */}

            {/* MOBILE DATES AND GUESTS */}
            <div className="text-left md:hidden">
              <sub className="text-xs text-neutral-500">
                <span>
                  <FormattedDate></FormattedDate>
                  {" · "}
                  {searchData.guests === 0 ? "Add guests" : null}
                  {searchData.guests === 1
                    ? `${searchData.guests} guest`
                    : null}
                  {searchData.guests > 1 ? `${searchData.guests} guests` : null}
                </span>
              </sub>
            </div>
            {/* MOBILE DATES AND GUESTS */}

            {/* DESKTOP DATES AND GUESTS */}
            <span className="hidden font-semibold md:inline">
              {searchData.startDate && searchData.endDate
                ? `${formatDate(searchData.startDate)} – ${formatDate(
                    searchData.endDate
                  )}`
                : "Any week"}
            </span>
            <DesktopDivider></DesktopDivider>
            <span className="hidden text-neutral-500 md:inline">
              {searchData.guests === 0 ? "Add guests" : null}
              {searchData.guests === 1 ? `${searchData.guests} guest` : null}
              {searchData.guests > 1 ? `${searchData.guests} guests` : null}
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
