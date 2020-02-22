import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Layout, Pagination} from "antd";
import ProductList from "../containers/ProductList";
import {useInjectSaga} from "../containers/AppWrapper";
import productListSaga from "../store/products/saga/productListSaga";
import {
  selectCurrentProducts,
  selectCurrentProductsTotal,
  selectProductsCurrentPage,
  selectProductsPageSize
} from "../store/selectors";
import ProductsFilter from "../containers/ProductsFilter";
import {FiltrationActions} from "../store/filtration/actions";

const {Sider, Content, Footer} = Layout;

export default function ProductsRoute() {
  useInjectSaga('productListSaga', productListSaga);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectProductsCurrentPage);
  const pageSize = useSelector(selectProductsPageSize);
  const totalCount = useSelector(selectCurrentProductsTotal);
  const currentProducts = useSelector(selectCurrentProducts);

  const onChangeHandler = useCallback(page => {
    dispatch(FiltrationActions.setProductsPage(page))
  }, [dispatch]);

  return (
    <Layout>
      <Layout>
        <Sider theme={'light'}>
          <ProductsFilter isForEditable={false}/>
        </Sider>
        <Content>
          <ProductList products={currentProducts}/>
        </Content>
      </Layout>
      <div>
        <Pagination current={currentPage} total={totalCount} onChange={onChangeHandler} pageSize={pageSize}/>
      </div>
    </Layout>
  )
};
