import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

function formatDate(date = new Date()) {
  const dateString = date.toDateString();
  return Number(dateString.slice(8, 10)) < 10
    ? `${dateString.slice(4, 7)} ${dateString.slice(9, 10)} `
    : dateString.slice(4, 10);
}

export function SearchBar() {
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
    <div className="discover-search-bar min-h-14 min-w-xs flex items-stretch justify-between rounded-[1000px] border-[0.5px] border-solid border-neutral-100 shadow-md">
      <Dialog.Trigger className="grow bg-transparent">
        <div className="flex items-center">
          <div className="pl-5 pr-4">
            <div className="i-radix-icons:magnifying-glass text-xl"></div>
          </div>
          <div>
            <div className="text-left text-sm font-semibold">
              <span>{destination}</span>
            </div>
            <div>
              <sub className="text-xs text-neutral-500">
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
      <button className="border-none bg-transparent">
        <div className="rounded-max mx-[10px] flex h-[36px] w-[36px] items-center justify-center rounded-full border border-solid border-neutral-300">
          <div className="i-gg:options -scale-x-100 text-lg"></div>
        </div>
      </button>
    </div>
  );
}
