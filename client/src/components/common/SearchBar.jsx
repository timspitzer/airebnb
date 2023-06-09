import * as Dialog from "@radix-ui/react-dialog";
import { useContext } from "react";
import { FormDataContext } from "../../context/FormDataContext.js";

export function SearchBar() {
  const { formData } = useContext(FormDataContext);

  return (
    <div className="search-bar min-h-14 min-w-xs flex items-stretch justify-between rounded-[1000px] border-[0.5px] border-solid border-neutral-100 shadow-md">
      <Dialog.Trigger className="grow bg-transparent">
        <div className="flex items-center">
          <div className="pl-5 pr-4">
            <div className="i-radix-icons:magnifying-glass text-xl"></div>
          </div>
          <div>
            <div className="text-left text-sm font-semibold">
              <span>
                {formData.destination.length === 0
                  ? "Anywhere"
                  : formData.destination}
              </span>
            </div>
            <div>
              <sub className="text-xs text-neutral-500">
                <span>{formData.formattedDates.start}</span>
                {" – "}
                <span>{formData.formattedDates.end}</span>
                {" · "}
                <span>
                  {formData.guests} {formData.guests > 1 ? "guests" : "guest"}
                </span>
              </sub>
            </div>
          </div>
        </div>
      </Dialog.Trigger>
      <button className="border-none bg-transparent">
        <div className="rounded-max mx-[10px] flex h-[36px] w-[36px] items-center justify-center rounded-full border border-solid border-neutral-300">
          <div className="i-gg:options -scale-x-100 text-lg"></div>
        </div>
      </button>
    </div>
  );
}
