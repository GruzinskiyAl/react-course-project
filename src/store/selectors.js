import {createSelector} from "reselect";
import {getFormValues, isValid} from "redux-form";

export const selectProducts = state => state.products;
export const selectBasket = state => state.basket;
export const selectFiltration = state => state.filtration;

//products
export const selectProductsEntities = createSelector(
  selectProducts,
  state => state.byId
);

export const selectCurrentProductsIds = createSelector(
  selectProducts,
  state => state.currentProductsIds
);

export const selectCurrentEditableProductsIds = createSelector(
  selectProducts,
  state => state.currentEditableProductsIds
);

export const selectCurrentProducts = createSelector(
  [selectProductsEntities, selectCurrentProductsIds],
  (products, ids = []) => ids.map(id => products[id])
);

export const selectCurrentEditableProducts = createSelector(
  [selectProductsEntities, selectCurrentEditableProductsIds],
  (products, ids = []) => ids.map(id => products[id])
);

export const makeSelectorProductById = id => createSelector(
  selectProductsEntities,
  products => products[id]
);

export const selectCurrentProductsTotal = createSelector(
  selectProducts,
  state => state.currentProductsTotal
);

export const selectCurrentEditableProductsTotal = createSelector(
  selectProducts,
  state => state.currentEditableProductsTotal
);

//basket
export const makeSelectBasketItemCount = id => createSelector(
  selectBasket,
  (basketItems => basketItems[id])
);

export const selectBasketIds = createSelector(
  selectBasket,
  state => Object.keys(state)
);

export const selectBasketProductsList = createSelector(
  [selectProductsEntities, selectBasketIds],
  (products, allIds = []) => Object.keys(products).length ? allIds.filter(id => id in products).map(id => products[id]) : []
);

export const makeSelectBasketItemPrice = id =>
  createSelector(
    [selectProductsEntities, selectBasket],
    (products, basketItems) => (products[id]) ? products[id].price * basketItems[id] : 0
  );

export const selectBasketFullPrice = createSelector(
  [selectBasketProductsList, selectBasket],
  (products, basketItems) => {
    return products.reduce((sum, product) => sum + product.price * basketItems[product.id], 0
    )
  }
);

// filtration
export const selectProductsFilters = createSelector(
  selectFiltration,
  filtration => filtration.products
);

export const selectProductsCurrentPage = createSelector(
  selectProductsFilters,
  filtration => filtration.page
);

export const selectProductsPageSize = createSelector(
  selectProductsFilters,
  filtration => filtration.perPage
);

export const selectEditableProductsFilters = createSelector(
  selectFiltration,
  filtration => filtration.editableProducts
);

export const selectEditableProductsCurrentPage = createSelector(
  selectEditableProductsFilters,
  filtration => filtration.page
);

export const selectEditableProductsPageSize = createSelector(
  selectEditableProductsFilters,
  filtration => filtration.perPage
);

export const selectAvailableOrigins = createSelector(
  selectFiltration,
  filtration => filtration.meta.origins
);

// form
export const selectProductFormIsValid = state => isValid('productForm')(state);

export const selectProductFormValues = state => ({product: getFormValues('productForm')(state)});
