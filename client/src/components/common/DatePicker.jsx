import { useContext, useEffect, useState } from "react";
import { FormDataContext } from "../../context/FormDataContext.js";

function parseDate(dateString) {
  const [year, month, date] = dateString.split("-");
  const dateObj = new Date(year, month, date);
  return dateObj;
}

function addLeadingZero(number) {
  return number < 10 ? `0${number}` : number;
}

function stringifyDate(dateObj) {
  if (!dateObj) return "";
  // const dateObj = new Date(timestamp);
  const year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  month = addLeadingZero(month);
  let date = dateObj.getDate();
  date = addLeadingZero(date);
  return `${year}-${month}-${date}`;
}

export function DatePicker() {
  const { formData, updateFormData } = useContext(FormDataContext);
  return (
    <div>
      <input
        value={stringifyDate(formData.dates.start)}
        onChange={(event) => {
          const date = parseDate(event.target.value);
          updateFormData({
            dates: { start: date },
          });
        }}
        name="start"
        type="date"
      ></input>
      <input
        value={stringifyDate(formData.dates.end)}
        onChange={(event) => {
          const date = parseDate(event.target.value);
          updateFormData({
            dates: { end: date },
          });
        }}
        name="start"
        type="date"
      ></input>
    </div>
  );
}
