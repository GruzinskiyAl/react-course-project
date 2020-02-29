import {select, put, call} from 'redux-saga/effects'
import {selectAvailableOrigins} from "../../selectors";
import {fetchAvailableOrigins} from "../../network/services/filtration";
import {FiltrationActions} from "../actions";

export default function* availableFiltersSaga() {

  if ((yield select(selectAvailableOrigins)).length) {
    return;
  }
  const response = yield call(fetchAvailableOrigins);
  const origins = response.items.map(el => el.value);
  yield put(FiltrationActions.setAvailableOrigins(origins))
}