import { createContext } from "react";
import { formatDate } from "../../utils/dates/formatDate.js";

export const FormDataContext = createContext();

const INITIAL_DATES = {
  start: new Date(),
  end: new Date(Date.now() + 400000000),
};

export const initialFormState = {
  destination: "Anywhere",
  dates: { start: INITIAL_DATES.start, end: INITIAL_DATES.end },
  formattedDates: {
    start: formatDate(INITIAL_DATES.start),
    end: formatDate(INITIAL_DATES.end),
  },
  guests: 1,
};
