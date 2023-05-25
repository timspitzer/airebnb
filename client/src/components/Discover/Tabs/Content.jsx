import * as Tabs from "@radix-ui/react-tabs";

export function TabsContent() {
  return (
    <div className="discover-tabs">
      <Tabs.Content value="tab1">
        <div className="h-900px bg-cyan-400"></div>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <div className="h-900px bg-yellow-400"></div>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <div className="h-900px bg-red-400"></div>
      </Tabs.Content>
    </div>
  );
}
