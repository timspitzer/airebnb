import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";

import { ModalFooter } from "./modal-footer/modal-footer.jsx";
import { ModalTabsContent } from "./modal-tabs/modal-tabs-content/modal-tabs-content.jsx";
import { ModalTabsList } from "./modal-tabs/modal-tabs-list/modal-tabs-list.jsx";
import { useState } from "react";

export function SearchModal() {
  const [activeTab, setActiveTab] = useState("stays");
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);

  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content className="fixed left-0 top-0 h-full w-full overflow-y-scroll bg-[#f7f7f7] focus:outline-none">
        <Tabs.Root value={activeTab} className="flex h-full flex-col md:px-96">
          <ModalTabsList
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          ></ModalTabsList>
          <ModalTabsContent
            setIsSearchBarFocused={setIsSearchBarFocused}
            isSearchBarFocused={isSearchBarFocused}
          ></ModalTabsContent>
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
        {isSearchBarFocused ? null : <ModalFooter></ModalFooter>}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
