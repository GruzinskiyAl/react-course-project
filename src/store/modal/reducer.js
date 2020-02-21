import {ModalActionTypes} from "./actions";

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
  loading: false,
  productId: null
});

const setLoading = (state, action) => ({
  ...state,
  loading: action.loading
});

export default function modalReducer(state = initState, action) {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return showModal(state, action);
    case ModalActionTypes.HIDE_MODAL:
      return hideModal(state);
    case ModalActionTypes.SET_LOADING:
      return setLoading(state, action);
    default:
      return state
  }
}
