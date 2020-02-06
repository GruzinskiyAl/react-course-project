import {INCREMENT_ITEM_COUNT, DECREMENT_ITEM_COUNT, DROP_ITEM, SET_ITEM_COUNT} from "./actionTypes";

const initState = {};
// const initState = {"4423b750-48ea-424a-9432-c77261bb4682": 2};

function incrementItemCount(newState, action) {
  if (newState[action.id] > 0) {
    newState[action.id] += 1
  } else {
    newState[action.id] = 1;
  }
  return newState
}

function decrementItemCount(newState, action) {
  if (newState[action.id] > 1) {
    newState[action.id] -= 1
  } else {
    delete newState[action.id];
  }
  return newState
}

function dropItem(newState, action) {
  delete newState[action.id];
  return newState
}

function setItemCount(newState, action) {
  const {id, count} = action;
  newState[id] = count > 0? count: newState[id]
}

export default function basketReducer(state = initState, action) {
  const newState = {...state};

  if (action.type === INCREMENT_ITEM_COUNT) {
    return incrementItemCount(newState, action)
  } else if (action.type === DECREMENT_ITEM_COUNT) {
    return decrementItemCount(newState, action)
  } else if (action.type === DROP_ITEM) {
    return dropItem(newState, action)
  } else if (action.type === SET_ITEM_COUNT) {
    return setItemCount(newState, action)
  }
  return state
}