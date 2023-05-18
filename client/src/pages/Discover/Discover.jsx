import { Header, Footer, BottomBar } from "../../components/";
export function Discover({ children }) {
  return (
    <div className="DiscoverPage">
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
      <BottomBar></BottomBar>
    </div>
  );
}
