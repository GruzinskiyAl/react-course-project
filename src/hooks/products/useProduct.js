import {useState, useEffect, useMemo} from "react";
import {getProductData} from '../../api/products'
import {useSelector} from "react-redux";
import {makeSelectorProductById} from "../../store/selectors";

export const useProduct = productId => {
  const selectProductById = useMemo(() => makeSelectorProductById(productId), [productId]);
  const productFromState = useSelector(selectProductById);
  const [product, setProduct] = useState(productFromState);

  useEffect(() => {
    if (!product && productId) {
      getProductData(productId)
        .then(product => {
          setProduct(product);
        });
    }
  }, [productId, product]);
  return useMemo(
    () => ({
      product
    }),
    [product]
  );
};
