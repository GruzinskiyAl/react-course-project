export const FiltrationActionTypes = {
  SET_PRODUCTS_FILTERS: 'SET_PRODUCTS_FILTERS',
  SET_PRODUCTS_PAGE: 'SET_PRODUCTS_PAGE',
  SET_EDITABLE_PRODUCTS_FILTERS: 'SET_EDITABLE_PRODUCTS_FILTERS',
  SET_EDITABLE_PRODUCTS_PAGE: 'SET_EDITABLE_PRODUCTS_PAGE',
  SET_AVAILABLE_ORIGINS: 'SET_AVAILABLE_ORIGINS'
};

export const FiltrationActions = {
  setProductsFilters: data => ({
    type: FiltrationActionTypes.SET_PRODUCTS_FILTERS,
    data
  }),
  setProductsPage: page => ({
    type: FiltrationActionTypes.SET_PRODUCTS_PAGE,
    page
  }),
  setEditableProductsFilters: data => ({
    type: FiltrationActionTypes.SET_EDITABLE_PRODUCTS_FILTERS,
    data
  }),
  setEditableProductsPage: page => ({
    type: FiltrationActionTypes.SET_EDITABLE_PRODUCTS_PAGE,
    page
  }),
  setAvailableOrigins: origins => ({
    type: FiltrationActionTypes.SET_AVAILABLE_ORIGINS,
    origins
  }),
};
