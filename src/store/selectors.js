import {createSelector} from "reselect";

export const selectProducts = state => state.products;

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