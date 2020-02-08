import React from "react";
import Product from "../ui/Product";
import ProductsFilter from "./ProductsFilter";
import {Layout} from 'antd';

const {Sider, Content} = Layout;

export default function ProductList({products}) {
  return (
    <Layout>
      <Sider theme={'light'}>
        <ProductsFilter/>
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
