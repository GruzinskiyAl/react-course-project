import {combineReducers} from "redux";
import productsReducer from "./products/reducer";
import basketReducer from "./basket/reducer";
import filtrationReducer from "./filtration/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  filters: filtrationReducer
});

export default rootReducer;
