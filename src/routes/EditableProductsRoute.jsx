import React, {useCallback} from "react";
import {connect} from "react-redux";
import {Layout, Pagination} from "antd";
import {useInjectSaga} from "../containers/AppWrapper";
import ProductList from "../containers/ProductList";
import ProductsFilter from "../containers/ProductsFilter";
import {
  selectCurrentEditableProducts, selectCurrentEditableProductsTotal,
  selectEditableProductsCurrentPage, selectEditableProductsFilters, selectEditableProductsPageSize,
} from "../store/selectors";
import editableProductListSaga from "../store/products/saga/editableProductListSaga";
import {FiltrationActions} from "../store/filtration/actions";

const {Sider, Content} = Layout;

const EditableProductsRoute = props => {
  useInjectSaga('editableProductListSaga', editableProductListSaga);
  const {
    editableProductsFiltration,
    setEditableProductsFilters,
    setEditableProductsPage,
    currentPage,
    pageSize,
    totalCount,
    currentEditableProducts,
    loading
  } = props;

  const onChangeHandler = useCallback(page => {
    setEditableProductsPage(page);
  }, [setEditableProductsPage]);

  return (
    <Layout>
      <Sider theme={'light'}>
        <ProductsFilter filtration={editableProductsFiltration} action={setEditableProductsFilters}/>
      </Sider>
      <Content>
        <ProductList products={currentEditableProducts} loading={loading}/>
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
    editableProductsFiltration: selectEditableProductsFilters(state),
    currentPage: selectEditableProductsCurrentPage(state),
    pageSize: selectEditableProductsPageSize(state),
    totalCount: selectCurrentEditableProductsTotal(state),
    currentEditableProducts: selectCurrentEditableProducts(state),
    loading: state.products.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setEditableProductsFilters: data => dispatch(FiltrationActions.setEditableProductsFilters(data)),
    setEditableProductsPage: page => dispatch(FiltrationActions.setEditableProductsPage(page))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableProductsRoute);
