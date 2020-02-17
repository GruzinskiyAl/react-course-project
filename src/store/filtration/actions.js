import {SET_PRODUCTS_FILTERS, SET_EDITABLE_PRODUCTS_FILTERS} from "./actionTypes";

export function setProductsFilters(data) {
  return {
    type: SET_PRODUCTS_FILTERS,
    data
  }
}

export function setEditableProductsFilters(data) {
  return {
    type: SET_EDITABLE_PRODUCTS_FILTERS,
    data
  }
}