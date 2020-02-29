import React, {useMemo} from "react";
import {useParams} from "react-router-dom";
import Product from "../ui/Product";
import {makeSelectorProductById} from "../store/selectors";
import {useSelector} from "react-redux";
import {useInjectSaga} from "../containers/AppWrapper";
import productDetailsSaga from '../store/products/saga/productDetailsSaga'

export default function ProductRoute() {
  const {productId} = useParams();
  useInjectSaga('productDetailsSaga', productDetailsSaga, productId);

  const selectProductById = useMemo(() => makeSelectorProductById(productId), [productId]);
  const product = useSelector(selectProductById);

  return (!product) ? <div>Loading...</div> : <Product product={product}/>

}
