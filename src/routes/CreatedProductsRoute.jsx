import React, {useEffect} from "react";
import ProductList from "../containers/ProductList";
import {useDispatch} from "react-redux";
import {setFilters} from "../store/filtration/actions";

export default ({ currentProducts }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilters({editable: true}));
    return () => {
      dispatch(setFilters({editable: false}))
    }
  }, [dispatch]);

  if (!currentProducts || !currentProducts.length) {
    return <div>Loading..</div>;
  }
  return <ProductList products={currentProducts}/>;
};
