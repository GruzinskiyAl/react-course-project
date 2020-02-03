import {GET_PRODUCTS} from "./actionTypes";

export function getProducts(data) {
  return {
    type: GET_PRODUCTS,
    ...data
  };
}
