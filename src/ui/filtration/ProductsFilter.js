import React, {useState, useCallback} from "react";
import RegionFilter from "./RegionFilter";
import PriceFilter from "./PriceFilter";
import {Button} from 'antd';
import {useDispatch} from "react-redux";
import {setFilters} from "../../store/filtration/actions";

const ORIGINS = ['usa', 'africa', 'asia', 'europe'];

export default function ProductsFilter() {
  const [origins, setOrigins] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(() => {
    dispatch(setFilters({origins, minPrice, maxPrice}))
  }, [origins, minPrice, maxPrice, dispatch]);

  return (
    <div>
      <RegionFilter origins={ORIGINS} setOrigins={setOrigins}/>
      <PriceFilter minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
      <Button type="primary" onClick={handleSubmit}>Submit</Button>
      <Button>Clear</Button>
    </div>
  )
}
