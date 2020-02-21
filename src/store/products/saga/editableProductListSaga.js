import {put, call, select, takeLatest, delay, getContext} from 'redux-saga/effects'
import {selectEditableProductsFilters} from "../../selectors";
import {ProductActions} from "../actions";
import {normalizeFilters, normalizeProducts} from "../../../utils/normalizers";
import {SET_EDITABLE_PRODUCTS_FILTERS} from "../../filtration/actionTypes";
import {parse, stringify} from "qs";
import {setEditableProductsFilters} from "../../filtration/actions";
import {fetchProductListSaga} from "../../network/services/products";

function* worker() {
  const queryParams = yield select(selectEditableProductsFilters);
  const searchInUrl = stringify(queryParams, {
    arrayFormat: 'repeat'
  });

  const history = yield getContext('history');

  history.push({
    search: searchInUrl
  });

  yield delay(1000);
  try {
    const data = yield call(fetchProductListSaga, queryParams);

    yield put(ProductActions.fetchEditableProductsSuccess(normalizeProducts(data.items)));
  } catch (e) {
    console.log(e)
  }
}

export default function* editableProductListSaga() {
  yield takeLatest(SET_EDITABLE_PRODUCTS_FILTERS, worker);
  const history = yield getContext('history');

  let filtersFromUrl = {};
  if (history.location.search.substr(1)) {
    filtersFromUrl = normalizeFilters(parse(history.location.search.substr(1)));
  }
  yield put(setEditableProductsFilters(filtersFromUrl));
}
