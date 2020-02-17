import React from "react";
import {PageHeader, Button} from "antd";
import {Link, useRouteMatch} from "react-router-dom";

export default function AppHeader({fullPrice, addProductClickHandler}) {
  const matchProducts = useRouteMatch("/products");
  const matchCreatedProducts = useRouteMatch("/created-products");
  const matchBasket = useRouteMatch("/basket");

  return (
    <PageHeader
      className="app-header"
      title="Shopping"
      extra={[
        <Button key={"addProduct"} type={'default'} onClick={addProductClickHandler}>Add Product</Button>,
        <Link key="createdProducts" to="/created-products">
          <Button type={matchCreatedProducts ? "primary" : "default"}>Created Products</Button>
        </Link>,
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
