import { useContext, useEffect, useState } from "react";
import { RecentSearches } from "./RecentSearches.jsx";
import { FormDataContext } from "../../../../context/FormDataContext.js";
import { places } from "./places.js";
import { SearchSuggestions } from "./SearchSuggestions.jsx";

function generateSuggestions(query, places) {
  if (query.length === 0) return [];
  const lowerCaseQuery = query.toLowerCase();

  let suggestions = places.filter((place) => {
    const lowerCasePlace = place.toLowerCase();
    return lowerCasePlace.startsWith(lowerCaseQuery);
  });
  if (suggestions.length < 1) {
    suggestions = places.filter((place) => {
      const lowerCasePlace = place.toLowerCase();
      return lowerCasePlace.includes(lowerCaseQuery);
    });
  }
  const slicedSuggestions = suggestions.slice(0, 5);

  return slicedSuggestions;
}

export function SearchBar({
  setIsSearchBarFocused,
  isSearchBarFocused,
  setAccordionValue,
}) {
  const { formData, updateFormData } = useContext(FormDataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function handleInputChange(event) {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Generate suggestions based on newSearchTerm
    const newSuggestions = generateSuggestions(newSearchTerm, places);

    setSuggestions(newSuggestions);
  }

  useEffect(() => {
    if (formData.destination) {
      setSearchTerm(formData.destination);
    }
  }, []);

  return (
    <div>
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
