import { createContext } from "react";
import { formatDate } from "../utils/dates/formatDate.js";

export const FormDataContext = createContext();

export const initialFormState = {
  destination: "",
  guests: 0,
  startDate: null,
  endDate: null,
};
