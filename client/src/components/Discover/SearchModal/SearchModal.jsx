import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { TabsList } from "./Tabs/TabsList.jsx";
import { Accordion } from "./Accordion/Accordion.jsx";
import { Footer } from "./Footer/Footer.jsx";

export function SearchModal() {
  const [activeTab, setActiveTab] = useState("stays");
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);

  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content className="fixed left-0 top-0 h-full w-full overflow-y-scroll bg-[#f7f7f7] focus:outline-none">
        <Tabs.Root value={activeTab}>
          <TabsList
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          ></TabsList>
          <Tabs.Content value="stays">
            <Accordion
              setIsSearchBarFocused={setIsSearchBarFocused}
              isSearchBarFocused={isSearchBarFocused}
            ></Accordion>
          </Tabs.Content>
          <Tabs.Content value="experiences">
            <div>Expe</div>
          </Tabs.Content>
        </Tabs.Root>
        <Dialog.Description></Dialog.Description>
        <div className="absolute left-[20px] top-[22px] h-[32px] w-[32px] rounded-full border border-solid border-[#b0b0b0] bg-[#fefefe]">
          {isSearchBarFocused ? (
            <button
              className="inline-flex h-full w-full items-center justify-center"
              onClick={() => setIsSearchBarFocused(false)}
            >
              <div className="i-radix-icons:arrow-left"></div>
            </button>
          ) : (
            <Dialog.Close className="inline-flex h-full w-full items-center justify-center">
              <div className="i-radix-icons:cross-2"></div>
            </Dialog.Close>
          )}
        </div>
        {isSearchBarFocused ? null : <Footer></Footer>}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
