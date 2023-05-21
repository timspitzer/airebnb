import { DiscoverTabsList, SearchBar } from "../";

export function Header() {
  return (
    <div className="header px-6 pt-4 sticky top-0 bg-neutral-50 shadow-md">
      <SearchBar></SearchBar>
      <DiscoverTabsList></DiscoverTabsList>
    </div>
  );
}
