import {put, call, select, takeLatest, delay, getContext} from 'redux-saga/effects'
import {selectEditableProductsFilters} from "../../selectors";
import {ProductActions} from "../actions";
import {normalizeFilters, normalizeProducts} from "../../../utils/normalizers";
import {FiltrationActionTypes} from "../../filtration/actions";
import {parse, stringify} from "qs";
import {FiltrationActions} from "../../filtration/actions";
import {fetchProductListSaga} from "../../network/services/products";

function* worker({withDelay}) {
  const queryParams = yield select(selectEditableProductsFilters);
  const searchInUrl = stringify(queryParams, {
    arrayFormat: 'repeat'
  });

  const history = yield getContext('history');

  history.push({
    search: searchInUrl
  });
  if (withDelay) {
    yield delay(1000);
  }
  yield put(ProductActions.setListLoading(true));
  try {
    const response = yield call(fetchProductListSaga, queryParams);

    yield put(ProductActions.fetchEditableProductsSuccess(normalizeProducts(response)));
  } catch (e) {
    console.log(e)
  } finally {
    yield put(ProductActions.setListLoading(false));
  }
}

export default function* editableProductListSaga() {
  yield takeLatest(FiltrationActionTypes.SET_EDITABLE_PRODUCTS_FILTERS, worker, {withDelay: true});
  yield takeLatest(FiltrationActionTypes.SET_EDITABLE_PRODUCTS_PAGE, worker);
  const history = yield getContext('history');

  let filtersFromUrl = {};
  if (history.location.search.substr(1)) {
    filtersFromUrl = normalizeFilters(parse(history.location.search.substr(1)));
  }
  yield put(FiltrationActions.setEditableProductsFilters(filtersFromUrl));
}
