import { formatDate } from "../../../utils/dates/format-date.js";

export function FormattedDate({ startDate, endDate }) {
  return (
    <>
      {startDate && endDate
        ? `${formatDate(startDate)} – ${formatDate(endDate)}`
        : "Any week"}
    </>
  );
}
