import * as RadixAccordion from "@radix-ui/react-accordion";

import { ACCORDION_STATES } from "./accordion-states.js";
import { WhenItem } from "./when-item/when-item.jsx";
import { WhereItem } from "./where-item/where-item.jsx";
import { WhoItem } from "./who-item/who-item.jsx";
import { useState } from "react";

export function ModalAccordion({ isSearchBarFocused, setIsSearchBarFocused }) {
  const [accordionValue, setAccordionValue] = useState(ACCORDION_STATES[0]);
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
