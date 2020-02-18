import React from "react";
import ProductList from "../containers/ProductList";

export default ({ currentProducts }) => {
  return <ProductList products={currentProducts}/>;
};
