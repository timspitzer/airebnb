import { useContext, useState } from "react";
import { RecentSearches } from "./RecentSearches.jsx";
import { FormDataContext } from "../../../../context/FormDataContext.js";

export function SearchBar({ setIsSearchBarFocused, isSearchBarFocused }) {
  const { formData, updateFormData } = useContext(FormDataContext);
  return (
    <div>
      <label
        onFocus={() => setIsSearchBarFocused(true)}
        className="m-t-[16px] p-x-[20px] flex h-[60px] w-full rounded-[12px] border border-solid border-[#b0b0b0] focus-within:border-0 focus-within:bg-[#f7f7f7]"
      >
        <div className="i-radix-icons:magnifying-glass m-r-[10px] h-full text-2xl"></div>
        <input
          value={formData.destination.length === 0 ? "" : formData.destination}
          onChange={(e) => {
            updateFormData({ destination: e.target.value });
          }}
          type="text"
          id="name"
          name="name"
          className="font-600 focus:font-400 w-full text-[14px] "
          placeholder="Search destinations"
        ></input>
        {!isSearchBarFocused || formData.destination.length === 0 ? null : (
          <div className="flex items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                updateFormData({ destination: "" });
              }}
              className="rounded-1/2 flex h-[20px] w-[20px] items-center justify-center bg-[#dddddd]"
            >
              <div className="i-radix-icons:cross-2"></div>
            </button>
          </div>
        )}
      </label>
      {isSearchBarFocused ? <RecentSearches></RecentSearches> : null}
    </div>
  );
}
