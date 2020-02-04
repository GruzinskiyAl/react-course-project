import React, {useCallback, useContext} from "react";
import { Card, Icon } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import { ShopItemsContext } from "../providers/ShopItemsProvider";
import {useDispatch} from "react-redux";

export default function Product({product}) {
  const { id, name, price, origin, createdAt, updatedAt } = product;
  const matchBasket = useRouteMatch("/basket");
  const { shopItems, addToShopItems, deleteFromShopItems } = useContext(
    ShopItemsContext
  );
  const isLastProductShopped = shopItems[id] === 1;

  const handleBuyClick = useCallback(()=>{

  }, [id])


  const actions = [
    !matchBasket && (
      <Icon
        key="shopping-cart"
        type="shopping-cart"
        onClick={() => addToShopItems(id)}
      />
    ),
    matchBasket && !isLastProductShopped && (
      <Icon key="left" type="left" onClick={() => deleteFromShopItems(id)} />
    ),
    matchBasket && isLastProductShopped && (
      <Icon
        key="delete"
        type="delete"
        onClick={() => deleteFromShopItems(id)}
      />
    ),
    matchBasket && <p>{shopItems[id]}</p>,
    matchBasket && (
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
        {`$ ${(matchBasket ? price * shopItems[id] : price).toLocaleString()}`}
      </p>
    </Card>
  );
}
