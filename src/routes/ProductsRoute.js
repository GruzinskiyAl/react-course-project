import React, { useContext } from "react";
import ProductList from "../containers/ProductList";
import { ProductsContext } from "../providers/ProductsProvider";

export default function ProductsRoute() {
  const { products } = useContext(ProductsContext);

  if (!products) {
    return<div>Loading..</div>;
  }
  return <ProductList products={products} />;
}
