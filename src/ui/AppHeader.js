import React, { useContext } from "react";
import { PageHeader, Button } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import { ShopItemsContext } from "../providers/ShopItemsProvider";
import { useShopProducts } from "../hooks/useShopProducts";

export default function AppHeader() {
  const matchProducts = useRouteMatch("/products");
  const matchShop = useRouteMatch("/shop");
  const { shopItems } = useContext(ShopItemsContext);
  const shopProducts = useShopProducts();
  const fullAmount = shopProducts.length
    ? shopProducts.reduce(
        (sum, item) => sum + item.price * shopItems[item.id],
        0
      )
    : 0;

  return (
    <PageHeader
      className="app-header"
      title="Shopping"
      extra={[
        <Link key="products" to="/products">
          <Button type={matchProducts ? "primary" : "default"}>Products</Button>
        </Link>,
        <Link key="shop" to="/shop">
          <Button type={matchShop ? "primary" : "default"}>
            {`Shop $${fullAmount.toLocaleString()}`}
          </Button>
        </Link>
      ]}
    />
  );
}
