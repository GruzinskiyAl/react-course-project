export const BasketActionTypes = {
  INCREMENT_ITEM_COUNT: 'INCREMENT_ITEM_COUNT',
  SET_ITEM_COUNT: 'SET_ITEM_COUNT',
  DROP_ITEM: 'DROP_ITEM',
  DECREMENT_ITEM_COUNT: 'DECREMENT_ITEM_COUNT'
};

export const BasketActions = {
  incrementBasketItemCount: id => ({
    type: BasketActionTypes.INCREMENT_ITEM_COUNT,
    id
  }),
  decrementBasketItemCount: id => ({
    type: BasketActionTypes.DECREMENT_ITEM_COUNT,
    id
  }),
  dropBasketItem: id => ({
    type: BasketActionTypes.DROP_ITEM,
    id
  }),
  // Todo implement
  setBasketItemCount: data => ({
    type: BasketActionTypes.SET_ITEM_COUNT,
    ...data
  })
};
