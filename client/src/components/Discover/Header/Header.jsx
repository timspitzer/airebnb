import { LanguagePicker } from "../../common/LanguagePicker.jsx";
import { SearchBar } from "../../common/SearchBar.jsx";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu.jsx";
import { TabsList } from "../Tabs/TabsList.jsx";
import { AirebnbLogo } from "./AirebnbLogo/AirebnbLogo.jsx";

export function Header() {
  return (
    <div className="header sticky top-0 bg-neutral-50 shadow-md">
      <div className="md:border-b-solid justify-between px-6 pt-4 md:flex md:border md:border-[#ebebeb] md:px-20 md:pb-4">
        <div className="hidden items-center md:flex ">
          <AirebnbLogo></AirebnbLogo>
        </div>
        <SearchBar></SearchBar>
        <div className="hidden items-center gap-[10px] md:flex">
          <span>Airbnb your home</span>
          <LanguagePicker></LanguagePicker>
          <ProfileMenu></ProfileMenu>
        </div>
      </div>
      <TabsList></TabsList>
    </div>
  );
}
