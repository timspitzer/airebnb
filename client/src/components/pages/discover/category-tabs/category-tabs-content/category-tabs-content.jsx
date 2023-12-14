import * as Tabs from "@radix-ui/react-tabs";

import { CATEGORIES } from "../categories";
import { PROPERTIES } from "./properties.js";
import { Property } from "./property/property.jsx";

export function CategoryTabsContent() {
  return (
    <div className="mx-6 mt-4 md:mx-20">
      {CATEGORIES.map(({ name }) => {
        return (
          <Tabs.Content
            key={name}
            value={name}
            className="flex flex-row flex-wrap gap-6"
          >
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
