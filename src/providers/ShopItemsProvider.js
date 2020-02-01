import React, { useState, useCallback } from "react";

export const ShopItemsContext = React.createContext({});

export default function ShopItemsProvider({ children }) {
  const [shopItems, setShopItems] = useState({});

  const addToShopItems = useCallback(
    id => {
      const nextShopItems = { ...shopItems };
      nextShopItems[id] > 0
        ? (nextShopItems[id] += 1)
        : (nextShopItems[id] = 1);
      setShopItems(nextShopItems);
    },
    [shopItems]
  );

  const deleteFromShopItems = useCallback(
    id => {
      const nextShopItems = { ...shopItems };
      nextShopItems[id] > 1
        ? (nextShopItems[id] -= 1)
        : delete nextShopItems[id];
      setShopItems(nextShopItems);
    },
    [shopItems]
  );

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
