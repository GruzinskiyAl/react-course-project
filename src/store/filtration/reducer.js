import {FiltrationActionTypes} from "./actions";

const initState = {
  products: {
    origins: [],
    minPrice: 0,
    maxPrice: 1000,
    page: 1,
    perPage: 18
  },
  editableProducts: {
    origins: [],
    minPrice: 0,
    maxPrice: 1000,
    editable: true,
    page: 1,
    perPage: 18
  },
  meta: {
    origins: [],
  }
};

const setProductsFilters = (state, action) => ({
  ...state,
  products: {...state.products, ...action.data}
});

const setEditableProductsFilters = (state, action) => ({
  ...state,
  editableProducts: {...state.editableProducts, ...action.data}
});

const setAvailableOrigins = (state, action) => ({
  ...state,
  meta: {...state.meta, origins: action.origins}
});

const setProductsPage = (state, action) => ({
  ...state,
  products: {...state.products, page: action.page}
});

const setEditableProductsPage = (state, action) => ({
  ...state,
  editableProducts: {...state.editableProducts, page: action.page}
});

export default function filtrationReducer(state = initState, action) {
  switch (action.type) {
    case FiltrationActionTypes.SET_PRODUCTS_FILTERS:
      return setProductsFilters(state, action);
    case FiltrationActionTypes.SET_PRODUCTS_PAGE:
      return setProductsPage(state, action);
    case FiltrationActionTypes.SET_EDITABLE_PRODUCTS_FILTERS:
      return setEditableProductsFilters(state, action);
    case FiltrationActionTypes.SET_EDITABLE_PRODUCTS_PAGE:
      return setEditableProductsPage(state, action);
    case FiltrationActionTypes.SET_AVAILABLE_ORIGINS:
      return setAvailableOrigins(state, action);
    default:
      return state
  }
}
