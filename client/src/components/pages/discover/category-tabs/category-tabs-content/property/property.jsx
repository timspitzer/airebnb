import { useContext, useState } from "react";

import { FormattedDate } from "../../../../../common/formatted-date/formatted-date.jsx";
import { ImageSlider } from "./image-slider/image-slider.jsx";
import { Link } from "react-router-dom";
import { SearchDataContext } from "../../../../../../context/search-data-context.js";
import { useHover } from "../../../../../../hooks/useHover.js";

export function Property({
  propertyId,
  propertyName,
  propertyType,
  pricePerNight,
  propertyImages,
}) {
  const { searchData } = useContext(SearchDataContext);

  const [ref, areImageSliderButtonsShown] = useHover();

  return (
    // <Link to={`rooms/${propertyId}`} className="decoration-none">
    <article ref={ref}>
      <ImageSlider
        images={propertyImages}
        areButtonsShown={areImageSliderButtonsShown}
      ></ImageSlider>
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
    </article>
    // </Link>
  );
}
