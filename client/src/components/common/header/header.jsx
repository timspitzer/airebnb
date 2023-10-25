import { AirebnbLogo } from "./airebnb-logo/airebnb-logo.jsx";
import { LanguagePicker } from "./language-picker/language-picker.jsx";
import { Search } from "../search/search.jsx";
import { TabsList } from "../../Discover/Tabs/TabsList.jsx";
import { UserMenu } from "./user-menu/user-menu.jsx";

export function Header() {
  return (
    <div className="header sticky top-0 bg-neutral-50 shadow-md">
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
      <TabsList></TabsList>
    </div>
  );
}
