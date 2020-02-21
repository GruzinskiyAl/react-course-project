export const ModalActionTypes = {
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
  SUBMIT_CREATION_MODAL: "SUBMIT_CREATION_MODAL",
  SUBMIT_UPDATE_MODAL: "SUBMIT_UPDATE_MODAL",
  SET_LOADING: "SET_LOADING"
};

export const ModalActions = {
  showProductFormModal: productId => ({
    type: ModalActionTypes.SHOW_MODAL,
    productId
  }),
  hideProductFormModal: () => ({
    type: ModalActionTypes.HIDE_MODAL,
  }),
  submitCreationModal: () => ({
    type: ModalActionTypes.SUBMIT_CREATION_MODAL
  }),
  submitUpdatingModal: () => {
    return {type: ModalActionTypes.SUBMIT_UPDATE_MODAL}
  },
  setLoading: loading => ({
    type: ModalActionTypes.SET_LOADING,
    loading
  })
};
