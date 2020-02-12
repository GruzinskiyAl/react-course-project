import React from "react";
import ProductList from "../containers/ProductList";

export default ({ currentProducts }) => {
  if (!currentProducts || !currentProducts.length) {
    return <div>Loading..</div>;
  }
  return <ProductList products={currentProducts}/>;
};