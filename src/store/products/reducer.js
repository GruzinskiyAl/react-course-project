import {GET_PRODUCTS} from "./actionTypes";

export const initState = {
  byId: {},
  allIds: []
};

function saveProducts(state, action) {
  return {
    byId: {
      ...action.byId
    },
    allIds: [...action.allIds]
  }
}

export default function productsReducer(state = initState, action) {
  if (action.type === GET_PRODUCTS) {
    return saveProducts(state, action);
  }
  return state

}
