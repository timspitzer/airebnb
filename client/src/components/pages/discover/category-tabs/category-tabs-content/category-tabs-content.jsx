import * as Tabs from "@radix-ui/react-tabs";

import { CATEGORIES } from "../categories";

export function CategoryTabsContent() {
  return (
    <div>
      {CATEGORIES.map(({ name }) => {
        return (
          <Tabs.Content key={name} value={name}>
            <div className="h-900px">{name}</div>
          </Tabs.Content>
        );
      })}
    </div>
  );
}
