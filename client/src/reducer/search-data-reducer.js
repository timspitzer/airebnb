export const UPDATE_FORM_DATA = "UPDATE_FORM_DATA";

export function searchDataReducer(state, { type, payload }) {
  switch (type) {
    case UPDATE_FORM_DATA: {
      const newState = { ...state, ...payload };
      return newState;
    }
    default:
      return state;
  }
}
