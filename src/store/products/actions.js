export const ProductActionTypes = {
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAILURE: "FETCH_PRODUCTS_FAILURE",
  FETCH_EDITABLE_PRODUCTS_SUCCESS: "FETCH_EDITABLE_PRODUCTS_SUCCESS",
  FETCH_EDITABLE_PRODUCTS_FAILURE: "FETCH_EDITABLE_PRODUCTS_FAILURE",
  LIST_LOADING: "LIST_LOADING",
  FETCH_PRODUCT_DETAILS_SUCCESS: "FETCH_PRODUCT_DETAILS_SUCCESS",
  FETCH_PRODUCT_DETAILS_FAILURE: "FETCH_PRODUCT_DETAILS_FAILURE",
  DETAILS_LOADING: "DETAILS_LOADING",
  CREATE_PRODUCT_SUCCESS: "CREATE_PRODUCT_SUCCESS",
  CREATE_PRODUCT_FAILURE: "CREATE_PRODUCT_FAILURE",
  CREATE_PRODUCT_LOADING: "CREATE_PRODUCT_LOADING",
  UPDATE_PRODUCT_SUCCESS: "UPDATE_PRODUCT_SUCCESS",
  UPDATE_PRODUCT_FAILURE: "UPDATE_PRODUCT_FAILURE",
  UPDATE_PRODUCT_LOADING: "UPDATE_PRODUCT_LOADING"
};

export const ProductActions = {
  fetchProductsSuccess: data => ({
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    ...data
  }),
  fetchEditableProductsSuccess: data => ({
    type: ProductActionTypes.FETCH_EDITABLE_PRODUCTS_SUCCESS,
    ...data
  }),
  fetchProductDetailsSuccess: data => ({
    type: ProductActionTypes.FETCH_PRODUCT_DETAILS_SUCCESS,
    ...data
  }),
  createProductSuccess: data => ({
    type: ProductActionTypes.CREATE_PRODUCT_SUCCESS,
    ...data
  }),
  createProductFailure: data => ({
    type: ProductActionTypes.CREATE_PRODUCT_FAILURE,
    ...data
  }),
  updateProductSuccess: data => ({
    type: ProductActionTypes.UPDATE_PRODUCT_SUCCESS,
    ...data
  }),
  updateProductFailure: data => ({
    type: ProductActionTypes.UPDATE_PRODUCT_FAILURE,
    ...data
  })
};
