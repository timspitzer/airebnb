import * as Dialog from "@radix-ui/react-dialog";
import { useContext } from "react";
import { FormDataContext } from "../../context/FormDataContext.js";

export function SearchBar() {
  const { formData } = useContext(FormDataContext);

  return (
    <div className="search-bar md:min-h-12 min-h-14 min-w-xs flex items-stretch justify-between rounded-[1000px] border-[0.5px] border-solid border-neutral-100 shadow-md md:border-neutral-300">
      <Dialog.Trigger className="grow bg-transparent">
        <div className="flex h-full items-center">
          <div className="pl-5 pr-4 md:hidden">
            <div className="i-radix-icons:magnifying-glass text-xl"></div>
          </div>
          <div className="flex h-full items-center gap-2 pl-6">
            {/* DESTINATION */}
            <div className="text-left text-sm font-semibold md:inline">
              <span>
                {formData.destination.length === 0
                  ? "Anywhere"
                  : formData.destination}
              </span>
            </div>
            <div className="inline-block h-[60%] w-[1px] bg-[#eeeeee]"></div>
            {/* DESTINATION */}

            {/* MOBILE DATES AND GUESTS */}
            <div className="text-left md:inline">
              <sub className="text-xs text-neutral-500 md:hidden">
                <span>
                  {formData.formattedDates.start && formData.formattedDates.end
                    ? `${formData.formattedDates.start} – ${formData.formattedDates.end}`
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
              {formData.formattedDates.start && formData.formattedDates.end
                ? `${formData.formattedDates.start} – ${formData.formattedDates.end}`
                : "Any week"}
            </span>
            <span className="hidden md:inline md:hidden">{" · "}</span>
            <div className="inline-block h-[60%] w-[1px] bg-[#eeeeee]"></div>

            <span className="text-neutral-500">
              {formData.guests === 0 ? "Add guests" : null}
              {formData.guests === 1 ? `${formData.guests} guest` : null}
              {formData.guests > 1 ? `${formData.guests} guests` : null}
            </span>
            {/* DESKTOP DATES AND GUESTS */}
          </div>
        </div>
      </Dialog.Trigger>{" "}
      <button className="border-none bg-transparent md:hidden">
        <div className="rounded-max mx-[10px] flex h-[36px] w-[36px] items-center justify-center rounded-full border border-solid border-neutral-300">
          <div className="i-gg:options -scale-x-100 text-lg"></div>
        </div>
      </button>
      <button className="border-none bg-[transparent]">
        <div className="rounded-max mx-[10px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#ff385c]">
          <div className="i-radix-icons:magnifying-glass bg-[#FFFFFF] text-lg"></div>
        </div>
      </button>
    </div>
  );
}
