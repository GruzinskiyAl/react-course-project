import {createSelector} from "reselect";

export const selectProducts = state => {
  return state.products
};
export const selectBasket = state => {
  return state.basket
};
//products
export const selectProductsEntities = createSelector(
  selectProducts,
  state => state.byId
);
export const selectProductsIds = createSelector(
  selectProducts,
  state => state.allIds
);

export const selectProductsList = createSelector(
  [selectProductsEntities, selectProductsIds],
  (products, allIds = []) => allIds.map(id => products[id])
);

//basket
export const selectBasketEntities = createSelector(
  selectBasket,
  state => state.byId
);
export const selectBasketIds = createSelector(
  selectBasket,
  state => state.allIds
);

export const selectBasketProductsList = createSelector(
  [selectProductsEntities, selectBasketIds],
  (products, allIds = []) => allIds.map(id => products[id])
);