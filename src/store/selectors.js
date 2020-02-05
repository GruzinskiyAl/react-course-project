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
  (products, allIds = []) => Object.keys(products).length? allIds.map(id => products[id]): []
);

export const makeSelectBasketItemPrice = id =>
  createSelector(
    [selectProductsEntities, selectBasket],
    (products, basketItems) => products[id].price * basketItems[id]
  );

export const selectBasketFullPrice = createSelector(
  [selectBasketProductsList, selectBasket],
  (products, basketItems) => products.reduce(
    (sum, product) => sum + product.price * basketItems[product.id],
    0
  )
);

