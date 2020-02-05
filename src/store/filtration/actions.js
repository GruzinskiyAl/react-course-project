import {SET_FILTERS, DROP_FILTERS} from "./actionTypes";

export function setFilters(data) {
  return {
    type: SET_FILTERS,
    data
  }
}

function dropFilters() {
  return {
     type: DROP_FILTERS
  }
}