import { ADD_TO_LIST } from "./constant";

const initialState = {
  budgets: [],
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      };
    default:
      return state;
  }
};
