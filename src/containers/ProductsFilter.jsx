import React from "react";
import {connect} from "react-redux";

import PriceFilter from "./filtration/PriceFilter";
import OriginFilter from "./filtration/OriginFilter";
import {setProductsFilters, setEditableProductsFilters} from "../store/filtration/actions";

const ORIGINS = ['usa', 'africa', 'asia', 'europe'];

const ProductsFilter = (
  {productsFiltration, editableProductsFiltration, setProductsFilters, setEditableProductsFilters, isForEditable}
) => {
  const [targetFiltration, targetAction] = isForEditable
    ? [editableProductsFiltration, setEditableProductsFilters]
    : [productsFiltration, setProductsFilters];

  return (
    <div className={'filter-block'}>
      <div>Origin filter:</div>
      <OriginFilter options={ORIGINS} origins={targetFiltration.origins} setFilter={targetAction}/>
      <div>Price filter:</div>
      <PriceFilter minPrice={targetFiltration.minPrice} maxPrice={targetFiltration.maxPrice} setFilter={targetAction} />
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
    setProductsFilters: data => dispatch(setProductsFilters(data)),
    setEditableProductsFilters: data => dispatch(setEditableProductsFilters(data))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsFilter);
