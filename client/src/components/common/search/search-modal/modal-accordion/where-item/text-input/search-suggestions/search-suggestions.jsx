import { ACCORDION_STATES } from "../../../accordion-states.js";
import { ListItem } from "../list-item/list-item.jsx";
import { SearchDataContext } from "../../../../../../../../context/search-data-context.js";
import { useContext } from "react";

export function SearchSuggestions({
  suggestions,
  setSearchTerm,
  setIsSearchBarFocused,
  setAccordionValue,
}) {
  const { updateSearchData } = useContext(SearchDataContext);

  function handleItemClick(event, suggestion) {
    event.preventDefault();
    setSearchTerm(suggestion);
    setIsSearchBarFocused(false);
    updateSearchData({ destination: suggestion });
    setAccordionValue(ACCORDION_STATES[1]);
  }
  return (
    <ul className="list-none p-0">
      {suggestions.map((suggestion, i) => {
        return (
          <ListItem
            key={i}
            handleClick={(event) => handleItemClick(event, suggestion)}
          >
            <div className="m-r-[16px] flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#ebebeb]">
              <svg
                className="inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                style={{
                  display: "block",
                  height: "22px",
                  width: "22px",
                  fill: "currentcolor",
                }}
                role="presentation"
                focusable="false"
              >
                <path d="M16 0a12 12 0 0 1 12 12c0 6.34-3.81 12.75-11.35 19.26l-.65.56-1.08-.93C7.67 24.5 4 18.22 4 12 4 5.42 9.4 0 16 0zm0 2C10.5 2 6 6.53 6 12c0 5.44 3.25 11.12 9.83 17.02l.17.15.58-.52C22.75 23 25.87 17.55 26 12.33V12A10 10 0 0 0 16 2zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
              </svg>
            </div>
            <div className="flex items-center text-left text-[16px]">
              {suggestion}
            </div>
          </ListItem>
        );
      })}
    </ul>
  );
}
