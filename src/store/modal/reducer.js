import {SHOW_MODAL, HIDE_MODAL, TOGGLE_LOADING} from "./actionTypes";

const initState = {
  visible: false,
  productId: null,
  loading: false,
};

export default function modalReducer(state = initState, action) {
  if (action.type === SHOW_MODAL) {
    return {
      ...state,
      visible: true,
      productId: action.productId ? action.productId : null
    }
  } else if (action.type === HIDE_MODAL) {
    return {
      ...state,
      visible: false,
      productId: null
    }
  } else if (action.type === TOGGLE_LOADING) {
    return {
      ...state,
      loading: !state.loading
    }
  }
  return state
}