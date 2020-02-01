import { useContext } from "react";
import { useShopProducts } from "./useShopProducts";
import { ShopItemsContext } from "../providers/ShopItemsProvider";

export const useFullPrice = () => {
  const shopProducts = useShopProducts();
  const { shopItems } = useContext(ShopItemsContext);
  return shopProducts.length
    ? shopProducts.reduce(
        (sum, item) => sum + item.price * shopItems[item.id],
        0
      )
    : 0;
};
