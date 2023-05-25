import {
  Header,
  Footer,
  BottomBar,
  TabsContent,
  SearchModal,
} from "../../components";
import * as Tabs from "@radix-ui/react-tabs";
import * as Dialog from "@radix-ui/react-dialog";

export function Discover() {
  return (
    <div className="discover-page">
      <Dialog.Root>
        <Tabs.Root defaultValue="tab1">
          <Header></Header>
          <main>
            <TabsContent></TabsContent>
            <SearchModal></SearchModal>
          </main>
        </Tabs.Root>
      </Dialog.Root>
      <Footer></Footer>
      <BottomBar></BottomBar>
    </div>
  );
}
