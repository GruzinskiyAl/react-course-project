import React, {useCallback} from "react";
import { Card, Icon } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import {connect} from "react-redux";
import {addBasketItem} from "../store/basket/actions";

function Product({product, state, dispatch}) {
  const matchBasket = useRouteMatch("/basket");
  const { id, name, price, origin, createdAt, updatedAt } = product;

  const handleBuyClick = useCallback(()=>{
    dispatch(addBasketItem(id))
  }, [id]);


  const actions = [
    !matchBasket && (
      <Icon
        key="shopping-cart"
        type="shopping-cart"
        onClick={()=>handleBuyClick()}
      />
    ),
    matchBasket && true && (
      <Icon key="left" type="left" onClick={() => {}} />
    ),
    matchBasket && true && (
      <Icon
        key="delete"
        type="delete"
        onClick={() => {}}
      />
    ),
    matchBasket && <p>{true}</p>,
    matchBasket && (
      <Icon key="right" type="right" onClick={() => {}} />
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
        {`$ ${(matchBasket ? price * 1 : price).toLocaleString()}`}
      </p>
    </Card>
  );
}

function mapStateToProps(state) {
  return {state}
}

const enhancer = connect(
  mapStateToProps
);

export default enhancer(Product)