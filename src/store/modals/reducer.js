import {SHOW_MODAL, HIDE_MODAL} from "./actionTypes";


const initState = {
  visible: false,
  productId: null
};

export default function modalsReducer(state = initState, action) {
  if (action.type === SHOW_MODAL) {
    return {
      visible: true,
      productId: action.productId? action.productId: null
    }
  } else if (action.type === HIDE_MODAL) {
    return {
      visible: false,
      productId: null
    }
  }
  return state
}