import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";

export function DiscoverSearchModal() {
  const [activeTab, setActiveTab] = useState("stays");

  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-0 top-0 h-full w-full overflow-y-scroll bg-[#f7f7f7] focus:outline-none">
        <Tabs.Root value={activeTab}>
          <Tabs.List className="p-t-[18px] p-b-[9px] relative">
            <div className="flex justify-center">
              <Tabs.Trigger
                onClick={() => setActiveTab("stays")}
                value="stays"
                className={`m-t-[9px] m-x-[10px] m-b-[4px] font-600 w-[44px] bg-transparent text-[16px] leading-[20px] text-[#717171] data-[state=active]:text-[#000000]`}
              >
                Stays
              </Tabs.Trigger>
              <Tabs.Trigger
                onClick={() => setActiveTab("experiences")}
                value="experiences"
                className={`m-t-[9px] m-x-[10px] m-b-[4px] font-600 w-[96px] bg-transparent text-[16px] leading-[20px] text-[#717171] data-[state=active]:text-[#000000]`}
              >
                Experiences
              </Tabs.Trigger>
            </div>
            <div className="flex h-[2px] w-full justify-center">
              <div className="relative">
                <div
                  className={`${
                    activeTab === "stays" ? "left-[-80px] w-[44px]" : ""
                  }
                  ${
                    activeTab === "experiences" ? "left-[-16px] w-[96px]" : ""
                  } transition-left transition-width transition-200 absolute h-[2px] bg-[#000000] will-change-[width,left]`}
                ></div>
              </div>
            </div>
          </Tabs.List>
          <Tabs.Content />
        </Tabs.Root>

        <Dialog.Description></Dialog.Description>
        <Dialog.Close className="absolute left-[20px] top-[22px] inline-flex h-[32px] w-[32px] items-center justify-center rounded-full border border-solid border-[#b0b0b0] bg-[#fefefe]">
          <div className="i-radix-icons:cross-2"></div>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
