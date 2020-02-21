import {select, call, put} from 'redux-saga/effects'
import {patchProductSaga} from "../../network/services/products";
import {ProductActions} from "../actions";
import {normalizeProduct} from "../../../utils/normalizers";
import {selectProductFormIsValid, selectProductFormValues} from "../../selectors";

export function* updateProductSaga(productId) {
  if (!(yield select(selectProductFormIsValid))) {
    yield put(ProductActions.updateProductFailure());
    return;
  }

  const data = yield select(selectProductFormValues);
  try {
    const response = yield call(patchProductSaga, {data, productId});
    yield put(ProductActions.updateProductSuccess(normalizeProduct(response.data)))
  } catch (e) {
    yield put(ProductActions.updateProductFailure())
  }
}