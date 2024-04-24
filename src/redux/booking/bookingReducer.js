import { BOOK, REMOVE } from "./actionTypes";

const initialState = {
  data: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      const newBook = [...state.data];
      newBook.push(action.payload);
      return {
        data: newBook,
      };
    case REMOVE:
      const filteredBook = state.data.filter((e) => e.id !== action.payload);
      return {
        data: filteredBook,
      };
    default:
      return state;
  }
};

export default bookingReducer;
