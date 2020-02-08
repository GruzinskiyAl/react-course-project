import {SET_FILTERS} from "./actionTypes";

export function setFilters(data) {
  return {
    type: SET_FILTERS,
    data
  }
}
