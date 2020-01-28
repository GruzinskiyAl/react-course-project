import React, { useContext } from "react";
import { ShopItemsContext } from "../providers/ShopItemsProvider";
import { ProductsContext } from "../providers/ProductsProvider";
import ProductsHeader from "../ui/ProductsHeader";
import ProductList from "../containers/ProductList";

export default function ShopRoute() {
  const { shopItems, addToShopItems, deleteFromShopItems } = useContext(
    ShopItemsContext
  );

  const { products } = useContext(ProductsContext);
  const shopProducts = products.filter(({id}) => {return shopItems[id]})
  if (products) {
    return (
      <div>
        <ProductList products={shopProducts} isShopPage={true} />
      </div>
    );
  }
}
