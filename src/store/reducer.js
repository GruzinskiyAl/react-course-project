import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';

import productsReducer from "./products/reducer";
import basketReducer from "./basket/reducer";
import filtrationReducer from "./filtration/reducer";
import modalReducer from "./modal/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  filtration: filtrationReducer,
  modal: modalReducer,
  form: formReducer
});

export default rootReducer;
