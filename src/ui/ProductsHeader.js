import React from 'react';
import {Row, Col} from 'antd';

export default function ProductsHeader() {
    return (
        <Row>
            <Col span={18} offset={6}>
                <Col span={4}>Name</Col>
                <Col span={4}>Origin</Col>
                <Col span={4}>Creating date</Col>
                <Col span={4}>Updating date</Col>
                <Col span={2}>Price</Col>
            </Col>
        </Row>
    )
}