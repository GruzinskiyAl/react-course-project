import {GET_PRODUCTS, CLEAR_CURRENT_PRODUCTS} from "./actionTypes";

export function getProducts(data) {
  return {
    type: GET_PRODUCTS,
    ...data
  };
}

export function clearCurrentProducts() {
  return {
    type: CLEAR_CURRENT_PRODUCTS
  }
}
