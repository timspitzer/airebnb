import * as Tabs from "@radix-ui/react-tabs";

import { CATEGORIES } from "../categories";
import { PROPERTIES } from "./properties.js";
import { Property } from "./property/property.jsx";

export function CategoryTabsContent() {
  return (
    <div>
      {CATEGORIES.map(({ name }) => {
        return (
          <Tabs.Content key={name} value={name}>
            {PROPERTIES.map((propertyData) => (
              <Property
                key={propertyData.propertyId}
                {...propertyData}
              ></Property>
            ))}
          </Tabs.Content>
        );
      })}
    </div>
  );
}
