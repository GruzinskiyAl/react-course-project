export const BasketActionTypes = {
  INCREMENT_ITEM_COUNT: 'INCREMENT_ITEM_COUNT',
  SET_ITEM_COUNT: 'SET_ITEM_COUNT',
  DROP_ITEM: 'DROP_ITEM',
};

export const BasketActions = {
  incrementBasketItemCount: id => ({
    type: BasketActionTypes.INCREMENT_ITEM_COUNT,
    id
  }),
  dropBasketItem: id => ({
    type: BasketActionTypes.DROP_ITEM,
    id
  }),
  setBasketItemCount: data => ({
    type: BasketActionTypes.SET_ITEM_COUNT,
    ...data
  })
};
