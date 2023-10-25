import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";

import { SearchAccordion } from "./search-accordion/search-accordion.jsx";
import { SearchFooter } from "./search-footer/search-footer.jsx";
import { TabsList } from "./Tabs/TabsList.jsx";
import { useState } from "react";

export function SearchModal() {
  const [activeTab, setActiveTab] = useState("stays");
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);

  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content className="fixed left-0 top-0 h-full w-full overflow-y-scroll bg-[#f7f7f7] focus:outline-none">
        <Tabs.Root value={activeTab} className="flex h-full flex-col md:px-96">
          <TabsList
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          ></TabsList>
          <Tabs.Content value="stays" className="flex-grow">
            <SearchAccordion
              setIsSearchBarFocused={setIsSearchBarFocused}
              isSearchBarFocused={isSearchBarFocused}
            />
          </Tabs.Content>
          <Tabs.Content value="experiences">
            <div>Expe</div>
          </Tabs.Content>
        </Tabs.Root>
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
        {/* SearchFooter */}
        {isSearchBarFocused ? null : <SearchFooter></SearchFooter>}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
