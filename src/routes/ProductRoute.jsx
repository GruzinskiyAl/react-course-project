import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/products/useProduct";
import Product from "../ui/Product";

export default function ProductRoute() {
  const { productId } = useParams();
  const { product } = useProduct(productId);

  if (!product) {
    return <div>Loading</div>;
  }
  return (
    <Product
      product={product}
    />
  );
}
