import React, { useEffect, useState, useCallback, useContext } from "react";
import { ProductsContext } from "./ProductsProvider";

export const ShopItemsContext = React.createContext({});

export default function ShopItemsProvider({ children }) {
  const {products} = useContext(ProductsContext);
  const [shopItemsCounter, setShopItemsCounter] = useState({});
  const [shopItems, setShopItems] = useState({});

  const addToShopItems = useCallback(({ id, price }) => {
    const nextShopItems = { ...shopItems };
    nextShopItems[id] > 0 ? (nextShopItems[id] += 1) : (nextShopItems[id] = 1);
    setShopItems(nextShopItems);
  });

  const deleteFromShopItems = useCallback(({ id }) => {
    const nextShopItems = { ...shopItems };
    nextShopItems[id] > 1 ? (nextShopItems[id] -= 1) : delete nextShopItems[id];
    setShopItems(nextShopItems);
  });

  return (
    <ShopItemsContext.Provider
      value={{
        shopItems,
        addToShopItems,
        deleteFromShopItems
      }}
    >
      {children}
    </ShopItemsContext.Provider>
  );
}
