import { ADD_TO_LIST } from "./constant";

export function addToList(item) {
  return {
    type: ADD_TO_LIST,
    payload: item,
  };
}
