import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsData} from "../api/products";
import {getProducts} from "../store/products/actions";
import {normalizeProducts} from "../utils/normalizers";
import {selectCurrentProducts} from "../store/selectors";

export const useProducts = function (filtration) {
  const dispatch = useDispatch();
  // const products = useSelector(selectProductsList);
  const currentProducts = useSelector(selectCurrentProducts);
  console.log(currentProducts);

  useEffect(() => {
    const options = {
      queryParams: filtration
    };
    getProductsData(options)
      .then(data => {
        console.log('request');
        return dispatch(getProducts(normalizeProducts(data)));
      })
      .catch(error => {
        console.log("Error obtaining characters:", error);
      });
  }, [dispatch, filtration]);


  return useMemo(
    () => ({
      currentProducts
    }),
    [currentProducts]
  );
};
