import {
  Header,
  Footer,
  BottomBar,
  DiscoverTabsContent,
} from "../../components/";
import * as Tabs from "@radix-ui/react-tabs";

export function Discover() {
  return (
    <div className="discover-page">
      <Tabs.Root defaultValue="tab1">
        <Header></Header>
        <main>
          <DiscoverTabsContent></DiscoverTabsContent>
        </main>
      </Tabs.Root>
      <Footer></Footer>
      <BottomBar></BottomBar>
    </div>
  );
}
