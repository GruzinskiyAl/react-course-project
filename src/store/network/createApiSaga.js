import {call, put} from 'redux-saga/effects';
import httpClient from './httpClient';
import {networkActions} from './actions';

const createApiSaga = ({buildReqConfig, alias}) =>
  function* apiSaga(params) {
    const reqConfig = buildReqConfig(params);

    yield put(
      networkActions.apiCallStart({
        req: reqConfig,
        alias
      })
    );
    try {
      const response = yield call(httpClient.request, reqConfig);

      yield put(
        networkActions.apiCallSuccess({
          req: reqConfig,
          res: response,
          alias
        })
      );
      return response.data;
    } catch (e) {
      yield put(
        networkActions.apiCallFailure({
          req: reqConfig,
          res: e,
          alias
        })
      );
      throw e;
    }
  };

export default createApiSaga;
