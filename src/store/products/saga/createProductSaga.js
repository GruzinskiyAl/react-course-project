import {select, call, put} from 'redux-saga/effects'
import {postProductSaga} from "../../network/services/products";
import {ProductActions} from "../actions";
import {normalizeProduct} from "../../../utils/normalizers";
import {selectProductFormIsValid, selectProductFormValues} from "../../selectors";

export function* createProductSaga() {
  if (!(yield select(selectProductFormIsValid))) {
    yield put(ProductActions.createProductFailure());
    return;
  }

  const data = yield select(selectProductFormValues);
  try {
    const response = yield call(postProductSaga, data);
    yield put(ProductActions.createProductSuccess(normalizeProduct(response)))
  } catch (e) {
    yield put(ProductActions.createProductFailure())
  }
}