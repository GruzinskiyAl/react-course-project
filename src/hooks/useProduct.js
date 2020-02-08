import {useState, useEffect, useMemo} from "react";
import {getProductData} from '../api/products'

export const useProduct = productId => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductData(productId)
      .then(product => {
        setProduct(product);
      });
  }, [productId]);
  return useMemo(
    () => ({
      product
    }),
    [product]
  );
};
