import { SearchDataContext } from "../../../../../../../context/search-data-context.js";
import { useContext } from "react";

export function DatePicker() {
  const { searchData, updateSearchData } = useContext(SearchDataContext);

  function onStartDateChange(event) {
    const date = new Date(event.target.valueAsNumber);
    updateSearchData({
      startDate: date,
    });
  }

  function onEndDateChange(event) {
    const date = new Date(event.target.valueAsNumber);
    updateSearchData({
      endDate: date,
    });
  }

  return (
    <div>
      <input
        id="start"
        value={
          searchData.startDate
            ? new Date(searchData.startDate).toISOString().split("T")[0]
            : ""
        }
        onChange={onStartDateChange}
        name="start"
        type="date"
      ></input>
      <input
        value={
          searchData.endDate
            ? new Date(searchData.endDate).toISOString().split("T")[0]
            : ""
        }
        onChange={onEndDateChange}
        name="end"
        type="date"
      ></input>
    </div>
  );
}
