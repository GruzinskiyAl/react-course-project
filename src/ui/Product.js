import React, {useCallback} from "react";
import {Card, Icon} from "antd";
import {Link, useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {decrementBasketItemCount, dropBasketItem, incrementBasketItemCount} from "../store/basket/actions";
import {makeSelectBasketItemCount, makeSelectBasketItemPrice} from "../store/selectors";

export default function Product({product}) {
  const matchBasket = useRouteMatch("/basket");
  const {id, name, price, origin, createdAt, updatedAt} = product;

  const basketProductsPrice = useSelector(makeSelectBasketItemPrice(id));
  const dispatch = useDispatch();
  const countInBasket = useSelector(makeSelectBasketItemCount(id));

  const handleIncrementClick = useCallback(() => {
    dispatch(incrementBasketItemCount(id))
  }, [id, dispatch]);

  const handleDecrementClick = useCallback(() => {
    dispatch(decrementBasketItemCount(id))
  }, [id, dispatch]);

  const handleDeleteClick = useCallback(()=>{
    dispatch(dropBasketItem(id))
  },[id, dispatch]);

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
        Price:
        {`$ ${(matchBasket ? basketProductsPrice : price).toLocaleString()}`}
      </p>
    </Card>
  );
}
