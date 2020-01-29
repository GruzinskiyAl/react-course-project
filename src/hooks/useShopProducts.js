import {useContext} from 'react'
import {ShopItemsContext} from "../providers/ShopItemsProvider";
import {ProductsContext} from "../providers/ProductsProvider";

export const useShopProducts = () => {
    const {shopItems} = useContext(ShopItemsContext);
    const {products} = useContext(ProductsContext);
    return products.filter(({id}) => id in shopItems)
};