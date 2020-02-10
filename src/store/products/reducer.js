import {GET_PRODUCTS, CLEAR_CURRENT_PRODUCTS} from "./actionTypes";

export const initState = {
  byId: {},
  allIds: [],
  currentIds: []
};

function saveProducts(state, action) {
  return {
    byId: {
      ...state.byId,
      ...action.byId
    },
    allIds: [...state.allIds, ...action.allIds.filter(el => !state.allIds.includes(el))],
    currentIds: [...action.allIds]
  }
}

function clearCurrentIds(state) {
  return {
    ...state,
    currentIds: []
  }
}

export default function productsReducer(state = initState, action) {
  if (action.type === GET_PRODUCTS) {
    return saveProducts(state, action);
  } else if (action.type === CLEAR_CURRENT_PRODUCTS) {
    return clearCurrentIds(state)
  }
  return state
}
