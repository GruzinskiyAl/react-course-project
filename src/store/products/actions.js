import {
  SAVE_PRODUCTS,
  SAVE_EDITABLE_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCTS,
  GET_EDITABLE_PRODUCTS
} from "./actionTypes";

export function getProducts() {
  return {
    type: GET_PRODUCTS
  }
}

export function getEditableProducts() {
  return {
    type: GET_EDITABLE_PRODUCTS
  }
}

export function saveProducts(data) {
  return {
    type: SAVE_PRODUCTS,
    ...data
  };
}

export function saveEditableProducts(data) {
  return {
    type: SAVE_EDITABLE_PRODUCTS,
    ...data
  };
}

export function createProduct(data) {
  return {
    type: CREATE_PRODUCT,
    ...data
  }
}

export function updateProduct(data) {
  return {
    type: UPDATE_PRODUCT,
    ...data
  }
}
