import * as Tabs from "@radix-ui/react-tabs";

import { CATEGORIES } from "./categories.js";
import { CategoryTabsContent } from "./category-tabs-content/category-tabs-content.jsx";
import { Header } from "../../../common/header/header.jsx";

export function CategoryTabs() {
  return (
    <Tabs.Root defaultValue={CATEGORIES[0].name}>
      <Header></Header>
      <main>
        <CategoryTabsContent></CategoryTabsContent>
      </main>
    </Tabs.Root>
  );
}
