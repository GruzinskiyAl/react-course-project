import {put, call, select, takeLatest, delay, getContext} from 'redux-saga/effects'
import {stringify, parse} from "qs";
import {ProductActions} from "../actions";
import {selectProductsFilters} from "../../selectors";
import {normalizeFilters, normalizeProducts} from "../../../utils/normalizers";
import {SET_PRODUCTS_FILTERS} from "../../filtration/actionTypes";
import {setProductsFilters} from "../../filtration/actions";
import {fetchProductListSaga} from "../../network/services/products";

function* worker() {
  const queryParams = yield select(selectProductsFilters);
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

    yield put(ProductActions.fetchProductsSuccess(normalizeProducts(data.items)));
  } catch (e) {
    console.log(e)
  }
}

export default function* productListSaga() {
  yield takeLatest(SET_PRODUCTS_FILTERS, worker);
  const history = yield getContext('history');

  let filtersFromUrl = {};
  if (history.location.search.substr(1)) {
    filtersFromUrl = normalizeFilters(parse(history.location.search.substr(1)));
  }
  yield put(setProductsFilters(filtersFromUrl));
}
