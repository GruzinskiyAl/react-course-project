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
  },
};

export default function filtrationReducer(state = initState, action) {
  if (action.type === SET_PRODUCTS_FILTERS) {
    return {
      ...state,
      products: {...state.products, ...action.data}
    }
  } else if (action.type === SET_EDITABLE_PRODUCTS_FILTERS) {
    return {
      ...state,
      editableProducts: {...state.editableProducts, ...action.data}
    }
  }
  return state
}