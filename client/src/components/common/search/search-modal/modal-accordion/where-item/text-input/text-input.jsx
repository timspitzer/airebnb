import { useContext, useEffect, useState } from "react";

import { FormDataContext } from "../../../../../../../context/form-data-context.js";
import { PLACES } from "./places.js";
import { RecentSearches } from "./recent-searches/recent-searches.jsx";
import { SearchSuggestions } from "./search-suggestions/search-suggestions.jsx";
import { generateSuggestions } from "./helpers.js";

export function TextInput({
  setIsSearchBarFocused,
  isSearchBarFocused,
  setAccordionValue,
}) {
  const { formData } = useContext(FormDataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function handleInputChange(event) {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    const newSuggestions = generateSuggestions(newSearchTerm, PLACES);
    setSuggestions(newSuggestions);
  }

  // Make the text input have a value when setting the destination from somewhere else
  useEffect(() => {
    if (formData.destination) {
      setSearchTerm(formData.destination);
    }
  }, [formData.destination]);

  return (
    <div className="mx-6">
      <label
        onFocus={() => setIsSearchBarFocused(true)}
        className="m-t-[16px] p-x-[20px] flex h-[60px] w-full rounded-[12px] border border-solid border-[#b0b0b0] focus-within:border-0 focus-within:bg-[#f7f7f7]"
      >
        <div className="i-radix-icons:magnifying-glass m-r-[10px] h-full text-2xl"></div>
        <input
          autoComplete="off"
          value={searchTerm}
          onChange={handleInputChange}
          type="text"
          id="name"
          name="name"
          className="font-600 focus:font-400 w-full text-[14px] "
          placeholder="Search destinations"
        ></input>
        {isSearchBarFocused && searchTerm.length !== 0 ? (
          <div className="flex items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                setSearchTerm("");
              }}
              className="rounded-1/2 flex h-[20px] w-[20px] items-center justify-center bg-[#dddddd]"
            >
              <div className="i-radix-icons:cross-2"></div>
            </button>
          </div>
        ) : null}
      </label>
      {isSearchBarFocused && searchTerm.length === 0 ? (
        <RecentSearches></RecentSearches>
      ) : null}

      {isSearchBarFocused && searchTerm.length !== 0 ? (
        <SearchSuggestions
          suggestions={suggestions}
          setSearchTerm={setSearchTerm}
          setIsSearchBarFocused={setIsSearchBarFocused}
          setAccordionValue={setAccordionValue}
        ></SearchSuggestions>
      ) : null}
    </div>
  );
}
