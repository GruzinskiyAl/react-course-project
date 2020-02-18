import {
  SAVE_PRODUCTS,
  SAVE_EDITABLE_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT
} from "./actionTypes";

export const initState = {
  byId: {},
  allIds: [],
  currentProductsIds: [],
  currentEditableProductsIds: []
};

function saveProducts(state, action) {
  return {
    ...state,
    byId: {
      ...state.byId,
      ...action.byId
    },
    allIds: [...state.allIds, ...action.allIds.filter(el => !state.allIds.includes(el))],
    currentProductsIds: [...action.allIds],
  }
}

function saveEditableProducts(state, action) {
  return {
    ...state,
    byId: {
      ...state.byId,
      ...action.byId
    },
    // list of uniques needed
    allIds: [...state.allIds, ...action.allIds.filter(el => !state.allIds.includes(el))],
    currentEditableProductsIds: [...action.allIds]
  }
}

const createProduct = (state, action) => ({
  ...state,
  byId: {...state.byId, ...action.byId},
  allIds: [...state.allIds, action.id],
  currentEditableProductsIds: [...state.currentEditableProductsIds, action.id]
});

const updateProduct = (state, action) => ({
  ...state,
  byId: {...state.byId, ...action.byId}
});

export default function productsReducer(state = initState, action) {
  switch (action.type) {
    case(SAVE_PRODUCTS):
      return saveProducts(state, action);
    case(SAVE_EDITABLE_PRODUCTS):
      return saveEditableProducts(state, action);
    case CREATE_PRODUCT:
      return createProduct(state, action);
    case UPDATE_PRODUCT:
      return updateProduct(state, action);
    default:
      return state
  }
}
