import {ProductActionTypes} from "./actions";

export const initState = {
  byId: {},
  allIds: [],
  currentProductsIds: [],
  currentProductsTotal: 0,
  currentEditableProductsIds: [],
  currentEditableProductsTotal: 0,
};

function saveProducts(state, action) {
  return {
    ...state,
    byId: {
      ...state.byId,
      ...action.byId
    },
    allIds: [...state.allIds, ...action.allIds.filter(el => !state.allIds.includes(el))],
    currentProductsTotal: action.totalItems,
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
    currentEditableProductsTotal: action.totalItems,
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

const saveOrUpdateProduct = (state, action) => ({
  ...state,
  byId: {...state.byId, ...action.byId},
  allIds: state.allIds.includes(action.id) ? [...state.allIds] : [...state.allIds, action.id]
});

export default function productsReducer(state = initState, action) {
  switch (action.type) {
    case(ProductActionTypes.FETCH_PRODUCTS_SUCCESS):
      return saveProducts(state, action);
    case(ProductActionTypes.FETCH_EDITABLE_PRODUCTS_SUCCESS):
      return saveEditableProducts(state, action);
    case (ProductActionTypes.CREATE_PRODUCT_SUCCESS):
      return createProduct(state, action);
    case (ProductActionTypes.UPDATE_PRODUCT_SUCCESS):
      return updateProduct(state, action);
    case (ProductActionTypes.FETCH_PRODUCT_DETAILS_SUCCESS):
      return saveOrUpdateProduct(state, action);
    default:
      return state
  }
}
