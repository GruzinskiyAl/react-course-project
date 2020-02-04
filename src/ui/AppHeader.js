import React from "react";
import { PageHeader, Button } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import { useFullPrice } from "../hooks/useFullPrice";

export default function AppHeader() {
  const matchProducts = useRouteMatch("/products");
  const matchBasket = useRouteMatch("/basket");
  const fullPrice = useFullPrice();

  return (
    <PageHeader
      className="app-header"
      title="Shopping"
      extra={[
        <Link key="products" to="/products">
          <Button type={matchProducts ? "primary" : "default"}>Products</Button>
        </Link>,
        <Link key="shop" to="/basket">
          <Button type={matchBasket ? "primary" : "default"}>
            {`Shop $${fullPrice.toLocaleString()}`}
          </Button>
        </Link>
      ]}
    />
  );
}
