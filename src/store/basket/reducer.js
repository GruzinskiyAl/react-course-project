import {INCREMENT_ITEM_COUNT, DECREMENT_ITEM_COUNT, DROP_ITEM, SET_ITEM_COUNT} from "./actionTypes";

const initState = {};

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
  newState[id] = count > 0 ? count : newState[id]
}

export default function basketReducer(state = initState, action) {
  const newState = {...state};

  switch (action.type) {
    case INCREMENT_ITEM_COUNT:
      return incrementItemCount(newState, action);
    case DECREMENT_ITEM_COUNT:
      return decrementItemCount(newState, action);
    case DROP_ITEM:
      return dropItem(newState, action);
    case SET_ITEM_COUNT:
      return setItemCount(newState, action);
    default:
      return state
  }
}