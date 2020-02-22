import React from "react";
import {connect} from "react-redux";

import PriceFilter from "../components/filtration/PriceFilter";
import OriginFilter from "../components/filtration/OriginFilter";
import {FiltrationActions} from "../store/filtration/actions";
import {useInjectSaga} from "./AppWrapper";
import availableFiltersSaga from "../store/filtration/saga/availableFiltersSaga";

const ProductsFilter = (
  {productsFiltration, editableProductsFiltration, setProductsFilters, setEditableProductsFilters, isForEditable}
) => {
  useInjectSaga('availableFiltersSaga', availableFiltersSaga);

  const [targetFiltration, targetAction] = isForEditable
    ? [editableProductsFiltration, setEditableProductsFilters]
    : [productsFiltration, setProductsFilters];

  return (
    <div className={'filter-block'}>
      <div>Origin filter:</div>
      <OriginFilter origins={targetFiltration.origins} setFilter={targetAction}/>
      <div>Price filter:</div>
      <PriceFilter minPrice={targetFiltration.minPrice} maxPrice={targetFiltration.maxPrice} setFilter={targetAction}/>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    productsFiltration: state.filtration.products,
    editableProductsFiltration: state.filtration.editableProducts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setProductsFilters: data => dispatch(FiltrationActions.setProductsFilters(data)),
    setEditableProductsFilters: data => dispatch(FiltrationActions.setEditableProductsFilters(data))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsFilter);
