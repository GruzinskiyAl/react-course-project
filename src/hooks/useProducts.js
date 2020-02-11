import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsData} from "../api/products";
import {clearCurrentProducts, getProducts} from "../store/products/actions";
import {normalizeProducts} from "../utils/normalizers";
import {selectCurrentProducts} from "../store/selectors";

export const useProducts = function (filtration) {
  const dispatch = useDispatch();
  const currentProducts = useSelector(selectCurrentProducts);

  useEffect(() => {
    const options = {
      queryParams: filtration
    };
    console.log(options);
    if (!currentProducts.length) {
      getProductsData(options)
        .then(data => {
          console.log('request');
          return dispatch(getProducts(normalizeProducts(data)));
        })
        .catch(error => {
          console.log("Error obtaining characters:", error);
        });
    }
  }, [dispatch, filtration, currentProducts.length]);


  return useMemo(
    () => ({
      currentProducts
    }),
    [currentProducts]
  );
  // return currentProducts
};
