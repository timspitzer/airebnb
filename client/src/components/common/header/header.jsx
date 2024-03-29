import { AirebnbLogo } from "./airebnb-logo/airebnb-logo.jsx";
import { CategoryTabsList } from "../../pages/discover/category-tabs/category-tabs-list/category-tabs-list.jsx";
import { LanguagePicker } from "./language-picker/language-picker.jsx";
import { Search } from "../search/search.jsx";
import { UserMenu } from "./user-menu/user-menu.jsx";

export function Header() {
  return (
    <div className="z-1 header sticky top-0 z-0 bg-white shadow-md">
      <div className="md:border-b-solid justify-between px-6 pt-4 md:flex md:border md:border-[#ebebeb] md:px-20 md:pb-4">
        <div className="hidden items-center md:flex ">
          <AirebnbLogo></AirebnbLogo>
        </div>
        <Search></Search>
        <div className="hidden items-center gap-[10px] md:flex">
          <span>Airbnb your home</span>
          <LanguagePicker></LanguagePicker>
          <UserMenu></UserMenu>
        </div>
      </div>
      <CategoryTabsList></CategoryTabsList>
    </div>
  );
}
