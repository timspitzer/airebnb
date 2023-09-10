import * as RadixAccordion from "@radix-ui/react-accordion";
import { WhereItem } from "./WhereItem.jsx";
import { WhenItem } from "./WhenItem.jsx";
import { WhoItem } from "./WhoItem.jsx";
import { useState } from "react";
import { ACCORDION_VALUES } from "../../../../utils/constants.js";

export function Accordion({ isSearchBarFocused, setIsSearchBarFocused }) {
  const [accordionValue, setAccordionValue] = useState(ACCORDION_VALUES[0]);
  return (
    <>
      <RadixAccordion.Root
        value={accordionValue}
        onValueChange={setAccordionValue}
        type="single"
        className="mx-[12px] h-full pt-[15px] md:mx-[0]"
      >
        <form id="search-form" className="h-full">
          <WhereItem
            setAccordionValue={setAccordionValue}
            isSearchBarFocused={isSearchBarFocused}
            setIsSearchBarFocused={setIsSearchBarFocused}
          ></WhereItem>
          <WhenItem setAccordionValue={setAccordionValue}></WhenItem>
          <WhoItem></WhoItem>
        </form>
      </RadixAccordion.Root>
    </>
  );
}
