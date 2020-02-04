import React from "react";
import ProductList from "../containers/ProductList";
import {useProducts} from "../hooks/useProducts";

export default function ProductsRoute({products}) {
  if (!products) {
    return<div>Loading..</div>;
  }
  return <ProductList products={products} />;
}
