import React from "react";
import ProductList from "../containers/ProductList";
import {useProducts} from "../hooks/useProducts";
import {useSelector} from "react-redux";
import {selectFiltration} from "../store/selectors";

export default function ProductsRoute() {
  console.log('component render');
  const filtration = useSelector(selectFiltration);
  const {products} = useProducts(filtration);

  // useEffect(() => {}, [products])

  if (!products || !products.length) {
    return<div>Loading..</div>;
  }
  return <ProductList products={products} />;
}
