export const NetworkActionTypes = {
  API_CALL_START: 'API_CALL_START',
  API_CALL_SUCCESS: 'API_CALL_SUCCESS',
  API_CALL_FAILURE: 'API_CALL_FAILURE'
};

export const networkActions = {
  apiCallStart: payload => ({
    type: NetworkActionTypes.API_CALL_START,
    payload
  }),
  apiCallSuccess: payload => ({
    type: NetworkActionTypes.API_CALL_SUCCESS,
    payload
  }),
  apiCallFailure: payload => ({
    type: NetworkActionTypes.API_CALL_FAILURE,
    payload
  })
};
