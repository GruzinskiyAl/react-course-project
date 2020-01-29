import React, {useContext} from "react";
import {Card, Icon, Avatar, Row, Col, Button} from "antd";
import {Link, useRouteMatch} from "react-router-dom";
import {ShopItemsContext} from "../providers/ShopItemsProvider";

export default function Product({
                                    id,
                                    name,
                                    price,
                                    origin,
                                    createdAt,
                                    updatedAt
                                }) {
    const matchShop = useRouteMatch("/shop");
    const {shopItems, addToShopItems, deleteFromShopItems} = useContext(
        ShopItemsContext
    );

    return (
        <>
            <Card
                title={name}
                extra={
                    <Link key="name" to={`/products/${id}`}>
                        Info
                    </Link>
                } style={{width: 400}}
            >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
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
                    <Col span={2}>{`$${(matchShop ? price * shopItems[id] : price).toLocaleString()}`}</Col>
                    {!matchShop && (
                        <Icon
                            type="shopping-cart"
                            onClick={() => {
                                // console.log(id);
                                addToShopItems(id);
                            }}
                        />
                    )}
                    {matchShop && (
                        <div>
                            <Button type="primary" shape="circle" icon="minus" size={'small'} onClick={() => {
                                deleteFromShopItems(id)
                            }}/>
                            <span>{shopItems[id]}</span>
                            <Button type="primary" shape="circle" icon="plus" size={'small'} onClick={() => {
                                addToShopItems(id)
                            }}/>
                        </div>
                    )}
                </Col>
            </Row>
        </>
    );
}
