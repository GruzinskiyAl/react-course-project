import createApiSaga from '../createApiSaga';

export const fetchAvailableOrigins = createApiSaga({
  alias: 'FETCH_AVAILABLE_ORIGINS',
  buildReqConfig: () => ({
    url: '/products-origins',
    method: 'GET'
  })
});