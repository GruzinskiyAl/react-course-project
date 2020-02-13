import {
  GET_PRODUCTS,
  GET_EDITABLE_PRODUCTS,
  CLEAR_CURRENT_PRODUCTS,
  CLEAR_CURRENT_EDITABLE_PRODUCTS
} from "./actionTypes";

export const initState = {
  byId: {},
  allIds: [],
  currentProductsIds: [],
  currentEditableProductsId: []
};

function saveProducts(state, action) {
  return {
    byId: {
      ...state.byId,
      ...action.byId
    },
    allIds: [...state.allIds, ...action.allIds.filter(el => !state.allIds.includes(el))],
    currentProductsIds: [...action.allIds]
  }
}

function saveEditableProducts(state, action) {
  return {
    byId: {
      ...state.byId,
      ...action.byId
    },
    allIds: [...state.allIds, ...action.allIds.filter(el => !state.allIds.includes(el))],
    currentEditableProductsId: [...action.allIds]
  }
}

function clearCurrentProductsIds(state) {
  return {
    ...state,
    currentProductsIds: []
  }
}

function clearCurrentEditableProductsIds(state) {
  return {
    ...state,
    currentEditableProductsId: []
  }
}

export default function productsReducer(state = initState, action) {
  switch (action.type) {
    case(GET_PRODUCTS):
      return saveProducts(state, action);
    case(CLEAR_CURRENT_PRODUCTS):
      return clearCurrentProductsIds(state);
    case(GET_EDITABLE_PRODUCTS):
      return saveEditableProducts(state, action);
    case(CLEAR_CURRENT_EDITABLE_PRODUCTS):
      return clearCurrentEditableProductsIds(state);
  }
  return state
}
