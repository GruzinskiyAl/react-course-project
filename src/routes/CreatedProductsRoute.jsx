import React, {useEffect} from "react";
import ProductList from "../containers/ProductList";
import {useDispatch} from "react-redux";
import {setFilters} from "../store/filtration/actions";

export default ({ currentProducts }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilters({editable: true}));
    return () => dispatch(setFilters({editable: false}))
  }, [dispatch]);

  return (!currentProducts || !currentProducts.length)? <div>Loading..</div>: <ProductList products={currentProducts}/>;
};
