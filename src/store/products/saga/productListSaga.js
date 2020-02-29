import {put, call, select, takeLatest, delay, getContext} from 'redux-saga/effects'
import {stringify, parse} from "qs";
import {ProductActions} from "../actions";
import {selectProductsFilters} from "../../selectors";
import {normalizeFilters, normalizeProducts} from "../../../utils/normalizers";
import {FiltrationActionTypes} from "../../filtration/actions";
import {FiltrationActions} from "../../filtration/actions";
import {fetchProductListSaga} from "../../network/services/products";

function* worker({withDelay}) {
  const queryParams = yield select(selectProductsFilters);
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
    yield put(ProductActions.fetchProductsSuccess(normalizeProducts(response)));
  } catch (e) {
    console.log(e)
  } finally {
    yield put(ProductActions.setListLoading(false));
  }
}

export default function* productListSaga() {
  yield takeLatest(FiltrationActionTypes.SET_PRODUCTS_FILTERS, worker, {withDelay: true});
  yield takeLatest(FiltrationActionTypes.SET_PRODUCTS_PAGE, worker);
  const history = yield getContext('history');

  let filtersFromUrl = {};
  if (history.location.search.substr(1)) {
    filtersFromUrl = normalizeFilters(parse(history.location.search.substr(1)));
  }
  yield put(FiltrationActions.setProductsFilters(filtersFromUrl));
}
