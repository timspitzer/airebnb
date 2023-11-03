import { FormattedDate } from "../../../../../common/formatted-date/formatted-date.jsx";
import { ImageSlider } from "./image-slider/image-slider.jsx";
import { SearchDataContext } from "../../../../../../context/search-data-context.js";
import { useContext } from "react";

export function Property({
  propertyId,
  propertyName,
  propertyType,
  pricePerNight,
  propertyImages,
}) {
  const { searchData } = useContext(SearchDataContext);
  return (
    <article className="h-[330px] w-[330px]">
      <a href={propertyId} className="decoration-none">
        <ImageSlider images={propertyImages}></ImageSlider>
        <div className="text-[15px] font-semibold text-[#222222]">
          {propertyName}
        </div>
        <div className="text-[#717171]">{propertyType}</div>
        <div className="text-[#717171]">
          <FormattedDate {...searchData}></FormattedDate>
        </div>
        <div className=" text-[#222222]">
          <span className="font-600">${pricePerNight}</span>
          <span> night</span>
        </div>
      </a>
    </article>
  );
}
