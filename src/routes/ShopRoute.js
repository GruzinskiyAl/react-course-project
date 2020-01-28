import React, {useContext} from 'react';
import ShopItemsProvider from "../providers/ShopItemsProvider";


export default function ShopRoute() {
    const [
        shopItems,
        addToShopItems,
        deleteFromShopItems
    ] = useContext(ShopItemsProvider);


}