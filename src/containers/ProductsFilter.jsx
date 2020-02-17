import React, {useState, useCallback} from "react";
import {connect} from "react-redux";
import {Button} from 'antd';

import PriceFilter from "../ui/filtration/PriceFilter";
import OriginFilter from "../ui/filtration/OriginFilter";
import {setProductsFilters, setEditableProductsFilters} from "../store/filtration/actions";

const ORIGINS = ['usa', 'africa', 'asia', 'europe'];

const ProductsFilter = (
  {productsFiltration, editableProductsFiltration, setProductsFilters, setEditableProductsFilters, isForEditable}
) => {
  const [targetFiltration, targetAction] = isForEditable
    ? [editableProductsFiltration, setEditableProductsFilters]
    : [productsFiltration, setProductsFilters];

  const [origins, setOrigins] = useState(targetFiltration.origins);
  const [minPrice, setMinPrice] = useState(targetFiltration.minPrice);
  const [maxPrice, setMaxPrice] = useState(targetFiltration.maxPrice);

  const handleSubmit = useCallback(() => {
    const data = {origins, minPrice, maxPrice};
    targetAction(data)
  }, [origins, minPrice, maxPrice, targetAction]);

  return (
    <div className={'filter-block'}>
      <div>Origin filter:</div>
      <OriginFilter options={ORIGINS} origins={origins} setOrigins={setOrigins}/>
      <div>Price filter:</div>
      <PriceFilter minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
      <Button type="primary" onClick={handleSubmit}>Submit</Button>
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
