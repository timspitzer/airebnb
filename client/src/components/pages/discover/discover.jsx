import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";

import {
  SearchDataContext,
  initialFormState,
} from "../../../context/search-data-context.js";
import {
  UPDATE_FORM_DATA,
  searchDataReducer,
} from "../../../reducer/search-data-reducer.js";

import { CategoryTabsContent } from "./category-tabs/category-tabs-content/category-tabs-content.jsx";
import { Footer } from "../../common/footer/Footer.jsx";
import { Header } from "../../common/header/Header.jsx";
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
          <Tabs.Root defaultValue="tab1">
            <Header></Header>
            <main>
              <CategoryTabsContent></CategoryTabsContent>
            </main>
          </Tabs.Root>
        </Dialog.Root>
        <Footer></Footer>
      </SearchDataContext.Provider>
    </div>
  );
}
