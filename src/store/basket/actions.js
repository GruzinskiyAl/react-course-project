import {INCREMENT_ITEM_COUNT, SET_ITEM_COUNT, DROP_ITEM, DECREMENT_ITEM_COUNT} from './actionTypes'

export function incrementBasketItemCount(id) {
  return {
    type: INCREMENT_ITEM_COUNT,
    id
  }
}

export function decrementBasketItemCount(id) {
  return {
    type: DECREMENT_ITEM_COUNT,
    id
  }
}

export function dropBasketItem(id) {
  return {
    type: DROP_ITEM,
    id
  }
}

export function setBasketItemCount(data) {
  return {
    type: SET_ITEM_COUNT,
    ...data
  }
}

