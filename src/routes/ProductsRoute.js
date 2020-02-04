import React, { useContext } from "react";
import connect from "react-redux";
import ProductList from "../containers/ProductList";
import { ProductsContext } from "../providers/ProductsProvider";
import {useProducts} from "../hooks/useProducts";

export default function ProductsRoute() {
  const {products} = useProducts();

  if (!products) {
    return<div>Loading..</div>;
  }
  return <ProductList products={products} />;
}
