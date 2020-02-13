import React, {useState, useCallback} from "react";
import OriginFilter from "../ui/filtration/OriginFilter";
import PriceFilter from "../ui/filtration/PriceFilter";
import {Button} from 'antd';
import {connect} from "react-redux";
import {setProductsFilters, setEditableProductsFilters} from "../store/filtration/actions";

const ORIGINS = ['usa', 'africa', 'asia', 'europe'];

const ProductsFilter = ({filtration, setProductsFilters, setEditableProductsFilters, isForEditable}) => {
  const [origins, setOrigins] = useState(filtration.origins);
  const [minPrice, setMinPrice] = useState(filtration.minPrice);
  const [maxPrice, setMaxPrice] = useState(filtration.maxPrice);

  const handleSubmit = useCallback(() => {
    (() => isForEditable ? setEditableProductsFilters : setProductsFilters)({origins, minPrice, maxPrice})
  }, [origins, minPrice, maxPrice, setProductsFilters, setEditableProductsFilters, isForEditable]);

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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsFilter);
