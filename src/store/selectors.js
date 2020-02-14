import {createSelector} from "reselect";

export const selectProducts = state => {
  return state.products
};

export const selectBasket = state => {
  return state.basket
};

export const selectFiltration = state => {
  return state.filtration
};

export const selectModal = state => {
  return state.modal
};

export const selectForm = state => {
  return state.form
};

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

// filtrations
export const selectProductsFilters = createSelector(
  selectFiltration,
  filtration => filtration.products
);

export const selectEditableProductsFilters = createSelector(
  selectFiltration,
  filtration => filtration.editableProducts
);


