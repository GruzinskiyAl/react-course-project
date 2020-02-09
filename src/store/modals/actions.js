import {SHOW_MODAL, HIDE_MODAL} from "./actionTypes";

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