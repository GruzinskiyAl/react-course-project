import React, {useCallback} from "react";
import {connect} from "react-redux";
import {Layout, Pagination} from "antd";
import ProductList from "../containers/ProductList";
import {useInjectSaga} from "../containers/AppWrapper";
import productListSaga from "../store/products/saga/productListSaga";
import {
  selectCurrentProducts,
  selectCurrentProductsTotal,
  selectProductsCurrentPage, selectProductsFilters,
  selectProductsPageSize
} from "../store/selectors";
import ProductsFilter from "../containers/ProductsFilter";
import {FiltrationActions} from "../store/filtration/actions";

const {Sider, Content} = Layout;

const ProductsRoute = (props) => {
  const {
    productsFiltration,
    setProductsFilters,
    setProductsPage,
    currentPage,
    pageSize,
    totalCount,
    currentProducts,
    loading
  } = props;
  useInjectSaga('productListSaga', productListSaga);

  const onChangeHandler = useCallback(page => {
    setProductsPage(page)
  }, [setProductsPage]);

  return (
    <Layout>
      <Sider theme={'light'}>
        <ProductsFilter filtration={productsFiltration} action={setProductsFilters}/>
      </Sider>
      <Content>
        <ProductList products={currentProducts} loading={loading}/>
        <Pagination
          current={currentPage}
          total={totalCount}
          onChange={onChangeHandler}
          pageSize={pageSize}
        />
      </Content>
    </Layout>
  )
};

const mapStateToProps = state => {
  return {
    productsFiltration: selectProductsFilters(state),
    currentPage: selectProductsCurrentPage(state),
    pageSize: selectProductsPageSize(state),
    totalCount: selectCurrentProductsTotal(state),
    currentProducts: selectCurrentProducts(state),
    loading: state.products.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setProductsFilters: data => dispatch(FiltrationActions.setProductsFilters(data)),
    setProductsPage: page => dispatch(FiltrationActions.setProductsPage(page))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsRoute);