import {put, takeLatest, delay} from 'redux-saga/effects'
import {getProducts} from "../products/actions";
import {SET_PRODUCTS_FILTERS} from "../filtration/actionTypes";

function* worker() {
  yield delay(1000);
  yield put(getProducts())
}

export default function* productsFilterSaga() {
  yield takeLatest(SET_PRODUCTS_FILTERS, worker);
}
