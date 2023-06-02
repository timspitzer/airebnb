import { formatDate } from "../utils/dates/formatDate.js";

export const UPDATE_FORM_DATA = "UPDATE_FORM_DATA";

export function formDataReducer(state, { type, payload }) {
  switch (type) {
    case UPDATE_FORM_DATA: {
      let newState = { ...state, ...payload };

      if (payload.dates) {
        newState = {
          ...newState,
          formattedDates: {
            start: formatDate(payload.dates.start),
            end: formatDate(payload.dates.end),
          },
        };
      }
      return newState;
    }
    default:
      return state;
  }
}
