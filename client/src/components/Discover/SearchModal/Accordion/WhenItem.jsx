import { useContext } from "react";
import { FormDataContext } from "../../../../context/FormDataContext.js";
import { Item } from "./Item.jsx";
import { DatePicker } from "../../../common/DatePicker.jsx";
import { formatDate } from "../../../../utils/dates/formatDate.js";
import { PlusMinusDays } from "./PlusMinusDays.jsx";

export function WhenItem() {
  const { formData } = useContext(FormDataContext);
  return (
    <Item
      value="when"
      trigger={{
        title: "When",
        description:
          formData.startDate && formData.endDate
            ? `${formatDate(formData.startDate)} - ${formatDate(
                formData.endDate
              )}`
            : "Add dates",
      }}
      itemContent={{
        title: (
          <div className="font-600 text-[22px]">When{"'"}s your trip?</div>
        ),
        content: (
          <>
            <div className="mx-6 my-4">
              <DatePicker></DatePicker>
            </div>
            <div className="border-y-solid border-y-1 border-y-[#ebebeb] py-2">
              <PlusMinusDays></PlusMinusDays>
            </div>
            <div>Next steps</div>
          </>
        ),
      }}
    ></Item>
  );
}

//  <RadixAccordion.Item value="when">
//       <RadixAccordion.Trigger className="m-b-[12px] flex h-full w-full justify-between rounded-[16px] bg-[#ffffff] p-[24px] shadow-md data-[state=open]:hidden">
//         When
//       </RadixAccordion.Trigger>
//       <RadixAccordion.Content className="m-b-[12px] rounded-[16px] bg-[#ffffff] p-[24px] shadow-md">
//         <div className="text-[22px]">When{"'"}s your trip?</div>
//         <div>Datepicker</div>
//         <div>Plus Minus Days</div>
//         <div>Next steps</div>
//       </RadixAccordion.Content>
//     </RadixAccordion.Item>

//  <Item
//    className={isSearchBarFocused ? "fixed left-0 h-full w-full" : ""}
//    value="where"
//    trigger={{
//      title: "Where",
//      destination: destination.length === 0 ? "I'm flexible" : destination,
//    }}
//    itemContent={{
//      title: isSearchBarFocused ? null : (
//        <div className="font-600 text-[22px]">Where to?</div>
//      ),
//      content: (
//        <SearchBar
//          setIsSearchBarFocused={setIsSearchBarFocused}
//          isSearchBarFocused={isSearchBarFocused}
//          setAccordionValue={setAccordionValue}
//        ></SearchBar>
//      ),
//      additional: isSearchBarFocused ? null : (
//        <div className="m-t-[16px] flex gap-[16px] overflow-x-scroll">
//          {DESTINATIONS_WITH_ID.map((destination) => {
//            return (
//              <DestinationCard
//                setAccordionValue={setAccordionValue}
//                key={destination.id}
//                name={destination.name}
//                img={destination.img}
//              ></DestinationCard>
//            );
//          })}
//        </div>
//      ),
//    }}
//  ></Item>;
