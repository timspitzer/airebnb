import * as RadixAccordion from "@radix-ui/react-accordion";
import { WhereItem } from "./WhereItem.jsx";
import { WhenItem } from "./WhenItem.jsx";
import { WhoItem } from "./WhoItem.jsx";
import { useState } from "react";

export function Accordion({ isSearchBarFocused, setIsSearchBarFocused }) {
  const [accordionValue, setAccordionValue] = useState("where");
  return (
    <>
      <RadixAccordion.Root
        value={accordionValue}
        onValueChange={setAccordionValue}
        type="single"
        className="p-t-[15px] m-x-[12px] h-full"
      >
        <form id="search-form" className="h-full">
          <WhereItem
            setAccordionValue={setAccordionValue}
            isSearchBarFocused={isSearchBarFocused}
            setIsSearchBarFocused={setIsSearchBarFocused}
          ></WhereItem>
          <WhenItem></WhenItem>
          <WhoItem></WhoItem>
        </form>
      </RadixAccordion.Root>
    </>
  );
}
