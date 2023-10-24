import * as Tabs from "@radix-ui/react-tabs";
import { useCategories } from "../../../hooks/useCategories";

export function TabsContent() {
  const categories = useCategories();

  return (
    <div className="discover-tabs">
      {categories.map(({ name, iconUrl }) => {
        return (
          <Tabs.Content key={name} value={name}>
            <div className="h-900px">{name}</div>
          </Tabs.Content>
        );
      })}
    </div>
  );
}
