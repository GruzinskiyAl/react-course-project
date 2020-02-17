import {SHOW_MODAL, HIDE_MODAL, TOGGLE_LOADING} from "./actionTypes";

export function showProductFormModal(productId) {
  return {
    type: SHOW_MODAL,
    productId
  }
}

export function hideProductFormModal() {
  return {
    type: HIDE_MODAL
  }
}

export function toggleLoading(value) {
  return {
    type: TOGGLE_LOADING,
    value
  }
}

