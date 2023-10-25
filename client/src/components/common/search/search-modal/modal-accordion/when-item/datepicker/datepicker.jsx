import { FormDataContext } from "../../../../../../../context/form-data-context.js";
import { useContext } from "react";

export function DatePicker() {
  const { formData, updateFormData } = useContext(FormDataContext);

  function onStartDateChange(event) {
    const date = new Date(
      // event.target.valueAsNumber + new Date().getTimezoneOffset() * 60 * 1000
      event.target.valueAsNumber
    );
    updateFormData({
      startDate: date,
    });
  }

  function onEndDateChange(event) {
    const date = new Date(
      // event.target.valueAsNumber + new Date().getTimezoneOffset() * 60 * 1000
      event.target.valueAsNumber
    );
    updateFormData({
      endDate: date,
    });
  }

  return (
    <div>
      <input
        id="start"
        value={
          formData.startDate
            ? new Date(formData.startDate).toISOString().split("T")[0]
            : ""
        }
        onChange={onStartDateChange}
        name="start"
        type="date"
      ></input>
      <input
        value={
          formData.endDate
            ? new Date(formData.endDate).toISOString().split("T")[0]
            : ""
        }
        onChange={onEndDateChange}
        name="end"
        type="date"
      ></input>
    </div>
  );
}
