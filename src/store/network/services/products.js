import createApiSaga from '../createApiSaga';

export const fetchProductList = createApiSaga({
  alias: 'FETCH_CHARACTERS_LIST',
  buildReqConfig: searchParams => ({
    url: '/products',
    method: 'GET',
    params: searchParams
  })
});

export const fetchProductDetails = createApiSaga({
  alias: 'FETCH_CHARACTER_DETAILS',
  addApiKey: true,
  buildReqConfig: characterId => ({
    url: `/products/${characterId}`,
    method: 'GET'
  })
});
