import { FormattedDate } from "../../../../../common/formatted-date/formatted-date.jsx";
import { ImageSlider } from "./image-slider/image-slider.jsx";
import { SearchDataContext } from "../../../../../../context/search-data-context.js";
import { useContext } from "react";
import { useHover } from "../../../../../../hooks/useHover.js";
import { useNavigate } from "react-router-dom";

export function Property({
  propertyId,
  propertyName,
  propertyType,
  pricePerNight,
  propertyImages,
}) {
  const { searchData } = useContext(SearchDataContext);
  const [ref, areImageSliderButtonsShown] = useHover();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`rooms/${propertyId}`);
  };

  return (
    <article
      ref={ref}
      onClick={handleClick}
      className="w-full hover:cursor-pointer sm:w-[calc(50%-0.75rem)] md:w-[calc(33.33%-1rem)]  lg:w-[calc(25%-1.125rem)]"
    >
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
  );
}
