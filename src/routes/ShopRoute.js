import React, {useContext} from "react";
import {ShopItemsContext} from "../providers/ShopItemsProvider";
import {useShopProducts} from "../hooks/useShopProducts";
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
