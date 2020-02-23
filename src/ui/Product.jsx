import React from "react";
import {Card, Icon, InputNumber} from "antd";
import {Link, useRouteMatch} from "react-router-dom";
import useBasketItemPrice from "../hooks/basket/useBasketItemPrice";
import useBasketItemCount from "../hooks/basket/useBasketItemCount";
import useProductActionHandlers from "../hooks/products/useProductActionHandlers";
import {routingConfig} from "../routes/routingConfig";

export default function Product({product}) {
  const matchBasket = useRouteMatch(routingConfig.basket.path);
  const {id, name, price, origin, createdAt, updatedAt, isEditable} = product;

  const basketProductsPrice = useBasketItemPrice(id);
  const countInBasket = useBasketItemCount(id);
  const {
    handleIncrementClick,
    handleDeleteClick,
    handleChangeClick,
    handleChangeCount,
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
      matchBasket && <InputNumber value={countInBasket} onChange={count=>handleChangeCount(id, count)}/>,
    ].filter(Boolean);

  const cardStyle = {
    margin: '5px',
    width: 400
  };

  return (
    <Card
      style={cardStyle}
      title={name}
      extra={
        <Link key="name" to={routingConfig.product.getPath(id)}>
          Info
        </Link>
      }
      actions={actions}
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
