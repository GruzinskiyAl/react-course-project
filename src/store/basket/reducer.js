import {ADD_BASKET_ITEM} from "./actionTypes";

// products in basket
const initState = {
  byId: {"4423b750-48ea-424a-9432-c77261bb4682": 2},
  allIds: ["4423b750-48ea-424a-9432-c77261bb4682", ]
};

export default function basketReducer(state=initState, action) {
  if(action.type === ADD_BASKET_ITEM) {
    return {
      ...state,
      byId: {
        ...state.byId,
        ...action.byId
      },
      allIds: [...state.allIds, ...action.allIds]
    }
  }
  return state
}