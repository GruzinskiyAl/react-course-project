import React, {useState, useCallback} from "react";
import OriginFilter from "./OriginFilter";
import PriceFilter from "./PriceFilter";
import {Button} from 'antd';
import {connect} from "react-redux";
import {setFilters} from "../../store/filtration/actions";

const ORIGINS = ['usa', 'africa', 'asia', 'europe'];

function ProductsFilter({filtration, dispatch}) {
  const [origins, setOrigins] = useState(filtration.origins);
  const [minPrice, setMinPrice] = useState(filtration.minPrice);
  const [maxPrice, setMaxPrice] = useState(filtration.maxPrice);

  const handleSubmit = useCallback(() => {
    dispatch(setFilters({origins, minPrice, maxPrice}))
  }, [origins, minPrice, maxPrice, dispatch]);

  return (
    <div className={'filter-block'}>
      <div>Origin filter:</div>
      <OriginFilter options={ORIGINS} origins={origins} setOrigins={setOrigins}/>
      <div>Price filter:</div>
      <PriceFilter minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
      <Button type="primary" onClick={handleSubmit}>Submit</Button>
    </div>
  )
}


function mapStateToProps(state) {
  return {
    filtration: state.filtration,
  };
}

export default connect(
  mapStateToProps,
)(ProductsFilter);
