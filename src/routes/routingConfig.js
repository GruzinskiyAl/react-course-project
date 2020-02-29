export const routingConfig = {
  products: {
    key: 'products',
    path: '/products'
  },
  editableProducts: {
    key: 'editable-products',
    path: '/editable-products'
  },
  product: {
    key: 'product',
    path: '/products/:{productId}',
    getPath: productId => `/products/:${productId}`
  },
  basket: {
    key: 'basket',
    path: '/basket'
  }
};
