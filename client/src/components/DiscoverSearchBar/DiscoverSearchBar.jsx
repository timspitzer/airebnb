import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

function formatDate(date = new Date()) {
  const dateString = date.toDateString();
  return Number(dateString.slice(8, 10)) < 10
    ? `${dateString.slice(4, 7)} ${dateString.slice(9, 10)} `
    : dateString.slice(4, 10);
}

export function DiscoverSearchBar() {
  const [destination, setDestination] = useState("Anywhere");
  const [dates, setDates] = useState({
    start: new Date(),
    end: new Date(Date.now() + 400000000),
  });
  const [guests, setGuests] = useState(1);

  const displayDates = {
    start: formatDate(dates.start),
    end: formatDate(dates.end),
  };

  return (
    <div className="discover-search-bar min-h-14 min-w-xs flex justify-between items-stretch rounded-[1000px] shadow-md border-[0.5px] border-solid border-neutral-100">
      <Dialog.Trigger className="bg-transparent grow">
        <div className="flex items-center">
          <div className="pl-5 pr-4">
            <div className="i-radix-icons:magnifying-glass text-xl"></div>
          </div>
          <div>
            <div className="text-left font-semibold text-sm">
              <span>{destination}</span>
            </div>
            <div>
              <sub className="text-neutral-500 text-xs">
                <span>{displayDates.start}</span>
                {" – "}
                <span>{displayDates.end}</span>
                {" · "}
                <span>
                  {guests} {guests > 1 ? "guests" : "guest"}
                </span>
              </sub>
            </div>
          </div>
        </div>
      </Dialog.Trigger>
      <button className="bg-transparent border-none">
        <div className="mx-[10px] w-[36px] h-[36px] flex justify-center items-center rounded-max rounded-full border border-neutral-300 border-solid">
          <div className="i-gg:options text-lg -scale-x-100"></div>
        </div>
      </button>
    </div>
  );
}
