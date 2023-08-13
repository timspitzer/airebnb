import { createContext } from "react";
import { formatDate } from "../utils/dates/formatDate.js";

export const FormDataContext = createContext();

export const initialFormState = {
  destination: "",
  dates: { start: null, end: null },
  formattedDates: {
    start: null,
    end: null,
  },
  guests: 0,
};
