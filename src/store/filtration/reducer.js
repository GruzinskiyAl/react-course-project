import {SET_FILTERS, DROP_FILTERS} from "./actionTypes";


const initState = {
  origins: ['usa', 'africa', 'asia', 'europe'],
  minPrice: 0,
  maxPrice: 1000
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