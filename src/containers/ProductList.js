import React from "react";
import Product from "../ui/Product";

export default function ProductList({products}) {
  return (
    <div>
      {products.map(({ id, name, description, date, price, origin, createdAt, updatedAt }) => (
        <Product
          key={id}
          id={id}
          name={name}
          description={description}
          date={date}
          price={price}
          origin={origin}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
      ))}
    </div>
  );
}
