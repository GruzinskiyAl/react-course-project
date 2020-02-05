import {ADD_BASKET_ITEM, SET_BASKET_ITEMS_COUNT, CLEAR_BASKET, DELETE_BASKET_ITEM} from './actionTypes'

export function addBasketItem(id) {
  return {
    type: ADD_BASKET_ITEM,
    id
  }
}

export function setBasketItemsCount(data) {
  return {
    type: SET_BASKET_ITEMS_COUNT,
    ...data
  }
}
