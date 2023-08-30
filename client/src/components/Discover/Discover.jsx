import * as Tabs from "@radix-ui/react-tabs";
import * as Dialog from "@radix-ui/react-dialog";
import { useReducer } from "react";
import { SearchModal } from "./SearchModal/SearchModal.jsx";
import { Header } from "./Header/Header.jsx";
import { TabsContent } from "./Tabs/Content.jsx";
import { Footer } from "../common/Footer.jsx";
import { BottomBar } from "../common/BottomBar.jsx";
import {
  initialFormState,
  FormDataContext,
} from "../../context/FormDataContext.js";
import {
  UPDATE_FORM_DATA,
  formDataReducer,
} from "../../reducer/formDataReducer.js";

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
              <TabsContent></TabsContent>
            </main>
          </Tabs.Root>
        </Dialog.Root>
        <Footer></Footer>
        <BottomBar></BottomBar>
      </FormDataContext.Provider>
    </div>
  );
}
