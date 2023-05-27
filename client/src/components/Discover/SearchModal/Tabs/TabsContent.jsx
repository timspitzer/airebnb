import * as Tabs from "@radix-ui/react-tabs";
import { Accordion } from "../Accordion/Accordion.jsx";

export function TabsContent() {
  return (
    <>
      <Tabs.Content value="stays">
        <Accordion></Accordion>
      </Tabs.Content>
      <Tabs.Content value="experiences">
        <Accordion></Accordion>
      </Tabs.Content>
    </>
  );
}
