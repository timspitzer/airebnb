import * as RadixAccordion from "@radix-ui/react-accordion";
import { WhereItem } from "./WhereItem.jsx";
import { WhenItem } from "./WhenItem.jsx";
import { WhoItem } from "./WhoItem.jsx";
import { Footer } from "./Footer.jsx";
import { useState } from "react";

export function Accordion({ isSearchBarFocused, setIsSearchBarFocused }) {
  const [accordionValue, setAccordionValue] = useState("where");
  return (
    <>
      <RadixAccordion.Root
        value={accordionValue}
        onValueChange={setAccordionValue}
        type="single"
        className="m-t-[15px] m-x-[12px]"
      >
        <form
          id="search-form"
          onChange={(e) => {
            console.log(e);
          }}
        >
          <WhereItem
            setAccordionValue={setAccordionValue}
            isSearchBarFocused={isSearchBarFocused}
            setIsSearchBarFocused={setIsSearchBarFocused}
          ></WhereItem>
          <WhenItem></WhenItem>
          <WhoItem></WhoItem>
        </form>
      </RadixAccordion.Root>
      {isSearchBarFocused ? null : <Footer></Footer>}
    </>
  );
}
