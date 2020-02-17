import React from "react";
import ProductList from "../containers/ProductList";

export default ({ currentEditableProducts }) => {
  return (!currentEditableProducts || !currentEditableProducts.length)
    ? <div>Loading..</div>
    : <ProductList products={currentEditableProducts}/>;
};
