import React from "react";
import ProductList from "../containers/ProductList";
import {useInjectSaga} from "../containers/AppWrapper";
import productListSaga from "../store/products/saga/productListSaga";
import {selectCurrentProducts} from "../store/selectors";
import {useSelector, shallowEqual} from "react-redux";
import {Layout} from "antd";
import ProductsFilter from "../containers/ProductsFilter";

const {Sider, Content} = Layout;

export default function ProductsRoute() {
  useInjectSaga('productListSaga', productListSaga);
  const currentProducts = useSelector(selectCurrentProducts, shallowEqual);

  return (
    <Layout>
      <Sider theme={'light'}>
        <ProductsFilter isForEditable={false}/>
      </Sider>
      <Content>
        <ProductList products={currentProducts}/>
      </Content>
    </Layout>
  )
};
