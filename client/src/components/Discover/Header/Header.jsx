import { List, SearchBar } from "../..";

export function Header() {
  return (
    <div className="header sticky top-0 bg-neutral-50 px-6 pt-4 shadow-md">
      <SearchBar></SearchBar>
      <List></List>
    </div>
  );
}
