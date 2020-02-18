import productListSaga from "./productListSaga";
import {fork} from "@redux-saga/core/effects";
import productsFilterSaga from "./productsFilterSaga";

export default function* rootSaga() {
  yield fork(productListSaga);
  yield fork(productsFilterSaga);
};