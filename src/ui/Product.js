import React from "react";
import {Card, Icon, Avatar, Row, Col} from "antd";

export default function Product({
                                    id,
                                    name,
                                    price,
                                    origin,
                                    createdAt,
                                    updatedAt
                                }) {

    return (
        <Row>
            <Col span={18} offset={6}>
                <Col span={4}>{name}</Col>
                <Col span={4}>{origin}</Col>
                <Col span={4}>{createdAt}</Col>
                <Col span={4}>{updatedAt}</Col>
                <Col span={2}>{`$${price.toLocaleString()}`}</Col>
            </Col>
        </Row>
    );
}
