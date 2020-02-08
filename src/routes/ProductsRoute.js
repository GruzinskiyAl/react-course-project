import React from "react";
import ProductList from "../containers/ProductList";

export default function ProductsRoute({products}) {
  if (!products) {
    return<div>Loading..</div>;
  }
  return <ProductList products={products} />;
}
