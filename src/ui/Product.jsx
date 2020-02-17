import React from "react";
import {Card, Icon} from "antd";
import {Link, useRouteMatch} from "react-router-dom";
import useBasketItemPrice from "../hooks/basket/useBasketItemPrice";
import useBasketItemCount from "../hooks/basket/useBasketItemCount";
import useProductActionHandlers from "../hooks/products/useProductActionHandlers";

export default function Product({product}) {
  const matchBasket = useRouteMatch("/basket");
  const {id, name, price, origin, createdAt, updatedAt, isEditable} = product;

  const basketProductsPrice = useBasketItemPrice(id);
  const countInBasket = useBasketItemCount(id);
  const {
    handleIncrementClick,
    handleDecrementClick,
    handleDeleteClick,
    handleChangeClick
  } = useProductActionHandlers(id);

  const actions = (isEditable)
    ? [
      <Icon
        key="edit"
        type="edit"
        onClick={handleChangeClick}
      />
    ]
    : [
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
