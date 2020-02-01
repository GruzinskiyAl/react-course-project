import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import Product from "../ui/Product";

export default function ProductRoute() {
  const { productId } = useParams();
  const { product } = useProduct(productId);

  const { id, name, origin, price, createdAt, updatedAt } = product || {};

  if (!product) {
    return <div>Loading</div>;
  }
  return (
    <Product
      id={id}
      name={name}
      origin={origin}
      price={price}
      createdAt={createdAt}
      updatedAt={updatedAt}
    />
  );
}
