import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";

import {
  FormDataContext,
  initialFormState,
} from "../../../context/FormDataContext.js";
import {
  UPDATE_FORM_DATA,
  formDataReducer,
} from "../../../reducer/formDataReducer.js";

import { CategoryTabsContent } from "./category-tabs/category-tabs-content/category-tabs-content.jsx";
import { Footer } from "../../common/footer/Footer.jsx";
import { Header } from "../../common/header/Header.jsx";
import { SearchModal } from "../../common/search/search-modal/search-modal.jsx";
import { useReducer } from "react";

export function Discover() {
  const [formData, dispatch] = useReducer(formDataReducer, initialFormState);

  // TODO: This wrapper adds ease of use but also confusion, consider not doing this next time
  const updateFormData = (newData) => {
    dispatch({ type: UPDATE_FORM_DATA, payload: newData });
  };

  return (
    <div className="discover-page">
      <FormDataContext.Provider value={{ formData, updateFormData }}>
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
      </FormDataContext.Provider>
    </div>
  );
}
