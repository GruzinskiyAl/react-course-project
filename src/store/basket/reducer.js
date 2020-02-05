import {ADD_BASKET_ITEM, SET_BASKET_ITEMS_COUNT} from "./actionTypes";

// products in basket
const initState = {};


export default function basketReducer(state = initState, action) {
  if (action.type === ADD_BASKET_ITEM) {
    const newState = {...state};
    if (newState[action.id] > 0) {
      newState[action.id] += 1
    } else {
      newState[action.id] = 1;
    }
    return newState
  } else if (action.type === ADD_BASKET_ITEM) {

  }
  return state
}