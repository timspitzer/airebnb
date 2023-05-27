import {
  Header,
  Footer,
  BottomBar,
  TabsContent,
  SearchModal,
} from "../../components";
import * as Tabs from "@radix-ui/react-tabs";
import * as Dialog from "@radix-ui/react-dialog";
import { useReducer } from "react";
import { initialFormState, FormDataContext } from "./FormDataContext.js";
import { UPDATE_FORM_DATA, formDataReducer } from "./reducers.js";

export function Discover() {
  const [formData, dispatch] = useReducer(formDataReducer, initialFormState);

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
