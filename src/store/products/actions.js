import {
  GET_PRODUCTS,
  GET_EDITABLE_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT
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

export function createNewProduct(data) {
  return {
    type: CREATE_PRODUCT,
    data
  }
}

export function updateProduct(data) {
  return {
    type: UPDATE_PRODUCT,
    data
  }
}
