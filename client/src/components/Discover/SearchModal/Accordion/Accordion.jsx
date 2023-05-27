import * as RadixAccordion from "@radix-ui/react-accordion";
import { WhereItem } from "./WhereItem.jsx";
import { WhenItem } from "./WhenItem.jsx";
import { WhoItem } from "./WhoItem.jsx";
import { Footer } from "./Footer.jsx";
import { useState } from "react";

export function Accordion() {
  const [accordionValue, setAccordionValue] = useState("where");
  return (
    <>
      <RadixAccordion.Root
        value={accordionValue}
        onValueChange={setAccordionValue}
        type="single"
        className="m-t-[15px] m-x-[12px]"
      >
        <form id="search-form">
          <WhereItem setAccordionValue={setAccordionValue}></WhereItem>
          <WhenItem></WhenItem>
          <WhoItem></WhoItem>
        </form>
      </RadixAccordion.Root>
      <Footer></Footer>
    </>
  );
}
