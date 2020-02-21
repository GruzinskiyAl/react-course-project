import {put, call, select} from 'redux-saga/effects'
import {ProductActions} from "../actions";
import {makeSelectorProductById} from "../../selectors";
import {fetchProductDetailsSaga} from "../../network/services/products";
import {normalizeProduct} from "../../../utils/normalizers";

export default function* productDetailsSaga(productId) {
  if (yield select(makeSelectorProductById(productId))) {
    return;
  }

  try {
    const data = yield call(fetchProductDetailsSaga, productId);
    yield put(ProductActions.fetchProductDetailsSuccess(normalizeProduct(data)))
  } catch (e) {
    console.log(e)
  }
}
