import { createContext } from "react";

export const SearchDataContext = createContext();

export const initialFormState = {
  destination: "",
  guests: 0,
  startDate: null,
  endDate: null,
};
