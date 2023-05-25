import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { List } from "./Tabs/List.jsx";
import Content from "./Tabs/Content.jsx";

export function SearchModal() {
  const [activeTab, setActiveTab] = useState("stays");

  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-0 top-0 h-full w-full overflow-y-scroll bg-[#f7f7f7] focus:outline-none">
        <Tabs.Root value={activeTab}>
          <List activeTab={activeTab} setActiveTab={setActiveTab}></List>
          <Content></Content>
        </Tabs.Root>
        <Dialog.Description></Dialog.Description>
        <Dialog.Close className="absolute left-[20px] top-[22px] inline-flex h-[32px] w-[32px] items-center justify-center rounded-full border border-solid border-[#b0b0b0] bg-[#fefefe]">
          <div className="i-radix-icons:cross-2"></div>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
