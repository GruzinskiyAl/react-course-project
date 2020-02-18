import { put, takeEvery, fork, call } from 'redux-saga/effects'
import {select} from "@redux-saga/core/effects";
import {getProductsData} from "../../api/products";
import {selectProductsFilters} from "../selectors";
import {saveProducts} from "../products/actions";
import {normalizeProducts} from "../../utils/normalizers";
import {GET_PRODUCTS} from "../products/actionTypes";

function* worker () {
  const queryParams = yield select(selectProductsFilters);
  try {
    const data = yield call(getProductsData, {queryParams});
    yield put(saveProducts(normalizeProducts(data)));
  } catch (e) {
    console.log(e)
  }
}

export default function* productListSaga() {
  yield fork(worker);
  yield takeEvery(GET_PRODUCTS, worker);
}
