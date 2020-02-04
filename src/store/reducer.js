import {combineReducers} from "redux";
import productsReducer from "./products/reducer";
import basketReducer from "./basket/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer
});

export default rootReducer;
