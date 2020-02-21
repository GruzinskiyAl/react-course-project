import React from "react";
import ProductList from "../containers/ProductList";
import {useInjectSaga} from "../containers/AppWrapper";
import {shallowEqual, useSelector} from "react-redux";
import {selectCurrentEditableProducts} from "../store/selectors";
import {Layout} from "antd";
import ProductsFilter from "../containers/ProductsFilter";
import editableProductListSaga from "../store/products/saga/editableProductListSaga";

const {Sider, Content} = Layout;

export default function CreatedProductsRoute() {
  useInjectSaga('editableProductListSaga', editableProductListSaga);
  const currentEditableProducts = useSelector(selectCurrentEditableProducts, shallowEqual);

  return (
    <Layout>
      <Sider theme={'light'}>
        <ProductsFilter isForEditable={true}/>
      </Sider>
      <Content>
        <ProductList products={currentEditableProducts}/>
      </Content>
    </Layout>
  )
};
