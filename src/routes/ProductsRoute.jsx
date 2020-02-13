import React from "react";
import ProductList from "../containers/ProductList";

export default ({ currentProducts }) => {
  return (!currentProducts || !currentProducts.length)? <div>Loading..</div>: <ProductList products={currentProducts}/>;
};
