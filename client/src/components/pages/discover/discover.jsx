import * as Dialog from "@radix-ui/react-dialog";

import {
  SearchDataContext,
  initialFormState,
} from "../../../context/search-data-context.js";
import {
  UPDATE_FORM_DATA,
  searchDataReducer,
} from "../../../reducer/search-data-reducer.js";

import { CategoryTabs } from "./category-tabs/category-tabs.jsx";
import { Footer } from "../../common/footer/footer.jsx";
import { SearchModal } from "../../common/search/search-modal/search-modal.jsx";
import { useReducer } from "react";

export function Discover() {
  const [searchData, dispatch] = useReducer(
    searchDataReducer,
    initialFormState
  );

  // TODO: This wrapper adds ease of use but also confusion, consider not doing this next time
  const updateSearchData = (newData) => {
    dispatch({ type: UPDATE_FORM_DATA, payload: newData });
  };

  return (
    <div className="discover-page">
      <SearchDataContext.Provider value={{ searchData, updateSearchData }}>
        <Dialog.Root>
          <SearchModal></SearchModal>
          <CategoryTabs></CategoryTabs>
        </Dialog.Root>
        <Footer></Footer>
      </SearchDataContext.Provider>
    </div>
  );
}
