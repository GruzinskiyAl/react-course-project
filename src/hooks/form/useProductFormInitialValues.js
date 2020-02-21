import {useMemo} from 'react';
import {get} from 'lodash'
import {useSelector} from "react-redux";
import {makeSelectorProductById} from "../../store/selectors";

export default function useProductFormInitialValues(productId) {
  const selectProductById = useMemo(() => makeSelectorProductById(productId), [productId]);
  const product = useSelector(selectProductById);

  return useMemo(() => ({
    name: get(product, 'name', ''),
    price: get(product, 'price', ''),
    origin: get(product, 'origin', '')
  }), [product])
}
