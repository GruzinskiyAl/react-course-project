import React, { useContext } from "react";
import { Card, Icon } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import { ShopItemsContext } from "../providers/ShopItemsProvider";

export default function Product({product}) {
  const { id, name, price, origin, createdAt, updatedAt } = product;
  const matchShop = useRouteMatch("/shop");
  const { shopItems, addToShopItems, deleteFromShopItems } = useContext(
    ShopItemsContext
  );
  const isLastProductShopped = shopItems[id] === 1;

  const actions = [
    !matchShop && (
      <Icon
        key="shopping-cart"
        type="shopping-cart"
        onClick={() => addToShopItems(id)}
      />
    ),
    matchShop && !isLastProductShopped && (
      <Icon key="left" type="left" onClick={() => deleteFromShopItems(id)} />
    ),
    matchShop && isLastProductShopped && (
      <Icon
        key="delete"
        type="delete"
        onClick={() => deleteFromShopItems(id)}
      />
    ),
    matchShop && <p>{shopItems[id]}</p>,
    matchShop && (
      <Icon key="right" type="right" onClick={() => addToShopItems(id)} />
    )
  ].filter(Boolean);

  return (
    <Card
      className="product"
      title={name}
      extra={
        <Link key="name" to={`/products/${id}`}>
          Info
        </Link>
      }
      actions={actions}
      style={{ width: 400 }}
    >
      <p>Origin: {origin}</p>
      <p>Date created: {new Date(createdAt).toLocaleString()}</p>
      <p>Date updated: {new Date(updatedAt).toLocaleString()}</p>
      <p>
        Price:
        {`$ ${(matchShop ? price * shopItems[id] : price).toLocaleString()}`}
      </p>
    </Card>
  );
}
