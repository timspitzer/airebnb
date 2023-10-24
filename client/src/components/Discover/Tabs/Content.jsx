import * as Tabs from "@radix-ui/react-tabs";
import { categories } from "./categories";

export function TabsContent() {
  return (
    <div className="discover-tabs">
      {categories.map(({ name }) => {
        return (
          <Tabs.Content key={name} value={name}>
            <div className="h-900px">{name}</div>
          </Tabs.Content>
        );
      })}
    </div>
  );
}
