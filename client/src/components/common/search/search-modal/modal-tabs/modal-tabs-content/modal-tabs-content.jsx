import * as Tabs from "@radix-ui/react-tabs";

import { ModalAccordion } from "../../modal-accordion/modal-accordion";

export function ModalTabsContent({
  isSearchBarFocused,
  setIsSearchBarFocused,
}) {
  return (
    <>
      <Tabs.Content value="stays" className="flex-grow">
        <ModalAccordion
          setIsSearchBarFocused={setIsSearchBarFocused}
          isSearchBarFocused={isSearchBarFocused}
        />
      </Tabs.Content>
      <Tabs.Content value="experiences">
        <div>Experiences</div>
      </Tabs.Content>
    </>
  );
}
