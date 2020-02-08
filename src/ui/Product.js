import React from "react";
import {Card, Icon} from "antd";
import {Link, useRouteMatch} from "react-router-dom";
import useBasketItemPrice from "../hooks/useBasketItemPrice";
import useBasketItemCount from "../hooks/useBasketItemCount";
import useProductActionHandlers from "../hooks/useProductActionHandlers";

export default function Product({product}) {
  const matchBasket = useRouteMatch("/basket");
  const {id, name, price, origin, createdAt, updatedAt} = product;

  const basketProductsPrice = useBasketItemPrice(id);
  const countInBasket = useBasketItemCount(id);
  const {
    handleIncrementClick,
    handleDecrementClick,
    handleDeleteClick
  } = useProductActionHandlers(id);

  const actions = [
    !matchBasket && (
      <Icon
        key="shopping-cart"
        type="shopping-cart"
        onClick={handleIncrementClick}
      />
    ),
    matchBasket && (
      <Icon
        key="delete"
        type="delete"
        onClick={handleDeleteClick}
      />
    ),
    matchBasket && (
      <Icon key="left" type="left" onClick={handleDecrementClick}/>
    ),

    matchBasket && <p>{countInBasket}</p>,
    matchBasket && (
      <Icon key="right" type="right" onClick={handleIncrementClick}/>
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
      style={{width: 400}}
    >
      <p>Origin: {origin}</p>
      <p>Date created: {new Date(createdAt).toLocaleString()}</p>
      <p>Date updated: {new Date(updatedAt).toLocaleString()}</p>
      <p>
        Price: {`$${(matchBasket ? basketProductsPrice : price).toLocaleString()}`}
      </p>
    </Card>
  );
}
