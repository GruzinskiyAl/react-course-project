import React from "react";
import {useRouteMatch} from "react-router-dom";
import ProductsFilter from "./ProductsFilter";
import {Layout} from 'antd';
import Product from "../ui/Product";

const {Sider, Content} = Layout;

export default function ProductList({products}) {
  const matchCreatedProducts = useRouteMatch("/created-products");

  return (
    <Layout>
      <Sider theme={'light'}>
        <ProductsFilter isForEditable={matchCreatedProducts}/>
      </Sider>
      <Content theme={'light'}>
        <div className={'product-list'}>
          {products.map(product => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </Content>
    </Layout>
  );
}
