import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': process.env.REACT_APP_API_KEY
};

export const getProductsData = function ({queryParams}) {
  const url = new URL(`${process.env.REACT_APP_BASE_API_URL}/products`);
  Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));

  return fetch(url)
    .then(result => result.json())
    .then(json => json.items)
    .catch(error => console.log(error))
};

export const getProductData = function (productId, options) {
  const url = new URL(`${process.env.REACT_APP_BASE_API_URL}/products/${productId}`);
  return fetch(url, options)
    .then(result => result.json())
    .catch(error => console.log(error))
};

export const postProductData = function (data) {
  const postData = {product: data};
  const url = new URL(`${process.env.REACT_APP_BASE_API_URL}/products`);
  return axios.post(url, postData, {headers})
};
