import React from "react";
import Product from "../ui/Product";
import ProductsHeader from "../ui/ProductsHeader";

export default function ProductList({products, showCart}) {
  return (
    <div>
      <ProductsHeader />
      {products.map(({ id, name, price, origin, createdAt, updatedAt }) => (
        <Product
          key={id}
          id={id}
          name={name}
          price={price}
          origin={origin}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
      ))}
    </div>
  );
}
