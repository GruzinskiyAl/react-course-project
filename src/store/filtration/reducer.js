import {SET_FILTERS, DROP_FILTERS} from "./actionTypes";


const initState = {
  origins: [],
  minPrice: null,
  maxPrice: null
};

export default function filtrationReducer(state = initState, action) {
  if (action.type === SET_FILTERS) {
    return {
      ...state,
      ...action.data
    }
  } else if (action.type === DROP_FILTERS) {
    return initState
  }
  return state
}