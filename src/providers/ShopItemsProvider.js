import React, {useEffect, useState, useCallback} from 'react';

export const ShopItemsContext = React.createContext({
    shopItems: {}
});

export default function ShopItemsProvider({children}) {
    const [shopItems, setShopItems] = useState({});

    const addToShopItems = useCallback(id => {
        const nextShopItems = JSON.parse(JSON.stringify(shopItems));
        nextShopItems[id] > 0 ? nextShopItems[id] += 1 : nextShopItems[id] = 1;
        setShopItems(nextShopItems)
    });

    const deleteFromShopItems = useCallback(id => {
        const nextShopItems = JSON.parse(JSON.stringify(shopItems));
        nextShopItems[id] > 1 ? nextShopItems[id] -= 1 : delete nextShopItems[id];
        setShopItems(nextShopItems)
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
    )
}