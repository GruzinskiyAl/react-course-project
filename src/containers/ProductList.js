import React from "react";
import Product from "../ui/Product";
import ProductsFilter from "../ui/filtration/ProductsFilter";

export default function ProductList({products}) {
  return (
    <div>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}
