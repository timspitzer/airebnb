import * as RadixAccordion from "@radix-ui/react-accordion";
import { WhereItem } from "./WhereItem.jsx";
import { WhenItem } from "./WhenItem.jsx";
import { WhoItem } from "./WhoItem.jsx";
import { Footer } from "./Footer.jsx";

export function Accordion() {
  return (
    <>
      <RadixAccordion.Root
        defaultValue="where"
        type="single"
        className="m-t-[15px] m-x-[12px]"
      >
        <form id="search-form">
          <WhereItem></WhereItem>
          <WhenItem></WhenItem>
          <WhoItem></WhoItem>
        </form>
      </RadixAccordion.Root>
      <Footer></Footer>
    </>
  );
}
