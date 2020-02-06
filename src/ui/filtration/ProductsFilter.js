import React, {useState, useCallback, useEffect} from "react";
import OriginFilter from "./OriginFilter";
import PriceFilter from "./PriceFilter";
import {Button} from 'antd';
import {connect} from "react-redux";
import {setFilters, dropFilters} from "../../store/filtration/actions";

const ORIGINS = ['usa', 'africa', 'asia', 'europe'];

function ProductsFilter({filtration, dispatch}) {
  const [origins, setOrigins] = useState(filtration.origins);
  const [minPrice, setMinPrice] = useState(filtration.minPrice);
  const [maxPrice, setMaxPrice] = useState(filtration.maxPrice);

  const handleSubmit = useCallback(() => {
    dispatch(setFilters({origins, minPrice, maxPrice}))
  }, [origins, minPrice, maxPrice, dispatch]);

  useEffect(() => {
    // debugger
    setOrigins(filtration.origins);
    setMinPrice(filtration.minPrice);
    setMaxPrice(filtration.maxPrice)
  }, [filtration, dispatch]);

  const handleClear = useCallback(() => {
    dispatch(dropFilters())
  }, []);

  return (
    <div>
      <OriginFilter options={ORIGINS} origins={origins} setOrigins={setOrigins}/>
      <PriceFilter minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
      <Button type="primary" onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleClear}>Clear</Button>
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
