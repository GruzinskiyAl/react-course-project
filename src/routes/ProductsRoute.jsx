import React, {useEffect} from "react";
import ProductList from "../containers/ProductList";
import {useProducts} from "../hooks/useProducts";
import {useDispatch, useSelector} from "react-redux";
import {selectFiltration} from "../store/selectors";
import {clearCurrentProducts} from "../store/products/actions";

export default function ProductsRoute() {
  const dispatch = useDispatch();
  const filtration = useSelector(selectFiltration);
  const {currentProducts} = useProducts(filtration);
  // debugger
  // useEffect(() => {
  //   debugger
  //   dispatch(clearCurrentProducts())
  // }, [filtration, dispatch]);

  if (!currentProducts || !currentProducts.length) {
    return <div>Loading..</div>;
  }
  return <ProductList products={currentProducts}/>;
}
