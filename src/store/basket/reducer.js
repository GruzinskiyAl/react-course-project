import {BasketActionTypes} from "./actions";

const initState = {};

function incrementItemCount(newState, action) {
  if (newState[action.id] > 0) {
    newState[action.id] += 1
  } else {
    newState[action.id] = 1;
  }
  return newState
}

function dropItem(newState, action) {
  delete newState[action.id];
  return newState
}

function setItemCount(newState, action) {
  const {id, count} = action;
  newState[id] = count > 0 ? count : newState[id];
  return newState
}

export default function basketReducer(state = initState, action) {
  const newState = {...state};

  switch (action.type) {
    case BasketActionTypes.INCREMENT_ITEM_COUNT:
      return incrementItemCount(newState, action);
    case BasketActionTypes.DROP_ITEM:
      return dropItem(newState, action);
    case BasketActionTypes.SET_ITEM_COUNT:
      return setItemCount(newState, action);
    default:
      return state
  }
}