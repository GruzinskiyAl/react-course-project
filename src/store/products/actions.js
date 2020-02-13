import {
  GET_PRODUCTS,
  GET_EDITABLE_PRODUCTS,
  CLEAR_CURRENT_PRODUCTS,
  CLEAR_CURRENT_EDITABLE_PRODUCTS
} from "./actionTypes";

export function getProducts(data) {
  return {
    type: GET_PRODUCTS,
    ...data
  };
}

export function getEditableProducts(data) {
  return {
    type: GET_EDITABLE_PRODUCTS,
    ...data
  };
}

export function clearCurrentProducts() {
  return {
    type: CLEAR_CURRENT_PRODUCTS
  }
}

export function clearCurrentEditableProducts() {
  return {
    type: CLEAR_CURRENT_EDITABLE_PRODUCTS
  }
}
