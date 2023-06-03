import { SearchBar } from "../../common/SearchBar.jsx";
import { TabsList } from "../Tabs/TabsList.jsx";

export function Header() {
  return (
    <div className="header sticky top-0 bg-neutral-50 px-6 pt-4 shadow-md">
      <SearchBar></SearchBar>
      <TabsList></TabsList>
    </div>
  );
}
