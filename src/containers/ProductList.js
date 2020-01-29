import React from "react";
import Product from "../ui/Product";

export default function ProductList({ products }) {
  return (
    <div className="product-list">
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
