import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Layout, Pagination} from "antd";
import {useInjectSaga} from "../containers/AppWrapper";
import ProductList from "../containers/ProductList";
import ProductsFilter from "../containers/ProductsFilter";
import {
  selectCurrentEditableProducts, selectCurrentEditableProductsTotal,
  selectEditableProductsCurrentPage, selectEditableProductsPageSize,
} from "../store/selectors";
import editableProductListSaga from "../store/products/saga/editableProductListSaga";
import {FiltrationActions} from "../store/filtration/actions";

const {Sider, Content} = Layout;

export default function EditableProductsRoute() {
  useInjectSaga('editableProductListSaga', editableProductListSaga);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectEditableProductsCurrentPage);
  const pageSize = useSelector(selectEditableProductsPageSize);
  const totalCount = useSelector(selectCurrentEditableProductsTotal);
  const currentEditableProducts = useSelector(selectCurrentEditableProducts);

  const onChangeHandler = useCallback(page => {
    dispatch(FiltrationActions.setEditableProductsPage(page))
  }, [dispatch]);

  return (
    <Layout>
      <Sider theme={'light'}>
        <ProductsFilter isForEditable={true}/>
      </Sider>
      <Content>
        <ProductList products={currentEditableProducts}/>
        <Pagination current={currentPage} total={totalCount} onChange={onChangeHandler} pageSize={pageSize}/>
      </Content>
    </Layout>
  )
};
