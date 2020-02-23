import React from "react";
import {PageHeader, Button} from "antd";
import {Link} from "react-router-dom";

export default function AppHeader({fullPrice, addProductClickHandler}) {
  return (
    <PageHeader
      style={{backgroundColor: '#fafafa'}}
      title="Shopping"
      extra={[
        <Button key={"addProduct"} type={'default'} onClick={addProductClickHandler}>Add Product</Button>,
        <Link key="shop" to="/basket">
          <Button type="primary">
            {`Shop $${fullPrice.toLocaleString()}`}
          </Button>
        </Link>
      ]}
    />
  );
}
