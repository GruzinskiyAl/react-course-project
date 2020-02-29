import createApiSaga from '../createApiSaga';

export const fetchProductListSaga = createApiSaga({
  alias: 'FETCH_PRODUCTS_LIST',
  buildReqConfig: searchParams => ({
    url: '/products',
    method: 'GET',
    params: searchParams
  })
});

export const fetchProductDetailsSaga = createApiSaga({
  alias: 'FETCH_PRODUCT_DETAILS',
  buildReqConfig: productId => ({
    url: `/products/${productId}`,
    method: 'GET'
  })
});

export const postProductSaga = createApiSaga({
  alias: 'CREATE_PRODUCT',
  buildReqConfig: data => ({
    url: '/products',
    method: 'POST',
    data: data
  })
});

export const patchProductSaga = createApiSaga({
  alias: 'PATCH_PRODUCT',
  buildReqConfig: ({data, productId}) => ({
    url: `/products/${productId}`,
    method: 'PATCH',
    data: data
  })
});

