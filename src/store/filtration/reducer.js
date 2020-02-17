import {SET_PRODUCTS_FILTERS, SET_EDITABLE_PRODUCTS_FILTERS} from "./actionTypes";

const initState = {
  products: {
    origins: ['usa', 'africa', 'asia', 'europe'],
    minPrice: 0,
    maxPrice: 1000
  },
  editableProducts: {
    origins: ['usa', 'africa', 'asia', 'europe'],
    minPrice: 0,
    maxPrice: 1000,
    editable: true
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

export default function filtrationReducer(state = initState, action) {
  switch (action.type) {
    case SET_PRODUCTS_FILTERS:
      return setProductsFilters(state, action);
    case SET_EDITABLE_PRODUCTS_FILTERS:
      return setEditableProductsFilters(state, action);
    default:
      return state
  }
}
