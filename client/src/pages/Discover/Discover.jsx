import {
  Header,
  Footer,
  BottomBar,
  DiscoverTabsContent,
  DiscoverSearchModal,
} from "../../components/";
import * as Tabs from "@radix-ui/react-tabs";
import * as Dialog from "@radix-ui/react-dialog";

export function Discover() {
  return (
    <div className="discover-page">
      <Dialog.Root>
        <Tabs.Root defaultValue="tab1">
          <Header></Header>
          <main>
            <DiscoverTabsContent></DiscoverTabsContent>
            <DiscoverSearchModal></DiscoverSearchModal>
          </main>
        </Tabs.Root>
      </Dialog.Root>
      <Footer></Footer>
      <BottomBar></BottomBar>
    </div>
  );
}
