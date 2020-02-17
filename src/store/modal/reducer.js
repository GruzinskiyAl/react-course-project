import {SHOW_MODAL, HIDE_MODAL, TOGGLE_LOADING} from "./actionTypes";

const initState = {
  visible: false,
  productId: null,
  loading: false,
};

const showModal = (state, action) => ({
  ...state,
  visible: true,
  productId: action.productId ? action.productId : null
});

const hideModal = state => ({
  ...state,
  visible: false,
  productId: null
});

const toggleLoading = state => ({
  ...state,
  loading: !state.loading
});

export default function modalReducer(state = initState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return showModal(state, action);
    case HIDE_MODAL:
      return hideModal(state);
    case TOGGLE_LOADING:
      return toggleLoading(state);
    default:
      return state
  }
}
