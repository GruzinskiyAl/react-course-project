import React, { useCallback, useContext } from "react";
import { Card, Icon, Avatar, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { ShopItemsContext } from "../providers/ShopItemsProvider";

export default function Product({
  id,
  name,
  price,
  origin,
  createdAt,
  updatedAt,
  isShopPage
}) {
  const { shopItems, addToShopItems, deleteFromShopItems } = useContext(
    ShopItemsContext
  );
  const showCart = !shopItems[id];
  return (
    <Row>
      <Col span={18} offset={6}>
        <Col span={4}>
          <Link key="name" to={`/products/${id}`}>
            {name}
          </Link>
        </Col>
        <Col span={4}>{origin}</Col>
        <Col span={4}>{createdAt}</Col>
        <Col span={4}>{updatedAt}</Col>
        <Col span={2}>{`$${price.toLocaleString()}`}</Col>
        {showCart && (
          <Icon
            type="shopping-cart"
            onClick={() => {
              addToShopItems(id);
            }}
          />
        )}
      </Col>
    </Row>
  );
}
