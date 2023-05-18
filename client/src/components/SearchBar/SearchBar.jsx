import * as Toolbar from "@radix-ui/react-toolbar";
import { useState } from "react";

function formatDate(date) {
  // return `${date.getDay()} ${date.getMonth()} ${
  //   date.getFullYear() === new Date().getFullYear() ? "" : date.getFullYear()
  // }`;
  return date.toDateString().slice(4, 9);
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
    <Toolbar.Root className="SearchBar min-h-14 min-w-xs flex justify-between items-stretch rounded-[1000px] shadow-md border-[0.5px] border-solid border-neutral-100 ">
      <Toolbar.Button className="bg-transparent border-none">
        <div className="flex items-center">
          <div className="pl-5 pr-4">
            <div className="i-radix-icons:magnifying-glass text-xl"></div>
          </div>
          <div>
            <div className="text-left font-medium">
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
      </Toolbar.Button>
      <Toolbar.Button className="bg-transparent border-none">
        <div className="mx-[10px] w-[36px] h-[36px] flex justify-center items-center rounded-max rounded-full border border-neutral-300 border-solid">
          <div className="i-gg:options text-lg"></div>
        </div>
      </Toolbar.Button>
    </Toolbar.Root>
  );
}
