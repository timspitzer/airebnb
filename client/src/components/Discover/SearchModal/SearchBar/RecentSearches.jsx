import { useContext } from "react";
import { formatDate } from "../../../../utils/dates/formatDate.js";
import { ListItem } from "./ListItem.jsx";
import { FormDataContext } from "../../../../context/FormDataContext.js";
import { useNavigate } from "react-router-dom";
import { MAP_SEARCH } from "../../../../router/paths.js";

const names = ["Istanbul", "Munich", "Kairo", "Tokyo", "Berlin"];

const searches = names.map((name, i) => {
  return {
    destination: name,
    dates: {
      start: formatDate(Date.now() + i * Math.random() * 1000000000),
      end: formatDate(Date.now() + i * Math.random() * 2000000000),
    },
    formattedDates: {
      start: formatDate(Date.now() + i * Math.random() * 1000000000),
      end: formatDate(Date.now() + i * Math.random() * 2000000000),
    },
    guests: Math.round(Math.random() * 10),
  };
});

export function RecentSearches() {
  const { updateFormData } = useContext(FormDataContext);
  const navigate = useNavigate();
  return (
    <ul className="list-none p-0">
      {searches.map((search, i) => {
        return (
          <ListItem
            key={i}
            handleClick={(event) => {
              event.preventDefault();
              updateFormData({
                destination: search.destination,
                dates: search.dates,
                guests: search.guests,
              });
              navigate(MAP_SEARCH);
            }}
          >
            <div className="m-r-[16px] flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#ebebeb]">
              <svg
                className="inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                style={{
                  display: "block",
                  height: "22px",
                  width: "22px",
                  fill: "currentcolor",
                }}
                role="presentation"
                focusable="false"
              >
                <path d="M16 .33a15.67 15.67 0 1 1 0 31.34A15.67 15.67 0 0 1 16 .33zm0 2a13.67 13.67 0 1 0 0 27.34 13.67 13.67 0 0 0 0-27.34zm1 3v10.1l8.74 5.04-1 1.73L15 16.58V5.33z"></path>{" "}
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-[16px]">{search.destination}</div>
              <sub className="text-[12px] text-[#717171]">
                {search.formattedDates.start} – {search.formattedDates.end} •{" "}
                {search.guests} guests
              </sub>
            </div>
          </ListItem>
        );
      })}
    </ul>
  );
}
