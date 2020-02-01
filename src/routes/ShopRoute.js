import React from "react";
import { useShopProducts } from "../hooks/useShopProducts";
import ProductList from "../containers/ProductList";

export default function ShopRoute() {
  const shopProducts = useShopProducts();
  if (shopProducts) {
    return (
      <div>
        <ProductList products={shopProducts} />
      </div>
    );
  }
}
