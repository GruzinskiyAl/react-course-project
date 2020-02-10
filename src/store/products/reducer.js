import {GET_PRODUCTS} from "./actionTypes";

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

export default function productsReducer(state = initState, action) {
  if (action.type === GET_PRODUCTS) {
    return saveProducts(state, action);
  }
  return state

}
